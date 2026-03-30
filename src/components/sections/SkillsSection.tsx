"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClueMarker } from "@/components/ui/ClueMarker";
import { SkillTag } from "@/components/ui/SkillBar";
import { skills } from "@/lib/data";

// Signal frequency blinking element
function SignalMeter() {
  const bars = [3, 5, 4, 7, 5, 3, 6, 4, 5, 7, 4, 3];
  return (
    <div className="flex items-end gap-0.5 h-8">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-1.5 bg-green-mid"
          style={{ height: h * 3 }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.4, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const skillGroups = [
  { label: "LANGUAGES", items: skills.languages },
  { label: "FRAMEWORKS & TOOLS", items: skills.frameworks },
  { label: "KEY DOMAINS", items: skills.domains },
  { label: "PLATFORMS", items: skills.platforms },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-brown-dark/5 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="INTEL_DATA // SECTOR_02" title="CAPABILITY_SCAN" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map(({ label, items }, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-brown-dark p-5 bg-cream relative"
            >
              {/* Corner brackets */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-amber" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-amber" />

              <div className="font-pixel text-[9px] text-brown-dark tracking-widest mb-4">
                ▌ {label}
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <SkillTag key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Signal frequency clue — md:col-span-2 anchors it to full grid width */}
          <div className="md:col-span-2">
            <ClueMarker clueIndex={2} hint="TRANSMISSION INTERCEPTED">
              <div className="border-2 border-green-dark p-4 flex items-center gap-4 w-full cursor-pointer hover:bg-green-dark/5 transition-colors">
                <div className="font-pixel text-[7px] text-green-mid tracking-widest">
                  ▌ FREQ_SCAN
                </div>
                <SignalMeter />
                <div className="font-pixel text-[6px] text-green-mid">
                  <span className="animate-blink">●</span> SIGNAL ACTIVE
                </div>
              </div>
            </ClueMarker>
          </div>
        </div>
      </div>
    </section>
  );
}
