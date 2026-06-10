import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    keywords: [service.primaryKeyword, "CivilCity", "civil engineer Sunshine Coast"],
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />
      <section className="border-b border-slate-200 bg-ivory px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-stretch">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-graphite sm:text-5xl">
              {service.title} on the Sunshine Coast
            </h1>
            <p className="lede mt-5 max-w-3xl text-slate-700">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/contact?service=${service.slug}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-teal px-5 text-sm font-semibold text-white transition hover:bg-graphite"
              >
                Enquire about this service
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal"
              >
                All services
              </Link>
            </div>
          </div>
          <aside className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] min-h-[320px]">
              <Image
                src={image}
                alt={`${service.title} project context`}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-teal">Primary SEO focus</p>
              <p className="mt-2 font-mono text-sm text-slate-700">{service.primaryKeyword}</p>
              <div className="mt-6 h-px bg-slate-200" />
              <p className="mt-6 text-sm leading-6 text-slate-600">
                Best suited for developers, planners, architects, builders and project managers
                working through civil approval or delivery tasks.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-graphite">Typical deliverables</h2>
            <ul className="mt-6 grid gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-teal" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-graphite">Project outcomes</h2>
            <ul className="mt-6 grid gap-3">
              {service.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-teal" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-slate-200 bg-ivory">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-normal text-graphite">Questions clients ask</h2>
          <div className="mt-8 grid gap-4">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="rounded-md border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer text-base font-semibold text-graphite">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-normal text-graphite">Related services</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item!.slug}
                  href={`/services/${item!.slug}`}
                  className="rounded-md border border-slate-200 bg-ivory p-5 transition hover:border-teal/40 hover:bg-white"
                >
                  <p className="text-sm font-semibold text-teal">{item!.eyebrow}</p>
                  <h3 className="mt-2 text-lg font-semibold text-graphite">{item!.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item!.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
