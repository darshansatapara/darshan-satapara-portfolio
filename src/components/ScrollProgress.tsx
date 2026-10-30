"use client";

import { useEffect, useRef } from "react";

/**
 * Hard accent bar across the very top edge that fills as the page scrolls.
 * No glow, no easing — a flat brutalist read-out of scroll position.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? doc.scrollTop / max : 0;
      bar.style.transform = `scaleX(${p})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-[var(--accent)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
