"use client";

import React from "react";
import { motion } from "framer-motion";

// Pixel UFO SVG
function UFOSVG({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 32 20"
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dome — metallic grey */}
      <rect x="12" y="0" width="8" height="2" fill="#9AAEBB" />
      <rect x="10" y="2" width="12" height="2" fill="#8A9EAC" />
      <rect x="9" y="4" width="14" height="2" fill="#607080" />

      {/* Windows on dome */}
      <rect x="13" y="2" width="2" height="2" fill="#C4872A" opacity="0.8" />
      <rect x="17" y="2" width="2" height="2" fill="#C4872A" opacity="0.8" />

      {/* Main body — metallic grey */}
      <rect x="4" y="6" width="24" height="4" fill="#8A9EAC" />
      <rect x="2" y="7" width="28" height="3" fill="#2E3A42" />
      {/* Metallic highlight strip */}
      <rect x="4" y="6" width="24" height="1" fill="#B8CDD8" opacity="0.9" />

      {/* Lights */}
      <rect x="5" y="8" width="2" height="2" fill="#C4872A" />
      <rect x="10" y="8" width="2" height="2" fill="#4A7C4A" />
      <rect x="15" y="8" width="2" height="2" fill="#C4872A" />
      <rect x="20" y="8" width="2" height="2" fill="#4A7C4A" />
      <rect x="25" y="8" width="2" height="2" fill="#C4872A" />

      {/* Underbelly */}
      <rect x="8" y="10" width="16" height="2" fill="#607080" />
      <rect x="12" y="12" width="8" height="2" fill="#2E3A42" />
    </svg>
  );
}

interface UFOFloatingProps {
  className?: string;
  size?: number;
}

export function UFOFloating({ className, size = 80 }: UFOFloatingProps) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      <UFOSVG size={size} />
    </motion.div>
  );
}

interface UFORevealProps {
  onDiscovered?: () => void;
  isDiscovered?: boolean;
}

export function UFOReveal({ onDiscovered, isDiscovered }: UFORevealProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ y: -200, opacity: 0 }}
      animate={isDiscovered ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* UFO */}
      <motion.div
        animate={isDiscovered ? { y: [0, -6, 0], rotate: [-1, 1, -1] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="cursor-pointer"
        onClick={onDiscovered}
      >
        <UFOSVG size={120} />
      </motion.div>

      {/* Tractor beam */}
      {isDiscovered && (
        <motion.div
          className="relative"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 140, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Beam gradient */}
          <div
            className="w-16 mx-auto"
            style={{
              height: 140,
              background:
                "linear-gradient(to bottom, rgba(196,135,42,0.6), rgba(196,135,42,0))",
              clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Beam scanlines */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 w-10 h-px bg-amber opacity-40"
              style={{ top: 20 + i * 30 }}
              animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
