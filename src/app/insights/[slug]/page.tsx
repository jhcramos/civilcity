import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { blogPosts, getBlogImage, getBlogPost, site } from "@/lib/site";
import { getArticleWordCount, getSectionId, type BlogSection } from "@/lib/insights";

type Props = { params: Promise<{ slug: string }> };
const formatDate = (date: string) => new Intl.DateTimeFormat("en-AU", {
  dateStyle: "long", timeZone: "Australia/Brisbane",
}).format(new Date(date));

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title, description: post.description, type: "article",
      url: `/insights/${post.slug}`, publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      images: [{ url: getBlogImage(post.category, post.slug) }],
    },
  };
}

function SectionTable({ table, title }: { table: NonNullable<BlogSection["table"]>; title: string }) {
  return (
    <div role="region" aria-label={`${title} comparison table`} tabIndex={0}
      className="mt-7 overflow-x-auto rounded-2xl border border-[#0d3b1e]/20 bg-white/80 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d3b1e]">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm text-[#0d3b1e]">
        <caption className="sr-only">{title}</caption>
        <thead className="bg-[#0d3b1e] text-warm-cream">
          <tr>{table.columns.map((column) => <th key={column} scope="col" className="px-5 py-4 font-semibold">{column}</th>)}</tr>
        </thead>
        <tbody>{table.rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 ? "bg-[#0d3b1e]/5" : "bg-transparent"}>
            {row.map((cell, columnIndex) => columnIndex === 0
              ? <th key={columnIndex} scope="row" className="border-t border-[#0d3b1e]/10 px-5 py-4 align-top font-semibold leading-6">{cell}</th>
              : <td key={columnIndex} className="border-t border-[#0d3b1e]/10 px-5 py-4 align-top leading-6">{cell}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

export default async function InsightPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const articleImage = getBlogImage(post.category, post.slug);
  const resources = [...new Map([...(post.resources ?? []), ...(post.sourceLinks ?? [])].map((r) => [r.href, r])).values()];
  const related = post.relatedSlugs.map(getBlogPost).filter((p) => p !== undefined);
  const readingMinutes = Math.max(1, Math.ceil(getArticleWordCount(post) / 220));
  const schema = [
    {
      "@context": "https://schema.org", "@type": "Article",
      headline: post.title, description: post.description,
      datePublished: post.date, dateModified: post.updatedDate ?? post.date,
      author: { "@type": "Organization", name: site.name, url: `${site.domain}/about` },
      publisher: { "@type": "Organization", name: site.name, url: site.domain },
      image: new URL(articleImage, site.domain).href,
      mainEntityOfPage: `${site.domain}/insights/${post.slug}`,
      inLanguage: "en-AU", keywords: post.keywords.join(", "),
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${site.domain}/insights` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${site.domain}/insights/${post.slug}` },
      ],
    },
    ...(post.faqs.length ? [{
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    }] : []),
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className="relative overflow-hidden bg-espresso">
          <Image src={articleImage} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/85 to-espresso/55" />
          <div className="relative mx-auto max-w-[1200px] px-4 pb-14 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pt-40">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-amber-forge"><ArrowLeft size={16} aria-hidden /> All insights</Link>
            <p className="eyebrow mt-8">{post.category} · Sunshine Coast</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] font-normal tracking-[-0.035em] text-warm-cream sm:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-warm-cream/90">{post.description}</p>
          </div>
          {articleImage.includes("/illustrations/") && <p className="absolute right-4 bottom-3 rounded bg-espresso/70 px-2 py-1 text-xs text-warm-cream sm:right-6">Concept illustration</p>}
        </header>
        <div className="cream-site-section px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#0d3b1e]/20 pb-6 text-sm leading-6 text-[#0d3b1e]/80">
              <Link href="/about" className="font-semibold underline decoration-[#0d3b1e]/30 underline-offset-4">CivilCity Engineering Consultants</Link>
              <span>{readingMinutes} min read</span>
              <span>Published <time dateTime={post.date}>{formatDate(post.date)}</time></span>
              {post.updatedDate && <span>Updated <time dateTime={post.updatedDate}>{formatDate(post.updatedDate)}</time></span>}
            </div>
            <section className="mt-8 rounded-2xl border border-[#0d3b1e]/15 bg-[#0d3b1e] p-6 text-warm-cream shadow-sm sm:p-8" aria-labelledby="early-project-help">
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-forge">Project question?</p>
                  <h2 id="early-project-help" className="mt-3 text-2xl font-normal tracking-[-0.02em]">Check the civil constraints before committing to your next step.</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-warm-cream/85">
                    Send CivilCity the address, current plans, approval stage and the issue you are trying to resolve. We will help scope the right civil engineering input for the project.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <Link href={`/contact?service=${post.serviceSlug}&source=insight&article=${post.slug}#enquiry`} className="pill-primary whitespace-nowrap">Request advice</Link>
                  <Link href={`/services/${post.serviceSlug}`} className="text-sm font-semibold text-warm-cream underline decoration-warm-cream/40 underline-offset-4 hover:decoration-warm-cream">View service scope</Link>
                </div>
              </div>
            </section>
            <nav aria-label="On this page" className="my-9 rounded-2xl border border-[#0d3b1e]/15 bg-white/65 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0d3b1e]">On this page</p>
              <ol className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {post.sections.map((section, index) => <li key={index}><a href={`#${getSectionId(index)}`} className="text-sm leading-6 text-[#0d3b1e] underline decoration-[#0d3b1e]/25 underline-offset-4 hover:decoration-[#0d3b1e]">{section.heading}</a></li>)}
              </ol>
              <a href="#project-checklist" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0d3b1e]">Jump to the project checklist <ArrowRight size={15} aria-hidden /></a>
            </nav>
            <div className="space-y-12">
              {post.sections.map((section, index) => {
                const List = section.ordered ? "ol" : "ul";
                return <section key={index} id={getSectionId(index)} className="scroll-mt-28">
                  {section.heading === "Checklist for your project brief" && <span id="project-checklist" className="block scroll-mt-28" />}
                  <h2 className="text-2xl leading-tight font-normal tracking-[-0.025em] text-[#0d3b1e] sm:text-3xl">{section.heading}</h2>
                  <div className="mt-5 space-y-5">{(Array.isArray(section.body) ? section.body : section.body.split("\n\n")).map((paragraph, i) => <p key={i} className="text-lg leading-8 text-[#173c28]/90">{paragraph}</p>)}</div>
                  {section.list && <List className="mt-6 space-y-3">{section.list.map((item, i) => <li key={i} className="flex gap-4 rounded-xl border border-[#0d3b1e]/10 bg-white/70 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d3b1e] text-sm font-semibold text-white" aria-hidden>{section.ordered ? i + 1 : <Check size={16} />}</span><span className="pt-0.5 text-base leading-7 text-[#173c28]">{item}</span></li>)}</List>}
                  {section.table && <SectionTable table={section.table} title={section.heading} />}
                  {section.links && <ul className="mt-5 space-y-2 border-l-2 border-[#0d3b1e]/25 pl-4">{section.links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm leading-6 font-medium text-[#0d3b1e] underline underline-offset-4">{link.label}</Link></li>)}</ul>}
                </section>;
              })}
            </div>
            {post.faqs.length > 0 && <section className="mt-12 rounded-2xl bg-[#0d3b1e] p-6 sm:p-8" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl text-warm-cream">Common questions</h2>
              {post.faqs.map((faq) => <div key={faq.question} className="mt-6 border-t border-white/15 pt-5"><h3 className="font-semibold text-warm-cream">{faq.question}</h3><p className="mt-2 leading-7 text-warm-cream/85">{faq.answer}</p></div>)}
            </section>}
            {resources.length > 0 && <section className="mt-10 rounded-2xl border border-[#0d3b1e]/15 bg-white/70 p-6 text-[#0d3b1e]">
              <h2 className="text-xl">Official sources and further guidance</h2>
              <ul className="mt-4 space-y-3">{resources.map((r) => <li key={r.href}><a href={r.href} className="text-sm leading-6 underline underline-offset-4">{r.label}</a></li>)}</ul>
              <p className="mt-5 text-sm leading-6">Use the current requirements for your property and proposal. Illustrative scenarios describe possible design issues; they are not reported client projects.</p>
            </section>}
            <section className="mt-12 border-y border-[#0d3b1e]/20 py-10 text-[#0d3b1e]">
              <p className="text-sm font-semibold uppercase tracking-wider">Discuss your project</p>
              <h2 className="mt-3 text-3xl tracking-tight">{post.cta.label}</h2>
              <p className="mt-4 max-w-2xl leading-7">{post.cta.body}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5"><Link href={`/contact?service=${post.serviceSlug}#enquiry`} className="pill-primary">Request an engineering proposal</Link><Link href={`/services/${post.serviceSlug}`} className="font-medium underline underline-offset-4">View service scope</Link></div>
            </section>
            <nav aria-label="Related articles" className="my-12">
              <h2 className="text-2xl text-[#0d3b1e]">Continue your project research</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">{related.map((p) => <Link key={p.slug} href={`/insights/${p.slug}`} className="rounded-2xl border border-[#0d3b1e]/20 bg-white/70 p-5 text-[#0d3b1e] transition hover:bg-white"><span className="text-xs font-semibold uppercase tracking-wider">{p.category}</span><span className="mt-3 block text-lg leading-7">{p.title}</span><ArrowRight className="mt-4" size={18} aria-hidden /></Link>)}</div>
            </nav>
          </div>
        </div>
      </article>
    </>
  );
}
