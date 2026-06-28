"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { profile, education, coursework } from "@/lib/data";

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

        {/* ── Profile: bio + stats ── */}
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

          {/* Right: stats card */}
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
          </motion.div>
        </div>

        {/* ── Clearance records: education + coursework (merged in) ── */}
        <div className="mt-14 mb-6 flex items-center gap-3">
          <span className="font-pixel text-[8px] text-green-mid tracking-widest uppercase">
            ▌ CLEARANCE_RECORDS
          </span>
          <span className="flex-1 h-px bg-brown-dark opacity-30" />
          <span className="font-pixel text-[6px] text-brown-mid opacity-60 tracking-widest">
            CLASSIFIED
          </span>
        </div>

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
