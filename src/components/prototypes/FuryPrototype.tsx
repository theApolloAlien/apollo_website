"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { profile, projects, experience, education, achievements, skills, coursework } from "@/lib/data";
import { testimonials } from "@/components/prototypes/testimonials";
import { EvidencePhoto } from "@/components/prototypes/EvidencePhoto";
import { Reveal } from "@/components/prototypes/Reveal";
import { useStanding } from "@/lib/useStanding";

/* Prototype 01 — "FURY": dark editorial longread, fully built out.
   Chartreuse swash serif over monochrome photography, heavy grain,
   working menu overlay, parallax hero, chaptered article body. */

const INK = "#E9E7DB";
const ACID = "#E3EE4F";

const CHAPTERS = [
  { id: "subject", n: "I", title: "The Subject" },
  { id: "works", n: "II", title: "The Works" },
  { id: "missions", n: "III", title: "The Missions" },
  { id: "witnesses", n: "IV", title: "The Witnesses" },
  { id: "commendations", n: "V", title: "The Commendations" },
  { id: "transmission", n: "VI", title: "The Transmission" },
];

const SPECS: [string, string[]][] = [
  ["Languages", skills.languages],
  ["Frameworks & tools", skills.frameworks],
  ["Domains", skills.domains],
  ["Platforms", skills.platforms],
];

