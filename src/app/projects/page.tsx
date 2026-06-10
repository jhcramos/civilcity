import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Home, Landmark, Route } from "lucide-react";
import { imagery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Types",
  description:
    "CivilCity supports subdivisions, infill development, commercial sites, mixed-use projects and construction-phase civil works.",
  alternates: { canonical: "/projects" },
};

const projectTypes = [
  {
    icon: Home,
    image: imagery.coast,
    title: "Small subdivisions and infill sites",
    body: "Civil advice, access, stormwater, operational works and construction support for compact development sites.",
  },
  {
    icon: Building2,
    image: imagery.plans,
    title: "Commercial and mixed-use development",
    body: "Civil coordination for planning teams dealing with parking, access, stormwater, earthworks and approval conditions.",
  },
  {
    icon: Route,
    image: imagery.road,
    title: "Road frontage and access works",
    body: "Sight distance, driveway, frontage and external works support where the site meets the public network.",
  },
  {
    icon: Landmark,
    image: imagery.construction,
    title: "Approval-conditioned infrastructure",
    body: "Operational works documentation and construction-phase input where council conditions require civil infrastructure.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Project types</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-graphite sm:text-5xl">
            Practical civil support for development projects before case studies are ready.
          </h1>
          <p className="lede mt-5 max-w-3xl text-slate-700">
            Launch this page as “project types we support” and replace sections with verified case
            studies once project permissions and imagery are available.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {projectTypes.map((item) => (
            <div key={item.title} className="overflow-hidden border border-slate-200 bg-white">
              <div className="relative aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={`${item.title} visual`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <item.icon size={26} className="text-teal" aria-hidden />
                <h2 className="mt-5 text-xl font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-teal px-5 text-sm font-semibold text-white transition hover:bg-graphite"
          >
            Discuss your project type
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
