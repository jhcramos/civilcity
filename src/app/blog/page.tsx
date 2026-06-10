import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogPosts, getBlogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Civil Engineering Insights",
  description:
    "CivilCity insights on operational works, RPEQ certification, stormwater, due diligence and construction support on the Sunshine Coast.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Insights</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-graphite sm:text-5xl">
            Civil engineering guidance for Sunshine Coast development projects.
          </h1>
          <p className="lede mt-5 max-w-3xl text-slate-700">
            SEO-focused explainers for approvals, stormwater, RPEQ certification, due diligence and
            construction support.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={getBlogImage(post.category)}
                  alt={`${post.category} civil engineering visual`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  <CalendarDays size={16} aria-hidden />
                  {post.category}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-graphite">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  Read article <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
