"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClueMarker } from "@/components/ui/ClueMarker";
import { experience } from "@/lib/data";

function RedactedStamp({ revealed }: { revealed: boolean }) {
  return (
    <div className="relative inline-block">
      <span
        className={`font-pixel text-[6px] px-2 py-1 border-2 transition-all duration-500 ${
          revealed
            ? "border-amber text-amber bg-transparent"
            : "border-brown-dark text-brown-dark bg-brown-dark"
        }`}
      >
        {revealed ? "▸ CLUE_DECRYPTED" : "██████████"}
      </span>
    </div>
  );
}

export function ExperienceSection() {
  const [stampRevealed, setStampRevealed] = useState(false);

  return (
    <section id="experience" className="py-24 px-4 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="INTEL_DATA // SECTOR_03" title="MISSION_LOGS" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-brown-dark/20" />

          <div className="space-y-10 pl-10 md:pl-16">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <span className="absolute -left-10 md:-left-16 top-1 w-4 h-4 border-2 border-brown-dark bg-cream flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-brown-dark" />
                </span>

                <div className="border-2 border-brown-dark p-5 bg-cream hover:bg-brown-dark/5 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-mono font-bold text-sm text-brown-dark leading-relaxed">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-sm font-bold text-brown-dark mt-1">{exp.org}</p>
                    </div>
                    <span className="font-pixel text-[8px] text-brown-dark border border-amber px-2 py-0.5">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="font-pixel text-[8px] text-amber mt-0.5 shrink-0">▸</span>
                        <p className="font-mono text-sm text-brown-dark leading-[1.6]">{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Redacted stamp clue */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-10 md:-left-16 top-1 w-4 h-4 border-2 border-green-mid bg-cream flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-green-mid animate-blink" />
              </span>

              <ClueMarker clueIndex={3} hint="REDACTED FILE UNLOCKED">
                <div
                  className="border-2 border-dashed border-brown-mid p-4 cursor-pointer hover:border-amber transition-colors"
                  onMouseEnter={() => setStampRevealed(true)}
                  onMouseLeave={() => setStampRevealed(false)}
                >
                  <div className="font-pixel text-[7px] text-brown-mid tracking-widest mb-2">
                    ▌ FILE_ID: #04-REDACTED
                  </div>
                  <div className="flex items-center gap-3">
                    <RedactedStamp revealed={stampRevealed} />
                    <span className="font-pixel text-[6px] text-brown-mid">
                      {stampRevealed ? "UFO SIGHTING LOGGED — SECTOR_04" : "hover to decrypt"}
                    </span>
                  </div>
                </div>
              </ClueMarker>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
