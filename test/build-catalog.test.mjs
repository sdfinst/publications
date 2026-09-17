import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

test('validator accepts both published articles', () => {
  const output = execFileSync(process.execPath, ['scripts/build-catalog.mjs', '--validate-only'], { encoding: 'utf8' });
  assert.match(output, /Validated 2 article\(s\); 2 published/);
});

test('builder creates a catalog and RSS entry', async () => {
  execFileSync(process.execPath, ['scripts/build-catalog.mjs'], { encoding: 'utf8' });
  const catalog = JSON.parse(await readFile('dist/catalog.json', 'utf8'));
  const rss = await readFile('dist/rss.xml', 'utf8');
  assert.equal(catalog.version, 1);
  assert.equal(catalog.articles.length, 2);
  const first = catalog.articles.find((article) => article.slug === 'kusama-futures-jam-era');
  const proposal = catalog.articles.find((article) => article.slug === 'proposal-kusama-future-jam-prime');
  assert.equal(first.publicationType, 'discussion-draft');
  assert.equal(first.edition, '0.1.0');
  assert.equal(proposal.publicationType, 'position-paper');
  assert.equal(proposal.edition, '0.1.0');
  assert.match(rss, /Kusama Futures in the JAM Era \(discussion draft · v0.1.0\)/);
  assert.match(rss, /A Proposal for a Kusama Future on JAM Prime \(position paper · v0.1.0\)/);
});
