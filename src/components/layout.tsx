import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems, serviceAreas, site } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-warm-cream/14 bg-transparent">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-normal text-warm-cream drop-shadow-sm lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="amber-pill"
        >
          Start a project
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-walnut bg-midnight-cocoa text-warm-cream">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-driftwood">
            CivilCity Engineering Consultants helps Sunshine Coast project teams create value
            from early feasibility through approvals, civil design, RPEQ review and construction support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-driftwood">
            <a className="inline-flex items-center gap-2 hover:text-amber-forge" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={16} aria-hidden />
              {site.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-amber-forge" href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden />
              {site.email}
            </a>
          </div>
        </div>
        <div>
          <h2 className="eyebrow">Core services</h2>
          <ul className="mt-5 space-y-2 text-sm text-driftwood">
            {[
              ["Operational works applications", "/services/operational-works-applications"],
              ["Material Change of Use", "/services/material-change-of-use-engineering"],
              ["Reconfiguration of a Lot", "/services/reconfiguration-of-a-lot-engineering"],
              ["RPEQ certification", "/services/rpeq-certification"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-amber-forge" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">Service area</h2>
          <div className="mt-5 flex items-start gap-2 text-sm leading-6 text-driftwood">
            <MapPin size={16} className="mt-1 shrink-0 text-amber-forge" aria-hidden />
            <p>{serviceAreas.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-walnut px-4 py-5 text-center text-xs text-driftwood">
        © {new Date().getFullYear()} CivilCity Engineering Consultants. Civil engineering for Sunshine Coast and SEQ projects.
        <span className="mx-2 text-walnut">•</span>
        Map data © <a className="hover:text-amber-forge" href="https://www.openstreetmap.org/copyright" rel="noreferrer" target="_blank">OpenStreetMap contributors</a>.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
