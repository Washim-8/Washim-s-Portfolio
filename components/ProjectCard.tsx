"use client";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import HoverCard from "@/components/HoverCard";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
}

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/30",
  "Web Development": "bg-indigo-100 dark:bg-primary/10 text-indigo-700 dark:text-primary-light border border-indigo-200 dark:border-primary/30",
  "Data Science": "bg-emerald-100 dark:bg-accent-green/10 text-emerald-700 dark:text-accent-green border border-emerald-200 dark:border-accent-green/30",
};

const techColors: Record<string, string> = {
  Python: "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/30",
  JavaScript: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30",
  TypeScript: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30",
  TensorFlow: "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-500/30",
  Keras: "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30",
  OpenCV: "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30",
  PHP: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30",
  MySQL: "bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/30",
  HTML: "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30",
  CSS: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30",
  "Machine Learning": "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/30",
  NLP: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30",
};

function getTechColor(tech: string): string {
  return techColors[tech] ?? "bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10";
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const maxTechShow = 4;
  const visibleTech = project.technologies.slice(0, maxTechShow);
  const extraTech = project.technologies.length - maxTechShow;

  const categoryGradients: Record<string, { from: string; to: string; glow: string }> = {
    "AI/ML": { from: "#8B5CF6", to: "#EC4899", glow: "rgba(139,92,246,0.25)" },
    "Web Development": { from: "#6366F1", to: "#8B5CF6", glow: "rgba(99,102,241,0.25)" },
    "Data Science": { from: "#10B981", to: "#06B6D4", glow: "rgba(16,185,129,0.25)" },
  };
  const gradients = categoryGradients[project.category] || categoryGradients["Web Development"];

  return (
    <HoverCard
      className="group relative bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md flex flex-col h-full overflow-hidden"
      gradientFrom={gradients.from}
      gradientTo={gradients.to}
      glowColor={gradients.glow}
    >
      {/* Featured ribbon */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            <Star className="w-2.5 h-2.5" /> Featured
          </span>
        </div>
      )}

      {/* Color header bar - Consistent with new palette */}
      <div
        className={`h-1.5 w-full ${
          project.category === "AI/ML"
            ? "bg-gradient-to-r from-violet-500 to-accent-pink"
            : project.category === "Web Development"
            ? "bg-gradient-to-r from-primary to-accent-violet"
            : "bg-gradient-to-r from-accent-green to-accent-cyan"
        }`}
      />

      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <div className="mb-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              categoryColors[project.category]
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-slate-900 dark:text-darktext-primary text-base leading-snug mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-slate-500 dark:text-darktext-muted text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-darktext-secondary border border-slate-200 dark:border-white/10">
              +{extraTech} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-slate-50 dark:border-white/5">
          <div className="dark">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white btn-gold text-xs font-semibold transition-all hover:scale-105 opacity-90 hover:opacity-100"
              aria-label={`View ${project.name} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
          {onClick && (
            <button
              onClick={() => onClick(project)}
              className="flex items-center gap-1.5 px-3 py-1.5 btn-silver text-xs font-semibold ml-auto opacity-90 hover:opacity-100"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Details
            </button>
          )}
        </div>
      </div>
    </HoverCard>
  );
}
