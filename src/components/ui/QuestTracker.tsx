"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuest } from "@/providers/QuestProvider";

export function QuestTracker() {
  const { cluesFound, totalClues, ufoDiscovered, resetQuest } = useQuest();
  const [pulse, setPulse] = useState(false);
  const [prevCount, setPrevCount] = useState(cluesFound);

  useEffect(() => {
    if (cluesFound > prevCount) {
      setPulse(true);
      setTimeout(() => setPulse(false), 800);
      setPrevCount(cluesFound);
    }
  }, [cluesFound, prevCount]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2"
    >
      {/* Main tracker badge */}
      <motion.div
        animate={pulse ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 0.4 }}
        className={`border-2 px-3 py-2 font-pixel text-[7px] leading-relaxed ${
          ufoDiscovered
            ? "border-amber bg-brown-dark text-amber"
            : "border-brown-dark bg-cream text-brown-dark"
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`w-2 h-2 ${pulse ? "bg-green-mid animate-blink" : ufoDiscovered ? "bg-amber" : "bg-brown-mid"}`}
          />
          <span className="tracking-widest">SIGNAL</span>
        </div>

        {/* Clue pips */}
        <div className="flex gap-1">
          {Array.from({ length: totalClues }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 border ${
                i < cluesFound
                  ? "bg-green-mid border-green-mid"
                  : "bg-transparent border-brown-mid"
              }`}
            />
          ))}
        </div>

        <div className="mt-1 opacity-70">
          {ufoDiscovered ? "UFO FOUND!!" : `${cluesFound}/${totalClues} CLUES`}
        </div>
      </motion.div>

      {/* Celebration glow when complete */}
      <AnimatePresence>
        {ufoDiscovered && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={resetQuest}
            className="font-pixel text-[6px] text-brown-mid underline"
          >
            [reset quest]
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
