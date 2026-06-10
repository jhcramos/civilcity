import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad bg-ivory px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-teal">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-graphite">Page not found</h1>
        <p className="mt-4 leading-7 text-slate-700">
          This page is not part of the CivilCity launch structure. Head back to the services hub or
          send a project enquiry.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-md bg-teal px-5 text-sm font-semibold text-white"
          >
            View services
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-graphite"
          >
            Contact CivilCity
          </Link>
        </div>
      </div>
    </section>
  );
}
