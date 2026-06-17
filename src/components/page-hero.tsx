import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type HeroCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  statement: string;
  cards: HeroCard[];
};

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  ctaLabel = "Start a project",
  ctaHref = "/contact",
  secondaryLabel,
  secondaryHref,
  statement,
  cards,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[92dvh] overflow-hidden bg-espresso">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/82 via-espresso/40 to-espresso/0" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/12 via-transparent to-midnight-cocoa/88" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-espresso/45 to-transparent" />

      <div className="relative mx-auto flex min-h-[92dvh] max-w-[1200px] flex-col px-4 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-[1040px] pt-16 lg:pt-24">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="hero-title mt-7 max-w-[1040px]">{title}</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-warm-cream/90">{copy}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={ctaHref} className="amber-pill">
              {ctaLabel}
              <ArrowRight size={16} aria-hidden />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="cream-pill">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="relative left-1/2 mt-auto w-[100dvw] -translate-x-1/2">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-3xl text-3xl font-normal tracking-[-0.02em] text-warm-cream sm:text-4xl">
              {statement}
            </h2>
          </div>
          <div className="mt-5 border-y border-warm-cream/24 bg-midnight-cocoa/18 backdrop-blur-[1px]">
            <div className="grid md:grid-cols-3">
              {cards.map((item) => (
                <div
                  key={item.title}
                  className="border-warm-cream/20 px-4 py-6 sm:px-6 md:border-r md:px-8 md:last:border-r-0 lg:px-12"
                >
                  <span className="icon-ring h-12 w-12 border-warm-cream/35 text-warm-cream">
                    <item.icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-16 text-xl font-normal tracking-[-0.02em] text-amber-forge md:mt-20">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-warm-cream/88">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
