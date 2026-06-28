"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { useStanding } from "@/lib/useStanding";

export function HeroSection() {
  const standing = useStanding();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden"
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #2C1810, #2C1810 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Classified header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-12 bg-brown-dark opacity-40" />
          <span className="font-pixel text-[7px] text-green-mid tracking-[0.3em]">CLASSIFIED // SECTOR_07</span>
          <span className="h-px w-12 bg-brown-dark opacity-40" />
        </motion.div>

        {/* File label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-pixel text-[8px] text-amber tracking-[0.4em] mb-4"
        >
          ▌ PERSONNEL FILE — SUBJECT CONFIRMED
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-pixel text-4xl md:text-6xl text-brown-dark leading-tight tracking-tight mb-2"
        >
          JOSHUA
          <br />
          <span className="text-brown-mid">APOLLO</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-1 w-48 mx-auto bg-brown-dark my-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-mono text-sm md:text-base text-brown-mid max-w-xl mx-auto leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Academic standing — auto-updates with the calendar */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="font-pixel text-[8px] text-green-mid tracking-[0.2em] uppercase mt-4"
        >
          ▌ {standing.studentLine}
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <CopyEmailButton
              email={profile.email}
              className="font-pixel text-[8px] text-brown-dark border border-brown-dark px-3 py-2 hover:bg-brown-dark hover:text-cream transition-colors tracking-wide"
            >
              ▸ {profile.email}
            </CopyEmailButton>
          {[
            { label: profile.github, href: `https://${profile.github}` },
            { label: profile.linkedin, href: `https://${profile.linkedin}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-[8px] text-brown-dark border border-brown-dark px-3 py-2 hover:bg-brown-dark hover:text-cream transition-colors tracking-wide"
            >
              ▸ {label}
            </a>
          ))}
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6"
        >
          <span className="font-pixel text-[8px] bg-green-dark text-cream px-4 py-2 inline-block">
            AVAILABILITY: {standing.availability}
          </span>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          id="scroll-prompt"
          className="mt-12"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-pixel text-[7px] text-brown-mid tracking-widest"
          >
            ▼ SCROLL TO EXPLORE ▼
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
