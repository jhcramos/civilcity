# CivilCity Sunshine Coast SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the next SEO layer for CivilCity so it can dominate Sunshine Coast development-approval, subdivision, stormwater, access, operational works and RPEQ-related civil engineering searches.

**Architecture:** Keep `src/lib/site.ts` as the current content data source until it becomes too large to manage. Add focused route groups for project type and locality pages using the existing Next.js App Router, metadata conventions, schema patterns and visual system.

**Tech Stack:** Next.js App Router, TypeScript, React, existing CivilCity design components, generated sitemap/robots, GA4/GSC externally configured.

---

## File Structure

- Modify `src/lib/site.ts`: add project type and location content models, internal link data and supporting article metadata.
- Modify `src/app/sitemap.ts`: include project type and locality routes.
- Create `src/app/projects/[slug]/page.tsx`: dynamic project type landing pages.
- Modify `src/app/projects/page.tsx`: link to new project type pages.
- Create `src/app/locations/page.tsx`: location index page.
- Create `src/app/locations/[slug]/page.tsx`: dynamic locality landing pages.
- Modify `src/components/layout.tsx`: add Locations to navigation only if the page deserves top-level visibility after review.
- Modify `src/app/services/[slug]/page.tsx`: add contextual links to project types and insights.
- Modify `src/app/insights/[slug]/page.tsx`: add stronger commercial destination links.
- Create `docs/seo-keyword-map.md`: live keyword/page/status map.
- Create or modify tests if this repo already has a testing setup; otherwise run typecheck, lint and production build as verification.

## Task 1: Create the SEO Keyword Map

**Files:**
- Create: `docs/seo-keyword-map.md`

- [ ] **Step 1: Create the keyword map document**

Add:

```markdown
# CivilCity SEO Keyword Map

## Commercial Service Keywords

| Priority | Keyword | Intent | Target URL | Status |
| --- | --- | --- | --- | --- |
| 1 | operational works application Sunshine Coast | Service | /services/operational-works-applications | Existing, strengthen |
| 2 | RPEQ civil engineer Sunshine Coast | Service | /services/rpeq-certification | Existing, strengthen |
| 3 | stormwater design Sunshine Coast | Service | /services/stormwater-drainage-design | Existing, strengthen |
| 4 | subdivision civil engineer Sunshine Coast | Project/service | /projects/subdivision-engineering-sunshine-coast | New |
| 5 | material change of use engineering Sunshine Coast | Service | /services/material-change-of-use-engineering | Existing, strengthen |
| 6 | reconfiguration of a lot engineering Sunshine Coast | Service | /services/reconfiguration-of-a-lot-engineering | Existing, strengthen |
| 7 | engineering due diligence Sunshine Coast | Service | /services/engineering-due-diligence | Existing, strengthen |
| 8 | sight distance assessment Sunshine Coast | Service | /services/sight-distance-assessments | Existing, strengthen |
| 9 | driveway design Sunshine Coast | Insight/project | /projects/driveway-access-engineering-sunshine-coast | New |
| 10 | civil engineering advice Sunshine Coast | Service | /services/civil-engineering-advice | Existing, strengthen |

## Project Type Keywords

| Priority | Keyword | Target URL | Status |
| --- | --- | --- | --- |
| 1 | subdivision engineering Sunshine Coast | /projects/subdivision-engineering-sunshine-coast | New |
| 2 | townhouse development engineering Sunshine Coast | /projects/townhouse-development-engineering-sunshine-coast | New |
| 3 | dual occupancy engineering Sunshine Coast | /projects/dual-occupancy-secondary-dwelling-engineering-sunshine-coast | New |
| 4 | commercial civil engineer Sunshine Coast | /projects/commercial-industrial-civil-engineering-sunshine-coast | New |
| 5 | driveway access engineering Sunshine Coast | /projects/driveway-access-engineering-sunshine-coast | New |
| 6 | development site due diligence Sunshine Coast | /projects/pre-purchase-development-site-due-diligence-sunshine-coast | New |
| 7 | operational works civil infrastructure Sunshine Coast | /projects/operational-works-civil-infrastructure-sunshine-coast | New |

## Location Keywords

| Priority | Keyword | Target URL | Status |
| --- | --- | --- | --- |
| 1 | Maroochydore civil engineer | /locations/maroochydore-civil-engineer | New |
| 2 | Buderim subdivision engineer | /locations/buderim-subdivision-stormwater-engineer | New |
| 3 | Caloundra development civil engineer | /locations/caloundra-development-civil-engineer | New |
| 4 | Sippy Downs townhouse development engineer | /locations/sippy-downs-townhouse-development-engineer | New |
| 5 | Nambour subdivision access engineer | /locations/nambour-subdivision-access-engineer | New |
| 6 | Palmview Aura development engineering | /locations/palmview-aura-development-engineering | New |

## Measurement Fields To Add After GSC Setup

| URL | Indexed | Impressions | Clicks | Avg position | Leads | Notes |
| --- | --- | --- | --- | --- | --- | --- |
```

