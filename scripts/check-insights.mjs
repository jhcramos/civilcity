import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import { createHash } from 'node:crypto';
import { newRepetition } from './insight-repetition.mjs';

const source = fs.readFileSync('src/lib/insights.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText;
const { blogPosts, getArticleWordCount, getSectionId } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const repetitionBaseline = JSON.parse(fs.readFileSync('docs/editorial/legacy-repetition.json', 'utf8'));
assert.deepEqual(newRepetition(blogPosts, repetitionBaseline), [], 'New repeated substantial passage or table: write a topic-specific explanation; do not expand the legacy baseline.');
const site = ts.createSourceFile('site.ts', fs.readFileSync('src/lib/site.ts', 'utf8'), ts.ScriptTarget.Latest, true);
const services = new Set();
for (const statement of site.statements) {
  if (!ts.isVariableStatement(statement)) continue;
  for (const declaration of statement.declarationList.declarations) {
    if (declaration.name.getText(site) !== 'services') continue;
    for (const element of declaration.initializer.elements) {
      const slug = element.properties.find((p) => p.name?.getText(site) === 'slug');
      services.add(slug.initializer.text);
    }
  }
}
const slugs = new Set(blogPosts.map((post) => post.slug));
const images = JSON.parse(fs.readFileSync('src/lib/insight-images.json', 'utf8'));
const imageHashes = new Set();
for (const post of blogPosts) {
  assert(images[post.slug], `${post.slug}: missing dedicated image`);
  const bytes = fs.readFileSync(`public${images[post.slug]}`);
  const hash = createHash('sha256').update(bytes).digest('hex');
  assert(!imageHashes.has(hash), `${post.slug}: repeated article image`);
  imageHashes.add(hash);
}
assert.equal(slugs.size, blogPosts.length, 'Duplicate article URLs');
const baseline = JSON.parse(fs.readFileSync('docs/blog-editorial-upgrade.json', 'utf8'));
for (const slug of baseline.preservedSlugs) assert(slugs.has(slug), `Existing URL removed: ${slug}`);
const validDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(value).toISOString().startsWith(value);
function checkLink(link, slug) {
  if (link.href.startsWith('/insights/')) assert(slugs.has(link.href.slice(10)), `${slug}: broken article link ${link.href}`);
  else if (link.href.startsWith('/services/')) assert(services.has(link.href.slice(10)), `${slug}: broken service link ${link.href}`);
  else assert(new URL(link.href).protocol === 'https:', `${slug}: source must use HTTPS`);
}
for (const post of blogPosts) {
  assert(validDate(post.date), `${post.slug}: invalid published date`);
  if (post.updatedDate) assert(validDate(post.updatedDate) && post.updatedDate >= post.date, `${post.slug}: invalid update date`);
  assert(services.has(post.serviceSlug), `${post.slug}: service does not exist`);
  assert(post.cta.label && post.cta.body, `${post.slug}: missing project CTA`);
  assert(post.resources.length, `${post.slug}: missing sources`);
  assert(post.sections.some((s) => s.list?.length), `${post.slug}: missing actionable list`);
  assert(post.sections.some((s) => s.table?.rows.length), `${post.slug}: missing decision table`);
  assert.equal(post.sections.filter((s) => s.heading === 'Checklist for your project brief').length, 1, `${post.slug}: checklist anchor must resolve once`);
  assert.equal(new Set(post.sections.map((_, i) => getSectionId(i))).size, post.sections.length);
  assert.equal(new Set(post.relatedSlugs).size, post.relatedSlugs.length);
  for (const related of post.relatedSlugs) assert(related !== post.slug && slugs.has(related), `${post.slug}: invalid related article`);
  for (const resource of post.resources) checkLink(resource, post.slug);
  for (const section of post.sections) {
    assert(section.heading.trim(), `${post.slug}: empty heading`);
    for (const link of section.links ?? []) checkLink(link, post.slug);
    if (section.table) for (const row of section.table.rows) assert.equal(row.length, section.table.columns.length, `${post.slug}: malformed table`);
  }
}
assert(!/search intent|high-intent searches|commercially useful|Frankenstein|faceplant|mood-board|bring evidence, not vibes|Urbi[sx]|hypothetical|strongest article|the reader|CivilCity topic|article should/i.test(source), 'Reader-facing drafting notes or prohibited competitor content');
const counts = blogPosts.map(getArticleWordCount).sort((a, b) => a - b);
console.log(JSON.stringify({ articles: blogPosts.length, minWords: counts[0], medianWords: Math.round((counts[Math.floor((counts.length - 1) / 2)] + counts[Math.floor(counts.length / 2)]) / 2), under500: counts.filter((n) => n < 500).length, tables: blogPosts.reduce((n, p) => n + p.sections.filter((s) => s.table).length, 0), message: 'All content, preserved URLs, internal links, dates and table checks passed.' }, null, 2));
