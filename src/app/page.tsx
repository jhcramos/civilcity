import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  FileText,
  Ruler,
  Waves,
} from "lucide-react";
import { blogPosts, imagery, services, site } from "@/lib/site";

const priorityServices = [
  "civil-engineering-advice",
  "preliminary-civil-engineering-reporting-and-design",
  "detailed-civil-engineering-design-and-documentation",
  "operational-works-applications",
  "rpeq-certification",
  "stormwater-drainage-design",
];

const phases = [
  ["01", "Advice", "Feasibility checks, project constraints and early civil input."],
  ["02", "Planning", "Engineering input for material change of use and reconfiguration of a lot applications."],
  ["03", "Approval", "Operational works packages, council responses and RPEQ certification."],
  ["04", "Construction", "Tender support, contract administration and site-phase input."],
];

export default function Home() {
  const shownServices = priorityServices
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.domain,
    email: site.email,
    telephone: site.phone,
    areaServed: site.region,
    description: site.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative min-h-[100dvh] overflow-hidden bg-espresso">
        <Image
          src={imagery.hero}
          alt="Blue sky subdivision development with roads, lots and civil infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/78 via-espresso/36 to-espresso/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-transparent to-midnight-cocoa/84" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-espresso/45 to-transparent" />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-[1200px] flex-col px-4 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-[1100px] pt-16 lg:pt-24">
            <h1 className="hero-title max-w-[1100px]">
              Sunshine Coast civil engineering <span className="lg:block">from concept to delivery.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-warm-cream/90">
              CivilCity helps developers, planners and project teams create value on Sunshine Coast
              subdivisions, material change of use applications, industrial sites and commercial
              projects through early feasibility, planning-stage engineering, civil design,
              approvals, construction support and RPEQ review.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="amber-pill">
                Discuss a project
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/services" className="cream-pill">
                View services
              </Link>
            </div>
          </div>

          <div className="relative left-1/2 mt-auto w-[100dvw] -translate-x-1/2">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
              <h2 className="max-w-3xl text-3xl font-normal tracking-[-0.02em] text-warm-cream sm:text-4xl">
                Built for clearer decisions. Focused on project value.
              </h2>
            </div>
            <div className="mt-5 border-y border-warm-cream/24 bg-midnight-cocoa/18 backdrop-blur-[1px]">
              <div className="grid md:grid-cols-3">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "Value-led advice",
                    body: "Early civil input for MCU, ROL, feasibility, planning conditions and development strategy.",
                  },
                  {
                    icon: DraftingCompass,
                    title: "Subdivision design",
                    body: "Roads, access, stormwater and earthworks coordinated for development sites.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "RPEQ assurance",
                    body: "Registered engineering review and certification where Queensland projects require it.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-warm-cream/20 px-4 py-6 sm:px-6 md:border-r md:px-8 md:last:border-r-0 lg:px-12">
                    <span className="icon-ring h-12 w-12 border-warm-cream/35 text-warm-cream">
                      <item.icon size={22} strokeWidth={1.8} aria-hidden />
                    </span>
                    <h3 className="mt-16 text-xl font-normal tracking-[-0.02em] text-amber-forge md:mt-20">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-warm-cream/88">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#fff1e0] text-[#0d3b1e]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.42fr_1fr] lg:px-8">
          <div>
            <p className="text-xs font-medium tracking-[0.01em] text-[#2e7d32]">Services</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.45rem)] font-normal leading-[1.08] tracking-[-0.008em] text-[#0d3b1e]">
              The same civil needs developers search for, organised clearly.
            </h2>
          </div>
          <div className="divide-y divide-[#0d3b1e]/20 border-y border-[#0d3b1e]/20">
            {shownServices.map((service, index) => (
              <Link
                key={service!.slug}
                href={`/services/${service!.slug}`}
                className="group grid gap-4 py-7 transition sm:grid-cols-[72px_1fr_auto]"
              >
                <span className="font-mono text-sm text-[#0d3b1e]/45">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-2xl font-normal tracking-[-0.02em] text-[#0d3b1e]">
                    {service!.title}
                  </span>
                  <span className="mt-3 block max-w-2xl text-sm leading-6 text-[#0d3b1e]/65">
                    {service!.summary}
                  </span>
                </span>
                <span className="hidden items-center text-[#2e7d32] transition group-hover:translate-x-1 sm:flex">
                  <ArrowRight size={18} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-civil-band section-pad min-h-[720px] text-warm-cream">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1fr] lg:px-8">
          <div className="self-end pb-8">
            <p className="eyebrow">Approval pathway</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,5.8vw,5rem)] font-normal leading-[0.96] tracking-[-0.018em] text-warm-cream">
              From feasibility to construction-ready civil works.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="amber-pill">
                Talk through the site
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/services/operational-works-applications" className="cream-pill">
                Planning applications
              </Link>
            </div>
          </div>
          <div className="self-end border-y border-warm-cream/24 bg-midnight-cocoa/18">
            {phases.map(([number, title, body]) => (
              <div key={title} className="grid grid-cols-[64px_1fr] gap-4 border-b border-warm-cream/18 px-4 py-5 last:border-b-0 sm:px-6">
                <span className="font-mono text-sm text-amber-forge">{number}</span>
                <span>
                  <span className="block text-xl font-normal tracking-[-0.02em] text-warm-cream">{title}</span>
                  <span className="mt-1 block max-w-xl text-sm leading-6 text-warm-cream/76">{body}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight-cocoa px-4 py-20 text-warm-cream sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
            <p className="eyebrow">Project control</p>
            <h2 className="section-title mt-5">
              The work feels calmer when constraints are visible early.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-driftwood">
              CivilCity helps surface the practical issues that shape approvals: access, stormwater,
              earthworks, servicing, RPEQ review and documentation timing.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
              {["Early risk notes", "Council condition focus", "RPEQ-led review", "Construction handover"].map((item) => (
                <div key={item} className="border-t border-walnut pt-4 text-sm text-warm-cream">
                  <CheckCircle2 size={17} className="mb-3 text-amber-forge" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6efe4] text-[#0d3b1e]">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: Ruler,
              title: "Approval-ready drawings",
              body: "Civil plans, calculations and RPEQ-ready documentation shaped around council conditions, tender pricing and buildability.",
            },
            {
              icon: Waves,
              title: "Stormwater strategy",
              body: "Drainage layouts, runoff pathways, detention thinking and water-sensitive decisions resolved before they force redesign.",
            },
            {
              icon: FileText,
              title: "Planning application support",
              body: "Civil input for material change of use, reconfiguration of a lot, operational works responses and certification steps.",
            },
          ].map((item) => (
            <div key={item.title} className="border-b border-[#0d3b1e]/20 py-3">
              <span className="icon-ring h-12 w-12 border-[#0d3b1e]/55 bg-[#0d3b1e] text-[#fff1e0]"><item.icon size={20} strokeWidth={1.9} aria-hidden /></span>
              <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-[#0d3b1e]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#0d3b1e]/68">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="parallax-plan-band section-pad text-warm-cream">
        <div className="mx-auto grid min-h-[680px] max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_0.88fr] lg:items-end lg:px-8">
          <div className="self-center lg:pb-12">
            <p className="eyebrow">How we help</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,5.8vw,5rem)] font-normal leading-[0.96] tracking-[-0.018em] text-warm-cream">
              Clear civil input at the points where projects usually slow down.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-warm-cream/78">
              Practical drawings, technical notes and staged advice for developers and consultant teams
              who need earthworks, stormwater, access and approvals to keep moving.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/detailed-civil-engineering-design-and-documentation" className="amber-pill">
                Design support
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/services/construction-supervision" className="cream-pill">
                Construction phase
              </Link>
            </div>
          </div>
          <div className="self-end border-y border-warm-cream/24 bg-midnight-cocoa/24">
            {[
              ["01", "Earthworks and levels", "Civil design decisions that shape pads, roads, drainage and constructability."],
              ["02", "Stormwater coordination", "Runoff, detention and overland flow thinking carried through documentation."],
              ["03", "Approval documentation", "MCU, ROL, operational works and RPEQ review aligned with project timing."],
            ].map(([number, title, body]) => (
              <div key={title} className="grid grid-cols-[64px_1fr] gap-4 border-b border-warm-cream/18 px-4 py-6 last:border-b-0 sm:px-6">
                <span className="font-mono text-sm text-amber-forge">{number}</span>
                <span>
                  <span className="block text-xl font-normal tracking-[-0.02em] text-warm-cream">{title}</span>
                  <span className="mt-2 block max-w-xl text-sm leading-6 text-warm-cream/76">{body}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="espresso-section section-pad">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="section-title mt-5">Practical notes for planning and approval decisions.</h2>
          </div>
          <div className="divide-y divide-walnut border-y border-walnut">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group grid gap-4 py-6 sm:grid-cols-[140px_1fr_auto]">
                <span className="eyebrow">{post.category}</span>
                <span>
                  <span className="block text-xl font-normal tracking-[-0.02em] text-warm-cream">
                    {post.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-driftwood">{post.description}</span>
                </span>
                <span className="hidden items-center text-amber-forge transition group-hover:translate-x-1 sm:flex">
                  <ArrowRight size={18} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-walnut bg-midnight-cocoa px-4 py-14 text-warm-cream sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl font-normal tracking-[-0.04em]">Need civil input on a Sunshine Coast project?</h2>
            <p className="mt-2 text-driftwood">Send the project location, stage and approval issue.</p>
          </div>
          <Link href="/contact" className="amber-pill">
            Start an enquiry
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
