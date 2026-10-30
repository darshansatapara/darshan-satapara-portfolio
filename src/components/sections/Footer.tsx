import Link from "next/link";
import { home, site } from "@/lib/data";

const FOOTER_COLORS = ["var(--c-coral)", "var(--c-lime)", "var(--c-violet)", "var(--c-pink)", "var(--c-amber)"];

export default function Footer() {
  const c = home.sections.contact;
  return (
    <footer className="invert bg-[var(--bg)] text-[var(--fg)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
          [ {c.heading} ]
        </span>
        <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] md:text-8xl">
          <span className="hl">{c.big}</span>
        </h2>
        <p className="mt-6 max-w-md text-sm text-[var(--fg-dim)]">{c.sub}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.contact.email}`}
            className="brut-press border-2 border-[var(--line)] bg-[var(--accent)] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white"
          >
            {c.cta} →
          </a>
          {site.socials.map((s, i) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener"
              className="brut-ink brut-press px-7 py-4 text-sm font-bold uppercase tracking-widest"
              style={{ background: FOOTER_COLORS[i % FOOTER_COLORS.length] }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t-2 border-[var(--line)] pt-6 font-mono-x text-xs uppercase tracking-widest md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-extrabold">Darshan_Satapara</Link>
          <span className="text-[var(--fg-dim)]">
            {site.contact.email} / {site.contact.phone}
          </span>
          <span className="text-[var(--fg-dim)]">©{site.year} · {site.location.full}</span>
        </div>
      </div>
    </footer>
  );
}
