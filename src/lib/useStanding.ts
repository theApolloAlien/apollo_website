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
  breakStatus: "summer" | "winter" | null; // null = classes in session
  studentLine: string; // e.g. "Year 1 student at NTU on summer break"
  availability: string; // e.g. "MAY TO DECEMBER 2026"
}

// Term calendar: classes run August → May. Summer break is Jun–Jul; winter
// break runs from mid-December through the first week of January.
function termBreak(now: Date): "summer" | "winter" | null {
  const m = now.getMonth(); // 0 = January
  const d = now.getDate();
  if (m === 5 || m === 6) return "summer"; // June, July
  if (m === 11 && d >= 15) return "winter"; // 15–31 December
  if (m === 0 && d <= 7) return "winter"; // 1–7 January
  return null; // classes in session
}

function computeStanding(now: Date): Standing {
  // Academic year starts in August, so before August you're still in the
  // previous year's cohort — e.g. late June = Year 1 on summer break, not Year 2.
  let elapsed = now.getFullYear() - NTU_START_YEAR;
  if (now.getMonth() < 7) elapsed -= 1;
  const yearNumber = Math.min(Math.max(elapsed + 1, 1), FINAL_YEAR);
  const yearLabel = yearNumber >= FINAL_YEAR ? "Final Year" : `Year ${yearNumber}`;
  const breakStatus = termBreak(now);
  const studentLine =
    `${yearLabel} student at NTU` + (breakStatus ? ` on ${breakStatus} break` : "");
  return {
    yearNumber,
    yearLabel,
    breakStatus,
    studentLine,
    availability: `MAY TO DECEMBER ${now.getFullYear()}`,
  };
}

/** Live, auto-updating academic standing + availability (computed client-side). */
export function useStanding(): Standing {
  const [now, setNow] = useState<Date>(SEED);
  useEffect(() => setNow(new Date()), []);
  return computeStanding(now);
}
