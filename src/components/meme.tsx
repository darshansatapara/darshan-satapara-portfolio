"use client";

import { useEffect, useState } from "react";

/* Classic top/bottom Impact meme caption overlay */
export function MemeCaption({
  top,
  bottom,
  className = "",
}: {
  top?: string;
  bottom?: string;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex flex-col justify-between p-5 text-center ${className}`}>
      {top ? <p className="meme-caption text-2xl md:text-4xl">{top}</p> : <span />}
      {bottom ? <p className="meme-caption text-2xl md:text-4xl">{bottom}</p> : <span />}
    </div>
  );
}

/* Rubber-stamp badge, e.g. SHIPPED / APPROVED / NO CAP */
export function Stamp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`stamp inline-block px-3 py-1 text-sm ${className}`}
      style={{ color: "var(--cta)" }}
    >
      {children}
    </span>
  );
}

/**
 * Swappable meme slot.
 * Shows /public/memes/<name>.png (or .jpg/.webp/.gif) if it exists;
 * otherwise renders `fallback` (the hand-drawn SVG). Drop a real meme
 * image into public/memes/ and it replaces the fallback automatically —
 * no code change needed.
 */
const EXTS = ["svg", "png", "jpg", "jpeg", "webp", "gif"];

export function MemeSlot({
  name,
  fallback,
  alt,
  className = "",
}: {
  name: string;
  fallback: React.ReactNode;
  alt: string;
  className?: string;
}) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const ext of EXTS) {
        const url = `/memes/${name}.${ext}`;
        const ok = await new Promise<boolean>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img.naturalWidth > 0);
          img.onerror = () => resolve(false);
          img.src = url;
        });
        if (cancelled) return;
        if (ok) {
          setSrc(url);
          return;
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [name]);

  if (!src) return <div className={className}>{fallback}</div>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`object-contain ${className}`} />;
}
