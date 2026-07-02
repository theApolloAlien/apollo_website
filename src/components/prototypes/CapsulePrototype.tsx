"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile, projects, experience, education, achievements, skills, coursework } from "@/lib/data";
import { testimonials } from "@/components/prototypes/testimonials";
import { EvidencePhoto } from "@/components/prototypes/EvidencePhoto";
import { Reveal } from "@/components/prototypes/Reveal";
import { useStanding } from "@/lib/useStanding";

/* Prototype 03 — "CAPSULE": a dithered sighting archive, fully built out.
   Grey paper in a recovered-terminal frame, squared spine lettering,
   halftone photography, case files, witness statements and stamps. */

const PAPER = "#C9CBC6";
const INKC = "#17181A";
const STAMP = "#8C2B21";

// Deterministic 12×12 datamatrix pattern (no hydration surprises)
const MATRIX =
  "101101001011" + "010010110100" + "110101011011" + "001011100101" +
  "101100101110" + "010111010001" + "101001101011" + "011010010110" +
  "100101101001" + "110010110110" + "001101001101" + "111011010111";

const INDEX_LINKS = [
  ["EXHIBITS", "#exhibits"],
  ["CASE FILES", "#case-files"],
  ["MANIFEST", "#manifest"],
  ["ENCOUNTERS", "#encounters"],
  ["WITNESSES", "#witnesses"],
  ["CLEARANCE", "#clearance"],
  ["REPORT", "#report"],
] as const;

function DataMatrix() {
  return (
    <div className="grid grid-cols-12 w-14 h-14 shrink-0" aria-hidden>
      {MATRIX.split("").map((bit, i) => (
        <span key={i} style={{ backgroundColor: bit === "1" ? INKC : "transparent" }} />
      ))}
    </div>
  );
}

function DitherUFO() {
  return (
    <div className="capsule-drift absolute top-[8%] right-[6%] pointer-events-none" aria-hidden>
      <svg width="72" height="34" viewBox="0 0 72 34" fill="none">
        <ellipse cx="36" cy="21" rx="32" ry="9" fill={INKC} opacity="0.82" />
        <path d="M20 15 C24 4 48 4 52 15" fill={INKC} opacity="0.7" />
        <ellipse cx="36" cy="24" rx="20" ry="4" fill={PAPER} opacity="0.25" />
      </svg>
    </div>
  );
}

function FileMeta({ items }: { items: string[] }) {
  return (
    <p className="font-mono text-[11px] tracking-wide opacity-70">{items.join("  —  ")}</p>
  );
}

function SectionTitle({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-tech text-lg tracking-[0.2em] uppercase scroll-mt-20">{children}</h2>
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
      className="font-mono text-[12px] tracking-[0.15em] bg-black text-[#C9CBC6] px-5 py-3 hover:opacity-80 transition-opacity"
      aria-label="Copy email address"
    >
      {copied ? "COPIED TO CLIPBOARD ✓" : profile.email.toUpperCase()}
    </button>
  );
}

