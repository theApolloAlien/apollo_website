import React from "react";
import { profile, projects, experience, education, achievements } from "@/lib/data";
import { EvidencePhoto } from "@/components/prototypes/EvidencePhoto";

/* Prototype 03 — "CAPSULE": a dithered sighting archive.
   Grey paper, squared tech lettering down the spine, halftone photography,
   case-study files and a barcode sticker. Framed in a black slab like a
   recovered display terminal. */

const PAPER = "#C9CBC6";
const INKC = "#17181A";

// Deterministic 12×12 datamatrix pattern (no hydration surprises)
const MATRIX =
  "101101001011" + "010010110100" + "110101011011" + "001011100101" +
  "101100101110" + "010111010001" + "101001101011" + "011010010110" +
  "100101101001" + "110010110110" + "001101001101" + "111011010111";

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
    <p className="font-mono text-[11px] tracking-wide opacity-70">
      {items.join("  —  ")}
    </p>
  );
}

export function CapsulePrototype() {
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

        <div className="flex">
          {/* Spine letters */}
          <div className="hidden md:flex flex-col justify-between items-center px-2 lg:px-4 py-6 select-none" aria-hidden>
            {"APOLLO".split("").map((ch, i) => (
              <span key={i} className="font-tech text-[11vh] leading-[0.82]">{ch}</span>
            ))}
          </div>

          {/* Main sheet */}
          <div className="flex-1 min-w-0 px-4 md:pl-2 md:pr-8 pb-10">

            {/* ── Hero evidence frame ── */}
            <div className="relative">
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
                {/* scanline sweep */}
                <div className="capsule-scan absolute left-0 right-0 top-0 h-10 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(23,24,26,0.25), transparent)" }} />
              </div>

              {/* Sticker */}
              <div className="absolute -bottom-8 right-2 md:right-6 rotate-6 bg-[#EDEDE8] shadow-md border border-black/20 px-3 py-2 flex items-center gap-3">
                <div>
                  <p className="font-mono text-[12px] font-bold tracking-[0.15em]">0943000430020</p>
                  <p className="font-mono text-[10px] opacity-60">20909</p>
                  <p className="font-mono text-[13px] font-bold leading-tight mt-1">SUBJ<br />84 TY</p>
                </div>
                <DataMatrix />
              </div>
            </div>

            <p className="max-w-md mt-4 text-[13px] leading-relaxed">
              Explore the classified record of experiments, encounters and
              commendations attributed to one Computer Engineering student —
              recovered from a bygone era and declassified for recruiters.
            </p>

            {/* ── Case study 01 (featured) ── */}
            <section className="mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-8">
              <div>
                <h2 className="font-archivo font-semibold text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight">
                  {projects[0].title}: An Unexplained Level of Automation
                </h2>
                <div className="mt-2">
                  <FileMeta items={["Location: NTU, Singapore", `Dated: ${projects[0].year}`, projects[0].badge ?? "STATUS: OPEN"]} />
                </div>
                {projects[0].bullets.map((b, i) => (
                  <p key={i} className="text-[14px] leading-[1.75] mt-4 opacity-90">{b}</p>
                ))}
                {projects[0].link && (
                  <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[11px] tracking-[0.2em] border border-black px-3 py-2 mt-5 hover:bg-black hover:text-[#C9CBC6] transition-colors">
                    VIEW FOOTAGE ↗
                  </a>
                )}
              </div>
              <div className="relative self-start">
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
                {/* attention tape */}
                <div className="absolute -bottom-3 -left-3 rotate-[-3deg] bg-[#E8C520] text-black font-mono text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 border border-black/50">
                  ⚠ ATTENTION — PRIZE-WINNING ARTEFACTS AHEAD
                </div>
              </div>
            </section>

            {/* ── Remaining case files ── */}
            <section className="mt-16 grid md:grid-cols-3 gap-px bg-black/30 border border-black/30">
              {projects.slice(1).map((p) => (
                <article key={p.id} className="p-5 flex flex-col" style={{ backgroundColor: PAPER }}>
                  <p className="font-mono text-[10px] tracking-[0.25em] opacity-60">CASE FILE / {p.year}</p>
                  <h3 className="font-archivo font-semibold text-xl leading-snug mt-2">
                    {p.title}: {p.subtitle}
                  </h3>
                  {p.badge && (
                    <p className="font-mono text-[10px] font-bold tracking-wide mt-2 inline-block bg-black text-[#C9CBC6] px-2 py-1 self-start">{p.badge}</p>
                  )}
                  <p className="text-[13px] leading-[1.7] mt-3 opacity-85">{p.bullets[0]}</p>
                  <p className="font-mono text-[10px] tracking-wide opacity-60 mt-auto pt-4">{p.stack.join(" / ")}</p>
                </article>
              ))}
            </section>

            {/* ── Encounter log ── */}
            <section className="mt-16">
              <h2 className="font-tech text-lg tracking-[0.2em] uppercase">Encounter Log</h2>
              <div className="mt-4 border-t border-black/40">
                {experience.map((exp) => (
                  <div key={exp.title} className="grid md:grid-cols-[170px_1fr_2fr] gap-2 md:gap-6 py-4 border-b border-black/40">
                    <span className="font-mono text-[11px] tracking-wide opacity-70 pt-0.5">{exp.period}</span>
                    <div>
                      <p className="font-semibold text-[15px] leading-snug">{exp.org}</p>
                      <p className="font-mono text-[11px] opacity-70 mt-0.5">{exp.title}</p>
                    </div>
                    <p className="text-[13px] leading-[1.65] opacity-85">{exp.bullets[0]}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Clearance + commendations ── */}
            <section className="mt-16 grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="font-tech text-lg tracking-[0.2em] uppercase">Clearance</h2>
                {education.map((edu) => (
                  <div key={edu.institution} className="border border-black/40 p-4 mt-4">
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-[13px] opacity-85 mt-1">{edu.degree}</p>
                    <FileMeta items={[edu.period, `GPA ${edu.gpa}`]} />
                  </div>
                ))}
              </div>
              <div>
                <h2 className="font-tech text-lg tracking-[0.2em] uppercase">Commendations</h2>
                <ul className="mt-4 space-y-4">
                  {achievements.map((a) => (
                    <li key={a.title} className="flex gap-3">
                      <span className="font-mono text-[11px] opacity-60 shrink-0 pt-0.5 w-16">{a.year}</span>
                      <div>
                        <p className="font-semibold text-[14px]">{a.title} — {a.org}</p>
                        <p className="text-[13px] opacity-80 leading-relaxed mt-1">{a.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── Report a sighting ── */}
            <section className="mt-16 border-t-2 border-black pt-8 flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="font-archivo font-semibold text-3xl">Report a sighting.</h2>
                <p className="font-mono text-[11px] tracking-wide opacity-70 mt-2">
                  WITNESSES MAY ALSO CONSULT: {profile.github} / {profile.linkedin}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="font-mono text-[12px] tracking-[0.15em] bg-black text-[#C9CBC6] px-5 py-3 hover:opacity-80 transition-opacity">
                  {profile.email.toUpperCase()}
                </a>
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
