import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="CivilCity home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-md bg-graphite text-white shadow-sm">
        <span className="absolute inset-2 rounded-[3px] border border-aqua/50" />
        <span className="absolute left-3 top-2 h-7 w-px rotate-45 bg-aqua" />
        <span className="absolute bottom-3 left-2 h-px w-7 bg-white/55" />
        <span className="relative text-xl font-semibold tracking-normal">C</span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-xl font-semibold tracking-normal text-graphite">CivilCity</span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-teal">
            Civil engineering
          </span>
        </span>
      )}
    </Link>
  );
}
