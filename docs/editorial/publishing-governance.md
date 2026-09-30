# CivilCity Publishing Governance

Updated: 2026-09-30

## Rule

CivilCity content is commercial engineering content. It must be useful, local, technically careful and proposal-oriented. Do not publish generic SEO filler.

The next 200-article programme exists to build qualified Sunshine Coast development enquiries. It is not permission to publish 200 pages blindly.

## Source Of Truth

Use these files in order:

1. `docs/seo-keyword-map.md` — commercial clusters, primary destinations and measurement fields.
2. `docs/editorial/200-article-plan.md` — approved topic queue.
3. `docs/blog-progression.md` — current-cycle priority pages and measurement discipline.
4. `automation/daily-seo-publisher.md` — execution workflow.
5. `src/lib/insights.ts` — published article source of truth.

Ignore any stale external Windows skill path or old 100-topic queue unless it has been explicitly reconciled into the files above.

## Publish / Improve Decision

Before adding a new URL, answer:

- Is there already a canonical article covering the same reader decision?
- Would improving that existing guide be stronger than creating a competing page?
- What service or project page should receive the reader?
- What official sources are needed?
- What document, plan, address or approval detail should the reader send CivilCity?

If the existing page already owns the intent, improve it. Do not create a duplicate article.

## Required Article Shape

Every new or materially revised article must include:

- Direct quick answer in the first section.
- Sunshine Coast-specific context.
- One decision table, risk register or process table.
- One practical checklist.
- Common mistakes tied to cost, delay, redesign, information requests, construction risk or closeout.
- One primary commercial CTA.
- Related articles and one relevant service/project destination.
- Official public sources where process, planning, approval, fees, utilities, transport or compliance claims are made.

## Urbix Pattern To Reuse

Copy the operating pattern, not Urbix's exact subject matter:

- Build topic clusters, not isolated posts.
- Start with buyer-pain queries: cost, approval, checklist, requirements, before you buy, can I build, can I subdivide, what council checks.
- Use the article skeleton: quick answer, checks, tables, examples, risks, takeaways, FAQ and CTA.
- Localise aggressively with Sunshine Coast service and project context.
- Keep every article commercially adjacent to a service decision, quote request, due diligence check or project risk assessment.
- Put the first CTA before the long article body, with a second CTA near the end.
- Track CTA clicks and enquiries by article slug once analytics plumbing is available.
- Use related articles by topic and project type to strengthen internal links.
- Avoid broad promises and national claims unless the source evidence supports them.
- Measure by Search Console query/page data and enquiry quality, then reinforce winners.

## Technical And Compliance Boundaries

Do not:

- Invent project examples, approvals, savings, client outcomes or testimonials.
- Invent RPEQ review or named technical approval.
- Promise approval, cost certainty, ranking or indexing.
- Use competitor material as source material.
- Publish private Search Console exports, lead records, title documents or client material.
- Make universal technical thresholds without stating the applicable context and source.

## Evidence And Measurement

Until CivilCity Search Console and conversion tracking are verified, treat every keyword and article priority as a hypothesis.

Track only verified data:

- Indexed status.
- Impressions, clicks, CTR and average position.
- Landing page.
- Enquiry source URL.
- Service selected.
- Project location.
- Proposal-fit notes.

Search Console does not measure lead quality. Enquiry and proposal-fit tracking must be reviewed separately.

## Batch Rules

For the next 200-article programme:

- Publish in batches of 5-10 max.
- Run a measurement review between batches once enough data exists.
- Prioritise commercial clusters before educational long-tail content.
- Use PRs for batches where possible.
- Run `npm run check:content`, `npm run lint` and `npm run build`.
- Verify live URL and sitemap before marking a page published.

## Stop Conditions

Pause publishing if:

- Two consecutive batches produce no impressions after indexing has had time to settle.
- Articles receive irrelevant homeowner enquiries that do not fit CivilCity.
- Source verification is not possible.
- A technical reviewer is needed and not available.
- The article would duplicate an existing guide.
