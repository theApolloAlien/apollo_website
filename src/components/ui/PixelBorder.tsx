"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PixelBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: "brown" | "green" | "amber" | "cream";
  size?: "sm" | "md" | "lg";
}

const colorMap = {
  brown: "#2C1810",
  green: "#1E3A1E",
  amber: "#C4872A",
  cream: "#F2EDE4",
};

export function PixelBorder({
  children,
  className,
  color = "brown",
  size = "md",
}: PixelBorderProps) {
  const c = colorMap[color];
  const s = size === "sm" ? 2 : size === "lg" ? 6 : 4;

  // Pixel-art corner border via box-shadow
  const shadowStyle = {
    boxShadow: `
      0 0 0 ${s}px ${c},
      ${s}px 0 0 0 ${c},
      -${s}px 0 0 0 ${c},
      0 ${s}px 0 0 ${c},
      0 -${s}px 0 0 ${c}
    `,
  };

  return (
    <div
      className={cn("relative", className)}
      style={shadowStyle}
    >
      {/* Corner brackets */}
      <span
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: 12,
          height: 12,
          borderTop: `${s}px solid ${c}`,
          borderLeft: `${s}px solid ${c}`,
        }}
      />
      <span
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 12,
          height: 12,
          borderTop: `${s}px solid ${c}`,
          borderRight: `${s}px solid ${c}`,
        }}
      />
      <span
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 12,
          height: 12,
          borderBottom: `${s}px solid ${c}`,
          borderLeft: `${s}px solid ${c}`,
        }}
      />
      <span
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: 12,
          height: 12,
          borderBottom: `${s}px solid ${c}`,
          borderRight: `${s}px solid ${c}`,
        }}
      />
      {children}
    </div>
  );
}
