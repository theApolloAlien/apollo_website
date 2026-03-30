"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClueMarker } from "@/components/ui/ClueMarker";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { profile } from "@/lib/data";

// Pixel alien footprint
function AlienFootprint() {
  return (
    <svg width="24" height="32" viewBox="0 0 6 8" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="0" width="2" height="2" fill="#6B3A2A" />
      <rect x="1" y="2" width="4" height="3" fill="#6B3A2A" />
      <rect x="0" y="1" width="2" height="2" fill="#6B3A2A" />
      <rect x="4" y="1" width="2" height="2" fill="#6B3A2A" />
      <rect x="1" y="5" width="2" height="2" fill="#6B3A2A" />
      <rect x="3" y="5" width="2" height="2" fill="#6B3A2A" />
    </svg>
  );
}

const stats = [
  { label: "CLEARANCE", value: "LEVEL 5" },
  { label: "STATUS", value: "ACTIVE" },
  { label: "AFFILIATION", value: "NTU / NTU SENTINELS" },
  { label: "SPECIALISATION", value: "SEC + AI" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="INTEL_DATA // SECTOR_01" title="SUBJECT_PROFILE" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-l-4 border-brown-dark pl-4 mb-6">
              <p className="font-mono text-base text-brown-dark leading-[1.6]">
                {profile.tagline}
              </p>
              <p className="font-mono text-base text-brown-mid leading-[1.6] mt-3">
                {profile.objective}
              </p>
            </div>

            {/* Contact quick-links */}
            <div className="space-y-2">
              {[
                { label: "EMAIL", value: profile.email },
                { label: "GITHUB", value: profile.github },
                { label: "LINKEDIN", value: profile.linkedin },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3 font-mono text-sm">
                  <span className="font-pixel text-[8px] text-brown-dark w-24 shrink-0 mt-0.5 tracking-wider">
                    {label}
                  </span>
                  {label === "EMAIL" ? (
                    <CopyEmailButton
                      email={value}
                      className="text-brown-dark hover:text-green-dark transition-colors cursor-pointer"
                    >
                      {value}
                    </CopyEmailButton>
                  ) : (
                    <span className="text-brown-dark">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: stats card + footprint clue */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-2 border-brown-dark p-6 bg-cream">
              <div className="font-pixel text-[7px] text-amber tracking-widest mb-4">
                ▌ AGENT_STATS
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ label, value }) => (
                  <div key={label}>
                    <div className="font-pixel text-[8px] text-brown-dark mb-1">{label}</div>
                    <div className="font-mono text-sm text-brown-dark font-bold">{value}</div>
                  </div>
                ))}
              </div>

              {/* Decorative pixel grid */}
              <div className="mt-4 grid grid-cols-8 gap-1">
                {Array.from({ length: 32 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2"
                    style={{
                      background: i % 5 === 0 ? "#6B3A2A" : i % 3 === 0 ? "#1E3A1E" : "#E8E3DA",
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hidden clue: alien footprints */}
            <ClueMarker clueIndex={1} hint="ALIEN FOOTPRINTS FOUND" className="absolute -bottom-4 -right-4">
              <div className="flex gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <AlienFootprint />
                <div className="rotate-12 mt-3">
                  <AlienFootprint />
                </div>
                <div className="mt-1">
                  <AlienFootprint />
                </div>
              </div>
            </ClueMarker>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
