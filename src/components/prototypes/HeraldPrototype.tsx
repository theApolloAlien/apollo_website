"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, projects, experience, education, achievements, skills, coursework } from "@/lib/data";
import { testimonials } from "@/components/prototypes/testimonials";
import { EvidencePhoto } from "@/components/prototypes/EvidencePhoto";
import { Reveal } from "@/components/prototypes/Reveal";
import { useStanding } from "@/lib/useStanding";

/* Prototype 02 — "HERALD": a broadsheet front page, fully built out.
   Cream ink on kelly green, hard newspaper rules, live dateline and
   saucer forecast, classifieds, letters to the editor, and a saucer
   where the printing-press ornament should be. */

const GREEN = "#25703A";
const CREAM = "#F2EDE4";

const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

/** Hydration-safe live dateline (seed matches server render, updates on mount). */
function useDateline() {
  const [d, setD] = useState<Date>(new Date(2026, 6, 1));
  useEffect(() => setD(new Date()), []);
  return `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function MastheadSaucer() {
  return (
    <svg width="0.9em" height="0.9em" viewBox="0 0 48 48" className="inline-block align-[-0.08em] mx-1" aria-hidden>
      <g className="herald-rotor">
        <circle cx="24" cy="24" r="21" fill="none" stroke={CREAM} strokeWidth="2" strokeDasharray="6 5" />
      </g>
      <circle cx="24" cy="24" r="13" fill="none" stroke={CREAM} strokeWidth="2.5" />
      <circle cx="24" cy="24" r="5" fill={CREAM} />
    </svg>
  );
}

function FlyingSaucer() {
  return (
    <div className="herald-fly absolute -top-3 left-0 pointer-events-none" aria-hidden>
      <svg width="44" height="22" viewBox="0 0 44 22" fill="none">
        <ellipse cx="22" cy="13" rx="20" ry="6" stroke={CREAM} strokeWidth="1.5" />
        <path d="M12 9.5 C14 2.5 30 2.5 32 9.5" stroke={CREAM} strokeWidth="1.5" />
        <circle cx="12" cy="15.5" r="1.2" fill={CREAM} />
        <circle cx="22" cy="17" r="1.2" fill={CREAM} />
        <circle cx="32" cy="15.5" r="1.2" fill={CREAM} />
      </svg>
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-80 italic">{children}</p>;
}

function ReadDot() {
  return <p className="font-mono text-[10px] tracking-[0.2em] mt-2 text-right">READ ●</p>;
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return (
    <button onClick={copy} className="underline underline-offset-4 hover:opacity-70 font-mono text-xs" aria-label="Copy email address">
      {copied ? "COPIED TO CLIPBOARD ✓" : profile.email}
    </button>
  );
}

export function HeraldPrototype() {
  const lead = projects[0];
  const rail = projects[2]; // Rail Energy — national winner
  const clinic = projects[1];
  const pill = projects[3];
  const standing = useStanding();
  const dateline = useDateline();
  const tickerItems = achievements.map((a) => `${a.title.toUpperCase()} — ${a.org.toUpperCase()}`);

  const classifieds: [string, string][] = [
    ["SPEAKS FLUENTLY", skills.languages.join(", ")],
    ["CARRIES AT ALL TIMES", skills.frameworks.join(", ")],
    ["OPERATES IN", skills.domains.join(", ")],
    ["STATIONED ON", skills.platforms.join(", ")],
  ];

  return (
    <div className="min-h-screen p-2 md:p-5 font-archivo" style={{ backgroundColor: "#0D0D0B" }}>
      <div className="proto-grain proto-grain--bright" aria-hidden />

      {/* The green sheet */}
      <motion.div
        className="relative border px-4 md:px-8 pt-6 pb-4 min-h-[96vh]"
        style={{ backgroundColor: GREEN, color: CREAM, borderColor: CREAM }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >

        {/* ── Masthead ── */}
        <header className="relative">
          <a href="/prototypes" className="absolute left-0 top-0 font-mono text-[10px] tracking-widest opacity-70 hover:opacity-100 z-10">← BACK</a>
          <motion.h1
            className="font-mono font-bold text-center leading-none tracking-tight text-[clamp(2.4rem,8.6vw,7rem)]"
            initial={{ opacity: 0, letterSpacing: "0.06em" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            APOLLO<MastheadSaucer />HERALD
          </motion.h1>
          <div className="relative border-t-2 mt-4" style={{ borderColor: CREAM }}>
            <FlyingSaucer />
          </div>
          <div className="flex flex-wrap justify-between items-center gap-x-4 font-mono text-[11px] tracking-[0.2em] py-2.5">
            <span>N°01 ● THE UFO PORTFOLIO ISSUE</span>
            <span className="hidden md:inline">{dateline}</span>
            <span>©2026 ● FOR EVER</span>
          </div>
          <div className="border-t" style={{ borderColor: CREAM }} />
          <p className="text-center font-mono text-[10px] tracking-[0.3em] uppercase py-2 border-b" style={{ borderColor: CREAM }}>
            LATE EDITION — {standing.studentLine.toUpperCase()} — ALL THE NEWS THAT&rsquo;S FIT TO BEAM UP
          </p>
        </header>

        {/* ── Broadsheet grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[40px_210px_1.5fr_1fr_1.1fr] gap-0 mt-0">

          {/* Rail — vertical brand + socials */}
          <aside className="hidden xl:flex flex-col items-center justify-between py-6 pr-3 border-r" style={{ borderColor: CREAM }}>
            <span className="font-mono text-[10px] tracking-[0.35em]" style={{ writingMode: "vertical-rl" }}>
              APOLLO⁂HERALD
            </span>
            <div className="flex flex-col gap-4 font-mono text-[10px]">
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70" title="GitHub">GH</a>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70" title="LinkedIn">IN</a>
            </div>
          </aside>

          {/* Staff picks + weather + notices */}
          <aside className="py-5 xl:px-4 md:pr-6 xl:border-r" style={{ borderColor: CREAM }}>
            <Reveal>
              <p className="font-newsprint text-4xl leading-none">AH</p>
              <p className="font-mono text-[10px] tracking-[0.2em] mt-1 opacity-80">APOLLO HERALD<br />EDITORIAL N°01</p>

              {/* Saucer forecast */}
              <div className="border p-3 mt-5" style={{ borderColor: CREAM }}>
                <p className="font-mono text-[10px] tracking-[0.25em] flex items-center gap-2">
                  <span className="fury-blink inline-block w-2 h-2 rounded-full" style={{ backgroundColor: CREAM }} />
                  SAUCER FORECAST
                </p>
                <p className="font-newsprint text-xl mt-2 leading-tight">Clear skies over the NTU sector.</p>
                <p className="font-mono text-[10px] mt-2 leading-relaxed opacity-90">
                  VISIBILITY: EXCELLENT<br />
                  DEPLOYABLE: {standing.availability}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="font-newsprint text-xl border-b pb-1 mt-6 mb-4" style={{ borderColor: CREAM }}>STAFF PICKS</p>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-[10px] tracking-widest mb-2"><b className="text-base font-bold mr-1">01</b> FIELD AGENT</p>
                  <EvidencePhoto
                    src="/photos/booth.jpg"
                    alt="Apollo taking a call in a green phone booth"
                    label="AGENT PHOTO"
                    className="w-full aspect-[4/3] border text-cream"
                    imgClassName="object-cover grayscale contrast-125 mix-blend-luminosity opacity-90"
                  />
                  <p className="font-mono text-[10px] mt-2 leading-relaxed opacity-85">
                    Agent takes the call in a green booth: incoming transmission confirmed.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest mb-2"><b className="text-base font-bold mr-1">02</b> EVIDENCE BLURRED</p>
                  <EvidencePhoto
                    src="/photos/reach.jpg"
                    alt="Apollo reaching a hand toward the camera"
                    label="AGENT PHOTO"
                    className="w-full aspect-[4/3] border text-cream"
                    imgClassName="object-cover grayscale contrast-125 mix-blend-luminosity opacity-90"
                  />
                  <p className="font-mono text-[10px] mt-2 leading-relaxed opacity-85">
                    Subject reaches for the lens — five fingers, zero explanations.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Public notices — coursework */}
            <Reveal delay={0.05}>
              <p className="font-newsprint text-xl border-b pb-1 mt-7 mb-3" style={{ borderColor: CREAM }}>PUBLIC NOTICES</p>
              <p className="font-mono text-[10px] leading-relaxed opacity-80 mb-2 italic">
                The subject is certified in the following training:
              </p>
              <ul className="font-mono text-[10px] leading-[1.9] tracking-wide">
                {coursework.map((c) => (
                  <li key={c}>● {c.toUpperCase()}</li>
                ))}
              </ul>
            </Reveal>
          </aside>

          {/* Lead story */}
          <article className="py-5 md:px-6 md:border-l xl:border-l-0 xl:border-r" style={{ borderColor: CREAM }}>
            <Reveal>
              <h2 className="font-newsprint text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.02]">
                {lead.title} on being an autonomous agent
              </h2>
              <Kicker>REAL TALK — INTERVIEW</Kicker>
              <p className="font-mono text-xs font-bold tracking-wide uppercase leading-relaxed mt-4">
                Just over one semester ago, Apollo shipped {lead.title}, an {lead.subtitle.toLowerCase()} that
                placed top 8 at the NTU Fintech Innovators Hackathon.
              </p>
              {lead.bullets.map((b, i) => (
                <p key={i} className="text-sm leading-[1.75] mt-4 opacity-90">{b}</p>
              ))}
              <div className="flex justify-between items-center mt-4">
                <p className="font-mono text-[10px] tracking-wide opacity-70">FILED WITH: {lead.stack.join(" / ")}</p>
                {lead.link && (
                  <a href={lead.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.2em] hover:opacity-70">
                    READ MORE ●
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t mt-6 pt-4" style={{ borderColor: CREAM }}>
                <p className="font-newsprint text-2xl leading-tight">“They say you are what you build. He never stopped building.”</p>
                <p className="font-mono text-[10px] tracking-[0.2em] mt-2 opacity-70">— THE EDITORS</p>
              </div>
            </Reveal>

            {/* Classifieds — skills */}
            <Reveal>
              <div className="border-t mt-6 pt-4" style={{ borderColor: CREAM }}>
                <p className="font-newsprint text-2xl mb-3">CLASSIFIEDS</p>
                <div className="grid sm:grid-cols-2 border" style={{ borderColor: CREAM }}>
                  {classifieds.map(([head, body], i) => (
                    <div key={head} className={`p-3 border-b sm:${i % 2 === 0 ? "border-r" : ""} ${i >= 2 ? "sm:border-b-0" : ""}`} style={{ borderColor: CREAM }}>
                      <p className="font-mono text-[10px] font-bold tracking-[0.2em]">{head}:</p>
                      <p className="font-mono text-[10px] leading-relaxed opacity-85 mt-1">{body}</p>
                    </div>
                  ))}
                </div>
                <p className="font-mono text-[9px] tracking-wide opacity-60 mt-2 italic text-center">
                  To place an advertisement in this section, the subject must first learn your stack. He will.
                </p>
              </div>
            </Reveal>
          </article>

          {/* Hot release — national winner */}
          <article className="py-5 md:px-6 md:border-l xl:border-l-0 xl:border-r flex flex-col" style={{ borderColor: CREAM }}>
            <Reveal>
              <h3 className="font-archivo font-bold text-lg leading-snug uppercase">
                {rail.title} harvests the wind trains leave behind
              </h3>
              <div className="border-t border-b py-1.5 my-3" style={{ borderColor: CREAM }}>
                <p className="font-newsprint text-2xl text-center tracking-wide">EXTRA HOT RELEASES</p>
              </div>
              {rail.bullets.map((b, i) => (
                <p key={i} className="text-[13px] leading-[1.7] mt-3 opacity-90">{b}</p>
              ))}
              {rail.link && (
                <a href={rail.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.2em] mt-3 hover:opacity-70 text-right block">
                  SEE THE ANNOUNCEMENT ●
                </a>
              )}
            </Reveal>
            <Reveal className="mt-2">
              <p className="font-newsprint text-[clamp(2.6rem,3.5vw,3.6rem)] leading-none mt-4">1ST<br />PLACE</p>
              <p className="font-mono text-[10px] tracking-[0.15em] mt-2 opacity-85">
                NATIONAL WINNER ● SGD 3,000 ● 200+ TEAMS ● SBS TRANSIT
              </p>
            </Reveal>

            {/* Clinic AI brief */}
            <Reveal className="mt-auto">
              <div className="border-t mt-6 pt-4" style={{ borderColor: CREAM }}>
                <h4 className="font-newsprint text-2xl leading-tight">{clinic.title} triages patients in ten seconds flat</h4>
                <Kicker>FRESH NEW RELEASES — {clinic.year}</Kicker>
                {clinic.bullets.map((b, i) => (
                  <p key={i} className="text-[13px] leading-[1.7] mt-3 opacity-90">{b}</p>
                ))}
                <p className="font-mono text-[10px] tracking-wide opacity-70 mt-3">FILED WITH: {clinic.stack.join(" / ")}</p>
              </div>
            </Reveal>
          </article>

          {/* In this issue + right column */}
          <aside className="py-5 md:px-6 md:border-l" style={{ borderColor: CREAM }}>
            <Reveal>
              <p className="font-newsprint text-3xl mb-4">IN THIS ISSUE</p>

              <div className="border-b pb-4 mb-4" style={{ borderColor: CREAM }}>
                <h4 className="font-newsprint text-2xl leading-tight">{pill.title}: {pill.subtitle}</h4>
                <Kicker>CULTURE FEATURE — {pill.year}</Kicker>
                {pill.bullets.map((b, i) => (
                  <p key={i} className="text-[13px] leading-[1.7] mt-2 opacity-90">{b}</p>
                ))}
                {pill.badge && <p className="font-mono text-[10px] font-bold tracking-wide mt-2">{pill.badge}</p>}
                <ReadDot />
              </div>
            </Reveal>

            {/* Internship story */}
            <Reveal>
              <div className="border-b pb-4 mb-4" style={{ borderColor: CREAM }}>
                <h4 className="font-newsprint text-2xl leading-tight">PwC signs the intern the firewalls warned about</h4>
                <Kicker>MISSION LOG — {experience[0].period}</Kicker>
                {experience[0].bullets.map((b, i) => (
                  <p key={i} className="text-[13px] leading-[1.7] mt-2 opacity-90">{b}</p>
                ))}
                <ReadDot />
              </div>
            </Reveal>

            {/* Education notice */}
            <Reveal>
              <div className="border-b pb-4 mb-4" style={{ borderColor: CREAM }}>
                <h4 className="font-newsprint text-2xl leading-tight">NTU confirms GPA {education[0].gpa}</h4>
                <Kicker>CLEARANCE RECORDS</Kicker>
                <p className="text-[13px] leading-[1.7] mt-2 opacity-90">
                  {education[0].degree}, {education[0].period}. Previously: {education[1].degree} at{" "}
                  {education[1].institution}, GPA {education[1].gpa}.
                </p>
              </div>
            </Reveal>

            {/* Awards column */}
            <Reveal>
              <p className="font-newsprint text-2xl mb-3">AWARDS COLUMN</p>
              <div className="space-y-3">
                {achievements.map((a) => (
                  <div key={a.title}>
                    <p className="font-mono text-[10px] tracking-[0.2em] opacity-70">{a.year}</p>
                    <p className="font-archivo font-bold text-[13px] leading-snug">{a.title} — {a.org}</p>
                    <p className="text-[12px] leading-[1.65] opacity-85 mt-0.5">{a.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Barcode */}
            <Reveal>
              <div className="mt-6">
                <div className="barcode h-11 w-44" style={{ color: CREAM }} />
                <p className="font-mono text-[10px] tracking-[0.35em] mt-1">0 2026 4 4 5000 1</p>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* ── Letters to the editor ── */}
        <section className="border-t-2 mt-2 pt-4" style={{ borderColor: CREAM }}>
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h3 className="font-newsprint text-3xl">LETTERS TO THE EDITOR</h3>
              <p className="font-mono text-[10px] tracking-[0.2em] opacity-70 hidden md:block">UNSOLICITED, UNANIMOUS</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-x-6 gap-y-6 mt-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="border-t pt-3 h-full flex flex-col" style={{ borderColor: CREAM }}>
                  <p className="font-newsprint text-[15px] leading-snug">“{t.quote}”</p>
                  <p className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-75 mt-3 pt-2 mt-auto">
                    {t.name}<br />{t.role}, {t.org}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Mission logs, continued ── */}
        <section className="border-t-2 mt-6 pt-4" style={{ borderColor: CREAM }}>
          <Reveal>
            <h3 className="font-newsprint text-3xl">MISSION LOGS, CONTINUED</h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 mt-4">
            {experience.slice(1).map((exp, i) => (
              <Reveal key={exp.title} delay={i * 0.06}>
                <div className={i < 2 ? "md:border-r md:pr-8" : ""} style={{ borderColor: CREAM }}>
                  <Kicker>{exp.period}</Kicker>
                  <h4 className="font-archivo font-bold text-[15px] leading-snug mt-1">{exp.title} — {exp.org}</h4>
                  {exp.bullets.map((b, j) => (
                    <p key={j} className="text-[13px] leading-[1.7] mt-2 opacity-90">{b}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Contact strip ── */}
        <div className="border-t-2 mt-6 pt-3 pb-1 flex flex-wrap items-center justify-between gap-3" style={{ borderColor: CREAM }}>
          <p className="font-newsprint text-xl">Tips, sightings and offers:</p>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <CopyEmail />
            <a className="underline underline-offset-4 hover:opacity-70" href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a className="underline underline-offset-4 hover:opacity-70" href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a className="underline underline-offset-4 hover:opacity-70" href="/resume.pdf" download="apollo-resume.pdf">RESUME.PDF ↓</a>
          </div>
        </div>

        {/* ── Ticker ── */}
        <div className="overflow-hidden border-t mt-2" style={{ borderColor: CREAM }}>
          <div className="herald-ticker flex w-max py-2 font-mono text-[10px] tracking-[0.25em] uppercase">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="whitespace-nowrap mr-10">✦ {t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
