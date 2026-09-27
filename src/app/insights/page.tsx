import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InsightsLibrary } from "@/components/insights-library";
import { getBlogImage, latestBlogPosts } from "@/lib/site";
import { getArticleWordCount } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Sunshine Coast Land Development Guides",
  description: "Practical Sunshine Coast land development guides: subdivision feasibility, civil engineering costs, stormwater, operational works and plan sealing.",
  alternates: { canonical: "/insights" },
};
const startingPoints = [
  { title: "Before you buy", text: "Test access, drainage, services and the assumptions behind the proposed yield.", slug: "development-site-due-diligence-sunshine-coast" },
  { title: "Planning a subdivision", text: "Understand the decisions from feasibility through approvals and delivery.", slug: "subdivision-sunshine-coast" },
  { title: "Ready for civil works", text: "Turn approval conditions into a defined engineering and construction scope.", slug: "operational-works-application-sunshine-coast" },
];
export default function InsightsPage() {
  const cards = latestBlogPosts.map((post) => ({
    slug: post.slug, title: post.title, description: post.description, category: post.category,
    image: getBlogImage(post.category, post.slug), readingMinutes: Math.max(1, Math.ceil(getArticleWordCount(post) / 220)),
  }));
  return <>
    <header className="bg-espresso px-4 pt-32 pb-14 sm:px-6 sm:pb-20 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl"><p className="eyebrow">CivilCity insights · Sunshine Coast</p><h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] font-normal tracking-[-0.035em] text-warm-cream sm:text-5xl lg:text-6xl">Better-informed land development decisions.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-driftwood">Practical guides to feasibility, approvals and civil works, with the evidence to gather, questions to ask and project risks to resolve.</p><a href="#all-guides" className="mt-7 inline-flex items-center gap-2 font-medium text-amber-forge">Explore the guide library <ArrowRight size={18} aria-hidden /></a></div>
    </header>
    <section className="cream-site-section px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="start-heading">
      <div className="mx-auto max-w-7xl"><h2 id="start-heading" className="text-2xl text-[#0d3b1e]">Start with your next decision</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{startingPoints.map((point, index) => <Link key={point.slug} href={`/insights/${point.slug}`} className="rounded-2xl border border-[#0d3b1e]/20 bg-white/75 p-6 text-[#0d3b1e] transition hover:bg-white"><span className="text-xs font-semibold tracking-wider">0{index + 1}</span><h3 className="mt-3 text-2xl">{point.title}</h3><p className="mt-3 text-sm leading-7">{point.text}</p><ArrowRight size={20} className="mt-5" aria-hidden /></Link>)}</div></div>
    </section>
    <section id="all-guides" className="cream-site-section scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="library-heading"><div className="mx-auto max-w-7xl"><h2 id="library-heading" className="mb-6 text-3xl text-[#0d3b1e]">Find a guide for your project</h2><InsightsLibrary articles={cards} /></div></section>
  </>;
}