- [ ] **Step 2: Commit**

Run:

```bash
git add docs/seo-keyword-map.md
git commit -m "docs: add CivilCity SEO keyword map"
```

## Task 2: Add Project Type Content Model

**Files:**
- Modify: `src/lib/site.ts`

- [ ] **Step 1: Add a `ProjectType` type**

Add near the existing content types:

```ts
export type ProjectType = {
  slug: string;
  title: string;
  summary: string;
  primaryKeyword: string;
  metaDescription: string;
  audience: string;
  commonConstraints: string[];
  civilInputs: string[];
  relatedServices: string[];
  relatedInsights: string[];
};
```

- [ ] **Step 2: Add `projectTypes` data**

Add seven entries:

```ts
export const projectTypes: ProjectType[] = [
  {
    slug: "subdivision-engineering-sunshine-coast",
    title: "Subdivision Engineering Sunshine Coast",
    summary:
      "Civil engineering support for Sunshine Coast subdivision projects, including access, stormwater, levels, servicing, operational works and plan sealing readiness.",
    primaryKeyword: "subdivision engineering Sunshine Coast",
    metaDescription:
      "Subdivision engineering support on the Sunshine Coast for access, stormwater, levels, servicing, operational works and development feasibility.",
    audience: "Developers, landowners, town planners and surveyors assessing small and medium subdivision projects.",
    commonConstraints: ["Access handle geometry", "Stormwater discharge", "Slope and earthworks", "Service connections", "Operational works conditions"],
    civilInputs: ["Feasibility advice", "ROL engineering input", "Stormwater and access review", "Operational works documentation", "Construction-phase support"],
    relatedServices: ["reconfiguration-of-a-lot-engineering", "stormwater-drainage-design", "operational-works-applications"],
    relatedInsights: [
      "can-i-subdivide-my-land-on-the-sunshine-coast",
      "battle-axe-subdivision-on-the-sunshine-coast-access-services-and-stormwater-risks",
      "plan-sealing-sunshine-coast-what-developers-need-to-know",
    ],
  },
  {
    slug: "townhouse-development-engineering-sunshine-coast",
    title: "Townhouse Development Engineering Sunshine Coast",
    summary:
      "Civil input for townhouse and multi-unit sites where access, parking, stormwater, levels, waste servicing and operational works can affect feasibility.",
    primaryKeyword: "townhouse development engineering Sunshine Coast",
    metaDescription:
      "Civil engineering support for Sunshine Coast townhouse developments, including access, parking, stormwater, levels and approval risk.",
    audience: "Developers, architects and planners testing townhouse or medium-density residential sites.",
    commonConstraints: ["Parking layout", "Waste vehicle access", "Overland flow", "Driveway grades", "Finished floor levels"],
    civilInputs: ["Preliminary civil advice", "Access and parking review", "Stormwater strategy", "Operational works support", "RPEQ review"],
    relatedServices: ["preliminary-civil-engineering-reporting-and-design", "car-parking-planning-and-investigations", "stormwater-drainage-design"],
    relatedInsights: [
      "townhouse-development-sunshine-coast-civil-engineering-checklist",
      "medium-density-residential-zone-sunshine-coast-townhouse-feasibility",
      "transport-and-parking-code-sunshine-coast-small-development-checks",
    ],
  },
  {
    slug: "dual-occupancy-secondary-dwelling-engineering-sunshine-coast",
    title: "Dual Occupancy and Secondary Dwelling Engineering Sunshine Coast",
    summary:
      "Civil engineering checks for dual occupancy and secondary dwelling projects where access, parking, stormwater and overlays can decide the approval path.",
    primaryKeyword: "dual occupancy engineering Sunshine Coast",
    metaDescription:
      "Civil engineering checks for Sunshine Coast dual occupancy and secondary dwelling projects, including access, parking, stormwater and overlays.",
    audience: "Homeowners, small investors, designers and planners assessing compact residential development options.",
    commonConstraints: ["Second access", "Parking and manoeuvring", "Stormwater discharge", "Flood or slope overlays", "Service upgrades"],
    civilInputs: ["Early feasibility advice", "Driveway and access review", "Stormwater constraints review", "Planning-stage engineering support"],
    relatedServices: ["civil-engineering-advice", "sight-distance-assessments", "stormwater-drainage-design"],
    relatedInsights: [
      "dual-occupancy-sunshine-coast-approval-and-civil-design-risks",
      "secondary-dwelling-sunshine-coast-civil-engineering-checks-before-you-build",
      "secondary-driveways-on-the-sunshine-coast-can-you-add-another-access",
    ],
  },
  {
    slug: "commercial-industrial-civil-engineering-sunshine-coast",
    title: "Commercial and Industrial Civil Engineering Sunshine Coast",
    summary:
      "Civil engineering support for commercial and industrial development sites involving parking, access, stormwater, earthworks and approval conditions.",
    primaryKeyword: "commercial civil engineer Sunshine Coast",
    metaDescription:
      "Commercial and industrial civil engineering support on the Sunshine Coast for access, parking, stormwater, earthworks and approvals.",
    audience: "Commercial developers, builders, architects, planners and project managers.",
    commonConstraints: ["Heavy vehicle access", "Parking compliance", "Stormwater quality", "Earthworks and levels", "Frontage works"],
    civilInputs: ["MCU engineering input", "Car parking and access review", "Stormwater design", "Detailed civil documentation", "Construction support"],
    relatedServices: ["material-change-of-use-engineering", "car-parking-planning-and-investigations", "detailed-civil-engineering-design-and-documentation"],
    relatedInsights: [
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
      "stormwater-management-plan-sunshine-coast-when-development-needs-one",
      "common-reasons-sunshine-coast-development-applications-get-delayed",
    ],
  },
  {
    slug: "driveway-access-engineering-sunshine-coast",
    title: "Driveway and Access Engineering Sunshine Coast",
    summary:
      "Engineering support for driveway grades, sight distance, second access points, swept paths, frontage works and vehicle movement issues.",
    primaryKeyword: "driveway access engineering Sunshine Coast",
    metaDescription:
      "Driveway and access engineering on the Sunshine Coast for sight distance, grades, swept paths, second driveways and frontage constraints.",
    audience: "Homeowners, designers, planners, developers and builders dealing with access constraints.",
    commonConstraints: ["Sight distance", "Driveway grade", "Crossover location", "Service vehicle movement", "Road frontage constraints"],
    civilInputs: ["Driveway review", "Sight distance assessment", "Swept path review", "Long section advice", "Council-response support"],
    relatedServices: ["sight-distance-assessments", "car-parking-planning-and-investigations", "civil-engineering-advice"],
    relatedInsights: [
      "driveway-design-on-the-sunshine-coast-what-a-civil-engineer-checks",
      "driveway-long-sections-and-cross-sections-explained",
      "swept-path-analysis-on-the-sunshine-coast-when-does-development-need-it",
    ],
  },
  {
    slug: "pre-purchase-development-site-due-diligence-sunshine-coast",
    title: "Pre-Purchase Development Site Due Diligence Sunshine Coast",
    summary:
      "Civil engineering due diligence for buyers assessing subdivision, townhouse, dual occupancy or commercial development potential before committing to a site.",
    primaryKeyword: "development site due diligence Sunshine Coast",
    metaDescription:
      "Civil engineering due diligence for Sunshine Coast development site buyers checking access, stormwater, services, slope, overlays and hidden civil costs.",
    audience: "Property buyers, developers, investors and planners screening a site before purchase or design commitment.",
    commonConstraints: ["Easements", "Stormwater discharge", "Slope", "Flood or overlay constraints", "Access and frontage limitations"],
    civilInputs: ["Site constraints review", "Civil risk notes", "Development feasibility advice", "Pre-purchase engineering questions", "Consultant coordination"],
    relatedServices: ["engineering-due-diligence", "civil-engineering-advice", "preliminary-civil-engineering-reporting-and-design"],
    relatedInsights: [
      "before-you-buy-a-development-site-civil-engineering-checks-that-matter",
      "subdivision-feasibility-checklist-for-sunshine-coast-property-buyers",
      "how-to-read-a-sunshine-coast-council-site-report",
    ],
  },
  {
    slug: "operational-works-civil-infrastructure-sunshine-coast",
    title: "Operational Works Civil Infrastructure Sunshine Coast",
    summary:
      "Civil engineering documentation and support for approval-conditioned infrastructure, road frontage works, stormwater, earthworks and construction readiness.",
    primaryKeyword: "operational works civil infrastructure Sunshine Coast",
    metaDescription:
      "Operational works civil infrastructure support on the Sunshine Coast for road frontage works, stormwater, earthworks and construction documentation.",
    audience: "Developers, planners, project managers and builders moving from approval conditions to construction documentation.",
    commonConstraints: ["Approval conditions", "Civil drawing requirements", "Stormwater details", "Earthworks", "Construction sequencing"],
    civilInputs: ["Operational works application support", "Detailed civil design", "RPEQ review", "Tender preparation", "Construction supervision"],
    relatedServices: ["operational-works-applications", "detailed-civil-engineering-design-and-documentation", "rpeq-certification"],
    relatedInsights: [
      "operational-works-approval-sunshine-coast-a-developers-guide",
      "common-reasons-sunshine-coast-development-applications-get-delayed",
      "plan-sealing-sunshine-coast-what-developers-need-to-know",
    ],
  },
];

export function getProjectType(slug: string) {
  return projectTypes.find((projectType) => projectType.slug === slug);
}
```

