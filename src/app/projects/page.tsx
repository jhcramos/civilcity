import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ClipboardCheck, Home, Landmark, Route } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { imagery, projectTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Types",
  description:
    "CivilCity supports subdivisions, infill development, commercial sites, mixed-use projects and construction-phase civil works.",
  alternates: { canonical: "/projects" },
};

const projectVisuals: Record<string, { icon: typeof Home; image: string }> = {
  "subdivision-engineering-sunshine-coast": {
    icon: Home,
    image: "/project-type-subdivision-infill.webp",
  },
  "townhouse-development-engineering-sunshine-coast": {
    icon: Building2,
    image: "/contact-hero-townhouses.webp",
  },
  "dual-occupancy-secondary-dwelling-engineering-sunshine-coast": {
    icon: Home,
    image: "/insight-original-small-lot-housing.webp",
  },
  "commercial-industrial-civil-engineering-sunshine-coast": {
    icon: Building2,
    image: "/project-type-commercial-industrial.webp",
  },
  "driveway-access-engineering-sunshine-coast": {
    icon: Route,
    image: "/project-type-road-access.webp",
  },
  "pre-purchase-development-site-due-diligence-sunshine-coast": {
    icon: ClipboardCheck,
    image: "/insight-due-diligence-development-site-selection.webp",
  },
  "operational-works-civil-infrastructure-sunshine-coast": {
    icon: Landmark,
    image: "/project-type-conditioned-infrastructure.webp",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project types"
        title="Civil engineering support for Sunshine Coast development sites."
        copy="From infill subdivisions to commercial frontage works, CivilCity Engineering Consultants helps project teams understand constraints, coordinate approvals and move civil works toward construction."
        image={imagery.hero}
        imageAlt="Sunshine Coast subdivision and civil infrastructure"
        ctaLabel="Discuss your site"
        secondaryLabel="View services"
        secondaryHref="/services"
        statement="The right civil input depends on the site, stage and approval pathway."
        cards={[
          {
            icon: Home,
            title: "Subdivision and infill",
            body: "Access, stormwater, levels, servicing and operational works input for compact sites.",
          },
          {
            icon: Building2,
            title: "Commercial and industrial",
            body: "Civil coordination for parking, vehicle movement, earthworks and approval conditions.",
          },
          {
            icon: ClipboardCheck,
            title: "Delivery support",
            body: "Tender, construction supervision and contract input once the project moves to site.",
          },
        ]}
      />
      <section className="cream-site-section section-pad">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {projectTypes.map((item) => {
            const visual = projectVisuals[item.slug] ?? projectVisuals["subdivision-engineering-sunshine-coast"];
            const Icon = visual.icon;

            return (
            <Link key={item.slug} href={`/projects/${item.slug}`} className="site-card group">
              <div className="relative aspect-[16/9]">
                <Image
                  src={visual.image}
                  alt={`${item.title} visual`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="image-muted object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Icon size={26} className="text-amber-forge" aria-hidden />
                <h2 className="mt-5 text-xl font-normal tracking-[-0.03em] text-carbon-vellum">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-ash">{item.summary}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-forge">
                  View project type <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          )})}
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/contact" className="pill-primary">
            Discuss your project type
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
