import React from "react";
import { profile, projects, experience, education, achievements } from "@/lib/data";
import { EvidencePhoto } from "@/components/prototypes/EvidencePhoto";

/* Prototype 01 — "FURY": dark editorial longread.
   Chartreuse swash serif over a black-and-white subject photo, heavy grain,
   chaptered article body. */

const INK = "#E9E7DB";
const ACID = "#E3EE4F";

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

function Chapter({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="relative border-t border-white/10 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-baseline gap-6 mb-10">
          <span className="font-mono text-xs tracking-[0.4em] opacity-50">CHAPTER {n}</span>
          <h2 className="font-fury italic text-5xl md:text-7xl leading-none" style={{ color: ACID }}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function FuryPrototype() {
  return (
    <div className="min-h-screen font-archivo selection:bg-[#E3EE4F] selection:text-black" style={{ backgroundColor: "#121210", color: INK }}>
      <div className="proto-grain proto-grain--heavy" aria-hidden />
      <FuryUFO />

      {/* ── Top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 mix-blend-difference">
        <a href="/prototypes" className="font-mono text-xs tracking-widest opacity-80 hover:opacity-100">
          ← 100% apollo
        </a>
        <nav className="flex gap-8 font-fury italic text-xl">
          <a className="fury-link" href="#chapters">Menu</a>
          <a className="fury-link" href="#longread">Longread</a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Subject photograph — right two-thirds, monochrome */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[72%]">
          <EvidencePhoto
            src="/photos/booth.jpg"
            alt="Joshua Apollo in a phone booth, monochrome"
            label="SUBJECT PHOTOGRAPH 01"
            className="w-full h-full text-white/60"
            imgClassName="object-cover grayscale contrast-125 brightness-90"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #121210 2%, transparent 45%), linear-gradient(0deg, #121210 4%, transparent 40%)" }} />
        </div>

        {/* Giant name */}
        <h1 className="relative z-10 font-fury italic pt-[16vh] pl-6 md:pl-16 leading-[0.82] text-[clamp(4.5rem,15vw,13rem)]" style={{ color: ACID }}>
          Joshua
          <br />
          <span className="pl-[0.6em]">Apollo</span>
        </h1>

        {/* Repeated marginalia */}
        <div className="absolute left-6 bottom-[24vh] z-10 font-fury italic text-lg leading-relaxed" aria-hidden>
          {[0.9, 0.7, 0.5, 0.35, 0.2].map((o, i) => (
            <div key={i} style={{ color: ACID, opacity: o }}>case-files</div>
          ))}
        </div>

        {/* Author credit */}
        <div className="absolute z-10 left-[46%] bottom-[26vh] hidden md:block">
          <p className="font-fury italic text-sm opacity-60">Author</p>
          <p className="text-base">{profile.name.split(" ").map(w => w[0] + w.slice(1).toLowerCase()).join(" ")}</p>
          <p className="font-fury italic text-xs opacity-40 mt-6">by apollo_os</p>
        </div>

        {/* Intro standfirst */}
        <div className="absolute z-10 right-6 md:right-12 bottom-[10vh] max-w-xs space-y-5 text-[15px] leading-relaxed">
          <p className="indent-8">{profile.tagline}</p>
          <p className="indent-8 opacity-80">{profile.objective}</p>
        </div>

        {/* Footnote band */}
        <div className="absolute bottom-0 left-0 z-10 w-full md:w-[55%] px-6 md:px-16 py-6" style={{ backgroundColor: "#0B0B0A" }}>
          <p className="max-w-xs text-xs leading-relaxed opacity-70">
            For <span className="font-fury italic" style={{ color: ACID }}>7 years</span> he has shipped security
            tooling, AI agents and prototypes that judges keep handing prizes to.
          </p>
        </div>
      </section>

      <div id="longread" />

      {/* ── Chapter I — Subject ── */}
      <div id="chapters" />
      <Chapter n="I" title="The Subject">
        <div className="grid md:grid-cols-[1fr_260px] gap-12">
          <div className="space-y-6 text-lg leading-[1.8] max-w-2xl">
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
          </div>
          <aside className="space-y-6 border-l border-white/15 pl-6">
            {education.map((edu) => (
              <div key={edu.institution}>
                <p className="font-mono text-[10px] tracking-[0.3em] opacity-50 uppercase">{edu.period}</p>
                <p className="font-fury italic text-xl mt-1" style={{ color: ACID }}>{edu.institution}</p>
                <p className="text-sm opacity-80 mt-1">{edu.degree}</p>
                <p className="font-mono text-xs opacity-60 mt-1">GPA {edu.gpa}</p>
              </div>
            ))}
          </aside>
        </div>
      </Chapter>

      {/* Pull quote */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="font-fury italic text-3xl md:text-5xl leading-tight opacity-90">
          “A leader who combines the grit of a firefighter with the foresight of a strategist.”
        </p>
        <p className="font-mono text-xs tracking-[0.3em] opacity-50 mt-6 uppercase">— Lt Mohd Nizam bin Walat, SCDF</p>
      </div>

      {/* ── Chapter II — The Works ── */}
      <Chapter n="II" title="The Works">
        <div className="space-y-16">
          {projects.map((p, i) => (
            <article key={p.id} className="grid md:grid-cols-[120px_1fr] gap-6 group">
              <span className="font-fury italic text-6xl md:text-7xl opacity-25 group-hover:opacity-60 transition-opacity" style={{ color: ACID }}>
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
                <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] opacity-85">{p.bullets[0]}</p>
                <div className="flex flex-wrap gap-2 mt-4">
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
          ))}
        </div>
      </Chapter>

      {/* ── Chapter III — Missions ── */}
      <Chapter n="III" title="The Missions">
        <div className="space-y-10 max-w-3xl">
          {experience.map((exp) => (
            <div key={exp.title} className="grid md:grid-cols-[180px_1fr] gap-4 border-b border-white/10 pb-8">
              <span className="font-mono text-xs tracking-widest opacity-50 pt-1.5">{exp.period}</span>
              <div>
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="font-fury italic text-lg mt-0.5" style={{ color: ACID }}>{exp.org}</p>
                <p className="text-sm leading-relaxed opacity-75 mt-3">{exp.bullets[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </Chapter>

      {/* Pull quote */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="font-fury italic text-3xl md:text-5xl leading-tight opacity-90">
          “He is a rare gem that any organisation would be lucky to have.”
        </p>
        <p className="font-mono text-xs tracking-[0.3em] opacity-50 mt-6 uppercase">— Liew Yoon Hin, Ngee Ann Polytechnic</p>
      </div>

      {/* ── Chapter IV — Commendations ── */}
      <Chapter n="IV" title="The Commendations">
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
          {achievements.map((a) => (
            <div key={a.title}>
              <p className="font-mono text-[10px] tracking-[0.3em] opacity-50">{a.year}</p>
              <h3 className="font-fury italic text-2xl mt-1" style={{ color: ACID }}>{a.title}</h3>
              <p className="text-sm opacity-60">{a.org}</p>
              <p className="text-sm leading-relaxed opacity-80 mt-2">{a.description}</p>
            </div>
          ))}
        </div>
      </Chapter>

      {/* ── Chapter V — Transmission ── */}
      <Chapter n="V" title="The Transmission">
        <div className="space-y-8">
          <a href={`mailto:${profile.email}`} className="fury-link font-fury italic block text-4xl md:text-6xl break-all" style={{ color: ACID }}>
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-x-10 gap-y-3 font-mono text-sm">
            <a className="fury-link" href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">{profile.github}</a>
            <a className="fury-link" href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a>
            <a className="fury-link" href="/resume.pdf" download="apollo-resume.pdf">résumé.pdf ↓</a>
          </div>
        </div>
      </Chapter>

      <footer className="border-t border-white/10 px-6 py-8 flex flex-wrap justify-between gap-4 font-mono text-[10px] tracking-[0.3em] opacity-50 uppercase">
        <span>Transmission ends</span>
        <span>Filed under: case-files / apollo</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
