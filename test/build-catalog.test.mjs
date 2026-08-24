import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

test('validator accepts the discussion draft', () => {
  const output = execFileSync(process.execPath, ['scripts/build-catalog.mjs', '--validate-only'], { encoding: 'utf8' });
  assert.match(output, /Validated 1 article\(s\); 1 published/);
});

test('builder creates a catalog and RSS entry', async () => {
  execFileSync(process.execPath, ['scripts/build-catalog.mjs'], { encoding: 'utf8' });
  const catalog = JSON.parse(await readFile('dist/catalog.json', 'utf8'));
  const rss = await readFile('dist/rss.xml', 'utf8');
  assert.equal(catalog.version, 1);
  assert.equal(catalog.articles[0].slug, 'kusama-futures-jam-era');
  assert.equal(catalog.articles[0].publicationType, 'discussion-draft');
  assert.equal(catalog.articles[0].edition, '0.1.0');
  assert.match(rss, /Kusama Futures in the JAM Era \(discussion draft · v0.1.0\)/);
});
