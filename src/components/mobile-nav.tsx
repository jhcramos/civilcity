"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNav({ items }: { items: readonly { href: string; label: string }[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <div ref={root} className="lg:hidden">
      <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-warm-cream/40 bg-espresso px-4 text-sm text-warm-cream focus-visible:outline-2 focus-visible:outline-offset-4">
        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        {open ? "Close" : "Menu"}
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}
        onBlur={(event) => {
          if (event.relatedTarget && !root.current?.contains(event.relatedTarget as Node)) setOpen(false);
        }}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-100px)] overflow-y-auto border-t border-warm-cream/20 bg-espresso px-5 py-5 text-warm-cream shadow-xl">
        <ul className="mx-auto max-w-xl divide-y divide-warm-cream/15">
          {items.map((item) => <li key={item.href}>
            <Link href={item.href} aria-current={pathname === item.href ? "page" : pathname.startsWith(`${item.href}/`) ? "location" : undefined} onClick={() => setOpen(false)} className="block rounded px-3 py-4 text-lg hover:bg-white/10 aria-[current]:bg-white/10 aria-[current]:font-semibold focus-visible:outline-2 focus-visible:outline-offset-2">{item.label}</Link>
          </li>)}
        </ul>
        <Link href="/contact" onClick={() => setOpen(false)} className="amber-pill mx-auto mt-5 flex w-fit">Start a project</Link>
      </nav>
    </div>
  );
}
