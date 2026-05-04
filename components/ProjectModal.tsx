"use client";

import { X, ExternalLink, PlayCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
          onClick={onClose}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white dark:bg-[#111827]/90 dark:backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-slate-100 dark:border-white/10"
        >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full hover:text-slate-900 dark:hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex gap-2 items-center mb-4 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {project.category}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 pr-10">
            {project.name}
          </h2>

          {/* Period & Association */}
          {(project.period || project.association) && (
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.period && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                  📅 {project.period}
                </span>
              )}
              {project.association && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                  🏢 Associated with {project.association}
                </span>
              )}
            </div>
          )}

          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            {project.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-3">
                {para}
              </p>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.bullets && project.bullets.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.bullets.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
    </AnimatePresence>
  );
}
