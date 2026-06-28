"use client";

import React from "react";

export function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block font-pixel text-xs text-brown-dark border-2 border-brown-dark px-3 py-1.5 hover:bg-brown-dark hover:text-cream transition-colors duration-150">
      {label}
    </span>
  );
}
