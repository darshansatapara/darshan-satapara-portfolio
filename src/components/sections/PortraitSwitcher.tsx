"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";

type Shirt = {
  key: string;
  label: string;
  src: string;
  swatch: string;
};

const SHIRTS: Shirt[] = [
  { key: "olive", label: "Olive", src: "/portrait-olive.webp", swatch: "#5c5a3f" },
  { key: "beige", label: "Beige", src: "/portrait-beige.webp", swatch: "#c3ad90" },
  { key: "pink", label: "Pink", src: "/portrait-pink.webp", swatch: "#e3bcbe" },
];

export default function PortraitSwitcher({ shortRole }: { shortRole: string }) {
  const [active, setActive] = useState(0);
  const current = SHIRTS[active];

  return (
    <div
      className="relative flex items-stretch gap-4 p-6 md:gap-5 md:p-8"
      style={{ background: "var(--c-amber)" }}
    >
      {/* portrait frame */}
      <div
        data-reveal
        suppressHydrationWarning
        style={{ "--i": 1 } as CSSProperties}
        className="relative aspect-[3/4] w-full flex-1 border-2 border-[var(--line)] bg-[var(--paper)]"
      >
        {SHIRTS.map((s, i) => (
          <Image
            key={s.key}
            src={s.src}
            alt={`Darshan Satapara — ${s.label} shirt`}
            fill
            priority={i === 0}
            sizes="(max-width:768px) 100vw, 40vw"
            className="object-cover transition-opacity duration-300 [filter:contrast(1.03)_saturate(1.08)]"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
        <span className="absolute bottom-0 left-0 z-10 border-r-2 border-t-2 border-[var(--line)] bg-[var(--accent)] px-3 py-1 font-mono-x text-[0.65rem] font-bold uppercase tracking-widest text-white">
          {shortRole}
        </span>
      </div>

      {/* shirt swatch switcher */}
      <div
        className="flex shrink-0 flex-col items-center gap-3 border-2 border-[var(--line)] bg-[var(--paper)] p-2.5"
        role="group"
        aria-label="Change shirt color"
      >
        <span className="font-mono-x text-[0.5rem] font-bold uppercase tracking-widest text-[var(--fg-dim)] [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb] md:text-[0.5rem]">
          Shirt
        </span>
        {SHIRTS.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            aria-label={`${s.label} shirt`}
            title={s.label}
            className="brut-press h-8 w-8 border-2 border-[var(--line)] transition-transform"
            style={{
              background: s.swatch,
              boxShadow: i === active ? "0 0 0 2px var(--paper), 0 0 0 4px var(--line)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
