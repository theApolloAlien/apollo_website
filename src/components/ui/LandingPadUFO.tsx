"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────
const UFO_W = 80;
const UFO_H = 48;

const RIGHT_SECTIONS = new Set(["about", "skills", "projects", "experience", "achievements"]);

type CrashPhase = "none" | "approaching" | "wobbling" | "crashing" | "crashed";
type UFOType = "saucer" | "triangle" | "orb" | "tictac" | "acorn" | "boomerang";

const UFO_DEFS: { id: UFOType; label: string; accent: string }[] = [
  { id: "saucer",    label: "SAUCER",  accent: "#9AAEBB" },
  { id: "triangle",  label: "TR-3B",   accent: "#AA44FF" },
  { id: "orb",       label: "ORB",     accent: "#11CCBB" },
  { id: "tictac",    label: "TIC-TAC", accent: "#4499FF" },
  { id: "acorn",     label: "ACORN",   accent: "#C4822A" },
  { id: "boomerang", label: "BOOMERANG", accent: "#FF44AA" },
];

function clampY(y: number, vh: number) {
  return Math.max(60, Math.min(vh - UFO_H - 20, y));
}

// ─── UFO body variants ────────────────────────────────────────────────────────

function SaucerBody() {
  return (
    <>
      {/* Dome */}
      <rect x="12" y="0" width="8"  height="2" fill="#9AAEBB" />
      <rect x="10" y="2" width="12" height="2" fill="#8A9EAC" />
      <rect x="9"  y="4" width="14" height="2" fill="#607080" />
      {/* Dome windows */}
      <rect x="13" y="2" width="2" height="2" fill="#C4872A" opacity="0.8" />
      <rect x="17" y="2" width="2" height="2" fill="#C4872A" opacity="0.8" />
      {/* Body */}
      <rect x="4"  y="6" width="24" height="4" fill="#8A9EAC" />
      <rect x="2"  y="7" width="28" height="3" fill="#2E3A42" />
      {/* Highlight strip */}
      <rect x="4"  y="6" width="24" height="1" fill="#B8CDD8" opacity="0.9" />
      {/* Lights */}
      <rect x="5"  y="8" width="2" height="2" fill="#C4872A" />
      <rect x="10" y="8" width="2" height="2" fill="#4A7C4A" />
      <rect x="15" y="8" width="2" height="2" fill="#C4872A" />
      <rect x="20" y="8" width="2" height="2" fill="#4A7C4A" />
      <rect x="25" y="8" width="2" height="2" fill="#C4872A" />
      {/* Underbelly */}
      <rect x="8"  y="10" width="16" height="2" fill="#607080" />
      <rect x="12" y="12" width="8"  height="2" fill="#2E3A42" />
    </>
  );
}

function TriangleBody() {
  return (
    <>
      {/* Hull */}
      <polygon points="16,0 0,19 32,19" fill="#0C0515" />
      <polygon points="16,2 3,18 29,18"  fill="#160A28" />
      <polygon points="16,5 7,16 25,16"  fill="#1E1035" />
      {/* Bottom glow band */}
      <rect x="2" y="16" width="28" height="3" fill="#3D1A6E" />
      <rect x="4" y="17" width="24" height="1" fill="#8844DD" opacity="0.9" />
      {/* Energy conduit lines */}
      <line x1="16" y1="4" x2="5"  y2="16" stroke="#7733CC" strokeWidth="0.7" opacity="0.7" />
      <line x1="16" y1="4" x2="27" y2="16" stroke="#7733CC" strokeWidth="0.7" opacity="0.7" />
      <line x1="10" y1="12" x2="22" y2="12" stroke="#7733CC" strokeWidth="0.5" opacity="0.5" />
      {/* Apex orb – gold */}
      <rect x="14" y="0" width="4" height="3" fill="#FFAA00" />
      <rect x="15" y="0" width="2" height="2" fill="#FFEEAA" />
      <rect x="15" y="1" width="2" height="1" fill="#FFFFFF" />
      {/* BL corner – purple */}
      <rect x="0"  y="17" width="5" height="3" fill="#BB33FF" />
      <rect x="1"  y="18" width="3" height="1" fill="#EECCFF" />
      {/* BR corner – purple */}
      <rect x="27" y="17" width="5" height="3" fill="#BB33FF" />
      <rect x="28" y="18" width="3" height="1" fill="#EECCFF" />
      {/* Central orb – red */}
      <rect x="13" y="10" width="6" height="5" fill="#CC2200" />
      <rect x="14" y="11" width="4" height="3" fill="#FF4422" />
      <rect x="15" y="12" width="2" height="1" fill="#FFAA88" />
    </>
  );
}

