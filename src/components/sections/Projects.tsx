"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { site, type Project } from "@/lib/data";

const GROUPS = ["All", "Full Stack", "AI · LLM", "Automation", "Data"] as const;

const GROUP_COLOR: Record<string, string> = {
  "Full Stack": "var(--c-sky)",
  "AI · LLM": "var(--c-violet)",
  Automation: "var(--c-coral)",
  Data: "var(--c-lime)",
};

function groupOf(cat: string) {
  const c = cat.toLowerCase();
  if (c.includes("ai") || c.includes("llm")) return "AI · LLM";
  if (c.includes("data") || c.includes("etl") || c.includes("architecture")) return "Data";
  if (c.includes("automation") || c.includes("scrap") || c.includes("maps")) return "Automation";
  return "Full Stack";
}

export default function Projects({
  items,
  limit,
  showFilter = false,
  heading = "Selected work",
}: {
  items: Project[];
  limit?: number;
  showFilter?: boolean;
  heading?: string;
}) {
  const [filter, setFilter] = useState<(typeof GROUPS)[number]>("All");

  const shown = useMemo(() => {
    let list = items;
    if (showFilter && filter !== "All") list = list.filter((p) => groupOf(p.cat) === filter);
    if (limit) list = list.slice(0, limit);
    return list;
  }, [items, filter, limit, showFilter]);

  return (
    <section id="projects" className="border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div
          className="flex flex-wrap items-end justify-between gap-5 border-b-2 border-[var(--line)] pb-5"
          data-reveal
          suppressHydrationWarning
        >
          <h2 className="font-display text-3xl font-extrabold uppercase md:text-5xl">{heading}</h2>
          <a
            href={site.socials[0].url}
            target="_blank"
            rel="noopener"
            className="ul-sweep font-mono-x text-xs font-bold uppercase tracking-widest hover:text-[var(--accent)]"
          >
            GitHub ↗
          </a>
        </div>

        {showFilter && (
          <div className="mt-6 flex flex-wrap">
            {GROUPS.map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`border-2 border-[var(--line)] px-4 py-2 font-mono-x text-xs font-bold uppercase tracking-widest -ml-0.5 -mt-0.5 ${
                  filter === g ? "bg-[var(--ink)] text-[var(--paper)]" : "hl-hover bg-[var(--paper)]"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.n} className="brut brut-press brut-pop flex flex-col bg-[var(--paper)] p-5">
              <div className="flex items-center justify-between border-b-2 border-[var(--line)] pb-3">
                <span
                  className="ink-cell px-2 py-0.5 font-mono-x text-[0.6rem] font-bold uppercase tracking-widest"
                  style={{ background: GROUP_COLOR[groupOf(p.cat)] ?? "var(--c-sky)" }}
                >
                  {p.cat}
                </span>
                <span className="font-display text-sm font-extrabold">{p.n}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold uppercase leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-dim)]">{p.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li key={t} className="border-2 border-[var(--line)] px-2 py-0.5 font-mono-x text-[0.6rem] uppercase">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 border-t-2 border-[var(--line)] pt-3 font-mono-x text-xs font-bold uppercase tracking-widest">
                {p.slug && (
                  <Link href={`/work/${p.slug}`} className="hover:text-[var(--accent)]">
                    Details →
                  </Link>
                )}
                {p.view && p.view !== "#" && (
                  <a href={p.view} target="_blank" rel="noopener" className="hover:text-[var(--accent)]">
                    Live ↗
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener" className="hover:text-[var(--accent)]">
                    Code ↗
                  </a>
                )}
                {!p.slug && !p.code && (!p.view || p.view === "#") && (
                  <span className="text-[var(--fg-faint)]">Internal</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {limit && limit < items.length && (
          <div className="mt-12">
            <Link
              href="/work"
              className="brut-press inline-block border-2 border-[var(--line)] bg-[var(--paper)] px-6 py-3 text-xs font-bold uppercase tracking-widest"
            >
              View all {items.length} projects →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
