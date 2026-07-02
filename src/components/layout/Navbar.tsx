"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", id: "about", label: "PROFILE" },
  { href: "#projects", id: "projects", label: "EXPERIMENTS" },
  { href: "#experience", id: "experience", label: "MISSIONS" },
  { href: "#achievements", id: "achievements", label: "COMMENDATIONS" },
  { href: "#contact", id: "contact", label: "TRANSMIT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);

      // Scan progress — how far down the transmission we are (0..1)
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      // Scroll-spy — last section whose top has crossed 50% of the viewport
      const vh = window.innerHeight;
      let current: string | null = null;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < vh * 0.5) current = id;
      }
      setActiveId(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur border-b-2 border-brown-dark" : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-pixel text-[10px] text-brown-dark tracking-widest hover:text-green-dark transition-colors"
        >
          JOSHUA_APOLLO
        </a>

        {/* Desktop nav links — only show on large screens to avoid crowding */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map(({ href, id, label }) => (
            <a
              key={href}
              href={href}
              aria-current={activeId === id ? "true" : undefined}
              className={`font-pixel text-[7px] tracking-wider transition-colors border-b-2 pb-0.5 ${
                activeId === id
                  ? "text-green-dark border-green-mid"
                  : "text-brown-mid border-transparent hover:text-brown-dark"
              }`}
            >
              {label}
            </a>
          ))}

          {/* Résumé — always one click away */}
          <a
            href="/resume.pdf"
            download="apollo-resume.pdf"
            className="font-pixel text-[7px] text-amber border border-amber px-2 py-1 hover:bg-amber hover:text-cream transition-colors tracking-wider"
          >
            ▼ RESUME
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="/resume.pdf"
            download="apollo-resume.pdf"
            className="font-pixel text-[7px] text-amber border border-amber px-2 py-1 hover:bg-amber hover:text-cream transition-colors tracking-wider"
          >
            ▼ RESUME
          </a>
          <button
            className="font-pixel text-[10px] text-brown-dark"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Scan progress — thin tracking beam along the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brown-dark/10" aria-hidden>
        <div
          className="h-full bg-green-mid origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Mobile/tablet menu — visible below lg */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-cream border-t-2 border-brown-dark overflow-hidden"
          >
            <div className="px-4 py-4">
              {navLinks.map(({ href, id, label }) => (
                <a
                  key={href}
                  href={href}
                  aria-current={activeId === id ? "true" : undefined}
                  className={`block font-pixel text-[8px] py-2 border-b border-brown-dark/20 ${
                    activeId === id ? "text-green-dark" : "text-brown-dark"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  ▸ {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
