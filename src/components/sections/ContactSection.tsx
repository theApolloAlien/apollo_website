"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 border-t-2 border-brown-dark/20"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionHeader
          label="INTEL_DATA // TRANSMISSION_POINT"
          title="ESTABLISH_CONTACT"
        />

        {/* Contact Links */}
        <div className="w-full max-w-sm mx-auto mb-12">
          <div className="space-y-6">
            {[
              { label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` },
              { label: "GITHUB", value: profile.github, href: `https://${profile.github}` },
              { label: "LINKEDIN", value: profile.linkedin, href: `https://${profile.linkedin}` },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <p className="font-pixel text-[8px] text-brown-mid tracking-widest uppercase mb-2">
                  {label}
                </p>
                <p className="font-mono text-sm text-brown-dark group-hover:text-green-dark transition-colors duration-300">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Crash Site — UFO landing target (replaces resume button) */}
        <div className="flex justify-center mb-8">
          <div
            id="crash-site"
            className="relative w-40 h-16 flex items-center justify-center"
          >
            {/* Pixel debris decoration */}
            <span className="absolute top-0 left-2 w-2 h-1 bg-brown-mid/40 rotate-12" />
            <span className="absolute top-1 right-4 w-1 h-1 bg-green-mid/30" />
            <span className="absolute bottom-2 left-6 w-3 h-1 bg-brown-dark/20 -rotate-6" />
            <span className="absolute bottom-0 right-2 w-2 h-1 bg-amber/30 rotate-45" />
            <span className="absolute top-3 left-1/2 w-1 h-1 bg-brown-mid/25" />

            <noscript>
              <a
                href="/resume.pdf"
                download
                className="font-pixel text-[8px] text-brown-dark border-2 border-brown-dark px-4 py-2 hover:bg-brown-dark hover:text-cream transition-colors"
              >
                DOWNLOAD_RESUME
              </a>
            </noscript>
          </div>
        </div>

        {/* Resume download fallback */}
        <div className="flex justify-center mb-8">
          <a
            href="/resume.pdf"
            download="apollo-resume.pdf"
            className="inline-flex items-center gap-2 font-pixel text-[8px] border-2 border-brown-dark text-brown-dark px-5 py-2.5 hover:bg-brown-dark hover:text-cream transition-colors duration-300"
          >
            <span>▼</span>
            DOWNLOAD_RESUME
          </a>
        </div>

        {/* Availability */}
        <div className="text-center">
          <p className="font-pixel text-[7px] text-brown-mid tracking-widest">
            AVAILABILITY: {profile.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
