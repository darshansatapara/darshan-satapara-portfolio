import type { Experience as Exp } from "@/lib/data";

const NUM_COLORS = ["var(--c-sky)", "var(--c-coral)", "var(--c-lime)", "var(--c-violet)", "var(--c-amber)", "var(--c-pink)"];

export default function Experience({ items }: { items: Exp[] }) {
  return (
    <section id="experience" className="invert border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="flex items-end justify-between border-b-2 border-[var(--line)] pb-5">
          <h2 className="font-display text-3xl font-extrabold uppercase md:text-5xl">
            Work history
          </h2>
          <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
            [ {items.length} roles ]
          </span>
        </div>

        <div className="flex flex-col">
          {items.map((w, i) => (
            <div
              key={w.company}
              className="group relative grid gap-5 border-b-2 border-[var(--line)] py-8 pl-0 transition-[padding] duration-200 before:absolute before:left-[-20px] before:top-0 before:h-full before:w-0 before:bg-[var(--hl)] before:transition-[width] before:duration-200 hover:pl-4 group-hover:before:w-[6px] md:grid-cols-[14ch_1fr]"
            >
              <div>
                <div
                  className="font-display text-xl font-extrabold"
                  style={{ color: NUM_COLORS[i % NUM_COLORS.length] }}
                >
                  0{i + 1}
                </div>
                <div className="mt-2 font-mono-x text-xs uppercase tracking-widest text-[var(--fg-dim)]">
                  {w.period}
                </div>
                {w.current && (
                  <span className="mt-2 inline-block border-2 border-[var(--line)] bg-[var(--hl)] px-2 py-0.5 font-mono-x text-[0.6rem] font-bold uppercase tracking-widest text-[var(--ink)]">
                    Current
                  </span>
                )}
              </div>

              <div className="max-w-2xl">
                <h3 className="font-display text-xl font-extrabold uppercase md:text-2xl">
                  {w.role}
                </h3>
                <div className="mt-1 font-mono-x text-xs uppercase tracking-widest text-[var(--fg-dim)]">
                  @ {w.company}
                </div>
                <ul className="mt-4 space-y-2">
                  {w.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-[var(--fg-dim)]">
                      <span className="text-[var(--hl)]">▪</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
