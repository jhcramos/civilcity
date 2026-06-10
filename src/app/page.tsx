import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSearch,
  Map,
  Waves,
} from "lucide-react";
import { blogPosts, imagery, services, site } from "@/lib/site";

const featuredServices = [
  "operational-works-applications",
  "rpeq-certification",
  "stormwater-drainage-design",
  "engineering-due-diligence",
  "detailed-civil-engineering-design-and-documentation",
  "construction-supervision",
];

const workflow = [
  {
    title: "Feasibility",
    body: "Identify access, stormwater, servicing and approval risks before decisions harden.",
  },
  {
    title: "Approval",
    body: "Prepare coordinated civil documentation for planning and operational works pathways.",
  },
  {
    title: "Delivery",
    body: "Support tendering, construction queries, inspections and practical completion evidence.",
  },
];

export default function Home() {
  const shownServices = featuredServices
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative min-h-[760px] overflow-hidden bg-graphite text-white">
        <Image
          src={imagery.hero}
          alt="Civil construction site with infrastructure works underway"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/78 to-graphite/18" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-graphite to-transparent" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <p className="mb-5 inline-flex w-fit items-center gap-2 border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold text-aqua backdrop-blur">
            <Map size={16} aria-hidden />
            Sunshine Coast civil engineering consultancy
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-7xl">
            Civil engineering for approvals, design and delivery.
          </h1>
          <p className="lede mt-6 max-w-2xl text-slate-100">
            CivilCity helps developers, planners and project teams move from feasibility to
            construction with RPEQ-led civil engineering, operational works support, stormwater
            design and practical project advice.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 bg-aqua px-5 text-sm font-semibold text-graphite transition hover:bg-white"
            >
              Discuss a project
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-graphite"
            >
              View services
            </Link>
          </div>
          <div className="mt-12 grid gap-3 border-t border-white/20 pt-6 text-sm text-slate-100 sm:grid-cols-3">
            {["RPEQ-led certification", "Developer and planner focused", "Sunshine Coast and SEQ"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-aqua" aria-hidden />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Project context</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-graphite sm:text-4xl">
                Built around the real work: sites, drawings, approvals and construction.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700">
              The visual language now leans on infrastructure and development imagery rather than
              abstract interface shapes, so CivilCity feels like a grounded engineering consultancy
              from the first screen.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              ["Design documentation", imagery.plans, "Drawings, levels, drainage and access coordination."],
              ["Site delivery", imagery.construction, "Civil construction support and practical inspection input."],
              ["Local development", imagery.coast, "Sunshine Coast context for feasibility and approval strategy."],
            ].map(([title, src, body]) => (
              <figure key={title} className="group overflow-hidden border border-slate-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt={`${title} visual`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <figcaption className="p-5">
                  <h3 className="text-lg font-semibold text-graphite">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-slate-200 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Core services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-graphite sm:text-4xl">
              The civil support developers need before projects stall.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shownServices.map((service) => (
              <Link
                key={service!.slug}
                href={`/services/${service!.slug}`}
                className="group border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-teal">{service!.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold text-graphite">{service!.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service!.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  Learn more
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-slate-200 bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Project pathway</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-graphite">
              From feasibility to construction, with fewer blind spots.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map((step, index) => (
              <div key={step.title} className="rounded-md border border-slate-200 bg-white p-5">
                <span className="font-mono text-sm text-teal">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-graphite">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: BadgeCheck,
              title: "RPEQ-first credibility",
              body: "Launch copy uses truthful RPEQ positioning and avoids Unitywater accreditation claims until separately verified.",
            },
            {
              icon: ClipboardCheck,
              title: "Approval-aware documentation",
              body: "Service pages are built around real project triggers: operational works, conditions, stormwater, access and construction support.",
            },
            {
              icon: Compass,
              title: "Local search focus",
              body: "Content targets Sunshine Coast, Noosa, Moreton Bay and SEQ searches with unique pages for high-intent services.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-teal/10 text-teal">
                <item.icon size={22} aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-graphite">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-graphite text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua">Insights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              SEO-ready guidance for the questions clients already search.
            </h2>
            <p className="mt-5 text-slate-300">
              The blog launches with approval, RPEQ, stormwater, due diligence and construction
              topics so CivilCity can start building local search authority immediately.
            </p>
          </div>
          <div className="grid gap-4">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-md border border-white/10 bg-white/5 p-5 transition hover:border-aqua/50"
              >
                <div className="flex items-center gap-2 text-sm text-aqua">
                  {post.category === "Stormwater" ? <Waves size={16} /> : <FileSearch size={16} />}
                  {post.category}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Need civil input on a Sunshine Coast project?</h2>
            <p className="mt-2 text-white/80">Send the project location, stage and approval issue.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-teal transition hover:bg-ivory"
          >
            Start an enquiry
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
