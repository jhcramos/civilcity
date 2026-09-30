# Article copy, imagery and mobile navigation review

The recently added articles contained drafting commentary and repeated example text. Readers also had no navigation menu below the desktop breakpoint, and many articles shared category fallback images.

## Changes

- Replaced the 50 affected articles' drafting passages with topic-specific guidance, introductions, summaries, examples and natural FAQ wording. Examples remain illustrative, introduced with “Consider…”, rather than claimed client projects.
- Proofread the wider library for the reported wording, corrected a malformed Council resource hostname and retained all 98 article URLs and 111 tables.
- Removed competitor-led instructions from the editorial strategy and publishing workflow. Future articles must pass the copy and dedicated-image checks.
- Added explicit per-article image assignments shared by the library, article hero, Open Graph metadata and Article schema. There are 68 new architectural concept illustrations and 30 retained distinct images. New artwork illustrates concepts rather than completed CivilCity projects.
- Added a mobile navigation disclosure with all five header destinations, Escape dismissal, outside-click dismissal and closure after navigation. Kept the desktop menu and moved the small-screen project CTA into the menu.

## Verification

- Content validation checks article URLs, dates, internal links, tables, prohibited drafting phrases, image existence and duplicate image bytes.
- Production build and lint passed.
- Browser checks at 320px and 390px: menu destinations work and close after navigation; Escape closes the menu; no page overflow.
- Browser checks at 768px and 1280px: tablet menu available; desktop navigation visible and mobile toggle hidden.
- The reported article has no obsolete wording, no console errors and a locally scrollable comparison table at 320px.

Artwork provenance and prompts are recorded in `article-image-provenance.json`; image assignments are in `src/lib/insight-images.json`. Images are illustrative and must not be described as evidence of actual projects, approvals or engineering designs.
