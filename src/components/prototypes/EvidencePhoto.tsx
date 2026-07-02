"use client";

import React, { useEffect, useState } from "react";

interface EvidencePhotoProps {
  src: string;
  alt: string;
  /** Shown inside the placeholder frame while the photo file is missing. */
  label: string;
  className?: string;
  imgClassName?: string;
}

/**
 * Photo slot with a graceful fallback: if the file exists under /public it
 * renders; otherwise a styled "awaiting evidence" frame shows exactly where
 * to drop the image. Lets the prototypes ship before the photos do.
 */
export function EvidencePhoto({ src, alt, label, className = "", imgClassName = "" }: EvidencePhotoProps) {
  const [status, setStatus] = useState<"loading" | "ok" | "missing">("loading");

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setStatus("ok");
    probe.onerror = () => setStatus("missing");
    probe.src = src;
  }, [src]);

  if (status === "ok") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`${className} ${imgClassName}`} />;
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(127,127,127,0.16) 0 10px, transparent 10px 20px)",
      }}
      role="img"
      aria-label={alt}
    >
      <span className="border border-current px-2 py-1 text-[10px] font-mono tracking-[0.25em] uppercase opacity-80">
        {status === "loading" ? "DEVELOPING FILM…" : "AWAITING EVIDENCE"}
      </span>
      {status === "missing" && (
        <span className="text-[9px] font-mono opacity-60 px-3 text-center">
          drop photo at&nbsp;<code>public{src}</code>
        </span>
      )}
    </div>
  );
}
