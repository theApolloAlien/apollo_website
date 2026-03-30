"use client";

import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  children: React.ReactNode;
}

export function CopyEmailButton({ email, className, children }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    },
    [email]
  );

  return (
    <>
      <button type="button" onClick={handleCopy} className={className}>
        {children}
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] bg-brown-dark text-cream border-2 border-amber px-6 py-3 text-center pointer-events-none"
          >
            <p className="font-pixel text-[8px] tracking-widest leading-relaxed">
              EMAIL COPIED!
            </p>
            <p className="font-pixel text-[7px] tracking-widest text-amber mt-1 leading-relaxed">
              FEEL FREE TO ESTABLISH CONTACT
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
