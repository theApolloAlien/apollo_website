"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  label: string;
  level?: number; // 0-100, optional
}

export function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block font-pixel text-xs text-brown-dark border-2 border-brown-dark px-3 py-1.5 hover:bg-brown-dark hover:text-cream transition-colors duration-150">
      {label}
    </span>
  );
}

export function SkillBar({ label, level }: SkillBarProps) {
  if (!level) return <SkillTag label={label} />;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="font-pixel text-[7px] text-brown-dark">{label}</span>
        <span className="font-pixel text-[6px] text-brown-mid">{level}%</span>
      </div>
      <div className="w-full h-3 bg-cream border-2 border-brown-dark overflow-hidden">
        <motion.div
          className="h-full bg-brown-dark"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
