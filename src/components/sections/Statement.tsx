import Link from "next/link";
import { home } from "@/lib/data";

export default function Statement() {
  const s = home.sections.statement;
  return (
    <section
      className="border-b-2 border-[#0b0b0b] text-[#0b0b0b]"
      style={{ background: "var(--c-violet)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24" data-reveal suppressHydrationWarning>
        <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[#0b0b0b]/70">
          [ {s.label} ]
        </span>
        <h2 className="mt-8 max-w-4xl font-display text-2xl font-extrabold uppercase leading-[1.25] md:text-4xl">
          I craft <span className="hl">reliable software</span> that turns messy,
          manual work into clean, <span className="hl">automated systems</span> — built to
          scale and genuinely <span className="hl">eliminate the bottleneck</span>.
        </h2>
        <div className="mt-10 flex flex-col gap-5 border-t-2 border-[#0b0b0b] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm text-[#0b0b0b]/80">{s.sub}</p>
          <Link
            href="/work"
            className="brut-ink brut-press bg-[var(--hl)] px-6 py-3 text-xs font-bold uppercase tracking-widest"
          >
            {s.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
