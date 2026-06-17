import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="CivilCity Engineering Consultants home"
    >
      <Image
        src="/civilcity-logo-horizontal-original.png"
        alt="CivilCity Engineering Consultants"
        width={1355}
        height={660}
        className={
          compact
            ? "h-[62px] w-auto object-contain"
            : "h-[62px] w-auto object-contain sm:h-[73px]"
        }
        priority
      />
    </Link>
  );
}
