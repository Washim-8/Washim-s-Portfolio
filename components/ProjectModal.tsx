"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import ClayBadge from "@/components/ui/ClayBadge";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window in Light Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative light-glass-modal rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto z-10 p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center bg-white/90 dark:bg-darkbg-tertiary/90 backdrop-blur-md text-[#5F6368] dark:text-white shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_2px_6px_rgba(163,166,160,0.2)] hover:text-[#00BFE8] transition-colors cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Project Preview Image Banner */}
          {project.image && (
            <div className="relative w-full h-52 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-black/5 dark:border-white/10 shadow-md bg-slate-900/10 dark:bg-black/40">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          {/* Category & Period info */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <ClayBadge variant="coral" size="sm">
              {project.category}
            </ClayBadge>
            {project.period && (
              <span className="flex items-center gap-1 text-xs text-[#85898E] bg-[#F7F8F6] dark:bg-white/5 px-2.5 py-1 rounded-full border border-black/5 dark:border-white/10 font-semibold">
                <Calendar className="w-3 h-3" /> {project.period}
              </span>
            )}
            {project.association && (
              <span className="flex items-center gap-1 text-xs text-[#07131F] dark:text-[#1CE0FD] bg-[#CCEFF9] dark:bg-[#1CE0FD]/15 border border-[#1CE0FD]/30 px-2.5 py-1 rounded-full font-semibold">
                <Building2 className="w-3 h-3" /> {project.association}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202225] dark:text-white mb-4 pr-8">
            {project.name}
          </h2>

          {/* Detailed Paragraphs */}
          <div className="space-y-3 mb-6 text-sm text-[#5F6368] dark:text-slate-300 leading-relaxed">
            {project.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Key Features Bullets */}
          {project.bullets && project.bullets.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#202225] dark:text-white uppercase tracking-wider mb-3">
                Key Features & Architecture
              </h4>
              <ul className="space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5F6368] dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-[#202225] dark:text-white uppercase tracking-wider mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white dark:bg-darkbg-tertiary text-[#202225] dark:text-white text-xs font-semibold rounded-full border border-black/5 dark:border-white/10 shadow-[-2px_-2px_4px_rgba(255,255,255,0.9),2px_2px_4px_rgba(163,166,160,0.15)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-black/5 dark:border-white/10">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full btn-coral text-xs sm:text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,191,232,0.45)] hover:shadow-[0_6px_22px_rgba(0,191,232,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group/modal-live"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>View Live Demo</span>
                <ExternalLink className="w-4 h-4 group-hover/modal-live:translate-x-0.5 group-hover/modal-live:-translate-y-0.5 transition-transform" />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full btn-white-neu text-xs sm:text-sm font-bold text-[#202225] dark:text-white hover:text-[#00BFE8] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
