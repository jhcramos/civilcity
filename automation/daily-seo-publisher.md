# Daily CivilCity SEO Publisher

Run this once per day from the CivilCity workspace.

## Goal

Publish one new high-quality Sunshine Coast land development insight article per run until the 100-topic plan is complete.

## Source Of Truth

Use this order:

1. Read `src/lib/insights.ts` and identify all existing published `slug` values.
2. Read `C:\Users\Administrator\.codex\skills\civilcity-seo-insights\references\sunshine-coast-article-plan.md` if available.
3. Select the next unpublished topic from the 100-topic plan.
4. If the external skill file is not available, continue from the queue below.

The first 20 are already published. Continue from:

1. What Consultants Do You Need for a Sunshine Coast Subdivision?
2. How Civil Engineering Supports a Development Application
3. Referral Agencies and SARA: When State Assessment May Affect Your Project
4. Public Notification for Sunshine Coast Developments: What It Means
5. Negotiating Development Conditions: Civil Engineering Items to Watch
6. How Long Does a Sunshine Coast Subdivision Approval Take?
7. Development Application Costs: What Small Developers Should Budget For
8. When Does a Subdivision Need Operational Works?
9. What Civil Drawings Are Needed for Operational Works?
10. Why Plan Sealing Gets Delayed and How to Avoid It
11. As-Constructed Drawings: Why They Matter for Subdivision Closeout
12. Civil Construction Hold Points for Small Developments
13. Bonding Unfinished Works: What Developers Should Understand
14. Practical Completion for Subdivision Civil Works
15. How to Keep Civil Design, Construction and Plan Sealing Aligned
16. Shared Driveways for Subdivision: Design Issues to Check Early
17. Steep Driveways on the Sunshine Coast: Civil Design Risks
18. Driveway Crossover Approval: What Developers Should Know
19. Access Design for Rear Lots and Battle-Axe Blocks
20. Turning Areas for Small Developments: Why Swept Paths Matter
21. Waste Truck Access for Townhouses and Small Developments
22. Visitor Parking and Access Layout for Small Multi-Unit Projects
23. Sight Distance at Driveways: What Can Affect Approval?
24. Car Park Layout Design for Small Commercial Developments
25. Stormwater Detention vs Retention: What Applies to Your Site?
26. Overland Flow Paths: What Property Owners Should Check
27. Flood Overlays and Development Risk on the Sunshine Coast
28. Stormwater Quality Treatment for Small Developments
29. Earthworks Design: Cut, Fill and Retaining Risks for Developers
30. Retaining Walls in Subdivision: Civil Design Considerations
31. Sewer and Water Connections for Subdivision Projects
32. Service Clashes: How Existing Infrastructure Affects Development Layout
33. Easements for Stormwater Drainage: What Developers Should Check
34. Building Near Sewer or Stormwater Infrastructure
35. How Soil Conditions Affect Civil Design and Construction Costs
36. Erosion and Sediment Control for Small Developments
37. Civil Engineering Red Flags in Sloping and Flood-Prone Sites
38. How to Check Property Overlays Before Buying Land
39. Environmental Overlays and Subdivision Feasibility
40. Bushfire Overlays: What Developers Should Know
41. Landslide and Steep Land Constraints on Development Sites
42. Waterway and Wetland Overlays: Civil Engineering Implications
43. Coastal Hazard Overlays and Development Near the Coast
44. Heritage and Character Constraints for Small Developments
45. Easements Explained for Sunshine Coast Property Owners
46. Can You Build Over an Easement?
47. Drainage Easements and Subdivision Layout: What to Watch
48. Access Easements for Rear Lots and Shared Driveways
49. Encumbrances, Covenants and Easements: What Developers Should Check
50. Property Due Diligence: Mapping, Titles, Easements and Services
51. Subdivision Advice in Maroochydore: What Developers Should Check
52. Land Development in Caloundra: Access, Drainage and Approval Risks
53. Developing Land in Nambour: Slopes, Services and Infill Potential
54. Mooloolaba Development Sites: Parking, Access and Coastal Constraints
55. Buderim Subdivision: Steep Land and Stormwater Considerations
56. Sippy Downs Development: Civil Design Issues for Infill Projects
57. Palmwoods Subdivision: Character, Drainage and Environmental Constraints
58. Bli Bli Development Sites: Flooding, Access and Infrastructure Checks
59. Coolum Development: Coastal Constraints and Stormwater Design
60. Hinterland Subdivision on the Sunshine Coast: Access and Services
61. Small Commercial Development: Civil Design Items to Budget For
62. How Civil Design Can Protect Developer Margin
63. When Should You Speak to a Civil Engineer About a Development Site?

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

1. Update `src/lib/site.ts`.
2. Keep existing slugs stable.
3. Add the next article in the correct order.
4. Map a realistic article image in `getBlogImage`.
5. Run `npm run build`.
6. If build passes and Vercel auth is available, deploy with `npx vercel deploy --prod --yes`.
7. Verify the new live article URL returns `200`.
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
