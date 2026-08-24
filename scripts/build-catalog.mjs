import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import process from 'node:process';

const root = process.cwd();
const articlesRoot = path.join(root, 'content', 'articles');
const validateOnly = process.argv.includes('--validate-only');
const required = ['id', 'slug', 'title', 'summary', 'authors', 'published', 'updated', 'tags', 'status', 'publicationType', 'edition', 'license'];
const allowed = new Set([...required, 'canonicalUrl']);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const editionPattern = /^(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)$/;

function parseScalar(value) {
  const text = value.trim();
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) return text.slice(1, -1);
  if (text.startsWith('[') && text.endsWith(']')) return text.slice(1, -1).split(',').map((item) => parseScalar(item));
  return text;
}

function parseFrontMatter(source, file) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw new Error(`${file}: expected YAML front matter delimited by ---`);
  const metadata = {};
  let arrayKey;
  for (const rawLine of match[1].split(/\r?\n/)) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith('#')) continue;
    const listItem = rawLine.match(/^\s+-\s+(.+)$/);
    if (listItem) {
      if (!arrayKey) throw new Error(`${file}: list item has no parent key`);
      metadata[arrayKey].push(parseScalar(listItem[1]));
      continue;
    }
    const pair = rawLine.match(/^([A-Za-z][A-Za-z0-9]*):(?:\s*(.*))?$/);
    if (!pair) throw new Error(`${file}: unsupported front matter line: ${rawLine}`);
    const [, key, rawValue] = pair;
    metadata[key] = rawValue ? parseScalar(rawValue) : [];
    arrayKey = rawValue ? undefined : key;
  }
  return { metadata, body: source.slice(match[0].length) };
}

function assertArticle(metadata, directory, file) {
  for (const key of Object.keys(metadata)) if (!allowed.has(key)) throw new Error(`${file}: unsupported metadata field '${key}'`);
  for (const key of required) if (!(key in metadata)) throw new Error(`${file}: missing required field '${key}'`);
  if (!slugPattern.test(metadata.id)) throw new Error(`${file}: id must be lowercase kebab-case`);
  if (!slugPattern.test(metadata.slug)) throw new Error(`${file}: slug must be lowercase kebab-case`);
  if (metadata.slug !== directory) throw new Error(`${file}: slug must match directory '${directory}'`);
  for (const key of ['authors', 'tags']) if (!Array.isArray(metadata[key]) || metadata[key].length === 0) throw new Error(`${file}: ${key} must be a non-empty list`);
  for (const key of ['published', 'updated']) if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata[key]) || Number.isNaN(Date.parse(`${metadata[key]}T00:00:00Z`))) throw new Error(`${file}: ${key} must be an ISO date`);
  if (metadata.updated < metadata.published) throw new Error(`${file}: updated cannot precede published`);
  if (!['draft', 'published'].includes(metadata.status)) throw new Error(`${file}: status must be draft or published`);
  if (!['discussion-draft', 'position-paper', 'research-paper', 'report'].includes(metadata.publicationType)) throw new Error(`${file}: publicationType is invalid`);
  if (!editionPattern.test(metadata.edition)) throw new Error(`${file}: edition must use semantic versioning (for example 0.1.0)`);
  if (metadata.canonicalUrl && !/^https?:\/\//.test(metadata.canonicalUrl)) throw new Error(`${file}: canonicalUrl must be an absolute HTTP(S) URL`);
}

function xml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function gitValue(args, fallback) {
  try { return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() || fallback; } catch { return fallback; }
}

const directoryEntries = await readdir(articlesRoot, { withFileTypes: true });
const articles = [];
const ids = new Set();
const slugs = new Set();
for (const entry of directoryEntries.filter((item) => item.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
  const relative = path.posix.join('content', 'articles', entry.name, 'index.md');
  const file = path.join(root, relative);
  const { metadata } = parseFrontMatter(await readFile(file, 'utf8'), relative);
  assertArticle(metadata, entry.name, relative);
  if (ids.has(metadata.id)) throw new Error(`${relative}: duplicate id '${metadata.id}'`);
  if (slugs.has(metadata.slug)) throw new Error(`${relative}: duplicate slug '${metadata.slug}'`);
  ids.add(metadata.id); slugs.add(metadata.slug);
  if (metadata.status === 'published') articles.push({ ...metadata, sourcePath: relative });
}

if (validateOnly) {
  console.log(`Validated ${ids.size} article(s); ${articles.length} published.`);
  process.exit(0);
}

const commit = gitValue(['rev-parse', 'HEAD'], 'UNCOMMITTED');
const repository = gitValue(['config', '--get', 'remote.origin.url'], '');
const github = repository.match(/github\.com[/:]([^/]+)\/([^/.]+)(?:\.git)?$/);
const repositoryUrl = github ? `https://github.com/${github[1]}/${github[2]}` : undefined;
const catalog = {
  version: 1,
  generatedAt: new Date().toISOString(),
  commit,
  repository: repositoryUrl,
  articles: articles.map((article) => ({
    ...article,
    immutableUrl: repositoryUrl && commit !== 'UNCOMMITTED' ? `${repositoryUrl}/blob/${commit}/${article.sourcePath}` : undefined,
    rawUrl: repositoryUrl && commit !== 'UNCOMMITTED' ? `https://raw.githubusercontent.com/${github[1]}/${github[2]}/${commit}/${article.sourcePath}` : undefined
  }))
};
await rm(path.join(root, 'dist'), { recursive: true, force: true });
await mkdir(path.join(root, 'dist'), { recursive: true });
await writeFile(path.join(root, 'dist', 'catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`);
const items = catalog.articles.map((article) => {
  const link = article.canonicalUrl || article.immutableUrl || article.sourcePath;
  const label = `${article.publicationType.replace(/-/g, ' ')} · v${article.edition}`;
  return `    <item>\n      <title>${xml(`${article.title} (${label})`)}</title>\n      <link>${xml(link)}</link>\n      <guid isPermaLink="false">${xml(`${article.id}@${commit}`)}</guid>\n      <description>${xml(`${article.summary} [${label}]`)}</description>\n      <pubDate>${new Date(`${article.published}T00:00:00Z`).toUTCString()}</pubDate>\n    </item>`;
}).join('\n');
const feedLink = repositoryUrl || 'https://example.invalid/publications';
const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Publications</title>\n    <link>${xml(feedLink)}</link>\n    <description>Versioned long-form publications.</description>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n${items}\n  </channel>\n</rss>\n`;
await writeFile(path.join(root, 'dist', 'rss.xml'), rss);
console.log(`Built catalog and RSS for ${articles.length} published article(s) at ${commit}.`);
