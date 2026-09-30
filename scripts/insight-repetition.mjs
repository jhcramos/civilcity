import { createHash } from 'node:crypto';

// Exact matches are a regression signal, not a substitute for editorial review.
export function findRepeatedPassages(posts) {
  const passages = new Map();
  for (const post of posts) {
    for (const section of post.sections) {
      const blocks = [
        [Array.isArray(section.body) ? section.body.join(' ') : section.body, ...(section.list ?? [])].join(' '),
        section.table ? [...section.table.columns, ...section.table.rows.flat()].join(' ') : '',
      ];
      for (const block of blocks) {
        const normalised = block.toLowerCase().replace(/\s+/g, ' ').trim();
        if (normalised.split(' ').length < 60) continue;
        const hash = createHash('sha256').update(normalised).digest('hex');
        if (!passages.has(hash)) passages.set(hash, new Set());
        passages.get(hash).add(post.slug);
      }
    }
  }
  return Object.fromEntries([...passages].filter(([, slugs]) => slugs.size > 1).map(([hash, slugs]) => [hash, [...slugs].sort()]));
}

export function newRepetition(posts, baseline) {
  return Object.entries(findRepeatedPassages(posts)).flatMap(([hash, slugs]) =>
    slugs.filter((slug) => !baseline[hash]?.includes(slug)).map((slug) => ({ hash, slug })));
}
