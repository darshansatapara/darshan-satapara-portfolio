"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import portfolio from "../data/portfolio.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const NAV_LINKS = [
    { label: "WORK", href: "/work" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/service" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <nav
        aria-label="Primary"
        className="w-full sticky top-0 z-50 transition-all border-b-2"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--card-border)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter uppercase hover:opacity-70 transition-opacity relative z-[60]" // z-index ensures logo stays clickable if needed, though sidebar covers it usually
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--foreground)",
            }}
          >
            {portfolio.personal.firstName.toUpperCase()}
            <span style={{ color: "var(--primary)" }}>.DEV</span>
          </Link>

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* {["WORK", "ABOUT", "SERVICES"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold tracking-widest relative group transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--foreground)",
                }}
              >
                {item}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
              </Link>
            ))} */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.filter(({ label }) => label !== "CONTACT").map(
                ({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm font-bold tracking-widest relative group transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--foreground)",
                    }}
                  >
                    {label}
                    <span
                      className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: "var(--primary)" }}
                    />
                  </Link>
                ),
              )}

              {/* CTA */}
              <Link
                href="/contact"
                className="px-6 py-3 text-sm font-bold border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{
                  backgroundColor: "var(--secondary)",
                  borderColor: "var(--card-border)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-body)",
                }}
              >
                LET&apos;S TALK
              </Link>
            </div>

            {/* <Link
              href="#contact"
              className="px-6 py-3 text-sm font-bold border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              style={{
                backgroundColor: "var(--secondary)",
                borderColor: "var(--card-border)",
                color: "var(--foreground)",
                fontFamily: "var(--font-body)",
              }}
            >
              LET'S TALK
            </Link> */}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            className="md:hidden flex flex-col space-y-1.5 p-2 z-[60] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {/* Top Bar */}
            <span
              className={`block w-8 h-[3px] bg-black transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            {/* Middle Bar */}
            <span
              className={`block w-8 h-[3px] bg-black transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            {/* Bottom Bar */}
            <span
              className={`block w-8 h-[3px] bg-black transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* ==============================
          MOBILE SIDEBAR & OVERLAY
         ============================== */}

      {/* 1. Backdrop Overlay (Darkens the screen) */}
      <div
        className={`fixed inset-0 bg-black/50 z-[55] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. Sliding Sidebar Panel */}
      <div
        id="mobile-navigation"
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] z-[56] border-l-4 shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--card-border)",
        }}
      >
        <div className="flex flex-col h-full p-8 pt-24 space-y-6">
          {/* Menu Links */}
          {/* {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-3xl font-black tracking-tighter uppercase hover:text-[var(--primary)] transition-colors border-b-2 border-gray-200 pb-4"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--foreground)",
              }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))} */}
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-3xl font-black tracking-tighter uppercase hover:text-[var(--primary)] transition-colors border-b-2 border-gray-200 pb-4"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--foreground)",
              }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="mt-auto">
            <Link
              href={portfolio.personal.resume}
              download
              className="block w-full text-center px-6 py-4 text-sm font-bold border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all"
              style={{
                backgroundColor: "var(--primary)",
                borderColor: "var(--card-border)",
                color: "white",
                fontFamily: "var(--font-body)",
              }}
              onClick={() => setIsOpen(false)}
            >
              DOWNLOAD CV
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
