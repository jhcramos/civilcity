import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems, serviceAreas, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-teal">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-teal px-4 text-sm font-semibold text-white transition hover:bg-graphite"
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
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Sunshine Coast civil engineering consultancy for approvals, RPEQ certification,
            stormwater, design documentation and construction-phase support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
            <a className="inline-flex items-center gap-2 hover:text-teal" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={16} aria-hidden />
              {site.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-teal" href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden />
              {site.email}
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-graphite">Core services</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {[
              ["Operational works", "/services/operational-works-applications"],
              ["RPEQ certification", "/services/rpeq-certification"],
              ["Stormwater design", "/services/stormwater-drainage-design"],
              ["Engineering due diligence", "/services/engineering-due-diligence"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-teal" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-graphite">Service area</h2>
          <div className="mt-4 flex items-start gap-2 text-sm leading-6 text-slate-600">
            <MapPin size={16} className="mt-1 shrink-0 text-teal" aria-hidden />
            <p>{serviceAreas.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CivilCity. RPEQ-led civil engineering. Unitywater accreditation
        not claimed unless separately verified.
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
