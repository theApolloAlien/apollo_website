"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { UFOFloating } from "@/components/ui/UFOCharacter";

const UFO_SIZE = 120; // px — width passed to UFOFloating

export function ScrollUFO() {
  const { scrollYProgress } = useScroll();

  // Motion value for horizontal position (pixels from left edge)
  const rawX = useMotionValue(0);
  // Spring makes the UFO slightly lag, giving a drifting/floaty feel
  const x = useSpring(rawX, { stiffness: 38, damping: 14 });

  useEffect(() => {
    function computeX(progress: number) {
      const vw = window.innerWidth;
      const startX = vw * 0.04;               // start ~4% from left
      const endX   = vw * 0.84 - UFO_SIZE;    // end ~84% from left (minus UFO width)
      return startX + progress * (endX - startX);
    }

    // Initialise to current scroll position (handles page reload mid-scroll)
    rawX.set(computeX(scrollYProgress.get()));

    // Drive X on every scroll tick
    const unsubscribeScroll = scrollYProgress.on("change", (v) => {
      rawX.set(computeX(v));
    });

    // Recalculate on resize so it never clips off-screen
    const onResize = () => rawX.set(computeX(scrollYProgress.get()));
    window.addEventListener("resize", onResize);

    return () => {
      unsubscribeScroll();
      window.removeEventListener("resize", onResize);
    };
  }, [scrollYProgress, rawX]);

  return (
    <motion.div
      className="fixed top-[42vh] z-20 pointer-events-none"
      style={{ x }}
    >
      <UFOFloating size={UFO_SIZE} />
    </motion.div>
  );
}
