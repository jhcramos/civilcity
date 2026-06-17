import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { blogPosts, getBlogImage, getBlogPost, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { "@type": "Organization", name: site.name },
      publisher: { "@type": "Organization", name: site.name },
      mainEntityOfPage: `${site.domain}/insights/${post.slug}`,
      keywords: post.keywords.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article>
        <header className="relative min-h-[86dvh] overflow-hidden bg-espresso">
          <Image
            src={getBlogImage(post.category)}
            alt={`${post.title} visual`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/86 via-espresso/48 to-espresso/0" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/16 via-transparent to-midnight-cocoa/88" />
          <div className="relative mx-auto flex min-h-[86dvh] max-w-[1200px] flex-col px-4 pt-28 sm:px-6 lg:px-8">
            <div className="max-w-4xl pt-12 lg:pt-20">
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-iris-glow">
                <ArrowLeft size={16} aria-hidden />
                Insights
              </Link>
              <p className="eyebrow mt-8 inline-flex items-center gap-2">
                <CalendarDays size={16} aria-hidden />
                {post.category} - {new Intl.DateTimeFormat("en-AU", { dateStyle: "long" }).format(new Date(post.date))}
              </p>
              <h1 className="hero-title mt-7">{post.title}</h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-warm-cream/90">{post.description}</p>
            </div>
          </div>
        </header>
        <div className="cosmic-soft px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-normal tracking-[-0.03em] text-carbon-vellum">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-ash">{section.body}</p>
                </section>
              ))}
            </div>
            <section className="violet-frame mt-12 p-6">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 text-2xl font-normal tracking-[-0.03em] text-carbon-vellum">
                Common question
              </h2>
              {post.faqs.map((faq) => (
                <div key={faq.question} className="mt-5">
                  <h3 className="font-medium text-carbon-vellum">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-ash">{faq.answer}</p>
                </div>
              ))}
            </section>
            <div className="mt-12 border-t border-charcoal pt-10 text-carbon-vellum">
              <h2 className="text-2xl font-normal tracking-[-0.03em]">Need project-specific civil advice?</h2>
              <p className="mt-2 text-ash">
                Send CivilCity the project location, approval stage and the issue you need resolved.
              </p>
              <Link href="/contact" className="pill-primary mt-5">
                Contact CivilCity
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
