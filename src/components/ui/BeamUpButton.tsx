"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Back-to-top — tractor-beam yourself back to the start of the transmission. */
export function BeamUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function beamUp() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={beamUp}
          aria-label="Back to top"
          className="fixed bottom-6 right-4 z-30 flex items-center gap-1.5 border-2 border-brown-dark bg-cream px-3 py-2 font-pixel text-[7px] text-brown-dark tracking-widest hover:bg-green-dark hover:border-green-dark hover:text-cream transition-colors"
        >
          ▲ BEAM_UP
        </motion.button>
      )}
    </AnimatePresence>
  );
}
