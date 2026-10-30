"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Watches every [data-reveal] element and toggles `.is-in` when it scrolls
 * into view. One observer for the whole document — no per-component wiring,
 * so server components stay server components. Re-runs on route change.
 *
 * Setup is deferred one frame so React finishes hydrating the tree before we
 * mutate the DOM — otherwise the added classes trip a hydration mismatch.
 * Hiding is gated behind html.reveal-on (added here, post-hydration), so the
 * SSR markup carries no hidden styles and content shows even with JS off.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;
    let failsafe = 0;

    // Defer one task so React finishes hydrating before we touch the DOM.
    // setTimeout (not rAF) still fires in a backgrounded/occluded tab.
    const start = window.setTimeout(() => {
      const root = document.documentElement;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

      root.classList.add("reveal-on");

      if (reduce || !("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-in"));
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io?.unobserve(e.target);
            }
          }
        },
        // threshold 0 fires the moment any edge enters — tall blocks that never
        // reach a higher ratio still reveal; negative bottom margin delays the cue
        { rootMargin: "0px 0px -8% 0px", threshold: 0 },
      );

      // reveal anything already in the viewport on load right away
      const vh = window.innerHeight;
      els.forEach((el) => {
        if (vh > 0 && el.getBoundingClientRect().top < vh * 0.92) el.classList.add("is-in");
        else io!.observe(el);
      });

      // safety net: never leave content hidden if IO never fires
      // (zero-size viewport, background tab, flaky observer)
      failsafe = window.setTimeout(() => {
        els.forEach((el) => el.classList.add("is-in"));
      }, 1600);
    }, 0);

    return () => {
      window.clearTimeout(start);
      io?.disconnect();
      if (failsafe) window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
