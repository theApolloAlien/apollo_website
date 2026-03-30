"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClueMarker } from "@/components/ui/ClueMarker";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

// UFO exhaust trail pixel decoration
function UFOTrail() {
  return (
    <svg width="32" height="20" viewBox="0 0 8 5" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="2" width="2" height="1" fill="#C4872A" opacity="0.7" />
      <rect x="2" y="1" width="2" height="3" fill="#C4872A" opacity="0.5" />
      <rect x="4" y="0" width="2" height="5" fill="#C4872A" opacity="0.3" />
      <rect x="6" y="1" width="2" height="3" fill="#C4872A" opacity="0.15" />
    </svg>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-brown-dark/5 border-t-2 border-brown-dark/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="INTEL_DATA // SECTOR_04" title="EXPERIMENT_FILES" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            if (i === 0) {
              return (
                <ClueMarker
                  key={project.id}
                  clueIndex={4}
                  hint="UFO EXHAUST TRAIL FOUND"
                >
                  <ProjectCard
                    project={project}
                    clueElement={
                      <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                        <span className="font-pixel text-[5px] text-amber">TRAIL:</span>
                        <UFOTrail />
                      </div>
                    }
                  />
                </ClueMarker>
              );
            }
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
