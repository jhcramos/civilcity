import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Landmark,
  MapPinned,
  Route,
  UsersRound,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "CivilCity Engineering Consultants is a Sunshine Coast civil engineering consultancy with experienced engineers and council-side perspective from Australia and New Zealand.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const values = [
    {
      icon: BadgeCheck,
      title: "Experienced engineering judgement",
      body: "Senior civil engineering input for feasibility, planning applications, operational works, design documentation and construction support.",
    },
    {
      icon: Landmark,
      title: "Council-side perspective",
      body: "Experience includes local government and council environments in Australia and New Zealand, helping project teams understand how approvals are assessed.",
    },
    {
      icon: UsersRound,
      title: "Developer and planner friendly",
      body: "Advice is shaped for developers, town planners, architects, surveyors, builders and project managers who need clear civil input at the right time.",
    },
  ];

  const proofPoints = [
    {
      icon: MapPinned,
      title: "Local development focus",
      body: "Sunshine Coast, Noosa, Moreton Bay and SEQ projects where access, stormwater, earthworks, servicing and conditions influence value.",
    },
    {
      icon: Route,
      title: "From concept to delivery",
      body: "Support can start before lodgement and continue through detailed design, operational works, tendering and construction-phase decisions.",
    },
    {
      icon: Building2,
      title: "Public and private experience",
      body: "The team brings experience across private development work and council-facing engineering processes in Australia and New Zealand.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About CivilCity"
        title="Experienced civil engineering for development value."
        copy="CivilCity Engineering Consultants helps Sunshine Coast project teams make better civil decisions from feasibility through approvals, design and construction delivery."
        image="/service-hero-advice-office-plans.webp"
        imageAlt="Civil engineers reviewing subdivision development plans for a Sunshine Coast project"
        ctaLabel="Discuss a project"
        secondaryLabel="View services"
        secondaryHref="/services"
        statement="Council-aware advice. Practical design. Clear delivery."
        cards={[
          {
            icon: ClipboardCheck,
            title: "Approval strategy",
            body: "Civil constraints identified early for MCU, ROL, operational works and condition responses.",
          },
          {
            icon: DraftingCompass,
            title: "Design coordination",
            body: "Roads, access, stormwater, earthworks and servicing coordinated with the project team.",
          },
          {
            icon: BadgeCheck,
            title: "Professional assurance",
            body: "RPEQ-led review and practical engineering judgement where Queensland projects require it.",
          },
        ]}
      />
      <section className="cream-site-section section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">Why CivilCity</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.45rem)] font-normal leading-[1.08] tracking-[-0.008em] text-[#0d3b1e]">
              Built for approvals, but focused on project value.
            </h2>
            <p className="mt-6 leading-7 text-[#0d3b1e]/70">
              CivilCity brings practical civil engineering judgement to the moments where development
              projects usually gain or lose value: site due diligence, planning application strategy,
              council information requests, operational works conditions, tender clarity and construction
              handover.
            </p>
            <p className="mt-4 leading-7 text-[#0d3b1e]/70">
              The team combines private development engineering with local government and council-side
              experience in Australia and New Zealand. That matters because strong civil advice needs to
              be technically sound, commercially useful and easy for approval stakeholders to assess.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {values.map((item) => (
              <div key={item.title} className="feature-column">
                <item.icon size={24} className="text-iris-glow" aria-hidden />
                <h3 className="mt-5 text-lg font-medium text-[#0d3b1e]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#0d3b1e]/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#0b0600] text-warm-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.42fr_1fr] lg:px-8">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.45rem)] font-normal leading-[1.08] tracking-[-0.008em]">
              Practical knowledge from both sides of the approval table.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {proofPoints.map((item) => (
              <article key={item.title} className="border-t border-walnut pt-6">
                <item.icon size={24} className="text-amber-forge" aria-hidden />
                <h3 className="mt-5 text-xl font-normal tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-driftwood">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