function OrbBody() {
  return (
    <>
      {/* Outer halo rings */}
      <circle cx="16" cy="10" r="10" fill="none" stroke="#1AFFEE" strokeWidth="0.5" opacity="0.2" />
      <circle cx="16" cy="10" r="9"  fill="none" stroke="#1AFFEE" strokeWidth="0.8" opacity="0.35" />
      {/* Sphere body */}
      <circle cx="16" cy="10" r="8"  fill="#061820" />
      <circle cx="16" cy="10" r="7"  fill="#082A38" />
      <circle cx="16" cy="10" r="6"  fill="#0A3444" />
      {/* Inner glow rings */}
      <circle cx="16" cy="10" r="5"  fill="none" stroke="#11CCBB" strokeWidth="1" opacity="0.7" />
      <circle cx="16" cy="10" r="3"  fill="none" stroke="#22EEDD" strokeWidth="1" opacity="0.9" />
      {/* Equatorial band */}
      <ellipse cx="16" cy="10" rx="8" ry="2.5" fill="none" stroke="#33FFCC" strokeWidth="0.8" opacity="0.5" />
      {/* Core */}
      <circle cx="16" cy="10" r="2"  fill="#44FFEE" />
      <circle cx="16" cy="10" r="1"  fill="#AAFFFF" />
      {/* Highlight */}
      <circle cx="13" cy="7"  r="1.5" fill="#BBFFFF" opacity="0.6" />
      <circle cx="13" cy="7"  r="0.8" fill="#FFFFFF"  opacity="0.8" />
    </>
  );
}

function TicTacBody() {
  return (
    <>
      {/* Propulsion glow – left */}
      <rect x="0" y="8" width="3" height="4" fill="#2255CC" opacity="0.4" />
      <rect x="0" y="9" width="2" height="2" fill="#4488FF" opacity="0.7" />
      {/* Propulsion glow – right */}
      <rect x="29" y="8" width="3" height="4" fill="#2255CC" opacity="0.4" />
      <rect x="30" y="9" width="2" height="2" fill="#4488FF" opacity="0.7" />
      {/* Rounded left cap */}
      <rect x="3"  y="7" width="1" height="6" fill="#C0D0E0" />
      <rect x="2"  y="8" width="1" height="4" fill="#C0D0E0" />
      {/* Rounded right cap */}
      <rect x="28" y="7" width="1" height="6" fill="#C0D0E0" />
      <rect x="29" y="8" width="1" height="4" fill="#C0D0E0" />
      {/* Main body */}
      <rect x="4"  y="6" width="24" height="8" fill="#D8E8F0" />
      {/* Top highlight */}
      <rect x="4"  y="6" width="24" height="2" fill="#EEF6FF" />
      <rect x="4"  y="6" width="24" height="1" fill="#F8FCFF" />
      {/* Bottom shadow */}
      <rect x="4"  y="12" width="24" height="2" fill="#AABCCC" />
      {/* Subtle centre seam */}
      <rect x="5"  y="10" width="22" height="1" fill="#BBC8D8" opacity="0.35" />
      {/* Edge definition */}
      <rect x="3"  y="6"  width="26" height="1" fill="#889AAA" opacity="0.4" />
      <rect x="3"  y="13" width="26" height="1" fill="#889AAA" opacity="0.4" />
    </>
  );
}

