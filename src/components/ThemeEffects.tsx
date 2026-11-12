"use client";

import { useEffect } from "react";
import { THEME_EVENT, currentTheme, cycleTheme } from "@/lib/theme";

/**
 * Site-wide theme behaviour, mounted once:
 *  - "T" cycles the theme from anywhere (ignored while typing in a field)
 *  - Rush theme only: sections lean with scroll velocity (--rush-skew), easing
 *    back to straight when you stop. Off under prefers-reduced-motion.
 */
export default function ThemeEffects() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "t" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
      cycleTheme();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let skew = 0;

    const tick = () => {
      const now = performance.now();
      const y = window.scrollY;
      const v = (y - lastY) / Math.max(now - lastT, 1); // px per ms
      lastY = y;
      lastT = now;
      // chase the target lean, then decay — clamp to ±2.5deg so text stays readable
      const target = Math.max(-2.5, Math.min(2.5, v * -1.2));
      skew += (target - skew) * 0.18;
      if (Math.abs(skew) < 0.01 && Math.abs(target) < 0.01) skew = 0;
      root.style.setProperty("--rush-skew", `${skew.toFixed(3)}deg`);
      raf = requestAnimationFrame(tick);
    };

    const sync = () => {
      cancelAnimationFrame(raf);
      root.style.removeProperty("--rush-skew");
      if (currentTheme() === "rush" && !reduce.matches) {
        lastY = window.scrollY;
        lastT = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    sync();
    window.addEventListener(THEME_EVENT, sync);
    reduce.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener(THEME_EVENT, sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  return <div className="rush-lines" aria-hidden />;
}