export function CapsulePrototype() {
  const standing = useStanding();
  const featured = projects[0];

  const manifest: [string, string[]][] = [
    ["Languages", skills.languages],
    ["Frameworks", skills.frameworks],
    ["Domains", skills.domains],
    ["Platforms", skills.platforms],
  ];

  return (
    <div className="min-h-screen p-2 md:p-4 font-archivo" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="proto-grain proto-grain--soft" aria-hidden />

      {/* Recovered terminal frame */}
      <div className="relative rounded-2xl md:rounded-3xl border-[10px] md:border-[14px] border-black overflow-hidden" style={{ backgroundColor: PAPER, color: INKC }}>

        {/* Top bar */}
        <div className="flex items-center justify-between px-4 md:px-8 py-3 font-mono text-[11px] tracking-[0.2em]">
          <a href="/prototypes" className="hover:opacity-60">←</a>
          <span>APOLLO/ SIGHTING RECORDS</span>
          <span aria-hidden>▦</span>
        </div>

        {/* Index nav */}
        <nav className="flex flex-wrap gap-x-5 gap-y-1 px-4 md:px-8 pb-3 border-b border-black/30 font-mono text-[10px] tracking-[0.18em]">
          {INDEX_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:underline underline-offset-4 opacity-80 hover:opacity-100">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex">
          {/* Spine letters */}
          <div className="hidden md:flex flex-col justify-between items-center px-2 lg:px-4 py-6 select-none" aria-hidden>
            {"APOLLO".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="font-tech text-[10.5vh] leading-[0.82]"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: "easeOut" }}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          {/* Main sheet */}
          <div className="flex-1 min-w-0 px-4 md:pl-2 md:pr-8 pb-10 pt-4">

            {/* ── Hero evidence frame ── */}
            <div className="relative" id="exhibits">
              <div className="relative overflow-hidden border border-black/30">
                <EvidencePhoto
                  src="/photos/reach.jpg"
                  alt="Subject reaching toward the camera, dithered archive photograph"
                  label="EXHIBIT A — SUBJECT INTERFERES WITH CAMERA"
                  className="w-full aspect-[16/8] text-black/70"
                  imgClassName="object-cover halftone"
                />
                <div className="dither-overlay absolute inset-0 pointer-events-none" />
                <DitherUFO />
                <div className="capsule-scan absolute left-0 right-0 top-0 h-10 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(23,24,26,0.25), transparent)" }} />

                {/* Stamp */}
                <motion.div
                  className="absolute top-4 left-4 md:top-7 md:left-7 border-4 px-4 py-1.5 font-tech text-lg md:text-2xl tracking-[0.18em] pointer-events-none"
                  style={{ color: STAMP, borderColor: STAMP, backgroundColor: "rgba(201,203,198,0.5)" }}
                  initial={{ opacity: 0, scale: 2.3, rotate: -24 }}
                  animate={{ opacity: 1, scale: 1, rotate: -7 }}
                  transition={{ type: "spring", stiffness: 320, damping: 19, delay: 0.55 }}
                >
                  DECLASSIFIED
                </motion.div>
              </div>

              {/* Sticker */}
              <motion.div
                className="absolute -bottom-8 right-2 md:right-6 bg-[#EDEDE8] shadow-md border border-black/20 px-3 py-2 flex items-center gap-3"
                initial={{ opacity: 0, y: 10, rotate: 12 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div>
                  <p className="font-mono text-[12px] font-bold tracking-[0.15em]">0943000430020</p>
                  <p className="font-mono text-[10px] opacity-60">20909</p>
                  <p className="font-mono text-[13px] font-bold leading-tight mt-1">SUBJ<br />84 TY</p>
                </div>
                <DataMatrix />
              </motion.div>
            </div>

            <div className="mt-4 md:flex items-end justify-between gap-8">
              <p className="max-w-md text-[13px] leading-relaxed">
                Explore the classified record of experiments, encounters and
                commendations attributed to one Computer Engineering student —
                recovered from a bygone era and declassified for recruiters.
              </p>
              <div className="font-mono text-[10px] tracking-[0.15em] opacity-70 mt-3 md:mt-0 md:text-right leading-relaxed shrink-0">
                FILE NO: APL-2026-084<br />
                SUBJECT: {profile.name}<br />
                STATUS: {standing.studentLine.toUpperCase()}
              </div>
            </div>

            {/* ── Featured case study ── */}
            <section className="mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-8" id="case-files">
              <Reveal>
                <h2 className="font-archivo font-semibold text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight scroll-mt-20">
                  {featured.title}: An Unexplained Level of Automation
                </h2>
                <div className="mt-2">
                  <FileMeta items={["Location: NTU, Singapore", `Dated: ${featured.year}`, featured.badge ?? "STATUS: OPEN"]} />
                </div>
                {featured.bullets.map((b, i) => (
                  <p key={i} className="text-[14px] leading-[1.75] mt-4 opacity-90">{b}</p>
                ))}
                <p className="font-mono text-[10px] tracking-wide opacity-60 mt-4">EQUIPMENT: {featured.stack.join(" / ")}</p>
                {featured.link && (
                  <a href={featured.link} target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] tracking-[0.2em] border border-black px-3 py-2 mt-5 hover:bg-black hover:text-[#C9CBC6] transition-colors">
                    VIEW FOOTAGE ↗
                  </a>
                )}
              </Reveal>
              <Reveal delay={0.1} className="relative self-start">
                <div className="relative overflow-hidden border border-black/30">
                  <EvidencePhoto
                    src="/photos/booth.jpg"
                    alt="Subject in a phone booth, archive photograph"
                    label="EXHIBIT B — TRANSMISSION BOOTH"
                    className="w-full aspect-[4/3] text-black/70"
                    imgClassName="object-cover halftone"
                  />
                  <div className="dither-overlay absolute inset-0 pointer-events-none" />
                </div>
                <div className="absolute -bottom-3 -left-3 rotate-[-3deg] bg-[#E8C520] text-black font-mono text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 border border-black/50">
                  ⚠ ATTENTION — PRIZE-WINNING ARTEFACTS AHEAD
                </div>
              </Reveal>
            </section>

            {/* ── Exhibits C & D ── */}
            <section className="mt-16 grid md:grid-cols-2 gap-6">
              {[
                {
                  src: "/photos/forest.jpg",
                  alt: "Subject on a forest path, looking up at the canopy",
                  cap: "EXHIBIT C — SUBJECT MAINTAINS SKYWARD WATCH, FOREST SECTOR",
                },
                {
                  src: "/photos/grass.jpg",
                  alt: "Subject sitting on grass by the coast, looking up at the sky",
                  cap: "EXHIBIT D — PROLONGED OBSERVATION, COASTAL PARKLANDS",
                },
              ].map((ex, i) => (
                <Reveal key={ex.src} delay={i * 0.08}>
                  <div className="relative overflow-hidden border border-black/30">
                    <EvidencePhoto
                      src={ex.src}
                      alt={ex.alt}
                      label={ex.cap}
                      className="w-full aspect-[16/10] text-black/70"
                      imgClassName="object-cover halftone"
                    />
                    <div className="dither-overlay absolute inset-0 pointer-events-none" />
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.15em] opacity-70 mt-2">{ex.cap}</p>
                </Reveal>
              ))}
            </section>

            {/* ── Remaining case files ── */}
            <section className="mt-16 grid md:grid-cols-3 gap-px bg-black/30 border border-black/30">
              {projects.slice(1).map((p, i) => (
                <article key={p.id} className="p-5 flex flex-col" style={{ backgroundColor: PAPER }}>
                  <Reveal delay={i * 0.06} className="flex flex-col h-full">
                    <p className="font-mono text-[10px] tracking-[0.25em] opacity-60">CASE FILE / {p.year}</p>
                    <h3 className="font-archivo font-semibold text-xl leading-snug mt-2">
                      {p.title}: {p.subtitle}
                    </h3>
                    {p.badge && (
                      <p className="font-mono text-[10px] font-bold tracking-wide mt-2 inline-block bg-black text-[#C9CBC6] px-2 py-1 self-start">{p.badge}</p>
                    )}
                    <div className="mt-3 space-y-3">
                      {p.bullets.map((b, j) => (
                        <p key={j} className="text-[13px] leading-[1.7] opacity-85">{b}</p>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-auto pt-4">
                      <p className="font-mono text-[10px] tracking-wide opacity-60">{p.stack.join(" / ")}</p>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.15em] border border-black px-2 py-1 hover:bg-black hover:text-[#C9CBC6] transition-colors shrink-0">
                          VIEW ↗
                        </a>
                      )}
                    </div>
                  </Reveal>
                </article>
              ))}
            </section>

            {/* ── Equipment manifest + training modules ── */}
            <section className="mt-16" id="manifest">
              <SectionTitle>Equipment Manifest</SectionTitle>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/30 border border-black/30">
                {manifest.map(([label, items]) => (
                  <div key={label} className="p-4" style={{ backgroundColor: PAPER }}>
                    <p className="font-tech text-[11px] tracking-[0.2em] uppercase border-b border-black/40 pb-2">{label}</p>
                    <ul className="mt-2">
                      {items.map((item) => (
                        <li key={item} className="font-mono text-[11px] py-1 border-b border-black/10 last:border-0">▸ {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <SectionTitle>Training Modules</SectionTitle>
                <div className="mt-4 grid sm:grid-cols-2 border border-black/30">
                  {coursework.map((c, i) => (
                    <p key={c} className={`font-mono text-[12px] px-4 py-2 border-b border-black/20 ${i % 2 === 0 ? "sm:border-r" : ""} ${i >= coursework.length - 2 ? "sm:border-b-0" : ""}`}>
                      ▣ {c.toUpperCase()} <span className="opacity-50">— COMPLETE</span>
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Encounter log ── */}
            <section className="mt-16">
              <SectionTitle id="encounters">Encounter Log</SectionTitle>
              <div className="mt-4 border-t border-black/40">
                {experience.map((exp, i) => (
                  <Reveal key={exp.title} delay={i * 0.04}>
                    <div className="grid md:grid-cols-[170px_1fr_2fr] gap-2 md:gap-6 py-4 border-b border-black/40">
                      <span className="font-mono text-[11px] tracking-wide opacity-70 pt-0.5">{exp.period}</span>
                      <div>
                        <p className="font-semibold text-[15px] leading-snug">{exp.org}</p>
                        <p className="font-mono text-[11px] opacity-70 mt-0.5">{exp.title}</p>
                      </div>
                      <div className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <p key={j} className="text-[13px] leading-[1.65] opacity-85">{b}</p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ── Witness statements ── */}
            <section className="mt-16">
              <SectionTitle id="witnesses">Witness Statements</SectionTitle>
              <p className="font-mono text-[10px] tracking-[0.15em] opacity-60 mt-1">
                FIVE (5) STATEMENTS ON RECORD — IDENTITIES PARTIALLY <span className="redaction w-14" aria-hidden /> FOR PRIVACY
              </p>
              <div className="mt-5 grid md:grid-cols-2 gap-px bg-black/30 border border-black/30">
                {testimonials.map((t, i) => (
                  <div key={t.name} className={`p-5 ${i === 4 ? "md:col-span-2" : ""}`} style={{ backgroundColor: PAPER }}>
                    <Reveal delay={(i % 2) * 0.06}>
                      <p className="font-mono text-[10px] tracking-[0.25em] opacity-60">
                        WITNESS {String(i + 1).padStart(2, "0")}/05 — LOCATION: <span className="redaction w-12" aria-hidden />
                      </p>
                      <p className="font-mono text-[13px] leading-[1.8] mt-3">“{t.quote}”</p>
                      <p className="font-mono text-[10px] tracking-[0.15em] opacity-70 mt-3 border-t border-black/20 pt-2">
                        SIGNED: {t.name.toUpperCase()} — {t.role.toUpperCase()}, {t.org.toUpperCase()}
                      </p>
                    </Reveal>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Clearance + commendations ── */}
            <section className="mt-16 grid md:grid-cols-2 gap-10">
              <div>
                <SectionTitle id="clearance">Clearance</SectionTitle>
                {education.map((edu) => (
                  <Reveal key={edu.institution}>
                    <div className="border border-black/40 p-4 mt-4">
                      <p className="font-semibold">{edu.institution}</p>
                      <p className="text-[13px] opacity-85 mt-1">{edu.degree}</p>
                      <FileMeta items={[edu.period, `GPA ${edu.gpa}`]} />
                    </div>
                  </Reveal>
                ))}

                {/* Status terminal */}
                <Reveal>
                  <div className="mt-6 border border-black/40 p-4 font-mono text-[12px] tracking-wide" style={{ backgroundColor: "#D3D5D0" }}>
                    <p>&gt; SUBJECT STATUS: {standing.studentLine.toUpperCase()}</p>
                    <p className="mt-1.5">&gt; DEPLOYMENT WINDOW: {standing.availability}</p>
                    <p className="mt-1.5">&gt; AWAITING ASSIGNMENT<span className="cursor-blink" aria-hidden>▌</span></p>
                  </div>
                </Reveal>
              </div>
              <div>
                <SectionTitle>Commendations</SectionTitle>
                <ul className="mt-4 space-y-4">
                  {achievements.map((a, i) => (
                    <Reveal key={a.title} delay={i * 0.04}>
                      <li className="flex gap-3">
                        <span className="font-mono text-[11px] opacity-60 shrink-0 pt-0.5 w-16">{a.year}</span>
                        <div>
                          <p className="font-semibold text-[14px]">{a.title} — {a.org}</p>
                          <p className="text-[13px] opacity-80 leading-relaxed mt-1">{a.description}</p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── Report a sighting ── */}
            <section className="mt-16 border-t-2 border-black pt-8 flex flex-wrap items-center justify-between gap-6" id="report">
              <div>
                <h2 className="font-archivo font-semibold text-3xl scroll-mt-20">Report a sighting.</h2>
                <p className="font-mono text-[11px] tracking-wide opacity-70 mt-2">
                  WITNESSES MAY ALSO CONSULT:{" "}
                  <a className="underline underline-offset-2 hover:opacity-70" href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">{profile.github}</a>
                  {"  /  "}
                  <a className="underline underline-offset-2 hover:opacity-70" href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <CopyEmail />
                <a href="/resume.pdf" download="apollo-resume.pdf" className="font-mono text-[12px] tracking-[0.15em] border border-black px-5 py-3 hover:bg-black hover:text-[#C9CBC6] transition-colors">
                  DOSSIER.PDF ↓
                </a>
              </div>
            </section>

            <footer className="mt-10 flex justify-between font-mono text-[10px] tracking-[0.25em] opacity-60 uppercase">
              <span>Capsule archive</span>
              <span>Declassified 2026</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
