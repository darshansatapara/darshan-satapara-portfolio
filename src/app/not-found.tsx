import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center border-b-2 border-[var(--line)] bg-[var(--paper)] pt-[57px] text-[var(--fg)]">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20">
        <span className="font-mono-x text-xs font-bold uppercase tracking-widest text-[var(--fg-dim)]">
          [ error 404 ]
        </span>
        <h1 className="mt-5 font-display text-[28vw] font-extrabold leading-[0.85] tracking-tighter md:text-[16rem]">
          4<span className="hl">0</span>4
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--fg-dim)]">
          This route returned nothing. The page was moved, renamed, or never
          shipped. Nothing broke — you just ran off the edge of the map.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="brut-press border-2 border-[var(--line)] bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white"
          >
            ← Back home
          </Link>
          <Link
            href="/work"
            className="brut-press border-2 border-[var(--line)] bg-[var(--paper)] px-6 py-3 text-xs font-bold uppercase tracking-widest"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
