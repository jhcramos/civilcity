import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getBlogImage, imagery, latestBlogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Civil Engineering Insights",
  description:
    "CivilCity insights on operational works, RPEQ certification, stormwater, due diligence and construction support on the Sunshine Coast.",
  alternates: { canonical: "/insights" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Civil engineering guidance for Sunshine Coast development projects."
        copy="Practical explainers for approvals, stormwater, RPEQ certification, due diligence, design documentation and construction support."
        image={imagery.documentation}
        imageAlt="Civil engineering documentation and project planning"
        ctaLabel="Ask about a project"
        secondaryLabel="View services"
        secondaryHref="/services"
        statement="Clear notes for the decisions that slow projects down."
        cards={[
          {
            icon: FileText,
            title: "Approval explainers",
            body: "Operational works, MCU, ROL and council-condition topics written in plain language.",
          },
          {
            icon: ClipboardCheck,
            title: "Risk notes",
            body: "Common causes of delays across stormwater, access, due diligence and documentation.",
          },
          {
            icon: BadgeCheck,
            title: "RPEQ context",
            body: "Helpful framing for when engineering review and sign-off may be required.",
          },
        ]}
      />
      <section className="bg-[#0b0600] section-pad">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {latestBlogPosts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="violet-frame group">
              <div className="relative aspect-[16/10]">
                <Image
                  src={getBlogImage(post.category, post.slug)}
                  alt={`${post.category} civil engineering visual`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="image-muted object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-4 text-xl font-normal tracking-[-0.03em] text-carbon-vellum">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ash">{post.description}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-iris-glow">
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
