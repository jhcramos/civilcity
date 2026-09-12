import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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
    serviceType: projectType.primaryKeyword,
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
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-amber-forge">
            <ArrowLeft size={16} aria-hidden />
            Project types
          </Link>
          <p className="eyebrow mt-8">Sunshine Coast civil engineering</p>
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
            <h2 className="mt-5 text-3xl font-normal tracking-[-0.03em] text-[#0d3b1e]">
              {projectType.audience}
            </h2>
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
                <li key={item} className="flex gap-3 py-4 text-[#0d3b1e]/72">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#2e7d32]" aria-hidden />
                  <span>{item}</span>
                </li>
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
          <h2 className="section-title mt-5">Practical context before the project moves too far.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
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
