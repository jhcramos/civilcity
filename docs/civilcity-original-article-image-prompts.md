# CivilCity article image system

CivilCity insight pages should not use repeated generic SVG-style placeholders.

Current replacement set:
- Local `public/insight-original-*.webp` hero images.
- Generated as original branded compositions using Sunshine Coast OpenStreetMap tile backgrounds plus topic-specific civil/planning overlays.
- Each image is mapped by article slug in `getBlogImage()` inside `src/lib/site.ts`.

Rules for future article batches:
1. Every new article should receive a slug-specific image mapping.
2. Do not rely on broad category fallback unless the article is temporary/draft.
3. Avoid abstract SVG placeholders and unrelated generic stock.
4. Prefer representative visual language:
   - subdivision: lot layouts, road frontage, cadastral/map overlays
   - easements/overlays: layered map constraints
   - stormwater: drainage path, pits, discharge route, flood water
   - access/parking: driveway, road, turning/parking layout
   - townhouses/medium density: building blocks plus access/stormwater context
   - site reports/research: map/report review interface
5. If using OpenStreetMap-derived backgrounds, keep attribution in the site footer.

The footer currently includes: `Map data © OpenStreetMap contributors`.
