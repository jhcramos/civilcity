import Link from "next/link";

export default function NotFound() {
  return (
    <section className="cosmic-section section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="display-title mt-7">Page not found</h1>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-ash">
          This page is not part of the CivilCity launch structure. Head back to the services hub or
          send a project enquiry.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/services" className="pill-primary">
            View services
          </Link>
          <Link href="/contact" className="pill-ghost">
            Contact CivilCity
          </Link>
        </div>
      </div>
    </section>
  );
}
