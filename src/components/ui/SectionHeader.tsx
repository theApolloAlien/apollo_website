"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", className)}>
      {/* Classified label */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-pixel text-[8px] text-green-mid tracking-widest uppercase">
          ▌ {label}
        </span>
        <span className="flex-1 h-px bg-brown-dark opacity-30" />
        <span className="font-pixel text-[6px] text-brown-mid opacity-60 tracking-widest">
          CLASSIFIED
        </span>
      </div>

      {/* Main title */}
      <h2 data-section-header="true" className="font-pixel text-xl md:text-2xl text-brown-dark leading-relaxed tracking-wide">
        {title}
      </h2>

      {/* Underline pixel decoration */}
      <div className="mt-3 flex gap-1">
        <span className="w-8 h-1 bg-brown-dark" />
        <span className="w-4 h-1 bg-green-mid" />
        <span className="w-2 h-1 bg-amber" />
      </div>
    </div>
  );
}
