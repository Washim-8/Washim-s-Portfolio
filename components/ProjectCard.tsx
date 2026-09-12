"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import LightGlassCard from "@/components/ui/LightGlassCard";
import ClayBadge from "@/components/ui/ClayBadge";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
}

const categoryStyles: Record<string, { badge: "coral" | "cyan" | "emerald" | "neutral" }> = {
  "AI/ML": { badge: "coral" },
  "Web Development": { badge: "cyan" },
  "Data Science": { badge: "emerald" },
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const maxTechShow = 4;
  const visibleTech = project.technologies.slice(0, maxTechShow);
  const extraTech = project.technologies.length - maxTechShow;
  const categoryVariant = categoryStyles[project.category]?.badge || "neutral";

  return (
    <Tilt3DCard maxTilt={6.5} scale={1.025} className="h-full">
      <LightGlassCard
        variant="default"
        className="p-5 sm:p-6 flex flex-col h-full justify-between hover:-translate-y-1 transition-all duration-300 group"
      >
        <div>
          {/* Project Preview Image with Overlay Badges */}
          <div
            onClick={() => onClick && onClick(project)}
            className={`relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-4 border border-black/5 dark:border-white/10 shadow-inner bg-[#DEE5F0] dark:bg-black/40 ${
              onClick ? "cursor-pointer" : ""
            }`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#00C8F8]/20 to-[#00AEDB]/40 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-500">Preview</span>
              </div>
            )}

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
              <ClayBadge variant={categoryVariant} size="sm">
                {project.category}
              </ClayBadge>
              {project.featured && (
                <span className="flex items-center gap-1 text-[10px] font-extrabold text-[#D97706] bg-[#FEF3C7]/95 dark:bg-amber-950/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-200/80 dark:border-amber-700/50 shadow-sm">
                  <Star className="w-2.5 h-2.5 fill-[#D97706]" /> Featured
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onClick && onClick(project)}
            className={`text-lg font-extrabold text-[#2A354F] dark:text-white leading-snug mb-2 group-hover:text-[#00BFE8] transition-colors line-clamp-2 ${
              onClick ? "cursor-pointer" : ""
            }`}
          >
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#5A6A85] dark:text-slate-300 leading-relaxed line-clamp-3 mb-5 font-medium">
            {project.description}
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#E6ECF5] dark:bg-[#161B26] text-[#5A6A85] dark:text-slate-300 border border-white/80 dark:border-white/5 shadow-[-2px_-2px_5px_rgba(255,255,255,0.95),2px_2px_5px_rgba(166,180,200,0.35)]"
              >
                {tech}
              </span>
            ))}
            {extraTech > 0 && (
              <span className="text-[11px] font-bold px-2 py-1 rounded-full bg-[#E6ECF5] dark:bg-black/20 text-[#7E8BA0] shadow-inner">
                +{extraTech}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10 gap-2">
          <div className="flex items-center gap-1.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-white-neu text-xs font-bold text-[#2A354F] dark:text-white hover:text-[#00BFE8] transition-all"
              aria-label={`View ${project.name} on GitHub`}
              title="View GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Code</span>
            </a>

            {onClick && (
              <button
                onClick={() => onClick(project)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full btn-white-neu text-xs font-bold text-[#5A6A85] dark:text-slate-300 hover:text-[#2A354F] dark:hover:text-white transition-all cursor-pointer"
                aria-label={`View details for ${project.name}`}
                title="View Project Details"
              >
                <span>Details</span>
              </button>
            )}
          </div>

          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full btn-coral text-xs font-extrabold text-white shadow-[0_4px_14px_rgba(0,191,232,0.4)] hover:shadow-[0_6px_20px_rgba(0,191,232,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group/live shrink-0"
              aria-label={`View live demo of ${project.name}`}
              title="Open Live Application"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
            </a>
          ) : onClick ? (
            <button
              onClick={() => onClick(project)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full btn-coral text-xs font-bold cursor-pointer"
            >
              <span>Details</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          ) : null}
        </div>
      </LightGlassCard>
    </Tilt3DCard>
  );
}
