"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="border-t-2 border-brown-dark bg-cream px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="font-pixel text-[6px] text-brown-mid tracking-widest">
          TRANSMISSION_END // APOLLO_OS // 2026
        </span>
        <div className="flex items-center gap-4">
          <span className="font-pixel text-[6px] text-green-mid animate-blink">
            ▌ SIGNAL_STRENGTH: 100%
          </span>
          <span className="font-pixel text-[6px] text-brown-mid">
            ENCRYPTION: ACTIVE
          </span>
          <span className="font-pixel text-[6px] text-amber">
            PORT_8080
          </span>
        </div>
        <span className="font-pixel text-[6px] text-brown-dark tracking-widest">
          JOSHUA_APOLLO
        </span>
      </div>
    </footer>
  );
}
