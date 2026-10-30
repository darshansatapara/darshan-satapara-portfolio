"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[var(--line)] bg-[var(--paper)]">
      <nav className="mx-auto flex max-w-6xl items-stretch justify-between">
        <Link
          href="/"
          className="flex items-center border-r-2 border-[var(--line)] px-5 py-4 text-base font-extrabold uppercase tracking-tight"
        >
          Darshan_Satapara
        </Link>

        <ul className="hidden items-stretch md:flex">
          {site.nav.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href} className="flex">
                <Link
                  href={n.href}
                  className={`flex items-center border-l-2 border-[var(--line)] px-5 text-xs font-bold uppercase tracking-widest transition-colors ${
                    active
                      ? "bg-[var(--c-lime)] text-[#0b0b0b]"
                      : "hl-hover"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
          <li className="flex">
            <ThemeToggle className="hl-hover flex items-center border-l-2 border-[var(--line)] px-5 text-base leading-none" />
          </li>
          <li className="flex">
            <Link
              href="/contact"
              className="flex items-center border-l-2 border-[var(--line)] bg-[var(--accent)] px-5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--accent-2)]"
            >
              Let&apos;s talk →
            </Link>
          </li>
        </ul>

        <div className="flex md:hidden">
          <ThemeToggle className="flex items-center border-l-2 border-[var(--line)] px-5 text-base leading-none" />
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center border-l-2 border-[var(--line)] px-5 font-mono-x text-xs font-bold uppercase tracking-widest"
          >
            {open ? "[ close ]" : "[ menu ]"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-2 border-[var(--line)] bg-[var(--paper)] md:hidden">
          <ul className="flex flex-col">
            {site.nav.map((n) => (
              <li key={n.href} className="border-b-2 border-[var(--line)]">
                <Link href={n.href} className="block px-5 py-4 text-sm font-bold uppercase tracking-widest">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.socials[0].url}
                target="_blank"
                rel="noopener"
                className="block bg-[var(--accent)] px-5 py-4 text-sm font-bold uppercase tracking-widest text-white"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
