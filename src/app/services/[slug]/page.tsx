import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, CheckCircle2, ClipboardList, DraftingCompass, Map } from "lucide-react";
import { getService, imagery, serviceImageBySlug, services, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} Sunshine Coast`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    keywords: [
      service.primaryKeyword,
      ...service.secondaryKeywords,
      "CivilCity",
      "civil engineer Sunshine Coast",
      "Sunshine Coast development approvals",
    ],
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter(Boolean);
  const image = serviceImageBySlug[service.slug] ?? imagery.field;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.domain}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${site.domain}/services/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    areaServed: ["Sunshine Coast", "Noosa", "Moreton Bay", "South East Queensland"],
    serviceType: service.primaryKeyword,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.domain,
      email: site.email,
      areaServed: site.region,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} scope`,
      itemListElement: service.deliverables.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, serviceSchema]) }}
      />
      <section className="relative min-h-[100dvh] overflow-hidden bg-espresso">
        <Image
          src={image}
          alt={`${service.title} project context`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/82 via-espresso/42 to-espresso/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-transparent to-midnight-cocoa/88" />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col px-4 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-14 lg:pt-20">
            <p className="eyebrow inline-flex items-center gap-2">
              <Map size={16} aria-hidden />
              {service.eyebrow}
            </p>
            <h1 className="hero-title mt-7 max-w-4xl">
              {service.title} on the Sunshine Coast
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-warm-cream/90">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/contact?service=${service.slug}`}
                className="pill-primary"
              >
                Enquire about this service
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/services" className="pill-ghost">
                All services
              </Link>
            </div>
          </div>

          <div className="relative left-1/2 mt-auto w-[100dvw] -translate-x-1/2">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="max-w-3xl text-3xl font-normal tracking-[-0.02em] text-warm-cream sm:text-4xl">
                Practical engineering support from first advice to approval.
              </h2>
            </div>
            <div className="mt-5 border-y border-warm-cream/24 bg-midnight-cocoa/18 backdrop-blur-[1px]">
              <div className="grid md:grid-cols-3">
                {[
                  {
                    icon: ClipboardList,
                    title: "Clear scope",
                    body: "Defined civil inputs, deliverables and approval responsibilities from the start.",
                  },
                  {
                    icon: DraftingCompass,
                    title: "Design coordination",
                    body: "Roads, access, drainage and earthworks coordinated with the wider consultant team.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "RPEQ review",
                    body: "Queensland engineering assurance where certification or professional review is required.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-warm-cream/20 px-4 py-6 sm:px-6 md:border-r md:px-8 md:last:border-r-0 lg:px-12">
                    <span className="icon-ring h-12 w-12 border-warm-cream/35 text-warm-cream">
                      <item.icon size={22} strokeWidth={1.8} aria-hidden />
                    </span>
                    <h3 className="mt-12 text-xl font-normal tracking-[-0.02em] text-amber-forge md:mt-16">
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

      <section className="cream-site-section section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.76fr_1fr] lg:px-8">
          <aside className="site-card overflow-hidden">
            <div className="relative min-h-[360px]">
              <Image
                src={image}
                alt={`${service.title} project context`}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="image-muted object-cover"
              />
            </div>
          </aside>
          <div className="self-center">
            <div className="site-card p-6">
              <p className="eyebrow">Sunshine Coast approval context</p>
              <p className="mt-3 text-sm leading-6 text-warm-cream">{service.approvalContext}</p>
              <div className="mt-6 h-px bg-charcoal" />
              <p className="mt-6 text-sm leading-6 text-driftwood">
                Best suited for developers, planners, architects, builders and project managers
                working through material change of use, reconfiguration of a lot, operational works,
                civil design or construction-phase delivery tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cream-site-section section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">Scope</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.45rem)] font-normal leading-[1.08] tracking-[-0.008em] text-[#0d3b1e]">Typical deliverables</h2>
            <ul className="mt-8 divide-y divide-[#0d3b1e]/20 border-y border-[#0d3b1e]/20">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-[#0d3b1e]/72">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#2e7d32]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Outcome</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.45rem)] font-normal leading-[1.08] tracking-[-0.008em] text-[#0d3b1e]">Project outcomes</h2>
            <ul className="mt-8 divide-y divide-[#0d3b1e]/20 border-y border-[#0d3b1e]/20">
              {service.outcomes.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-[#0d3b1e]/72">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#2e7d32]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="espresso-section section-pad border-y border-walnut">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-5">Questions clients ask</h2>
          <div className="mt-8 grid gap-4">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="site-card p-5">
                <summary className="cursor-pointer text-base font-medium text-warm-cream">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-driftwood">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="cream-site-section section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Next</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4.2vw,3.45rem)] font-normal leading-[1.08] tracking-[-0.008em] text-[#0d3b1e]">Related services</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item!.slug}
                  href={`/services/${item!.slug}`}
                  className="site-card p-5 transition hover:border-amber-forge/70"
                >
                  <p className="eyebrow">{item!.eyebrow}</p>
                  <h3 className="mt-4 text-lg font-medium text-warm-cream">{item!.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-driftwood">{item!.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
