"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative border-2 border-brown-dark bg-cream p-6"
    >
      {/* Corner pixel brackets */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-amber" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-4 border-r-4 border-amber" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-4 border-l-4 border-amber" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-amber" />

      {/* Header */}
      <div className="mb-3">
        {/* Title row with year + link */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-pixel text-sm text-brown-dark">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-brown-mid mt-1">
              {project.subtitle}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="font-pixel text-[11px] text-brown-dark">{project.year}</span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-[7px] text-amber border border-amber px-1.5 py-0.5 hover:bg-amber hover:text-cream transition-colors"
              >
                VIEW ▸
              </a>
            )}
          </div>
        </div>

        {/* Badge — centered, full width, bigger */}
        {project.badge && (
          <div className="text-center mb-1">
            <span className="font-pixel text-[9px] bg-green-dark text-cream px-3 py-1 leading-tight inline-block">
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-pixel text-[8px] border border-brown-dark text-brown-dark px-1.5 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Bullets */}
      <ul className="space-y-2">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="font-pixel text-[8px] text-amber mt-0.5 shrink-0">▸</span>
            <p className="font-mono text-sm text-brown-dark leading-[1.6]">
              {b}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
