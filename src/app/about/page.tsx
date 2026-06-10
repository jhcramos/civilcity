import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, MapPinned, UsersRound } from "lucide-react";
import { imagery } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CivilCity is a modern Sunshine Coast civil engineering consultancy for developers, planners and project teams.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-ivory px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">About CivilCity</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-graphite sm:text-5xl">
              Local civil engineering without the theatre.
            </h1>
            <p className="lede mt-5 max-w-3xl text-slate-700">
              CivilCity is being built for the project teams who need clear answers, coordinated
              documentation and practical engineering judgement across Sunshine Coast development work.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-slate-200 bg-white">
            <Image
              src={imagery.field}
              alt="Engineer reviewing site works"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-graphite">What the brand stands for</h2>
            <p className="mt-5 leading-7 text-slate-700">
              CivilCity should feel modern, direct and locally grounded. The launch copy avoids
              inflated claims about firm size or past volume and instead focuses on useful project
              support: feasibility, approvals, RPEQ review, design documentation and construction
              delivery.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                icon: BadgeCheck,
                title: "RPEQ-led credibility",
                body: "Professional engineering language is specific and careful, especially around regulated claims.",
              },
              {
                icon: MapPinned,
                title: "Sunshine Coast context",
                body: "The site targets Sunshine Coast, Noosa, Moreton Bay and broader SEQ development searches.",
              },
              {
                icon: UsersRound,
                title: "Consultant-friendly",
                body: "Content is written for developers, planners, architects, builders and project managers.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-slate-200 bg-ivory p-6">
                <item.icon size={24} className="text-teal" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
