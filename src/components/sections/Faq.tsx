"use client";

import { useState } from "react";
import { home } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = home.sections.faq;

  return (
    <section
      className="border-b-2 border-[#0b0b0b] text-[#0b0b0b]"
      style={{ background: "var(--c-pink)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="border-b-2 border-[#0b0b0b] pb-5">
          <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[#0b0b0b]/70">
            [ faq ]
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase md:text-5xl">
            About my work
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b-2 border-[#0b0b0b]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left text-[#0b0b0b] transition-opacity hover:opacity-60"
                >
                  <span className="font-display text-base font-extrabold uppercase md:text-lg">
                    <span className="text-[#0b0b0b]">{String(i + 1).padStart(2, "0")}</span> / {f.q}
                  </span>
                  <span
                    className="font-display text-xl font-extrabold text-[#0b0b0b] transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(135deg)" : "none" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-sm leading-relaxed text-[#0b0b0b]/75">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
