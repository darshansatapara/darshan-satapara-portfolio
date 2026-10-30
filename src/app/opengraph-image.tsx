import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f2f0e9";
const INK = "#0b0b0b";
const HL = "#e7ff39";
const DIM = "#46463f";

export default async function Image() {
  const font = await readFile(join(process.cwd(), "src/app/_og/JetBrainsMono-ExtraBold.ttf"));
  const tags = ["REACT", "NODE.JS", "PYTHON", "AI · LLM", "AUTOMATION"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          color: INK,
          fontFamily: "JBM",
          border: `16px solid ${INK}`,
          boxSizing: "border-box",
        }}
      >
        {/* top strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `6px solid ${INK}`,
            padding: "26px 44px",
            fontSize: 24,
            letterSpacing: 4,
          }}
        >
          <span>PORTFOLIO / {site.year}</span>
          <span>{site.location.city?.toUpperCase?.() ?? "AHMEDABAD"}, INDIA</span>
        </div>

        {/* name block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 48px",
          }}
        >
          <div style={{ display: "flex", fontSize: 150, lineHeight: 1, letterSpacing: -4 }}>
            DARSHAN
          </div>
          <div style={{ display: "flex", marginTop: 6 }}>
            <span
              style={{
                fontSize: 150,
                lineHeight: 1,
                letterSpacing: -4,
                background: HL,
                color: INK,
                padding: "0 18px",
              }}
            >
              SATAPARA
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 32, color: DIM, letterSpacing: 1 }}>
            Full-Stack · Python · AI Developer
          </div>
        </div>

        {/* tech strip */}
        <div style={{ display: "flex", borderTop: `6px solid ${INK}`, fontSize: 22, letterSpacing: 2 }}>
          {tags.map((t, i) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "20px 28px",
                borderRight: i < tags.length - 1 ? `6px solid ${INK}` : "none",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "JBM", data: font, weight: 800, style: "normal" }],
    },
  );
}
