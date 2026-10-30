import type { CSSProperties } from "react";
import Link from "next/link";
import { home, services as servicesData } from "@/lib/data";
import { CountUp } from "@/components/ui";

const idx = ["01", "02", "03"];
const STAT_COLORS = ["var(--c-sky)", "var(--c-coral)", "var(--c-lime)", "var(--c-amber)"];
const CARD_COLORS = ["var(--c-sky)", "var(--c-coral)", "var(--c-lime)"];

export default function Services() {
  const stats = home.sections.stats;
  const cards = servicesData.sections.services;
  return (
    <section id="services" className="border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
      {/* stats row — bold color band */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{ background: STAT_COLORS[i % STAT_COLORS.length] } as CSSProperties}
            className="ink-cell -ml-0.5 -mt-0.5 px-5 py-8 first:ml-0"
          >
            <div className="font-display text-4xl font-extrabold md:text-5xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono-x text-xs font-bold uppercase tracking-widest text-[#0b0b0b]/70">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div data-reveal suppressHydrationWarning>
          <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
            [ services ]
          </span>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold uppercase leading-[1.05] md:text-5xl">
            {home.sections.servicesHeading}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              suppressHydrationWarning
              style={{ "--i": i, background: CARD_COLORS[i % CARD_COLORS.length] } as CSSProperties}
              className="brut-ink brut-press flex flex-col p-6"
            >
              <span className="font-display text-2xl font-extrabold text-[#0b0b0b]">
                {idx[i]}
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold uppercase text-[#0b0b0b]">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#0b0b0b]/75">{s.desc}</p>
              <Link
                href="/services"
                className="mt-6 border-t-2 border-[#0b0b0b] pt-4 font-mono-x text-xs font-bold uppercase tracking-widest text-[#0b0b0b]"
              >
                Explore →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
