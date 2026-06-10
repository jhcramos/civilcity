import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, SearchCheck } from "lucide-react";
import { serviceImageBySlug, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Civil Engineering Services Sunshine Coast",
  description:
    "CivilCity services include operational works applications, RPEQ certification, stormwater design, civil documentation, due diligence and construction support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-graphite sm:text-5xl">
            Civil engineering services for approvals, design and delivery.
          </h1>
          <p className="lede mt-5 max-w-3xl text-slate-700">
            RPEQ-led support for developers, planners, architects and project teams across{" "}
            {site.region}.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className="group overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={serviceImageBySlug[service.slug]}
                  alt={`${service.title} visual`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center bg-white text-teal shadow-sm">
                  <SearchCheck size={20} aria-hidden />
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-teal">{service.eyebrow}</p>
                <h2 className="mt-2 text-xl font-semibold text-graphite">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  View service <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
