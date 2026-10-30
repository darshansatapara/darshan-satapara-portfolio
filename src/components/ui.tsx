"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Magnetic hover — element drifts toward the cursor, springs back */
export function Magnetic({
  children,
  strength = 0.4,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

/* Reveal a whole block on scroll-in */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Per-word stagger reveal — for big headings */
export function RevealWords({
  text,
  className,
  wordClassName,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: "0.6em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span className={`inline-block ${wordClassName ?? ""}`} variants={word}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* Small mono label with a dot */
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono-x inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-[var(--fg-dim)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      {children}
    </span>
  );
}

/* Count up when scrolled into view — plain IO + rAF, always lands on `value`.
   Failsafe writes the final number if the observer never fires (e.g. a
   zero-size/occluded viewport), so a stat never gets stuck at 0. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started) return;
      started = true;
      if (reduce) {
        el.textContent = String(value);
        return;
      }
      const dur = 1400;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(eased * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const e of entries) {
                if (e.isIntersecting) {
                  run();
                  io?.disconnect();
                }
              }
            },
            { threshold: 0 },
          )
        : null;

    if (io) io.observe(el);
    else run();

    // never leave it on 0 if the observer can't fire
    const fail = window.setTimeout(() => {
      if (!started) el.textContent = String(value);
    }, 1500);

    return () => {
      io?.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(fail);
    };
  }, [value]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

/* One button, variant-driven, with arrow sweep */
export function Button({
  children,
  href,
  variant = "orange",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "orange" | "outline" | "light";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles = {
    orange: "bg-[var(--accent)] text-white hover:bg-[var(--accent-2)]",
    outline:
      "border border-[var(--line)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    light: "bg-[var(--fg)] text-[var(--bg)] hover:opacity-90",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
