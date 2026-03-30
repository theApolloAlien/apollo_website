"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuest } from "@/providers/QuestProvider";

interface ClueMarkerProps {
  clueIndex: number;
  children: React.ReactNode;
  hint?: string;
  className?: string;
}

export function ClueMarker({ clueIndex, children, hint, className }: ClueMarkerProps) {
  const { discoverClue, checkpoints } = useQuest();
  const ref = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);
  const discovered = checkpoints[clueIndex];

  useEffect(() => {
    const el = ref.current;
    if (!el || discovered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          discoverClue(clueIndex);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2500);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [clueIndex, discoverClue, discovered]);

  return (
    <div ref={ref} className={`relative group ${className ?? ""}`}>
      {children}

      {/* Discovery toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap"
          >
            <span className="font-pixel text-[7px] bg-green-dark text-cream px-3 py-1 border-2 border-green-mid">
              ▸ CLUE FOUND! {hint ?? ""}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discovered glow indicator */}
      {discovered && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-mid rounded-none animate-blink" />
      )}
    </div>
  );
}
