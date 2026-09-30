import type { Metadata } from "next";
import { ClipboardCheck, Mail, MapPin, Phone, Route } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { getService, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CivilCity for Sunshine Coast civil engineering, operational works, RPEQ certification and stormwater design enquiries.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const requested = (await searchParams).service;
  const selected = typeof requested === "string" ? getService(requested)?.title : undefined;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get an engineering proposal for your project."
        copy={`Tell us what you want to develop, where the site is and what you need to resolve. CivilCity will help define the civil engineering scope for your ${site.region} project.`}
        image="/contact-hero-townhouses.webp"
        imageAlt="Modern Sunshine Coast townhouse development with access, kerb and drainage infrastructure"
        ctaLabel="Use the enquiry form"
        ctaHref="#enquiry"
        secondaryLabel="View services"
        secondaryHref="/services"
        statement="The clearer the starting point, the faster the right civil next step."
        cards={[
          {
            icon: MapPin,
            title: "Project location",
            body: "Share the address, suburb or development area so local constraints can be considered.",
          },
          {
            icon: ClipboardCheck,
            title: "Approval stage",
            body: "Tell us whether the project is feasibility, MCU, ROL, operational works or construction.",
          },
          {
            icon: Route,
            title: "Civil issue",
            body: "Access, stormwater, earthworks, servicing, tendering or site-phase questions are all useful context.",
          },
        ]}
      />
      <section id="enquiry" className="cream-site-section section-pad scroll-mt-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="space-y-5">
            {[
              { icon: Phone, label: "Phone", value: site.phone },
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: MapPin, label: "Service area", value: site.region },
            ].map((item) => (
              <div key={item.label} className="site-card p-5">
                <item.icon size={22} className="text-iris-glow" aria-hidden />
                <p className="eyebrow mt-5">{item.label}</p>
                {item.href ? (
                  <a className="mt-3 block font-medium text-carbon-vellum hover:text-iris-glow" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 font-medium text-carbon-vellum">{item.value}</p>
                )}
              </div>
            ))}
            <p className="text-sm leading-6 text-ash">
              Share the site, approval stage and the civil issue you need resolved. CivilCity will
              respond with the right next step for feasibility, approval or delivery support.
            </p>
          </aside>
          <ContactForm key={selected ?? "general"} initialService={selected} serviceOptions={services.map((service) => service.title)} />
        </div>
      </section>
    </>
  );
}
