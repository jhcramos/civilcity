import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { blogPosts, getBlogImage, getBlogPost, site } from "@/lib/site";
import type { BlogSection } from "@/lib/site";

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

function getNumberedItems(paragraph: string) {
  const markerPattern = /(?:^|\s)(\d+)\.\s+/g;
  const markers = Array.from(paragraph.matchAll(markerPattern));

  if (!markers.length || markers[0].index !== 0) return null;

  return markers.map((marker, index) => {
    const start = marker.index! + marker[0].length;
    const end = markers[index + 1]?.index ?? paragraph.length;

    return {
      number: marker[1],
      text: paragraph.slice(start, end).trim(),
    };
  });
}

function renderNumberedList(items: { number: string; text: string }[], key: string) {
  return (
    <ol key={key} className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={`${item.number}-${item.text}`} className="grid grid-cols-[2.25rem_1fr] gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-iris-glow text-sm font-semibold tabular-nums text-espresso shadow-sm">
            {item.number}
          </span>
          <span className="pt-1.5 text-lg leading-8 text-ash">{item.text}</span>
        </li>
      ))}
    </ol>
  );
}

function renderBody(body: string | string[], className: string) {
  const paragraphs = Array.isArray(body) ? body : body.split("\n\n");
  const rendered: ReactNode[] = [];
  let listItems: { number: string; text: string }[] = [];

  function flushList(key: string) {
    if (!listItems.length) return;
    rendered.push(renderNumberedList(listItems, key));
    listItems = [];
  }

  paragraphs.forEach((paragraph, index) => {
    const numberedItems = getNumberedItems(paragraph);

    if (numberedItems) {
      listItems.push(...numberedItems);
      return;
    }

    flushList(`list-${index}`);
    rendered.push(
      <p key={paragraph} className={className}>
        {paragraph}
      </p>,
    );
  });

  flushList("list-final");

  return rendered;
}

function renderSectionTable(table?: BlogSection["table"]) {
  if (!table) return null;

  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-charcoal bg-white/75 shadow-sm">
      <table className="min-w-full border-collapse text-left text-sm text-carbon-vellum">
        <thead className="bg-iris-glow/10">
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col" className="border-b border-charcoal px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={row.join("-")} className={rowIndex % 2 ? "bg-iris-glow/5" : "bg-transparent"}>
              {row.map((cell) => (
                <td key={cell} className="border-b border-charcoal px-4 py-3 align-top leading-6">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const resources = post.resources ?? post.sourceLinks;

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
            src={getBlogImage(post.category, post.slug)}
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
                  <div className="mt-4 space-y-4">
                    {renderBody(section.body, "text-lg leading-8 text-ash")}
                  </div>
                  {renderSectionTable(section.table)}
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
            {resources?.length ? (
              <section className="mt-12 border-t border-charcoal pt-10">
                <p className="eyebrow">Useful official resources</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {resources.map((source) => (
                    <Link
                      key={source.href}
                      href={source.href}
                      className="rounded-lg border border-charcoal px-4 py-3 text-sm font-medium text-carbon-vellum transition hover:border-iris-glow"
                    >
                      {source.label}
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
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
