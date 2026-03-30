import type { Project, Experience, Education, Achievement } from "@/types";

export const profile = {
  name: "JOSHUA APOLLO",
  tagline: "Computer Engineering student at NTU specialising in systems security and AI infrastructure.",
  objective: "Seeking to apply full-stack and distributed systems experience to security or cloud engineering teams.",
  email: "joshua.apollo13@gmail.com",
  github: "github.com/theApolloAlien",
  linkedin: "linkedin.com/in/Joshua-Apollo",
  availability: "25 MAY TO 25 AUGUST (EXTENDABLE)",
};

export const skills = {
  languages: ["Python", "SQL", "C/C++", "Java", "JavaScript", "Assembly (MIPS/x86)"],
  frameworks: ["Flutter", "FastAPI", "ChromaDB", "Burp Suite", "Metasploit", "RESTful APIs", "Android Studio"],
  domains: ["Retrieval-Augmented Generation (RAG)", "Offensive Security", "Application Security"],
  platforms: ["iOS Development", "Linux", "Azure"],
};

export const projects: Project[] = [
  {
    id: "macropolo",
    title: "MacroPollo",
    subtitle: "AI Financial Intelligence Platform",
    year: "2026",
    badge: "CREATOR & ENGINEER",
    link: "https://youtu.be/5SY_k4d-_w4?si=ufwPUOpSZMF9R7q4",
    stack: ["FastAPI", "ChromaDB", "Qwen", "RAG", "Flutter"],
    bullets: [
      "Architected an isolated, on-premise AI inference stack using FastAPI and Qwen, delivering real-time macroeconomic risk analysis with zero exposure to third-party APIs, curbing compliance and data leakage risk.",
      "Engineered a Retrieval-Augmented Generation (RAG) pipeline integrated into an iOS app, enabling threat chain mapping against live investment portfolios, reducing manual vulnerability assessment time from hours to minutes.",
      "Designed a zero-data-leakage architecture using ChromaDB as a local vector store, serving as a robust DLP control for proprietary financial data.",
    ],
  },
  {
    id: "rail-energy",
    title: "Rail Energy System",
    subtitle: "SBS Hackathon",
    year: "2026",
    badge: "NATIONAL WINNER — 1ST PLACE · SGD 3,000",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7426624723855405056/",
    stack: ["Systems Design", "Risk Assessment", "Decentralised Architecture"],
    bullets: [
      "Designed a decentralised energy resilience solution for Singapore's national rail network, addressing single points of failure in critical infrastructure.",
      "Conducted end-to-end technical risk assessments, presenting engineering viability directly to C-suite judges. Outcompeted 200+ teams.",
    ],
  },
];

export const experience: Experience[] = [
  {
    title: "Cybersecurity Intern & Cyber Tools Researcher",
    org: "Thinkture",
    period: "Apr 2021 – Feb 2022",
    bullets: [
      "Built custom Python tooling to automate detection and scanning of all OWASP Top 10 vulnerabilities, reducing manual security audit time across client engagements.",
      "Engineered a ransomware proof-of-concept in a controlled lab environment to simulate advanced persistent threat (APT) evasion behaviour, used to stress-test and harden client infrastructure.",
      "Executed mobile and network penetration tests using Burp Suite and Metasploit; translated discovered vulnerabilities into prioritised, business-impact-focused remediation reports for clients.",
    ],
  },
  {
    title: "Firefighting Trainer, Sergeant",
    org: "Singapore Civil Defence Force",
    period: "Oct 2022 – Aug 2024",
    bullets: [
      "2-Year Mandatory Service. Awarded the 2024 Good Performance Award for sustained operational excellence.",
    ],
  },
  {
    title: "Independent Creator & Partnerships Lead",
    org: "YouTube",
    period: "Aug 2024 – Mar 2025",
    bullets: [
      "Managed 30+ end-to-end production projects for international partners including Uppbeat and Dehancer.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Nanyang Technological University (NTU)",
    degree: "B.Comp (Hons) Computer Engineering",
    gpa: "4.4 / 5",
    period: "Aug 2025 – 2028",
  },
  {
    institution: "Ngee Ann Polytechnic",
    degree: "Diploma in Cybersecurity",
    gpa: "3.65 / 4",
    period: "Apr 2019 – May 2022",
  },
];

export const achievements: Achievement[] = [
  {
    title: "International CTF Representative",
    org: "NTU Sentinels",
    year: "2025",
    description: "Selected to represent NTU at the Vietnam National Cybersecurity Association CTF, competing against university teams internationally.",
  },
  {
    title: "Subcommittee Member",
    org: "NTU Sentinels Cybersecurity Club",
    year: "2025 – Present",
    description: "Co-led planning of SentCTF, NTU's flagship cybersecurity competition; coordinated cross-functional teams and drove industry partnership outreach.",
  },
  {
    title: "Chief Group Leader & Student Ambassador",
    org: "CCDS Orientation, NTU",
    year: "2025 – Present",
    description: "Commanded a committee of 10 student leaders across large-scale orientation events, maintaining 100% safety compliance across all operational timelines.",
  },
  {
    title: "President",
    org: "Debate Society",
    year: "Jan 2017 – Mar 2018",
    description: "Multiple 'Best Speaker' awards for constructing rigorous, policy-driven arguments under competitive pressure.",
  },
];

export const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Object-Oriented Programming",
  "Ethical Hacking",
  "Databases",
  "Cryptography",
  "Malware Analysis",
  "Front-End Development",
];

export const alienHints: Record<number, string> = {
  0: "help me find my ufo",
  1: "i left clues behind...",
  2: "you found something!",
  3: "you're getting warm...",
  4: "so close!! keep going",
  5: "almost there!! 👀",
  6: "find the transmission point!!",
};
