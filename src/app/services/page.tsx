import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, DraftingCompass } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { imagery, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Civil Engineering Services Sunshine Coast",
  description:
    "CivilCity services include civil engineering advice, preliminary and detailed design, operational works applications, RPEQ certification, stormwater design and construction support.",
  alternates: { canonical: "/services" },
};

const serviceGroups = [
  {
    title: "Advice and feasibility",
    slugs: [
      "civil-engineering-advice",
      "engineering-due-diligence",
      "preliminary-civil-engineering-reporting-and-design",
      "material-change-of-use-engineering",
      "reconfiguration-of-a-lot-engineering",
      "fast-track-engineering-support",
    ],
  },
  {
    title: "Design and approvals",
    slugs: [
      "detailed-civil-engineering-design-and-documentation",
      "operational-works-applications",
      "rpeq-certification",
      "stormwater-drainage-design",
      "erosion-and-sediment-control-design-and-inspections",
    ],
  },
  {
    title: "Access and delivery",
    slugs: [
      "car-parking-planning-and-investigations",
      "sight-distance-assessments",
      "tender-preparation-and-assessment",
      "contract-administration",
      "project-management",
      "construction-supervision",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Civil engineering services from concept to delivery."
        copy={`CivilCity Engineering Consultants provides engineering advice, preliminary and detailed design, planning and operational works support, RPEQ review and practical delivery support across ${site.region}.`}
        image={imagery.construction}
        imageAlt="Bulldozer carrying out earthworks on a civil development site"
        ctaLabel="Talk through your project"
        secondaryLabel="View project types"
        secondaryHref="/projects"
        statement="Advice, design and delivery support organised around how projects actually move."
        cards={[
          {
            icon: ClipboardCheck,
            title: "Feasibility and planning",
            body: "Civil input for site constraints, MCU, ROL and approval strategy.",
          },
          {
            icon: DraftingCompass,
            title: "Design and approvals",
            body: "Roads, access, stormwater, earthworks and operational works documentation.",
          },
          {
            icon: BadgeCheck,
            title: "Delivery assurance",
            body: "RPEQ review, tender support, contract administration and construction supervision.",
          },
        ]}
      />

      <section className="cream-site-section section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {serviceGroups.map((group) => {
              const groupServices = group.slugs
                .map((slug) => services.find((service) => service.slug === slug))
                .filter(Boolean);

              return (
                <section key={group.title} className="grid gap-8 lg:grid-cols-[0.38fr_1fr]">
                  <div>
                    <p className="eyebrow">Capability</p>
                    <h2 className="mt-5 text-3xl font-normal tracking-[-0.04em] text-[#0d3b1e]">
                      {group.title}
                    </h2>
                  </div>
                  <div className="divide-y divide-[#0d3b1e]/20 border-y border-[#0d3b1e]/20">
                    {groupServices.map((service, index) => (
                      <Link
                        key={service!.slug}
                        href={`/services/${service!.slug}`}
                        className="group grid gap-4 py-6 sm:grid-cols-[64px_1fr_auto]"
                      >
                        <span className="font-mono text-sm text-[#0d3b1e]/45">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block text-xl font-normal tracking-[-0.03em] text-[#0d3b1e]">
                            {service!.title}
                          </span>
                          <span className="mt-2 block max-w-3xl text-sm leading-6 text-[#0d3b1e]/65">
                            {service!.summary}
                          </span>
                        </span>
                        <span className="hidden items-center text-[#2e7d32] transition group-hover:translate-x-1 sm:flex">
                          <ArrowRight size={18} aria-hidden />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