function AcornBody() {
  return (
    <>
      {/* Apex crown light */}
      <rect x="14" y="0" width="4" height="2" fill="#FFD700" />
      <rect x="15" y="0" width="2" height="1" fill="#FFFFFF"  />
      {/* Dome – copper/bronze */}
      <rect x="12" y="2"  width="8"  height="2" fill="#8B4513" />
      <rect x="10" y="4"  width="12" height="2" fill="#A0522D" />
      <rect x="8"  y="6"  width="16" height="2" fill="#B8622D" />
      <rect x="6"  y="8"  width="20" height="2" fill="#C47830" />
      {/* Dome highlight */}
      <rect x="10" y="2"  width="4"  height="2" fill="#D4926A" opacity="0.5" />
      <rect x="9"  y="4"  width="4"  height="2" fill="#D4926A" opacity="0.4" />
      {/* Equatorial glowing band */}
      <rect x="5"  y="10" width="22" height="4" fill="#111108" />
      <rect x="5"  y="11" width="22" height="2" fill="#220800" />
      {/* Glowing sigils */}
      <rect x="6"  y="10" width="2"  height="4" fill="#FF6600" opacity="0.9" />
      <rect x="10" y="10" width="2"  height="4" fill="#FFAA00" opacity="0.9" />
      <rect x="14" y="10" width="4"  height="4" fill="#FF4400" opacity="0.7" />
      <rect x="20" y="10" width="2"  height="4" fill="#FFAA00" opacity="0.9" />
      <rect x="24" y="10" width="2"  height="4" fill="#FF6600" opacity="0.9" />
      {/* Band glow line */}
      <rect x="5"  y="12" width="22" height="1" fill="#FF8800" opacity="0.4" />
      {/* Lower tapering body */}
      <rect x="7"  y="14" width="18" height="2" fill="#1C0E08" />
      <rect x="8"  y="16" width="16" height="2" fill="#1C0E08" />
      <rect x="10" y="18" width="12" height="2" fill="#1C0E08" />
      {/* Nozzle glow */}
      <rect x="13" y="18" width="6"  height="2" fill="#FF4400" opacity="0.5" />
      <rect x="14" y="18" width="4"  height="1" fill="#FF9944" opacity="0.7" />
    </>
  );
}

function BoomerangBody() {
  return (
    <>
      {/* Thin swept hull – left wing, sharp apex to bottom-left */}
      <polygon points="16,2 0,18 14,19"  fill="#080810" />
      <polygon points="16,3 2,17 13,18"  fill="#12122A" />
      {/* Thin swept hull – right wing, sharp apex to bottom-right */}
      <polygon points="16,2 32,18 18,19" fill="#080810" />
      <polygon points="16,3 30,17 19,18" fill="#12122A" />
      {/* Leading-edge V-formation lights (Phoenix Lights pattern) */}
      {/* L wingtip – red */}
      <rect x="1"  y="16" width="3" height="2" fill="#FF3333" />
      <rect x="2"  y="16" width="2" height="1" fill="#FF9999" opacity="0.9" />
      {/* L mid – amber */}
      <rect x="7"  y="13" width="3" height="2" fill="#FF8800" />
      <rect x="8"  y="13" width="2" height="1" fill="#FFCC44" opacity="0.9" />
      {/* Centre – cyan */}
      <rect x="14" y="11" width="4" height="2" fill="#4488FF" />
      <rect x="15" y="11" width="2" height="1" fill="#AACCFF" opacity="0.9" />
      {/* R mid – green */}
      <rect x="22" y="13" width="3" height="2" fill="#44FF44" />
      <rect x="23" y="13" width="2" height="1" fill="#AAFFAA" opacity="0.9" />
      {/* R wingtip – pink */}
      <rect x="28" y="16" width="3" height="2" fill="#FF44CC" />
      <rect x="29" y="16" width="2" height="1" fill="#FFAAEE" opacity="0.9" />
      {/* Dim apex indicator */}
      <rect x="15" y="2"  width="2" height="2" fill="#334466" opacity="0.5" />
    </>
  );
}

// ─── UFO sprite ───────────────────────────────────────────────────────────────
function UFOSVG({ size = 80, type = "saucer" }: { size?: number; type?: UFOType }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 32 20"
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {type === "saucer"    && <SaucerBody />}
      {type === "triangle"  && <TriangleBody />}
      {type === "orb"       && <OrbBody />}
      {type === "tictac"    && <TicTacBody />}
      {type === "acorn"     && <AcornBody />}
      {type === "boomerang" && <BoomerangBody />}
    </svg>
  );
}