- [ ] **Step 3: Run typecheck**

Run:

```bash
npm run lint
```

Expected: no TypeScript or lint errors from the new data.

- [ ] **Step 4: Commit**

Run:

```bash
git add src/lib/site.ts
git commit -m "feat: add CivilCity project type SEO data"
```

## Task 3: Build Dynamic Project Type Pages

**Files:**
- Create: `src/app/projects/[slug]/page.tsx`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Create dynamic route**

Create `src/app/projects/[slug]/page.tsx` using the service page pattern:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getBlogPost, getProjectType, getService, projectTypes, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectTypes.map((projectType) => ({ slug: projectType.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projectType = getProjectType(slug);
  if (!projectType) return {};

  return {
    title: projectType.title,
    description: projectType.metaDescription,
    alternates: { canonical: `/projects/${projectType.slug}` },
    keywords: [
      projectType.primaryKeyword,
      "civil engineer Sunshine Coast",
      "Sunshine Coast development approvals",
      "CivilCity",
    ],
  };
}

export default async function ProjectTypePage({ params }: Props) {
  const { slug } = await params;
  const projectType = getProjectType(slug);
  if (!projectType) notFound();

  const relatedServices = projectType.relatedServices.map(getService).filter(Boolean);
  const relatedInsights = projectType.relatedInsights.map(getBlogPost).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: projectType.title,
    description: projectType.metaDescription,
    areaServed: "Sunshine Coast",
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.domain,
      email: site.email,
      telephone: site.phone,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="espresso-section section-pad">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Project type</p>
          <h1 className="hero-title mt-7">{projectType.title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-warm-cream/90">{projectType.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="pill-primary">
              Discuss this project
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/services" className="pill-ghost">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="cream-site-section section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2 className="mt-5 text-3xl font-normal tracking-[-0.03em] text-[#0d3b1e]">{projectType.audience}</h2>
          </div>
          <div className="site-card p-6">
            <p className="eyebrow">Common constraints</p>
            <ul className="mt-5 space-y-3">
              {projectType.commonConstraints.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-driftwood">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-amber-forge" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cream-site-section section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">CivilCity inputs</p>
            <ul className="mt-6 divide-y divide-[#0d3b1e]/20 border-y border-[#0d3b1e]/20">
              {projectType.civilInputs.map((item) => (
                <li key={item} className="py-4 text-[#0d3b1e]/72">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Related services</p>
            <div className="mt-6 grid gap-3">
              {relatedServices.map((service) => (
                <Link key={service!.slug} href={`/services/${service!.slug}`} className="site-card p-5">
                  <span className="text-lg font-normal text-warm-cream">{service!.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-driftwood">{service!.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="espresso-section section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Useful guides</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedInsights.map((post) => (
              <Link key={post!.slug} href={`/insights/${post!.slug}`} className="site-card p-5">
                <span className="text-lg font-normal text-warm-cream">{post!.title}</span>
                <span className="mt-2 block text-sm leading-6 text-driftwood">{post!.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Update projects index**

Modify `src/app/projects/page.tsx` so cards link to the new route slugs rather than static cards only.

- [ ] **Step 3: Add project routes to sitemap**

In `src/app/sitemap.ts`, import `projectTypes` and add:

```ts
const projectTypeRoutes = projectTypes.map((projectType) => `/projects/${projectType.slug}`);
```

Include `projectTypeRoutes` in the route list with priority `0.85`.

- [ ] **Step 4: Verify**

Run:

```bash
npm run lint
npm run build
```

Expected: build succeeds and all project type routes are generated.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/lib/site.ts src/app/projects src/app/sitemap.ts
git commit -m "feat: add CivilCity project type SEO pages"
```

## Task 4: Add Locality SEO Pages

**Files:**
- Modify: `src/lib/site.ts`
- Create: `src/app/locations/page.tsx`
- Create: `src/app/locations/[slug]/page.tsx`
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add `LocationPage` type and data**

Add six initial localities:

- Maroochydore.
- Buderim.
- Caloundra.
- Sippy Downs.
- Nambour.
- Palmview / Aura.

Each item must include:

- `slug`
- `title`
- `summary`
- `metaDescription`
- `localContext`
- `commonProjectTypes`
- `relatedServices`
- `relatedProjectTypes`

- [ ] **Step 2: Build locations index**

Create `/locations` as a quiet index page linking to all locality pages.

- [ ] **Step 3: Build dynamic location page**

Use a similar structure to project type pages:

- Hero.
- Local context.
- Common civil constraints.
- Related services.
- Related project types.
- Contact CTA.

- [ ] **Step 4: Add locality routes to sitemap**

Add location routes with priority `0.75`.

- [ ] **Step 5: Verify**

Run:

```bash
npm run lint
npm run build
```

- [ ] **Step 6: Commit**

Run:

```bash
git add src/lib/site.ts src/app/locations src/app/sitemap.ts
git commit -m "feat: add Sunshine Coast locality SEO pages"
```

## Task 5: Strengthen Existing Service Pages

**Files:**
- Modify: `src/app/services/[slug]/page.tsx`
- Modify: `src/lib/site.ts`

- [ ] **Step 1: Add "when to use this service" content**

Extend the `Service` type with:

```ts
bestFor: string[];
```

Populate this for the 10 highest-priority services.

- [ ] **Step 2: Render the section**

Add a section on service pages:

```tsx
<section className="cream-site-section section-pad">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <p className="eyebrow">When to use this service</p>
    <ul className="mt-6 grid gap-4 md:grid-cols-2">
      {service.bestFor.map((item) => (
        <li key={item} className="site-card p-5 text-sm leading-6 text-driftwood">{item}</li>
      ))}
    </ul>
  </div>
</section>
```

- [ ] **Step 3: Add internal links to project types**

Extend the `Service` type with:

```ts
relatedProjectTypes?: string[];
```

Render those links after related services.

- [ ] **Step 4: Verify**

Run:

```bash
npm run lint
npm run build
```

- [ ] **Step 5: Commit**

Run:

```bash
git add src/lib/site.ts 'src/app/services/[slug]/page.tsx'
git commit -m "feat: strengthen CivilCity service SEO pages"
```

## Task 6: Strengthen Insight Commercial Routing

**Files:**
- Modify: `src/lib/site.ts`
- Modify: `src/app/insights/[slug]/page.tsx`

- [ ] **Step 1: Add primary commercial destination to posts**

Extend `BlogPost` type with:

```ts
primaryServiceSlug?: string;
primaryProjectTypeSlug?: string;
```

Populate for all 30 existing posts.

- [ ] **Step 2: Replace generic final CTA**

Update the final CTA so each article can point to its relevant service or project type.

- [ ] **Step 3: Verify**

Run:

```bash
npm run lint
npm run build
```

- [ ] **Step 4: Commit**

Run:

```bash
git add src/lib/site.ts 'src/app/insights/[slug]/page.tsx'
git commit -m "feat: route CivilCity insights to commercial pages"
```

## Task 7: Tracking and Launch Checklist

**Files:**
- Create: `docs/seo-launch-checklist.md`

- [ ] **Step 1: Create checklist**

Add:

```markdown
# CivilCity SEO Launch Checklist

## Analytics

- [ ] GA4 installed.
- [ ] Google Search Console property verified.
- [ ] Sitemap submitted.
- [ ] Form submission conversion tracked.
- [ ] Phone click conversion tracked.
- [ ] Email click conversion tracked.

## Indexing

- [ ] Homepage inspected.
- [ ] Services index inspected.
- [ ] Top 10 service pages inspected.
- [ ] Project type pages inspected.
- [ ] Location pages inspected.

## Local SEO

- [ ] Google Business Profile created or claimed.
- [ ] Name, address/service area, phone and website consistent.
- [ ] Services added to GBP.
- [ ] Opening hours added if relevant.
- [ ] Review request process drafted.

## Content QA

- [ ] RPEQ wording reviewed.
- [ ] No fake case studies.
- [ ] No unsupported accreditation claims.
- [ ] No thin locality pages.
- [ ] All new pages have internal links.
- [ ] All new pages have one clear CTA.
```

- [ ] **Step 2: Commit**

Run:

```bash
git add docs/seo-launch-checklist.md
git commit -m "docs: add CivilCity SEO launch checklist"
```

## Task 8: Final Verification

**Files:**
- No new files.

- [ ] **Step 1: Run final checks**

Run:

```bash
npm run lint
npm run build
git status --short
```

Expected:

- Lint passes.
- Build passes.
- Git status is clean after commits.

- [ ] **Step 2: Manual QA**

Open locally and check:

```bash
npm run dev
```

Review:

- `/projects`
- `/projects/subdivision-engineering-sunshine-coast`
- `/locations`
- `/locations/maroochydore-civil-engineer`
- `/services/operational-works-applications`
- One insight page with commercial CTA.

- [ ] **Step 3: Ship summary**

Report:

- New pages created.
- Existing pages strengthened.
- Verification commands and results.
- Any remaining setup that must happen outside the repo, especially GA4, GSC and Google Business Profile.

