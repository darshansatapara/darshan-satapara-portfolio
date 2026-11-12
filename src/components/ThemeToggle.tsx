"use client";

import { useSyncExternalStore } from "react";
import {
  THEME_EVENT,
  THEME_LABEL,
  currentTheme,
  cycleTheme,
  nextTheme,
  type Theme,
} from "@/lib/theme";

const GLYPH: Record<Theme, string> = { light: "☀", dark: "☾", rush: "⚡" };

function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

/**
 * Cycles Light → Dark → Rush by setting html[data-theme]. The no-flash script
 * in layout sets the initial theme before paint; this reflects + changes it.
 * Shows the CURRENT theme's glyph; the label says what a click switches to.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  // null on the server, so SSR and the hydration render agree
  const theme = useSyncExternalStore<Theme | null>(subscribe, currentTheme, () => null);

  const cycle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    cycleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };

  // Before mount, render a neutral glyph so SSR and first client render match.
  const label = theme === null ? "◐" : GLYPH[theme];
  const target = theme === null ? null : THEME_LABEL[nextTheme(theme)];

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={target ? `Theme: ${THEME_LABEL[theme!]}. Switch to ${target} (T)` : "Switch theme"}
      title={target ? `Theme: ${THEME_LABEL[theme!]} — press T for ${target}` : undefined}
      className={className}
      suppressHydrationWarning
    >
      <span suppressHydrationWarning>{label}</span>
    </button>
  );
}
