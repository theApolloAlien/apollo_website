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
