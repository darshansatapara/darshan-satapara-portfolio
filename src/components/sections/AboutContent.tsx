import { about, site } from "@/lib/data";

export default function AboutContent() {
  const s = about.sections;
  return (
    <>
      {/* Bio + links */}
      <section className="border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="max-w-3xl font-display text-xl font-extrabold leading-[1.4] md:text-2xl">
            {s.intro.bio}
          </p>
          <div className="mt-8 flex flex-wrap">
            {site.socials.map((so) => (
              <a
                key={so.label}
                href={so.url}
                target="_blank"
                rel="noopener"
                className="hl-hover -ml-0.5 border-2 border-[var(--line)] px-5 py-2.5 font-mono-x text-xs font-bold uppercase tracking-widest"
              >
                {so.label} ↗
              </a>
            ))}
            {site.resumes.map((r) => (
              <a
                key={r.label}
                href={r.file}
                target="_blank"
                rel="noopener"
                className="-ml-0.5 border-2 border-[var(--line)] bg-[var(--accent)] px-5 py-2.5 font-mono-x text-xs font-bold uppercase tracking-widest text-white"
              >
                {r.label} ↓
              </a>
            ))}
          </div>

          {/* Education / certs / languages */}
          <div className="mt-14 grid md:grid-cols-3">
            <div className="brut-flat flex flex-col justify-between bg-[var(--paper)] p-6 md:col-span-2">
              <div>
                <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
                  [ education ]
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold uppercase">{s.education.degree}</h3>
                <div className="mt-2 text-sm text-[var(--fg-dim)]">{s.education.institution}</div>
              </div>
              <div className="mt-8 flex items-end justify-between border-t-2 border-[var(--line)] pt-4">
                <span className="font-mono-x text-xs uppercase tracking-widest text-[var(--fg-dim)]">
                  {s.education.period}
                </span>
                <span className="font-display text-3xl font-extrabold">
                  {s.education.cgpa}
                  <span className="ml-1 font-mono-x text-xs uppercase tracking-widest text-[var(--fg-dim)]">CGPA</span>
                </span>
              </div>
            </div>

            <div className="brut-flat -mt-0.5 bg-[var(--paper)] p-6 md:-mt-0 md:-ml-0.5">
              <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
                [ certificates ]
              </span>
              <ul className="mt-5 space-y-4">
                {s.certificates.map((c) => (
                  <li key={c.name}>
                    <div className="font-display text-sm font-extrabold uppercase">{c.name}</div>
                    <div className="text-sm text-[var(--fg-dim)]">{c.issuer}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="brut-flat -mt-0.5 flex flex-wrap items-center gap-x-6 gap-y-2 bg-[var(--paper)] p-6 md:col-span-3">
              <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
                [ languages ]
              </span>
              {s.languages.map((l) => (
                <span key={l} className="font-display text-sm font-extrabold uppercase">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="invert border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="border-b-2 border-[var(--line)] pb-5 font-display text-3xl font-extrabold uppercase md:text-5xl">
            Technical toolkit
          </h2>
          <div className="grid md:grid-cols-2">
            {s.toolkit.map((t, i) => (
              <div
                key={t.group}
                className={`border-b-2 border-[var(--line)] py-6 md:px-6 ${i % 2 === 0 ? "md:border-r-2" : ""}`}
              >
                <div className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--hl)]">
                  {String(i + 1).padStart(2, "0")} / {t.group}
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <li key={it} className="border-2 border-[var(--line)] px-2.5 py-1 font-mono-x text-xs">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond code */}
      <section className="border-b-2 border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
            [ beyond code ]
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[1.05] md:text-5xl">
            {s.beyondCode.heading}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--fg-dim)]">
            {s.beyondCode.intro}
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4">
            {s.beyondCode.channels.map((ch, i) => (
              <a
                key={ch.name + ch.platform}
                href={ch.url}
                target="_blank"
                rel="noopener"
                className={`brut-flat brut-press brut-pop -mt-0.5 flex flex-col bg-[var(--paper)] p-5 sm:-ml-0.5 ${i === 0 ? "sm:ml-0" : ""}`}
              >
                <div className="flex items-center justify-between font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                  {ch.platform}
                  <span>↗</span>
                </div>
                <h3 className="mt-5 font-display text-base font-extrabold uppercase">{ch.name}</h3>
                <div className="mt-1 text-sm text-[var(--fg-dim)]">{ch.handle}</div>
                <p className="mt-3 text-sm text-[var(--fg-faint)]">{ch.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
