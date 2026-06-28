"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "He is a leader who combines the grit of a firefighter with the foresight of a strategist.",
    name: "Lt Mohd Nizam Bin Walat",
    role: "Supervisor, AFFOSB",
    org: "Singapore Civil Defence Force",
  },
  {
    quote:
      "Apollo is a future-ready leader who combines technical vision with the moral courage to ask hard questions and the humility to learn from the answers.",
    name: "Clarence Foo",
    role: "Human Resources Executive",
    org: "SBS Transit Ltd",
  },
  {
    quote:
      "What stands out most is his quiet consistency. He does not seek recognition, but he consistently puts in the work, supports others, and focuses on what benefits the community.",
    name: "Anas Ismail",
    role: "President",
    org: "NTU Sentinels",
  },
  {
    quote: "He is a rare gem that any organisation would be lucky to have.",
    name: "Liew Yoon Hin",
    role: "Senior Lecturer",
    org: "Ngee Ann Polytechnic",
  },
  {
    quote:
      "Given his can-do attitude and interest in Cyber Security, he was able to work under tight deadlines and was exposed to various situations that required him to think on his feet.",
    name: "Rene Teo",
    role: "Senior Security Consultant",
    org: "Thinkture Pte Ltd",
  },
];

type Testimonial = (typeof testimonials)[number];

function ReportCard({ t }: { t: Testimonial }) {
  // mr-4 (not container gap) so two duplicated sets loop seamlessly at -50%.
  return (
    <div className="relative w-80 shrink-0 mr-4 border-2 border-brown-dark bg-cream p-5">
      <span className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-amber" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-amber" />

      <div className="font-pixel text-[18px] text-amber/40 leading-none mb-2 select-none">
        &ldquo;
      </div>
      <p className="font-mono text-xs text-brown-dark leading-[1.7] mb-3">{t.quote}</p>
      <div className="w-8 h-0.5 bg-amber mb-2" />
      <p className="font-pixel text-[8px] text-brown-dark tracking-wide">{t.name}</p>
      <p className="font-mono text-xs text-brown-mid mt-0.5">{t.role}</p>
      <p className="font-mono text-xs text-green-mid">{t.org}</p>
    </div>
  );
}

export function TestimonialsCarousel() {
  const reduce = useReducedMotion();
  // Duplicate the set for a seamless loop; a single set when motion is reduced.
  const items = reduce ? testimonials : [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-10 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto px-4 mb-5 flex items-center gap-3">
        <span className="font-pixel text-[8px] text-green-mid tracking-widest uppercase">
          ▌ FIELD_REPORTS
        </span>
        <span className="flex-1 h-px bg-brown-dark opacity-30" />
        <a
          href="/testimonials.pdf"
          download="apollo-testimonials.pdf"
          className="font-pixel text-[6px] text-brown-mid hover:text-brown-dark tracking-widest"
        >
          ▼ FULL_REPORT
        </a>
      </div>

      <div
        className={reduce ? "overflow-x-auto px-4" : "overflow-hidden"}
        style={
          reduce
            ? undefined
            : {
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)",
              }
        }
      >
        <motion.div
          className="flex w-max"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduce ? undefined : { duration: 45, ease: "linear", repeat: Infinity }
          }
        >
          {items.map((t, i) => (
            <ReportCard key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
