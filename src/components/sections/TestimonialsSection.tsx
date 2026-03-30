"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="INTEL_DATA // SECTOR_07" title="FIELD_REPORTS" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative border-2 border-brown-dark bg-cream p-5"
            >
              {/* Corner brackets */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-amber" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-amber" />

              {/* Pixel quote mark */}
              <div className="font-pixel text-[18px] text-amber/40 leading-none mb-3 select-none">
                "
              </div>

              <p className="font-mono text-sm text-brown-dark leading-[1.7] mb-4">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-amber mb-3" />

              <div>
                <p className="font-pixel text-[8px] text-brown-dark tracking-wide">
                  {t.name}
                </p>
                <p className="font-mono text-xs text-brown-mid mt-0.5">{t.role}</p>
                <p className="font-mono text-xs text-green-mid">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="/testimonials.pdf"
            download="apollo-testimonials.pdf"
            className="inline-flex items-center gap-2 font-pixel text-[8px] border-2 border-brown-dark text-brown-dark px-5 py-2.5 hover:bg-brown-dark hover:text-cream transition-colors duration-300"
          >
            <span>▼</span>
            DOWNLOAD_FULL_REPORT
          </a>
        </motion.div>
      </div>
    </section>
  );
}
