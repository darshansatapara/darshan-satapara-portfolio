import { home } from "@/lib/data";

export default function Marquee() {
  const row = [...home.sections.skillsMarquee, ...home.sections.skillsMarquee];
  return (
    <div
      className="border-b-2 border-[#0b0b0b] py-4 text-[#f2f0e9]"
      style={{ background: "var(--c-blue)" }}
    >
      <div className="marquee-mask overflow-hidden">
        <div className="marquee" style={{ ["--dur" as string]: "26s" }}>
          {row.map((s, i) => (
            <span
              key={i}
              className="flex items-center whitespace-nowrap font-display text-xl font-extrabold uppercase md:text-2xl"
            >
              <span className="px-6">{s}</span>
              <span className="text-[var(--hl)]">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