function FuryUFO() {
  return (
    <div className="fury-drift fixed top-[9vh] left-0 z-30 pointer-events-none" aria-hidden>
      <div className="fury-bob">
        <svg width="92" height="46" viewBox="0 0 92 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="46" cy="28" rx="42" ry="11" stroke={ACID} strokeWidth="1.5" />
          <path d="M24 21 C28 8 64 8 68 21" stroke={ACID} strokeWidth="1.5" />
          <line x1="4" y1="28" x2="88" y2="28" stroke={ACID} strokeWidth="0.75" opacity="0.6" />
          <circle className="fury-blink" cx="26" cy="33" r="1.8" fill={ACID} />
          <circle className="fury-blink" cx="46" cy="35" r="1.8" fill={ACID} style={{ animationDelay: "0.5s" }} />
          <circle className="fury-blink" cx="66" cy="33" r="1.8" fill={ACID} style={{ animationDelay: "1s" }} />
          <path d="M38 39 L34 46 M54 39 L58 46" stroke={ACID} strokeWidth="0.75" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

function FuryMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col justify-center px-8 md:px-24"
          style={{ backgroundColor: "rgba(9,9,8,0.97)", color: INK }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-6 font-mono text-xs tracking-[0.3em] opacity-70 hover:opacity-100"
          >
            CLOSE ✕
          </button>
          <p className="font-mono text-[10px] tracking-[0.4em] opacity-50 uppercase mb-8">Table of contents</p>
          <nav className="space-y-2">
            {CHAPTERS.map((c, i) => (
              <motion.a
                key={c.id}
                href={`#${c.id}`}
                onClick={onClose}
                className="group flex items-baseline gap-5 w-fit"
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-mono text-xs opacity-40 w-8">{c.n}</span>
                <span className="fury-link font-fury italic text-4xl md:text-6xl" style={{ color: ACID }}>
                  {c.title}
                </span>
              </motion.a>
            ))}
          </nav>
          <motion.div
            className="flex flex-wrap gap-x-10 gap-y-2 mt-12 font-mono text-xs opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
          >
            <a className="fury-link" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="fury-link" href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">github</a>
            <a className="fury-link" href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">linkedin</a>
            <a className="fury-link" href="/resume.pdf" download="apollo-resume.pdf">résumé ↓</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
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
    <button
      onClick={copy}
      className="fury-link font-fury italic block text-left text-4xl md:text-6xl break-all"
      style={{ color: ACID }}
      aria-label="Copy email address"
    >
      {copied ? "copied to clipboard ✓" : profile.email}
    </button>
  );
}

function Chapter({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative border-t border-white/10 py-20 md:py-28 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-10">
            <span className="font-mono text-xs tracking-[0.4em] opacity-50">CHAPTER {n}</span>
            <h2 className="font-fury italic text-5xl md:text-7xl leading-none" style={{ color: ACID }}>
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function PullQuote({ quote, source }: { quote: string; source: string }) {
  return (
    <Reveal className="max-w-4xl mx-auto px-6 py-16 text-center">
      <p className="font-fury italic text-3xl md:text-5xl leading-tight opacity-90">“{quote}”</p>
      <p className="font-mono text-xs tracking-[0.3em] opacity-50 mt-6 uppercase">— {source}</p>
    </Reveal>
  );
}

export function FuryPrototype() {
  const [menuOpen, setMenuOpen] = useState(false);
  const standing = useStanding();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 900], [0, 130]);

  const tape = [...skills.domains, ...skills.platforms, ...skills.languages];

  return (
    <div className="min-h-screen font-archivo selection:bg-[#E3EE4F] selection:text-black" style={{ backgroundColor: "#121210", color: INK }}>
      <div className="proto-grain proto-grain--heavy" aria-hidden />
      <FuryUFO />
      <FuryMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 mix-blend-difference">
        <a href="/prototypes" className="font-mono text-xs tracking-widest opacity-80 hover:opacity-100">
          ← 100% apollo
        </a>
        <nav className="flex gap-8 font-fury italic text-xl">
          <button className="fury-link italic" onClick={() => setMenuOpen(true)}>Menu</button>
          <a className="fury-link" href="#subject">Longread</a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Subject photograph — parallax, monochrome */}
        <motion.div style={{ y: photoY }} className="absolute inset-y-0 right-0 w-full md:w-[72%]">
          <EvidencePhoto
            src="/photos/booth.jpg"
            alt="Joshua Apollo in a phone booth, monochrome"
            label="SUBJECT PHOTOGRAPH 01"
            className="w-full h-full text-white/60"
            imgClassName="object-cover grayscale contrast-125 brightness-90"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #121210 2%, transparent 45%), linear-gradient(0deg, #121210 4%, transparent 40%)" }} />
        </motion.div>

        {/* Giant name — staggered slide-up */}
        <h1 className="relative z-10 font-fury italic pt-[15vh] pl-6 md:pl-16 leading-[0.82] text-[clamp(4.5rem,15vw,13rem)]" style={{ color: ACID }}>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span className="block" initial={{ y: "112%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              Joshua
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em] pl-[0.6em]">
            <motion.span className="block" initial={{ y: "112%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}>
              Apollo
            </motion.span>
          </span>
        </h1>

        {/* Live standing */}
        <motion.p
          className="relative z-10 pl-6 md:pl-16 mt-6 font-mono text-[11px] tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span style={{ color: ACID }}>▌</span> {standing.studentLine} — deployable {standing.availability.toLowerCase()}
        </motion.p>

        {/* Repeated marginalia */}
        <div className="absolute left-6 bottom-[24vh] z-10 font-fury italic text-lg leading-relaxed" aria-hidden>
          {[0.9, 0.7, 0.5, 0.35, 0.2].map((o, i) => (
            <div key={i} style={{ color: ACID, opacity: o }}>case-files</div>
          ))}
        </div>

        {/* Author credit */}
        <div className="absolute z-10 left-[46%] bottom-[26vh] hidden md:block">
          <p className="font-fury italic text-sm opacity-60">Author</p>
          <p className="text-base">Joshua Apollo</p>
          <p className="font-fury italic text-xs opacity-40 mt-6">by apollo_os</p>
        </div>

        {/* Intro standfirst */}
        <motion.div
          className="absolute z-10 right-6 md:right-12 bottom-[12vh] max-w-xs space-y-5 text-[15px] leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          <p className="indent-8">{profile.tagline}</p>
          <p className="indent-8 opacity-80">{profile.objective}</p>
        </motion.div>

        {/* Footnote band */}
        <div className="absolute bottom-0 left-0 z-10 w-full md:w-[55%] px-6 md:px-16 py-5 flex items-center justify-between gap-6" style={{ backgroundColor: "#0B0B0A" }}>
          <p className="max-w-xs text-xs leading-relaxed opacity-70">
            For <span className="font-fury italic" style={{ color: ACID }}>7 years</span> he has shipped security
            tooling, AI agents and prototypes that judges keep handing prizes to.
          </p>
          <span className="fury-bob hidden md:block font-mono text-[10px] tracking-[0.3em] opacity-60 whitespace-nowrap">READ THE FILE ↓</span>
        </div>
      </section>

      {/* ── Skills ticker ── */}
      <div className="relative border-b border-white/15 overflow-hidden" aria-hidden>
        <div className="fury-ticker flex w-max py-3 font-fury italic text-2xl" style={{ color: ACID }}>
          {[...tape, ...tape].map((t, i) => (
            <span key={i} className="whitespace-nowrap">
              {t}<span className="mx-6 opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Chapter I — Subject ── */}
      <Chapter id="subject" n="I" title="The Subject">
        <div className="grid md:grid-cols-[1fr_260px] gap-12">
          <Reveal className="space-y-6 text-lg leading-[1.8] max-w-2xl">
            <p>
              <span className="font-fury italic text-4xl float-left mr-3 leading-[0.8]" style={{ color: ACID }}>I</span>
              n youth he dreamed of breaking things apart to learn how they worked; later, of building
              systems too resilient to break. Somewhere between a firehouse, a pentest lab and a
              hackathon stage, the file that follows was assembled.
            </p>
            <p className="opacity-85">
              The subject reads OWASP reports the way other people read fiction, keeps a soldering iron
              within reach, and measures success in prototypes that survive contact with judges.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 border-l border-white/15 pl-6">
            {education.map((edu) => (
              <div key={edu.institution}>
                <p className="font-mono text-[10px] tracking-[0.3em] opacity-50 uppercase">{edu.period}</p>
                <p className="font-fury italic text-xl mt-1" style={{ color: ACID }}>{edu.institution}</p>
                <p className="text-sm opacity-80 mt-1">{edu.degree}</p>
                <p className="font-mono text-xs opacity-60 mt-1">GPA {edu.gpa}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Specifications */}
        <Reveal className="mt-14">
          <p className="font-mono text-[10px] tracking-[0.4em] opacity-50 uppercase mb-2">Specifications</p>
          {SPECS.map(([label, items]) => (
            <div key={label} className="grid md:grid-cols-[220px_1fr] gap-2 py-4 border-b border-white/10">
              <span className="font-fury italic text-xl" style={{ color: ACID }}>{label}</span>
              <span className="font-mono text-xs leading-relaxed opacity-80 pt-1.5">{items.join("  ·  ")}</span>
            </div>
          ))}
        </Reveal>

        {/* Syllabus */}
        <Reveal className="mt-12">
          <p className="font-mono text-[10px] tracking-[0.4em] opacity-50 uppercase mb-4">Syllabus, annotated</p>
          <p className="font-fury italic text-2xl leading-[1.7]">
            {coursework.map((c, i) => (
              <span key={c}>
                {c}
                {i < coursework.length - 1 && <span className="mx-3" style={{ color: ACID }}>✦</span>}
              </span>
            ))}
          </p>
        </Reveal>
      </Chapter>

      <PullQuote quote={testimonials[0].quote.replace(/^He is a/, "A")} source={`${testimonials[0].name}, ${testimonials[0].org}`} />

      {/* ── Chapter II — The Works ── */}
      <Chapter id="works" n="II" title="The Works">
        <div className="space-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={0.05}>
              <article className="grid md:grid-cols-[120px_1fr] gap-6 group">
                <span className="font-fury italic text-6xl md:text-7xl opacity-25 group-hover:opacity-70 transition-opacity duration-300" style={{ color: ACID }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-fury italic text-3xl md:text-4xl" style={{ color: ACID }}>{p.title}</h3>
                    <span className="font-mono text-xs opacity-60">{p.subtitle} · {p.year}</span>
                  </div>
                  {p.badge && (
                    <p className="inline-block mt-3 px-2 py-1 text-[11px] font-mono tracking-wider text-black" style={{ backgroundColor: ACID }}>
                      {p.badge}
                    </p>
                  )}
                  <div className="mt-4 max-w-2xl space-y-4">
                    {p.bullets.map((b, j) => (
                      <p key={j} className={`text-[15px] leading-[1.8] ${j === 0 ? "opacity-90" : "opacity-75 indent-8"}`}>{b}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-5">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[10px] tracking-wider border border-white/25 px-2 py-0.5 opacity-70">{s}</span>
                    ))}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="fury-link font-fury italic text-sm ml-2" style={{ color: ACID }}>
                        view artefact ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* ── Editorial spread ── */}
      <Reveal className="relative h-[55vh] md:h-[72vh] overflow-hidden border-y border-white/10">
        <EvidencePhoto
          src="/photos/forest.jpg"
          alt="Subject on a forest path, scanning the canopy for incoming craft"
          label="SUBJECT PHOTOGRAPH 02"
          className="w-full h-full text-white/60"
          imgClassName="object-cover grayscale contrast-125 brightness-90"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(0deg, #121210 3%, transparent 32%), linear-gradient(180deg, #121210 0%, transparent 22%)" }} />
        <p className="absolute bottom-5 left-6 md:left-16 font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">
          Fig. 02 — subject observed scanning the canopy for incoming craft
        </p>
      </Reveal>

      <PullQuote quote={testimonials[2].quote} source={`${testimonials[2].name}, ${testimonials[2].org}`} />

      {/* ── Chapter III — Missions ── */}
      <Chapter id="missions" n="III" title="The Missions">
        <div className="space-y-10 max-w-3xl">
          {experience.map((exp) => (
            <Reveal key={exp.title}>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 border-b border-white/10 pb-8">
                <span className="font-mono text-xs tracking-widest opacity-50 pt-1.5">{exp.period}</span>
                <div>
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <p className="font-fury italic text-lg mt-0.5" style={{ color: ACID }}>{exp.org}</p>
                  <div className="mt-3 space-y-3">
                    {exp.bullets.map((b, j) => (
                      <p key={j} className="text-sm leading-relaxed opacity-75">{b}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* ── Chapter IV — Witnesses ── */}
      <Chapter id="witnesses" n="IV" title="The Witnesses">
        <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08} className={i === 4 ? "md:col-span-2 md:max-w-2xl md:mx-auto text-center" : ""}>
              <span className="font-fury italic text-5xl leading-none block mb-2" style={{ color: ACID }} aria-hidden>“</span>
              <p className="font-fury italic text-2xl leading-snug opacity-90">{t.quote}</p>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-60 mt-4">
                {t.name} — {t.role}, {t.org}
              </p>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <PullQuote quote={testimonials[3].quote} source={`${testimonials[3].name}, ${testimonials[3].org}`} />

      {/* ── Chapter V — Commendations ── */}
      <Chapter id="commendations" n="V" title="The Commendations">
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.08}>
              <p className="font-mono text-[10px] tracking-[0.3em] opacity-50">{a.year}</p>
              <h3 className="font-fury italic text-2xl mt-1" style={{ color: ACID }}>{a.title}</h3>
              <p className="text-sm opacity-60">{a.org}</p>
              <p className="text-sm leading-relaxed opacity-80 mt-2">{a.description}</p>
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* ── Chapter VI — Transmission ── */}
      <Chapter id="transmission" n="VI" title="The Transmission">
        <Reveal className="space-y-8">
          <CopyEmail />
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-50">
            click to copy — or <a className="fury-link" href={`mailto:${profile.email}`}>write the old way</a>
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-3 font-mono text-sm">
            <a className="fury-link" href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">{profile.github}</a>
            <a className="fury-link" href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a>
            <a className="fury-link" href="/resume.pdf" download="apollo-resume.pdf">résumé.pdf ↓</a>
          </div>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-60 pt-4">
            <span style={{ color: ACID }}>▌</span> {standing.studentLine} — deployable {standing.availability.toLowerCase()}
          </p>
        </Reveal>
      </Chapter>

      <footer className="border-t border-white/10 px-6 py-8 flex flex-wrap justify-between gap-4 font-mono text-[10px] tracking-[0.3em] opacity-50 uppercase">
        <span>Transmission ends</span>
        <span>Filed under: case-files / apollo</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
