import React from "react";
import { profile, projects, experience, education, achievements } from "@/lib/data";
import { EvidencePhoto } from "@/components/prototypes/EvidencePhoto";

/* Prototype 02 — "HERALD": a broadsheet front page.
   Cream ink on kelly green, hard newspaper rules, mono masthead,
   serif headlines, barcode, and a saucer where the printing press
   ornament should be. */

const GREEN = "#25703A";
const CREAM = "#F2EDE4";

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
  return (
    <p className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-80 italic">{children}</p>
  );
}

function ReadDot() {
  return <p className="font-mono text-[10px] tracking-[0.2em] mt-2 text-right">READ ●</p>;
}

export function HeraldPrototype() {
  const lead = projects[0];
  const rail = projects[2]; // Rail Energy — national winner
  const rest = [projects[1], projects[3]];
  const tickerItems = achievements.map((a) => `${a.title.toUpperCase()} — ${a.org.toUpperCase()}`);

  return (
    <div className="min-h-screen p-2 md:p-5 font-archivo" style={{ backgroundColor: "#0D0D0B" }}>
      <div className="proto-grain proto-grain--bright" aria-hidden />

      {/* The green sheet */}
      <div className="relative border px-4 md:px-8 pt-6 pb-4 min-h-[96vh]" style={{ backgroundColor: GREEN, color: CREAM, borderColor: CREAM }}>

        {/* ── Masthead ── */}
        <header className="relative">
          <a href="/prototypes" className="absolute left-0 top-0 font-mono text-[10px] tracking-widest opacity-70 hover:opacity-100">← BACK</a>
          <h1 className="font-mono font-bold text-center leading-none tracking-tight text-[clamp(2.4rem,8.6vw,7rem)]">
            APOLLO<MastheadSaucer />HERALD
          </h1>
          <div className="relative border-t-2 mt-4" style={{ borderColor: CREAM }}>
            <FlyingSaucer />
          </div>
          <div className="flex justify-between items-center font-mono text-[11px] tracking-[0.2em] py-2.5">
            <span>N°01 ● THE UFO PORTFOLIO ISSUE</span>
            <span className="hidden md:inline">SINGAPORE / NTU SECTOR</span>
            <span>©2026 ● FOR EVER</span>
          </div>
          <div className="border-t" style={{ borderColor: CREAM }} />
        </header>

        {/* ── Broadsheet grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[40px_200px_1.5fr_1fr_1.1fr] gap-0 mt-0">

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

          {/* Staff picks — photo column */}
          <aside className="py-5 xl:px-4 md:pr-6 xl:border-r" style={{ borderColor: CREAM }}>
            <p className="font-newsprint text-4xl leading-none">AH</p>
            <p className="font-mono text-[10px] tracking-[0.2em] mt-1 opacity-80">APOLLO HERALD<br />EDITORIAL N°01</p>
            <p className="font-newsprint text-xl border-b pb-1 mt-4 mb-4" style={{ borderColor: CREAM }}>STAFF PICKS</p>

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
          </aside>

          {/* Lead story */}
          <article className="py-5 md:px-6 md:border-l xl:border-l-0 xl:border-r" style={{ borderColor: CREAM }}>
            <h2 className="font-newsprint text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.02]">
              {lead.title} on being an autonomous agent
            </h2>
            <Kicker>REAL TALK — INTERVIEW</Kicker>
            <p className="font-mono text-xs font-bold tracking-wide uppercase leading-relaxed mt-4">
              Just over one semester ago, Apollo shipped {lead.title}, an {lead.subtitle.toLowerCase()} that
              placed {lead.badge?.split("·")[0].trim().toLowerCase()} at the NTU Fintech Innovators Hackathon.
            </p>
            {lead.bullets.map((b, i) => (
              <p key={i} className="text-sm leading-[1.75] mt-4 opacity-90">{b}</p>
            ))}
            {lead.link && (
              <a href={lead.link} target="_blank" rel="noopener noreferrer" className="block font-mono text-[10px] tracking-[0.2em] mt-4 text-right hover:opacity-70">
                READ MORE ●
              </a>
            )}
            <div className="border-t mt-6 pt-4" style={{ borderColor: CREAM }}>
              <p className="font-newsprint text-2xl leading-tight">“They say you are what you build. He never stopped building.”</p>
              <p className="font-mono text-[10px] tracking-[0.2em] mt-2 opacity-70">— THE EDITORS</p>
            </div>
          </article>

          {/* Hot release — national winner */}
          <article className="py-5 md:px-6 md:border-l xl:border-l-0 xl:border-r flex flex-col" style={{ borderColor: CREAM }}>
            <h3 className="font-archivo font-bold text-lg leading-snug uppercase">
              {rail.title} harvests the wind trains leave behind
            </h3>
            <div className="border-t border-b py-1.5 my-3" style={{ borderColor: CREAM }}>
              <p className="font-newsprint text-2xl text-center tracking-wide">EXTRA HOT RELEASES</p>
            </div>
            {rail.bullets.map((b, i) => (
              <p key={i} className="text-[13px] leading-[1.7] mt-3 opacity-90">{b}</p>
            ))}
            <div className="mt-auto pt-6">
              <p className="font-newsprint text-[clamp(2.6rem,3.5vw,3.6rem)] leading-none">1ST<br />PLACE</p>
              <p className="font-mono text-[10px] tracking-[0.15em] mt-2 opacity-85">
                NATIONAL WINNER ● SGD 3,000 ● 200+ TEAMS ● SBS TRANSIT
              </p>
            </div>
          </article>

          {/* In this issue + right column */}
          <aside className="py-5 md:px-6 md:border-l" style={{ borderColor: CREAM }}>
            <p className="font-newsprint text-3xl mb-4">IN THIS ISSUE</p>

            {rest.map((p) => (
              <div key={p.id} className="border-b pb-4 mb-4" style={{ borderColor: CREAM }}>
                <h4 className="font-newsprint text-2xl leading-tight">{p.title}: {p.subtitle}</h4>
                <div className="flex justify-between items-baseline mt-1">
                  <Kicker>{p.stack[0]} — {p.year}</Kicker>
                </div>
                <ReadDot />
              </div>
            ))}

            {/* Internship story */}
            <div className="border-b pb-4 mb-4" style={{ borderColor: CREAM }}>
              <h4 className="font-newsprint text-2xl leading-tight">{experience[0].org.split(" ")[0]} signs the intern the firewalls warned about</h4>
              <Kicker>MISSION LOG — {experience[0].period}</Kicker>
              <p className="text-[13px] leading-[1.7] mt-2 opacity-90">{experience[0].bullets[0]}</p>
              <ReadDot />
            </div>

            {/* Education notice */}
            <div className="pb-4">
              <h4 className="font-newsprint text-2xl leading-tight">{education[0].institution.match(/\(([^)]+)\)/)?.[1] ?? education[0].institution} confirms GPA {education[0].gpa}</h4>
              <Kicker>CLEARANCE RECORDS</Kicker>
              <p className="text-[13px] leading-[1.7] mt-2 opacity-90">
                {education[0].degree}, {education[0].period}. Previously: {education[1].degree}, {education[1].institution}.
              </p>
            </div>

            {/* Barcode */}
            <div className="mt-2">
              <div className="barcode h-11 w-44 text-cream" style={{ color: CREAM }} />
              <p className="font-mono text-[10px] tracking-[0.35em] mt-1">0 2026 4 4 5000 1</p>
            </div>
          </aside>
        </div>

        {/* ── Contact strip ── */}
        <div className="border-t-2 mt-2 pt-3 pb-1 flex flex-wrap items-center justify-between gap-3" style={{ borderColor: CREAM }}>
          <p className="font-newsprint text-xl">Tips, sightings and offers:</p>
          <div className="flex flex-wrap gap-6 font-mono text-xs">
            <a className="underline underline-offset-4 hover:opacity-70" href={`mailto:${profile.email}`}>{profile.email}</a>
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
      </div>
    </div>
  );
}
