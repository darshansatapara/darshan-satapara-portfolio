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
    let mo: MutationObserver | null = null;
    const failsafes: number[] = [];

    // Defer one task so React finishes hydrating before we touch the DOM.
    // setTimeout (not rAF) still fires in a backgrounded/occluded tab.
    const start = window.setTimeout(() => {
      const root = document.documentElement;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seen = new WeakSet<Element>();

      root.classList.add("reveal-on");

      const show = (el: Element) => el.classList.add("is-in");

      // Register a batch of [data-reveal] elements: reveal what's on screen now,
      // observe the rest, and give the batch its own failsafe.
      const track = (els: HTMLElement[]) => {
        const fresh = els.filter((el) => !seen.has(el) && !el.classList.contains("is-in"));
        if (!fresh.length) return;
        fresh.forEach((el) => seen.add(el));

        if (!io) {
          fresh.forEach(show);
          return;
        }
        const vh = window.innerHeight;
        fresh.forEach((el) => {
          if (vh > 0 && el.getBoundingClientRect().top < vh * 0.92) show(el);
          else io!.observe(el);
        });
        // safety net: never leave content hidden if IO never fires
        // (zero-size viewport, background tab, flaky observer)
        failsafes.push(window.setTimeout(() => fresh.forEach(show), 1600));
      };

      if (!reduce && "IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                show(e.target);
                io?.unobserve(e.target);
              }
            }
          },
          // threshold 0 fires the moment any edge enters — tall blocks that never
          // reach a higher ratio still reveal; negative bottom margin delays the cue
          { rootMargin: "0px 0px -8% 0px", threshold: 0 },
        );
      }

      track(Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")));

      // Content streamed in later (Suspense boundaries, client navigation) adds
      // new [data-reveal] nodes after the first scan — pick those up too.
      mo = new MutationObserver((records) => {
        const added: HTMLElement[] = [];
        for (const r of records) {
          r.addedNodes.forEach((n) => {
            if (!(n instanceof HTMLElement)) return;
            if (n.matches("[data-reveal]")) added.push(n);
            added.push(...n.querySelectorAll<HTMLElement>("[data-reveal]"));
          });
        }
        track(added);
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }, 0);

    return () => {
      window.clearTimeout(start);
      io?.disconnect();
      mo?.disconnect();
      failsafes.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
}
