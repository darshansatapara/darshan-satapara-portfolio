import type { CSSProperties } from "react";
import Link from "next/link";
import { home, site } from "@/lib/data";
import PortraitSwitcher from "./PortraitSwitcher";

const PILL_COLORS = [
  "var(--c-sky)",
  "var(--c-coral)",
  "var(--c-lime)",
  "var(--c-violet)",
  "var(--c-pink)",
  "var(--c-amber)",
];

export default function Hero() {
  const hero = home.sections.hero;
  return (
    <section id="home" className="relative border-b-2 border-[var(--line)] bg-[var(--paper)] pt-[57px]">
      <div className="grid-lines pointer-events-none absolute inset-0" />

      {/* top status strip */}
      <div className="relative flex flex-wrap items-center justify-between border-b-2 border-[var(--line)] font-mono-x text-[0.7rem] font-bold uppercase tracking-widest">
        <span className="flex items-center gap-2 px-5 py-2">
          <span className="blink inline-block h-2 w-2 bg-[var(--accent)]" aria-hidden />
          {hero.status}
        </span>
        <span className="border-l-2 border-[var(--line)] px-5 py-2">
          {site.location.full}
        </span>
      </div>

      <div className="relative mx-auto grid max-w-6xl md:grid-cols-[1.3fr_1fr]">
        {/* left: name + intro */}
        <div className="flex flex-col justify-between border-b-2 border-[var(--line)] px-5 py-10 md:border-b-0 md:border-r-2 md:py-14">
          <div data-reveal suppressHydrationWarning>
            <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
              {hero.tag} / {site.year}
            </span>
            <h1 className="mt-5 font-display text-[13vw] font-extrabold uppercase leading-[0.92] tracking-tighter md:text-[5.2rem]">
              Darshan
              <br />
              <span className="hl">Satapara</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--fg-dim)]">
              {hero.intro}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="brut-press border-2 border-[var(--line)] bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white"
            >
              Let&apos;s work together →
            </Link>
            <Link
              href="/work"
              className="brut-ink brut-press px-6 py-3 text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--c-coral)" }}
            >
              View work
            </Link>
          </div>
        </div>

        {/* right: portrait + shirt switcher */}
        <PortraitSwitcher shortRole={site.shortRole} />
      </div>

      {/* tech tags strip */}
      <div className="relative flex flex-wrap items-stretch border-t-2 border-[var(--line)]">
        {hero.pills.map((p, i) => (
          <span
            key={p}
            style={{ background: PILL_COLORS[i % PILL_COLORS.length] } as CSSProperties}
            className="ink-cell -ml-0.5 -mt-0.5 px-5 py-3 font-mono-x text-xs font-bold uppercase tracking-widest first:ml-0"
          >
            {p}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-2 px-5 py-3 font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
          scroll
          <span className="nudge inline-block text-[var(--accent)]" aria-hidden>↓</span>
        </span>
      </div>
    </section>
  );
}
