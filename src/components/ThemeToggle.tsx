"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Flips the whole palette by toggling html[data-theme]. The no-flash script in
 * layout sets the initial theme before paint; this just reflects + persists it.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    if (next === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
    setTheme(next);
  };

  // Before mount, render a neutral glyph so SSR and first client render match.
  const label = theme === null ? "◐" : theme === "dark" ? "☀" : "☾";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      className={className}
      suppressHydrationWarning
    >
      <span suppressHydrationWarning>{label}</span>
    </button>
  );
}
