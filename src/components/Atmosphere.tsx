"use client";

import { useEffect, useRef, useState } from "react";

export default function Atmosphere() {
  const barRef = useRef<HTMLDivElement>(null);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    // only run the spotlight on fine-pointer (mouse) devices
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!fine) return;
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [fine]);

  return (
    <>
      <div ref={barRef} className="scroll-bar w-full" style={{ transform: "scaleX(0)" }} />
      <div className="grain" aria-hidden />
      {fine && <div className="spotlight" aria-hidden />}
    </>
  );
}
