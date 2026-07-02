"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-4 bg-brown-dark/5 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="INTEL_DATA // SECTOR_04" title="COMMENDATIONS" />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-amber pl-4 py-2"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-pixel text-[9px] text-brown-dark leading-relaxed">{a.title}</h3>
                <span className="font-pixel text-[8px] text-amber shrink-0">{a.year}</span>
              </div>
              <div className="font-mono text-xs text-brown-dark mb-2">{a.org}</div>
              <p className="font-mono text-sm text-brown-dark leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
