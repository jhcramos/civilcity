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
    alternates: { canonical: `/blog/${post.slug}` },
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
      mainEntityOfPage: `${site.domain}/blog/${post.slug}`,
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
        <header className="border-b border-slate-200 bg-ivory px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
            <div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
              <ArrowLeft size={16} aria-hidden />
              Insights
              </Link>
              <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                <CalendarDays size={16} aria-hidden />
                {post.category} · {new Intl.DateTimeFormat("en-AU", { dateStyle: "long" }).format(new Date(post.date))}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-normal text-graphite sm:text-5xl">
                {post.title}
              </h1>
              <p className="lede mt-5 text-slate-700">{post.description}</p>
            </div>
            <div className="relative min-h-[340px] overflow-hidden border border-slate-200 bg-white">
              <Image
                src={getBlogImage(post.category)}
                alt={`${post.title} visual`}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-normal text-graphite">{section.heading}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>
          <section className="mt-12 rounded-md border border-slate-200 bg-ivory p-6">
            <h2 className="text-2xl font-semibold tracking-normal text-graphite">Common question</h2>
            {post.faqs.map((faq) => (
              <div key={faq.question} className="mt-5">
                <h3 className="font-semibold text-graphite">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </section>
          <div className="mt-12 rounded-md bg-teal p-6 text-white">
            <h2 className="text-2xl font-semibold">Need project-specific civil advice?</h2>
            <p className="mt-2 text-white/80">
              Send CivilCity the project location, approval stage and the issue you need resolved.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-teal transition hover:bg-ivory"
            >
              Contact CivilCity
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
