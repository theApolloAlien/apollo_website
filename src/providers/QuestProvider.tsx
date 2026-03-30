"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { QuestContextType, QuestState, AlienMood } from "@/types";

const TOTAL_CLUES = 6;

const defaultState: QuestState = {
  cluesFound: 0,
  totalClues: TOTAL_CLUES,
  ufoDiscovered: false,
  alienMood: "idle",
  checkpoints: Array(TOTAL_CLUES).fill(false),
};

const QuestContext = createContext<QuestContextType | null>(null);

function getMood(cluesFound: number, ufoDiscovered: boolean): AlienMood {
  if (ufoDiscovered) return "celebrating";
  if (cluesFound >= 5) return "excited";
  if (cluesFound >= 3) return "curious";
  return "idle";
}

export function QuestProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<QuestState>(defaultState);

  // Hydrate from localStorage after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("apollo-quest");
      if (saved) {
        const parsed = JSON.parse(saved) as QuestState;
        setState(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("apollo-quest", JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const discoverClue = useCallback((index: number) => {
    setState((prev) => {
      if (prev.checkpoints[index]) return prev; // already found
      const newCheckpoints = [...prev.checkpoints];
      newCheckpoints[index] = true;
      const newCluesFound = prev.cluesFound + 1;
      return {
        ...prev,
        checkpoints: newCheckpoints,
        cluesFound: newCluesFound,
        alienMood: getMood(newCluesFound, prev.ufoDiscovered),
      };
    });
  }, []);

  const discoverUFO = useCallback(() => {
    setState((prev) => ({
      ...prev,
      ufoDiscovered: true,
      alienMood: "celebrating",
    }));
  }, []);

  const resetQuest = useCallback(() => {
    setState(defaultState);
    try {
      localStorage.removeItem("apollo-quest");
    } catch {
      // ignore
    }
  }, []);

  return (
    <QuestContext.Provider value={{ ...state, discoverClue, discoverUFO, resetQuest }}>
      {children}
    </QuestContext.Provider>
  );
}

export function useQuest(): QuestContextType {
  const ctx = useContext(QuestContext);
  if (!ctx) throw new Error("useQuest must be used inside QuestProvider");
  return ctx;
}
