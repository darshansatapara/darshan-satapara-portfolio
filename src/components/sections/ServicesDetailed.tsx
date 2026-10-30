import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesDetailed() {
  return (
    <section className="bg-[var(--bg)] text-[var(--fg)]">
      <div className="mx-auto max-w-6xl">
        {services.sections.services.map((s) => (
          <article
            key={s.title}
            className="grid gap-8 border-b-2 border-[var(--line)] px-5 py-12 md:grid-cols-[auto_1fr_1fr] md:py-16"
          >
            <div className="font-display text-6xl font-extrabold leading-none text-[var(--accent)] md:text-8xl">
              {s.no}
            </div>

            <div>
              <h3 className="font-display text-2xl font-extrabold uppercase md:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--fg-dim)]">{s.desc}</p>
              <Link
                href="/contact"
                className="brut-press mt-6 inline-block border-2 border-[var(--line)] bg-[var(--paper)] px-5 py-2.5 font-mono-x text-xs font-bold uppercase tracking-widest"
              >
                Discuss a project →
              </Link>
            </div>

            <ul className="flex flex-col self-center">
              {s.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 border-t-2 border-[var(--line)] py-3 text-sm first:border-t-0 md:first:border-t-2"
                >
                  <span className="font-display font-extrabold text-[var(--accent)]">+</span>
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
