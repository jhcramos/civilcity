import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Inspect the real Next build output, rather than a separate mock rendering.
const directory = '.next/server/app/insights';
const files = fs.readdirSync(directory).filter((file) => file.endsWith('.html'));
const baseline = JSON.parse(fs.readFileSync('docs/blog-editorial-upgrade.json', 'utf8'));
assert(files.length >= baseline.uniqueArticles, 'Missing generated article pages');
for (const slug of baseline.preservedSlugs) {
  const html = fs.readFileSync(path.join(directory, `${slug}.html`), 'utf8');
  assert(html.includes(`https://civilcity.com.au/insights/${slug}`), `${slug}: canonical URL absent`);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${slug}: article must have one H1`);
  assert.equal((html.match(/id="project-checklist"/g) ?? []).length, 1, `${slug}: missing checklist target`);
  for (const [, id] of html.matchAll(/href="#(section-\d+)"/g)) assert(html.includes(`id="${id}"`), `${slug}: broken contents anchor ${id}`);
  const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const schemas = scripts.flatMap((match) => JSON.parse(match[1]));
  const article = schemas.find((schema) => schema['@type'] === 'Article');
  assert(article?.dateModified && article?.datePublished && article?.image, `${slug}: incomplete Article schema`);
  assert.equal(article.mainEntityOfPage, `https://civilcity.com.au/insights/${slug}`);
  assert(html.includes('<table') && html.includes('<caption'), `${slug}: table not rendered`);
  assert(html.includes('View service scope'), `${slug}: missing service CTA`);
}
console.log(`Verified ${baseline.preservedSlugs.length} built article pages: canonical, H1, contents anchors, table, CTA and JSON-LD.`);
