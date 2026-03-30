"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClueMarker } from "@/components/ui/ClueMarker";
import { education, coursework } from "@/lib/data";

// Security clearance badge with hidden code
function ClearanceBadge({ revealed }: { revealed: boolean }) {
  return (
    <div className="border-2 border-brown-dark p-3 inline-flex flex-col items-center gap-1 min-w-[80px]">
      <div className="font-pixel text-[5px] text-brown-mid tracking-widest">CLEARANCE</div>
      <div className="font-pixel text-[12px] text-brown-dark">★</div>
      <div className={`font-pixel text-[5px] transition-all duration-500 ${revealed ? "text-amber" : "text-brown-dark/30"}`}>
        {revealed ? "CODE: UFO-51" : "LEVEL-5"}
      </div>
    </div>
  );
}

export function EducationSection() {
  const [badgeRevealed, setBadgeRevealed] = useState(false);

  return (
    <section id="education" className="py-24 px-4 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="INTEL_DATA // SECTOR_05" title="CLEARANCE_RECORDS" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education cards */}
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="border-2 border-brown-dark p-5 bg-cream relative"
              >
                {/* Corner pixel brackets */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-green-mid" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-green-mid" />

                <div className="flex justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="font-pixel text-[10px] text-brown-dark leading-relaxed">
                      {edu.institution}
                    </h3>
                    <p className="font-mono text-sm text-brown-dark mt-1">{edu.degree}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-pixel text-[9px] text-brown-dark">GPA {edu.gpa}</div>
                    <div className="font-pixel text-[8px] text-brown-dark mt-1">{edu.period}</div>
                  </div>
                </div>

                {i === 0 && (
                  <span className="font-pixel text-[8px] bg-green-dark text-cream px-2 py-0.5">
                    CURRENT
                  </span>
                )}
              </motion.div>
            ))}

            {/* Clearance badge clue */}
            <ClueMarker clueIndex={5} hint="CLEARANCE CODE FOUND">
              <div
                className="cursor-pointer"
                onMouseEnter={() => setBadgeRevealed(true)}
                onMouseLeave={() => setBadgeRevealed(false)}
              >
                <ClearanceBadge revealed={badgeRevealed} />
                {!badgeRevealed && (
                  <p className="font-pixel text-[6px] text-brown-mid mt-2">hover badge to reveal</p>
                )}
              </div>
            </ClueMarker>
          </div>

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-pixel text-[9px] text-brown-dark tracking-widest mb-4">
              ▌ RELEVANT_COURSEWORK
            </div>
            <div className="grid grid-cols-2 gap-2">
              {coursework.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 py-2 border-b border-brown-dark/20"
                >
                  <span className="font-pixel text-[8px] text-amber shrink-0">▸</span>
                  <span className="font-mono text-xs text-brown-dark">{c}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
