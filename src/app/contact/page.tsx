import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CivilCity for Sunshine Coast civil engineering, operational works, RPEQ certification and stormwater design enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-ivory px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-graphite sm:text-5xl">
            Send the project location, stage and civil issue.
          </h1>
          <p className="lede mt-5 max-w-3xl text-slate-700">
            CivilCity is set up for developer, planner, architect, builder and project-manager
            enquiries across {site.region}.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="space-y-5">
            {[
              { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: MapPin, label: "Service area", value: site.region },
            ].map((item) => (
              <div key={item.label} className="rounded-md border border-slate-200 bg-ivory p-5">
                <item.icon size={22} className="text-teal" aria-hidden />
                <p className="mt-4 text-sm font-semibold text-teal">{item.label}</p>
                {item.href ? (
                  <a className="mt-1 block font-semibold text-graphite hover:text-teal" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold text-graphite">{item.value}</p>
                )}
              </div>
            ))}
            <p className="text-sm leading-6 text-slate-600">
              Replace the placeholder phone number and connect `CONTACT_WEBHOOK_URL` before launch so
              form submissions route to the chosen inbox or CRM.
            </p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
