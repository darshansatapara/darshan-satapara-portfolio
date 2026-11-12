/**
 * Theme state lives on html[data-theme]. "light" is the default and is
 * represented by the attribute being absent, so SSR markup needs no theme.
 */
export const THEMES = ["light", "dark", "rush"] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_LABEL: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  rush: "Rush",
};

/** Fired on window whenever the theme changes, so every toggle stays in sync. */
export const THEME_EVENT = "themechange";

export function currentTheme(): Theme {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "dark" || t === "rush" ? t : "light";
}

export function nextTheme(t: Theme): Theme {
  return THEMES[(THEMES.indexOf(t) + 1) % THEMES.length];
}

// Theme a view transition has been asked for but not applied yet, so rapid
// presses cycle from where the user is heading rather than where they were.
let pending: Theme | null = null;
// Every request gets a number; only the latest may apply. A skipped (superseded)
// view transition still runs its update, possibly after a newer one.
let requestId = 0;

/** Advance to the next theme in the cycle (toggle button and "T" hotkey). */
export function cycleTheme(origin?: { x: number; y: number }) {
  setTheme(nextTheme(pending ?? currentTheme()), origin);
}

function apply(t: Theme) {
  pending = null;
  const root = document.documentElement;
  if (t === "light") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", t);
  try {
    localStorage.setItem("theme", t);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: t }));
}

/**
 * Switch theme with a circular wipe that grows out of (x, y) — the button that
 * was pressed — using the View Transitions API. Falls back to an instant swap
 * where the API is missing or the user prefers reduced motion.
 */
export function setTheme(t: Theme, origin?: { x: number; y: number }) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => {
      ready: Promise<void>;
      finished: Promise<void>;
      updateCallbackDone: Promise<void>;
    };
  };
  const id = ++requestId;
  if (reduce || typeof doc.startViewTransition !== "function") {
    apply(t);
    return;
  }
  const x = origin?.x ?? window.innerWidth - 40;
  const y = origin?.y ?? 28;
  const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const root = document.documentElement.style;
  root.setProperty("--vt-x", `${x}px`);
  root.setProperty("--vt-y", `${y}px`);
  root.setProperty("--vt-r", `${r}px`);
  pending = t;
  const vt = doc.startViewTransition(() => {
    if (id === requestId) apply(t);
  });
  // pressing again mid-wipe skips the old transition; that rejection is expected
  const ignore = () => {};
  vt.ready.catch(ignore);
  vt.finished.catch(ignore);
  vt.updateCallbackDone.catch(ignore);
}
