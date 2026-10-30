"use client";

import { useEffect, useState } from "react";

const CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];
const RAIN = ["🗿", "🔥", "💀", "📈", "🧠", "😎", "🚀", "✨", "💯", "🤑"];

export default function Konami() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      idx = key === CODE[idx] ? idx + 1 : key === CODE[0] ? 1 : 0;
      if (idx === CODE.length) {
        idx = 0;
        setActive(true);
        setTimeout(() => setActive(false), 5000);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <div className="absolute inset-0 grid place-items-center">
        <p className="meme-caption animate-pulse text-5xl md:text-8xl">cheat code activated</p>
      </div>
      {Array.from({ length: 40 }).map((_, i) => {
        const left = (i * 37) % 100;
        const dur = 2 + ((i * 7) % 30) / 10;
        const delay = ((i * 13) % 20) / 10;
        return (
          <span
            key={i}
            className="absolute -top-10 text-3xl"
            style={{
              left: `${left}%`,
              animation: `konamiFall ${dur}s linear ${delay}s infinite`,
            }}
          >
            {RAIN[i % RAIN.length]}
          </span>
        );
      })}
      <style>{`@keyframes konamiFall{to{transform:translateY(110vh) rotate(360deg);}}`}</style>
    </div>
  );
}
