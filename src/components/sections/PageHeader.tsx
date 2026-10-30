export default function PageHeader({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="relative border-b-2 border-[var(--line)] bg-[var(--paper)] pt-[57px] text-[var(--fg)]">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-14 md:pb-16 md:pt-20" data-reveal suppressHydrationWarning>
        <span
          className="ink-cell inline-block px-3 py-1 font-mono-x text-xs font-bold uppercase tracking-widest"
          style={{ background: "var(--c-lime)" }}
        >
          {label}
        </span>
        <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tighter md:text-8xl">
          {title}
        </h1>
        {sub && <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--fg-dim)]">{sub}</p>}
      </div>
    </section>
  );
}
