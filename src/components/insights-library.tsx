"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

type InsightCard = {
  slug: string; title: string; description: string; category: string;
  image: string; readingMinutes: number;
};
export function InsightsLibrary({ articles }: { articles: InsightCard[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const categories = [...new Set(articles.map((article) => article.category))].sort();
  const terms = query.trim().toLocaleLowerCase("en-AU").split(/\s+/).filter(Boolean);
  const visible = articles.filter((article) => (!category || article.category === category)
    && terms.every((term) => `${article.title} ${article.description} ${article.category}`.toLocaleLowerCase("en-AU").includes(term)));
  function reset() { setQuery(""); setCategory(""); }
  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-[#0d3b1e]/15 bg-white/70 p-5 sm:grid-cols-[1fr_16rem] sm:p-6">
        <div><label htmlFor="insight-search" className="text-sm font-semibold text-[#0d3b1e]">Search the guides</label><div className="relative mt-2"><Search aria-hidden size={18} className="absolute top-3.5 left-3 text-[#0d3b1e]/60" /><input id="insight-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try subdivision, stormwater or costs" className="w-full rounded-lg border border-[#0d3b1e]/30 bg-white py-3 pr-3 pl-10 text-sm text-[#0d3b1e] placeholder:text-[#0d3b1e]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d3b1e]" /></div></div>
        <div><label htmlFor="insight-category" className="text-sm font-semibold text-[#0d3b1e]">Topic</label><select id="insight-category" value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 w-full rounded-lg border border-[#0d3b1e]/30 bg-white p-3 text-sm text-[#0d3b1e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d3b1e]"><option value="">All topics</option>{categories.map((value) => <option key={value}>{value}</option>)}</select></div>
      </div>
      <div className="my-6 flex flex-wrap items-center gap-4 text-sm text-[#0d3b1e]"><p role="status" aria-live="polite">{visible.length} {visible.length === 1 ? "guide" : "guides"}{query || category ? " found" : " in the library"}</p>{(query || category) && <button type="button" onClick={reset} className="min-h-11 cursor-pointer px-2 font-semibold underline underline-offset-4">Clear filters</button>}</div>
      {visible.length === 0 ? <div className="rounded-2xl border border-[#0d3b1e]/20 p-8 text-[#0d3b1e]"><h3 className="text-xl">No guides match those filters</h3><p className="mt-3">Try a broader term or clear the topic filter.</p><button type="button" onClick={reset} className="mt-5 min-h-11 cursor-pointer font-semibold underline underline-offset-4">Show all guides</button></div> : <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((article) => <Link key={article.slug} href={`/insights/${article.slug}`} className="site-card group">
          <div className="relative aspect-[16/10]"><Image src={article.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="image-muted object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" /></div>
          <div className="p-6"><p className="eyebrow">{article.category}</p><h3 className="mt-4 text-xl font-normal leading-7 tracking-[-0.02em] text-warm-cream">{article.title}</h3><p className="mt-3 text-sm leading-6 text-driftwood">{article.description}</p><div className="mt-5 flex items-center justify-between gap-3 text-sm text-amber-forge"><span className="inline-flex items-center gap-2 font-medium">Read guide <ArrowRight size={15} aria-hidden /></span><span>{article.readingMinutes} min read</span></div></div>
        </Link>)}
      </div>}
    </div>
  );
}