// ─── Downward green transmission beam (contact pad) ───────────────────────────
function GreenBeam() {
  return (
    <motion.div
      className="relative flex flex-col items-center pointer-events-none"
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      style={{ originY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        style={{
          width: 64,
          height: 120,
          background: "linear-gradient(to bottom, rgba(74,124,74,0.65), rgba(74,124,74,0))",
          clipPath: "polygon(28% 0%, 72% 0%, 100% 100%, 0% 100%)",
        }}
      />
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 h-px"
          style={{ width: 36, top: 16 + i * 26, backgroundColor: "#4A7C4A" }}
          animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </motion.div>
  );
}

// ─── Horizontal scanning beam (beside section headers) ────────────────────────
function HorizontalBeam({ direction }: { direction: "left" | "right" }) {
  const isRight = direction === "right";
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        ...(isRight ? { left: UFO_W } : { right: UFO_W }),
        top: `${UFO_H * 0.15}px`,
        width: 260,
        height: `${UFO_H * 0.7}px`,
        transformOrigin: isRight ? "left center" : "right center",
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: isRight
            ? "linear-gradient(to right, rgba(74,124,74,0.55), rgba(74,124,74,0))"
            : "linear-gradient(to left, rgba(74,124,74,0.55), rgba(74,124,74,0))",
          clipPath: isRight
            ? "polygon(0% 35%, 0% 65%, 100% 100%, 100% 0%)"
            : "polygon(100% 35%, 100% 65%, 0% 100%, 0% 0%)",
        }}
      />
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            ...(isRight ? { left: 40 + i * 80 } : { right: 40 + i * 80 }),
            top: "50%",
            transform: "translateY(-50%)",
            width: 1,
            height: "50%",
            backgroundColor: "#4A7C4A",
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}
    </motion.div>
  );
}

// ─── Crash particles ─────────────────────────────────────────────────────────
const PARTICLES: readonly [number, number, string][] = [
  [0, 45, "#C4872A"], [30, 38, "#4A7C4A"], [60, 50, "#C4872A"],
  [90, 40, "#6B3A2A"], [120, 48, "#4A7C4A"], [150, 35, "#C4872A"],
  [180, 42, "#6B3A2A"], [210, 50, "#4A7C4A"], [240, 38, "#C4872A"],
  [270, 45, "#2C1810"], [300, 40, "#C4872A"], [330, 48, "#4A7C4A"],
];

function CrashParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
      {PARTICLES.map(([angle, dist, color], i) => {
        const rad = (angle * Math.PI) / 180;
        const tx = Math.round(Math.cos(rad) * dist);
        const ty = Math.round(Math.sin(rad) * dist);
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: i % 3 === 0 ? 4 : 2,
              height: i % 3 === 0 ? 4 : 2,
              backgroundColor: color,
              top: "50%",
              left: "50%",
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: tx, y: ty, opacity: 0, scale: 0 }}
            transition={{ duration: 0.55 + i * 0.02, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

// ─── UFO model selector ───────────────────────────────────────────────────────
function UFOSelector({ current, onChange }: { current: UFOType; onChange: (t: UFOType) => void }) {
  const [open, setOpen] = useState(true);

  // Auto-collapse when user scrolls away from top; only manual click re-opens
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-4 z-30 select-none">
      <div className="border-2 border-brown-dark bg-cream">

        {/* ── Toggle header ── */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 w-full px-2 py-1.5 hover:bg-brown-dark/5 transition-colors"
        >
          <span className="font-pixel text-[6px] text-green-mid tracking-widest uppercase">
            ▌ UFO_MODEL
          </span>
          <span className="font-pixel text-[6px] text-brown-dark/60 ml-auto">
            {open ? "▲" : "▼"}
          </span>
        </button>

        {/* ── Collapsible vertical button list ── */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="ufo-selector-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="flex flex-col gap-1 px-1.5 pb-1.5">
                {UFO_DEFS.map(({ id, label, accent }) => (
                  <button
                    key={id}
                    title={label}
                    onClick={() => onChange(id)}
                    className={`relative flex items-center gap-1.5 p-1 border transition-colors ${
                      current === id
                        ? "border-brown-dark bg-brown-dark/10"
                        : "border-brown-dark/25 hover:border-brown-dark/55"
                    }`}
                  >
                    <UFOSVG size={28} type={id} />
                    <span className="font-pixel text-[7px] text-brown-dark/80 uppercase tracking-wider leading-none flex-1 text-left">
                      {label}
                    </span>
                    <span
                      className="block w-0.5 h-4 flex-shrink-0 transition-opacity"
                      style={{
                        backgroundColor: accent,
                        opacity: current === id ? 1 : 0,
                      }}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function LandingPadUFO() {
  const [ufoDiscovered, setUfoDiscovered] = useState(false);

  const [targetX, setTargetX]             = useState(20);
  const [targetY, setTargetY]             = useState(300);
  const [activeSection, setActiveSection] = useState("hero");
  const [beamDir, setBeamDir]             = useState<"left" | "right" | null>(null);
  const [tiltDeg, setTiltDeg]             = useState(0);
  const [flashActive, setFlashActive]     = useState(false);
  const [ufoType, setUfoType]             = useState<UFOType>("saucer");

  // Crash state
  const [crashPhase, setCrashPhase] = useState<CrashPhase>("none");
  const hasCrashedRef  = useRef(false);
  const wobbleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const crashTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prevXRef     = useRef(20);
  const tiltTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Load persisted UFO type ─────────────────────────────────────────────
  useEffect(() => {
    const saved = localStorage.getItem("ufo-type") as UFOType | null;
    if (saved && UFO_DEFS.some((d) => d.id === saved)) setUfoType(saved);
  }, []);

  function handleUFOTypeChange(t: UFOType) {
    setUfoType(t);
    localStorage.setItem("ufo-type", t);
  }

  // ── Scroll / resize → update X, Y, beam direction ───────────────────────
  useEffect(() => {
    const MIDDLE_SECTIONS = [
      "about", "skills", "projects", "experience", "achievements",
    ] as const;

    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // If crashed, keep UFO anchored to crash-site for the rest of the session
      if (hasCrashedRef.current) {
        const crashSiteEl = document.getElementById("crash-site");
        if (crashSiteEl) {
          const csr = crashSiteEl.getBoundingClientRect();
          setTargetX(Math.round(csr.left + csr.width / 2 - UFO_W / 2));
          setTargetY(Math.round(csr.top + (csr.height - UFO_H) / 2));
        }
        setActiveSection("contact");
        setBeamDir(null);
        return;
      }

      // 1. Contact takes priority when its content has scrolled into view
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const r = contactEl.getBoundingClientRect();
        if (r.top < vh * 0.5) {
          setActiveSection("contact");

          // Approaching: normal position above h2
          const h2 = contactEl.querySelector("h2");
          const h2r = h2?.getBoundingClientRect();
          const rawY = h2r
            ? h2r.top - UFO_H - 8
            : vh * 0.4 - UFO_H;
          setTargetX(Math.round(vw / 2 - UFO_W / 2));
          setTargetY(clampY(rawY, vh));
          setBeamDir(null);
          return;
        }
      }

      // 2. Middle sections — highest section whose top is above 50% vh wins
      for (const id of [...MIDDLE_SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.5 && r.bottom > 0) {
          const h2 = el.querySelector("h2");
          const h2r = h2?.getBoundingClientRect();
          const rawY = h2r
            ? h2r.top + h2r.height / 2 - UFO_H / 2
            : vh * 0.25;
          const x = RIGHT_SECTIONS.has(id) ? vw - UFO_W - 20 : 20;
          setActiveSection(id);
          setTargetX(x);
          setTargetY(clampY(rawY, vh));
          setBeamDir(x > vw / 2 ? "left" : "right");
          return;
        }
      }

      // 3. Hero — two sub-states
      const heroEl = document.getElementById("hero");
      const scrollY = window.scrollY;
      const heroH = heroEl?.offsetHeight ?? vh;

      if (scrollY > heroH * 0.25) {
        const promptEl = document.getElementById("scroll-prompt");
        const pr = promptEl?.getBoundingClientRect();
        const rawY = pr ? pr.top - UFO_H - 8 : vh * 0.65 - UFO_H;
        setActiveSection("hero-prompt");
        setTargetX(Math.round(vw / 2 - UFO_W / 2));
        setTargetY(clampY(rawY, vh));
      } else {
        const h1 = document.querySelector("#hero h1");
        const h1r = h1?.getBoundingClientRect();
        const rawY = h1r
          ? h1r.top + h1r.height / 2 - UFO_H / 2
          : vh * 0.35;
        setActiveSection("hero");
        setTargetX(20);
        setTargetY(clampY(rawY, vh));
      }
      setBeamDir(null);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // ── Crash sequence trigger ─────────────────────────────────────────────
  useEffect(() => {
    if (activeSection !== "contact" || hasCrashedRef.current) return;

    setCrashPhase("approaching");

    wobbleTimerRef.current = setTimeout(() => {
      setCrashPhase("wobbling");

      crashTimerRef.current = setTimeout(() => {
        setCrashPhase("crashing");
        hasCrashedRef.current = true;

        const crashSiteEl = document.getElementById("crash-site");
        if (crashSiteEl) {
          const csr = crashSiteEl.getBoundingClientRect();
          setTargetX(Math.round(csr.left + csr.width / 2 - UFO_W / 2));
          setTargetY(Math.round(csr.top + (csr.height - UFO_H) / 2));
        }

        setTimeout(() => setCrashPhase("crashed"), 600);
      }, 1000);
    }, 1500);

    return () => {
      if (wobbleTimerRef.current) clearTimeout(wobbleTimerRef.current);
      if (crashTimerRef.current) clearTimeout(crashTimerRef.current);
      if (!hasCrashedRef.current) setCrashPhase("none");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  // ── Tilt UFO when X changes (only during normal flight) ────────────────
  useEffect(() => {
    if (crashPhase === "wobbling" || crashPhase === "crashing" || crashPhase === "crashed") return;

    if (tiltTimerRef.current) clearTimeout(tiltTimerRef.current);

    if (targetX > prevXRef.current) {
      setTiltDeg(12);
      tiltTimerRef.current = setTimeout(() => setTiltDeg(0), 550);
    } else if (targetX < prevXRef.current) {
      setTiltDeg(-12);
      tiltTimerRef.current = setTimeout(() => setTiltDeg(0), 550);
    }
    prevXRef.current = targetX;

    return () => {
      if (tiltTimerRef.current) clearTimeout(tiltTimerRef.current);
    };
  }, [targetX, crashPhase]);

  // ── Apply / remove glow on section h2 headers ───────────────────────────
  useEffect(() => {
    document.querySelectorAll("[data-section-header]").forEach((el) =>
      el.classList.remove("ufo-lit")
    );
    if (
      activeSection !== "hero" &&
      activeSection !== "hero-prompt" &&
      activeSection !== "contact"
    ) {
      document
        .querySelector(`#${activeSection} [data-section-header]`)
        ?.classList.add("ufo-lit");
    }
  }, [activeSection]);

  // ── Derived state ───────────────────────────────────────────────────────
  const isAtFinal = activeSection === "contact";

  const showCrash  = isAtFinal && (crashPhase === "crashing" || crashPhase === "crashed");
  const showWobble = isAtFinal && crashPhase === "wobbling";
  const showBeam   = isAtFinal && !showCrash && crashPhase !== "wobbling";

  const effectiveRotation =
    isAtFinal && crashPhase === "crashing" ? 28 :
    isAtFinal && crashPhase === "crashed"  ? 22 :
    tiltDeg;

  // ── Quest completion via speech bubble ─────────────────────────────────
  function handleRecovery() {
    if (!ufoDiscovered) {
      // Programmatic download — bypasses pointer-events inheritance issues
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "apollo-resume.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      setTimeout(() => document.body.removeChild(link), 100);

      setUfoDiscovered(true);
      setFlashActive(true);
      setTimeout(() => setFlashActive(false), 600);
    }
  }

  return (
    <>
      {/* ── Green flash overlay ── */}
      <AnimatePresence>
        {flashActive && (
          <motion.div
            className="fixed inset-0 z-[100] bg-green-dark pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      {/* ── Flying UFO ── */}
      <motion.div
        className="fixed z-20"
        style={{ top: 0, left: 0, pointerEvents: "none" }}
        animate={{ x: targetX, y: targetY, rotate: effectiveRotation }}
        transition={{
          x: {
            type: "spring",
            stiffness: isAtFinal && crashPhase === "crashing" ? 300 : showCrash ? 500 : 200,
            damping:   isAtFinal && crashPhase === "crashing" ? 15  : showCrash ? 40  : 26,
          },
          y: {
            type: "spring",
            stiffness: isAtFinal && crashPhase === "crashing" ? 400 : showCrash ? 500 : 120,
            damping:   isAtFinal && crashPhase === "crashing" ? 18  : showCrash ? 40  : 22,
          },
          rotate: { type: "spring", stiffness: 200, damping: 26 },
        }}
      >
        {/* Idle float / wobble jitter / static */}
        <motion.div
          className="relative"
          animate={
            showWobble
              ? { y: [0, -3, 2, -4, 1, -2, 0], x: [-2, 3, -3, 2, -1, 3, -2] }
              : showCrash
              ? { y: 0, x: 0 }
              : { y: [0, -6, 0] }
          }
          transition={
            showWobble
              ? { duration: 0.5, repeat: Infinity }
              : showCrash
              ? { duration: 0.3 }
              : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          {/* Speech bubble — after crash, before quest complete */}
          <AnimatePresence>
            {isAtFinal && crashPhase === "crashed" && !ufoDiscovered && (
              <motion.div
                className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-auto"
                style={{ rotate: -22 }}
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 8 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <button
                  onClick={handleRecovery}
                  className="block px-3 py-2 font-pixel text-[7px] text-cream bg-brown-dark border-2 border-amber hover:bg-green-dark hover:border-green-mid transition-colors duration-200 cursor-pointer relative"
                  aria-label="Download resume PDF"
                >
                  CLICK TO RECOVER UFO
                  <span
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "8px solid #2C1810",
                    }}
                  />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Post-recovery message */}
          <AnimatePresence>
            {isAtFinal && crashPhase === "crashed" && ufoDiscovered && (
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                style={{ rotate: -22 }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-pixel text-[7px] text-green-mid">
                  UFO RECOVERED ✓
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* UFO sprite with wobble rotation wrapper */}
          <motion.div
            animate={
              showWobble
                ? { rotate: [-15, 15, -12, 18, -15, 10, -15] }
                : { rotate: 0 }
            }
            transition={
              showWobble
                ? { duration: 0.6, repeat: Infinity, ease: "linear" }
                : { duration: 0.3 }
            }
          >
            <UFOSVG size={UFO_W} type={ufoType} />
          </motion.div>

          {/* Crash particles */}
          <AnimatePresence>
            {isAtFinal && crashPhase === "crashing" && (
              <CrashParticles key="crash-particles" />
            )}
          </AnimatePresence>

          {/* Horizontal beam (section headers) */}
          <AnimatePresence>
            {beamDir && <HorizontalBeam key={beamDir} direction={beamDir} />}
          </AnimatePresence>

          {/* Downward beam — flickers during wobble, gone after crash */}
          <AnimatePresence>
            {showBeam && (
              <motion.div
                className="absolute top-full left-1/2 -translate-x-1/2"
                animate={
                  showWobble
                    ? { opacity: [1, 0.2, 0.8, 0, 0.5, 0.1, 0.7] }
                    : { opacity: 1 }
                }
                transition={
                  showWobble
                    ? { duration: 0.8, repeat: Infinity }
                    : {}
                }
                exit={{ opacity: 0 }}
              >
                <GreenBeam />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* ── UFO model selector ── */}
      <UFOSelector current={ufoType} onChange={handleUFOTypeChange} />
    </>
  );
}
