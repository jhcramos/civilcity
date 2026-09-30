# Daily CivilCity SEO Publisher

Run this only when the next topic has passed the commercial publishing gate. This is a controlled publisher, not a blind daily volume machine.

## Goal

Publish one high-quality Sunshine Coast land development insight article per authorised run, selected from the commercial roadmap and verified against existing content. The goal is qualified enquiries and proposal-fit, not article count.

## Source Of Truth

Use this order:

1. Read `src/lib/insights.ts` and identify all existing published `slug` values.
2. Read `docs/seo-keyword-map.md`.
3. Read `docs/editorial/200-article-plan.md`.
4. Read `docs/editorial/publishing-governance.md`.
5. Read `docs/blog-progression.md` and check whether an existing priority guide should be improved instead of creating a new URL.
6. Select the highest-value unpublished topic that has one clear commercial destination and no canonical duplicate.
7. Verify current official sources before drafting.
8. Publish only when CI, live URL and sitemap verification can be completed.

Do not use the old external 100-topic queue as the source of truth. The active roadmap is `docs/editorial/200-article-plan.md`.

## Article Requirements

Each article must be a useful customer guide, not a thin SEO note.

Include:

- 900-1500 words equivalent using the existing `sections` structure.
- A direct short answer in the first section.
- Sunshine Coast-specific context.
- Practical developer, landowner, builder, planner, or homeowner implications.
- A checklist or decision process.
- Common mistakes.
- How CivilCity helps.
- 3-5 FAQs.
- Primary keyword and secondary keywords.
- `sourceLinks` to official resources where relevant.

Also include:

- One primary commercial destination from `docs/seo-keyword-map.md`.
- A clear reader decision: buy, lodge, redesign, budget, scope, appoint, construct or close out.
- A project brief checklist that tells the reader what to send CivilCity.

## CivilCity Article Style

Write like a professional Sunshine Coast civil engineering consultancy, not like an AI system explaining how it found information.

Do not publish internal process language:

- ingested
- extracted
- RAG
- chunk
- vector database
- scheme material
- source material says
- the data identifies
- based on our database

Use public, client-facing language instead:

- The Sunshine Coast Planning Scheme identifies...
- The Reconfiguring a lot code sets out...
- Council guidance points applicants to...
- For feasibility, check...
- A civil engineer should test...

Use this structure for important articles:

1. Quick answer: answer the query in 2 concise paragraphs.
2. Why it matters: explain the decision the reader is trying to make.
3. Technical explanation in plain English: name the relevant code, table or process without sounding like council minutes.
4. Practical table: include at least one real rendered table, not text pretending to be a table.
5. Civil risk section: access, stormwater, services, earthworks, retaining, overlays, construction or closeout as relevant.
6. Worked example: use a realistic hypothetical Sunshine Coast scenario.
7. Common mistakes: tie mistakes to cost, delay, redesign, information requests or plan sealing.
8. When CivilCity should be involved: state what to send and when to get help.
9. FAQ and official resources.

Preferred table patterns:

| Pattern | Columns |
| --- | --- |
| Feasibility summary | Question / What to check / Why it matters |
| Planning threshold | Site condition / Requirement / Practical implication |
| Risk register | Risk / Evidence to seek / Common surprise |
| Process | Stage / Main question / Useful output |
| Consultant roles | Consultant / What they test / When to involve them |
| Approval pathway | Trigger / Likely pathway / What changes |

Keep table cells short. Tables should help readers scan and decide, not become dense reports.

Pre-publish style check:

- No internal workflow words are visible.
- At least one useful table is included for cornerstone or technical articles.
- The first section gives a direct answer.
- The article includes a practical example, checklist or decision process.
- It links to official public sources where relevant.
- It does not promise approval or a legal outcome.

## Research Requirements

Use current official/primary sources before making process, fee, approval, planning, or compliance claims.

Preferred sources:

- Sunshine Coast Council Development.i
- Sunshine Coast Council Development.i site report
- Sunshine Coast Planning Scheme 2014
- Sunshine Coast Council interactive mapping
- Sunshine Coast Council operational work page
- Sunshine Coast Council plan sealing page
- Sunshine Coast Council development application forms/checklists
- Sunshine Coast Council fees and charges
- Sunshine Coast Council LGIP/infrastructure charges information
- Queensland Government planning, SARA, titles, transport, environmental, or mapping resources where relevant

## Image Requirements

Do not use:

- flat SVG diagrams
- illustrated map cards
- infographic-style covers
- generic icon covers

Use realistic, relevant imagery:

- site inspections
- civil plans
- development land
- driveways and road access
- stormwater infrastructure
- subdivision works
- townhouse or infill development context
- construction-phase civil works

Prefer existing realistic assets in `public/`. If a new asset is needed, create a realistic photo-style image and save it in `public/` with a descriptive filename.

## Implementation Steps

1. Update article data in `src/lib/insights.ts`.
2. Keep existing slugs stable.
3. Add the next article in the correct order.
4. Map a realistic article image in `getBlogImage` in `src/lib/site.ts`.
5. Run `npm run check:content`, `npm run lint` and `npm run build`.
6. Commit and push to the authorised remote after the required secret scan. Follow the review and deployment authorisation for the run; available Vercel credentials alone do not authorise production publication.
7. After an authorised deployment, verify the new live article URL returns `200`.
8. Verify `https://civilcity.com.au/sitemap.xml` includes the new URL.

## Final Report

Report:

- selected topic
- new slug and URL
- build result
- deploy result
- live URL verification
- sitemap verification
- official source URLs used


## Editorial maintenance requirements

- Use `src/lib/insights.ts` as the article source of truth. `site.ts` re-exports its helpers.
- Inspect all existing slugs before choosing a topic. Improve an existing guide where it answers the same reader decision; never add duplicate slug objects.
- Preserve published URLs unless a separately reviewed redirect strategy is supported by Search Console and backlink evidence.
- Write for property owners, developers and their consultant teams. Never publish keyword-strategy notes, search-intent commentary or sarcastic remarks about other disciplines.
- Do not use competitor material, including Urbis, as a content or design reference.
- Add an original decision table, an actionable checklist, contextual internal links, a related service/CTA and valid relatedSlugs. Do not pad content to a word target.
- Use the structured `list`, `ordered`, `table` and `links` fields. Verify current official sources for regulatory claims; avoid universal thresholds without their applicable context.
- Distinguish Council/EDQ pathways, separate water and sewer authority requirements, RPEQ professional-service responsibility and specific certification, and plan sealing versus title registration.
- Preserve the original publication date. Set updatedDate only after a substantive revision. Attribute to the organisation unless a real author and review are confirmed; never invent an RPEQ byline or technical approval.
- Label hypothetical examples clearly. Do not imply a client project, measured outcome, approval guarantee or search ranking without evidence.
- Run the content integrity check, lint and build. Changes must go through the authorised remote repository and review process; an automated content run must not bypass repository policy.
