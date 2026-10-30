import Link from "next/link";
import { home } from "@/lib/data";

export default function About() {
  return (
    <section className="border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[auto_1fr]">
        <div
          className="flex items-center border-b-2 border-[var(--line)] px-5 py-4 text-[#0b0b0b] md:border-b-0 md:border-r-2"
          style={{ background: "var(--c-amber)" }}
        >
          <span className="font-mono-x text-xs font-bold uppercase tracking-widest">[ about ]</span>
        </div>
        <div className="px-5 py-12 md:py-16">
          <h2 className="max-w-3xl font-display text-xl font-extrabold leading-[1.4] md:text-2xl">
            {home.sections.aboutPreview}
          </h2>
          <Link
            href="/about"
            className="brut-ink brut-press mt-8 inline-block px-6 py-3 text-xs font-bold uppercase tracking-widest"
            style={{ background: "var(--c-lime)" }}
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
