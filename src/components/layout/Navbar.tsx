"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "PROFILE" },
  { href: "#skills", label: "CAPABILITIES" },
  { href: "#projects", label: "EXPERIMENTS" },
  { href: "#experience", label: "MISSIONS" },
  { href: "#achievements", label: "COMMENDATIONS" },
  { href: "#contact", label: "TRANSMIT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
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
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-pixel text-[7px] text-brown-mid hover:text-brown-dark transition-colors tracking-wider"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Hamburger — visible below lg */}
          <button
            className="lg:hidden font-pixel text-[10px] text-brown-dark"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile/tablet menu — visible below lg */}
      {menuOpen && (
        <div className="lg:hidden bg-cream border-t-2 border-brown-dark px-4 py-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block font-pixel text-[8px] text-brown-dark py-2 border-b border-brown-dark/20"
              onClick={() => setMenuOpen(false)}
            >
              ▸ {label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
