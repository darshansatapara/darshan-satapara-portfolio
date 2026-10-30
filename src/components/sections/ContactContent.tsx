"use client";

import { useState } from "react";
import { site } from "@/lib/data";

export default function ContactContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="bg-[var(--bg)] text-[var(--fg)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2">
          {/* Email */}
          <div className="border-b-2 border-[var(--line)] px-5 py-10 md:border-r-2">
            <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
              [ direct contact ]
            </span>
            <div className="mt-5 break-all font-display text-xl font-extrabold md:text-2xl">
              {site.contact.email}
            </div>
            <div className="mt-6 flex flex-wrap">
              <a
                href={`mailto:${site.contact.email}`}
                className="brut-press -ml-0.5 border-2 border-[var(--line)] bg-[var(--accent)] px-5 py-2.5 font-mono-x text-xs font-bold uppercase tracking-widest text-white first:ml-0"
              >
                Send mail →
              </a>
              <button
                onClick={copyEmail}
                className="brut-press -ml-0.5 border-2 border-[var(--line)] bg-[var(--paper)] px-5 py-2.5 font-mono-x text-xs font-bold uppercase tracking-widest"
              >
                {copied ? "Copied ✓" : "Copy email"}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="border-b-2 border-[var(--line)] px-5 py-10">
            <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
              [ direct line ]
            </span>
            <div className="mt-5 font-display text-xl font-extrabold md:text-2xl">
              {site.contact.phone}
            </div>
            <div className="mt-6">
              <a
                href={site.contact.phoneHref}
                className="brut-press inline-block border-2 border-[var(--line)] bg-[var(--accent)] px-5 py-2.5 font-mono-x text-xs font-bold uppercase tracking-widest text-white"
              >
                Call / WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="grid sm:grid-cols-3">
          {site.socials.map((s, i) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener"
              className={`hl-hover border-b-2 border-[var(--line)] px-5 py-8 ${i < 2 ? "sm:border-r-2" : ""}`}
            >
              <div className="flex items-center justify-between font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
                {s.label}
                <span className="text-[var(--accent)]">↗</span>
              </div>
              <div className="mt-3 font-display text-lg font-extrabold">{s.handle}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
