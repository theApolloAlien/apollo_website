export type AlienMood = "idle" | "curious" | "excited" | "celebrating";

export interface QuestState {
  cluesFound: number;
  totalClues: number;
  ufoDiscovered: boolean;
  alienMood: AlienMood;
  checkpoints: boolean[];
}

export interface QuestContextType extends QuestState {
  discoverClue: (index: number) => void;
  discoverUFO: () => void;
  resetQuest: () => void;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  badge?: string;
  link?: string;
  stack: string[];
  bullets: string[];
}

export interface Experience {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  period: string;
}

export interface Achievement {
  title: string;
  org: string;
  year: string;
  description: string;
}
