"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuest } from "@/providers/QuestProvider";
import { alienHints } from "@/lib/data";

// Pixel alien SVG — classic grey alien, 16×16 grid
function AlienSVG({ mood }: { mood: string }) {
  const irisColor = mood === "celebrating" ? "#C4872A" : mood === "excited" ? "#4A7C4A" : "#1A2530";
  const skin = "#A8BEC8";      // classic grey-blue alien skin
  const skinDark = "#8AAABB";  // slightly darker for body depth
  const detail = "#607080";    // dark grey for mouth / body lines
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 16 16"
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna */}
      <rect x="7" y="0" width="2" height="2" fill={skinDark} />
      <rect x="6" y="1" width="4" height="1" fill={skinDark} />
      <rect x="7" y="2" width="2" height="1" fill={skinDark} />

      {/* Head — large classic grey alien cranium */}
      <rect x="3" y="3" width="10" height="7" fill={skin} />
      <rect x="2" y="4" width="12" height="5" fill={skin} />

      {/* Large almond eyes (classic grey alien) */}
      <rect x="3" y="5" width="4" height="2" fill="#0A0A14" />
      <rect x="9" y="5" width="4" height="2" fill="#0A0A14" />
      {/* Iris highlight */}
      <rect x="4" y="5" width="2" height="1" fill={irisColor} />
      <rect x="10" y="5" width="2" height="1" fill={irisColor} />
      {/* Eye glint */}
      <rect x="5" y="5" width="1" height="1" fill="#E8EEF2" />
      <rect x="11" y="5" width="1" height="1" fill="#E8EEF2" />

      {/* Mouth — thin slit */}
      {mood === "celebrating" ? (
        <>
          <rect x="5" y="8" width="6" height="1" fill={detail} />
          <rect x="6" y="7" width="4" height="1" fill={detail} />
        </>
      ) : (
        <rect x="6" y="8" width="4" height="1" fill={detail} />
      )}

      {/* Body */}
      <rect x="4" y="10" width="8" height="4" fill={skinDark} />
      <rect x="3" y="11" width="10" height="2" fill={skinDark} />

      {/* Arms */}
      <rect x="1" y="11" width="3" height="2" fill={skin} />
      <rect x="12" y="11" width="3" height="2" fill={skin} />
      <rect x="0" y="12" width="2" height="1" fill={skin} />
      <rect x="14" y="12" width="2" height="1" fill={skin} />

      {/* Legs */}
      <rect x="5" y="14" width="2" height="2" fill={skinDark} />
      <rect x="9" y="14" width="2" height="2" fill={skinDark} />
    </svg>
  );
}

export function AlienCharacter() {
  const { cluesFound, alienMood, ufoDiscovered } = useQuest();
  const [showBubble, setShowBubble] = useState(true);
  const hint = alienHints[Math.min(cluesFound, 6)];

  return (
    <div className="relative flex-shrink-0">
      {/* Alien sprite — click to toggle bubble */}
      <motion.button
        onClick={() => setShowBubble((p) => !p)}
        animate={
          alienMood === "celebrating"
            ? { rotate: [0, -10, 10, -10, 0], y: [0, -4, 0] }
            : alienMood === "excited"
            ? { y: [0, -3, 0] }
            : { y: [0, -2, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: alienMood === "celebrating" ? 0.6 : alienMood === "excited" ? 1 : 3,
          ease: "easeInOut",
        }}
        className="focus:outline-none cursor-pointer block"
        title="Click the alien!"
        aria-label="Alien guide"
      >
        <AlienSVG mood={alienMood} />
      </motion.button>

      {/* Speech bubble — absolute, floats left of alien, never pushes navbar content */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 6 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: 6 }}
            className="absolute right-full top-0 mr-3 z-50 pointer-events-none"
          >
            <div className="relative bg-cream border-2 border-brown-dark px-3 py-2 w-[148px]">
              <p className="font-pixel text-[7px] text-brown-dark leading-relaxed">
                {ufoDiscovered ? "thank you!! 👽" : hint}
              </p>
              {/* Tail pointing right toward alien */}
              <span
                className="absolute -right-[9px] top-[9px] w-2 h-2 bg-cream border-r-2 border-b-2 border-brown-dark"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
