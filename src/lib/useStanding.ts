"use client";

import { useEffect, useState } from "react";

// NTU B.Comp (Hons) Computer Engineering — started Aug 2025, 3 academic years
// (Year 1 → Year 2 → Final Year). The NTU academic year starts in August.
const NTU_START_YEAR = 2025;
const FINAL_YEAR = 3;

// Deterministic value used for the server render + first client render so
// hydration matches; replaced with the real "now" right after mount, so the
// values track the actual date without a redeploy.
const SEED = new Date(2026, 5, 28); // 28 Jun 2026

export interface Standing {
  yearNumber: number; // 1..3
  yearLabel: string; // "Year 1" | "Year 2" | "Final Year"
  studentLine: string; // e.g. "Year 1 student at NTU"
  availability: string; // e.g. "MAY TO DECEMBER 2026"
}

function computeStanding(now: Date): Standing {
  let elapsed = now.getFullYear() - NTU_START_YEAR;
  if (now.getMonth() < 7) elapsed -= 1; // before August → previous academic year
  const yearNumber = Math.min(Math.max(elapsed + 1, 1), FINAL_YEAR);
  const yearLabel = yearNumber >= FINAL_YEAR ? "Final Year" : `Year ${yearNumber}`;
  return {
    yearNumber,
    yearLabel,
    studentLine: `${yearLabel} student at NTU`,
    availability: `MAY TO DECEMBER ${now.getFullYear()}`,
  };
}

/** Live, auto-updating academic standing + availability (computed client-side). */
export function useStanding(): Standing {
  const [now, setNow] = useState<Date>(SEED);
  useEffect(() => setNow(new Date()), []);
  return computeStanding(now);
}
