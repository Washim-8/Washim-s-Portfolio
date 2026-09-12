"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import SectionHeading from "@/components/ui/SectionHeading";
import NeumorphicInput from "@/components/ui/NeumorphicInput";
import { projects, Project, stats } from "@/lib/data";

const categories = ["All", "AI/ML", "Web Development", "Data Science"] as const;
type Category = (typeof categories)[number];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const counts = useMemo(
    () => ({
      All: projects.length,
      "AI/ML": projects.filter((p) => p.category === "AI/ML").length,
      "Web Development": projects.filter((p) => p.category === "Web Development").length,
      "Data Science": projects.filter((p) => p.category === "Data Science").length,
    }),
    []
  );

  return (
    <div className="py-16">
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PROJECTS WORK"
          badgeVariant="coral"
          title="Engineered Projects &"
          highlightedWord="Innovations."
          description={`Browse ${stats.projects}+ complete real-world software, computer vision, data science, and web applications.`}
          descriptionClassName="max-w-4xl"
        />

        {/* ─── FILTERS & SEARCH CONTROLS ────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#00BFE8] text-white shadow-[-3px_-3px_8px_rgba(255,255,255,0.85),3px_5px_14px_rgba(0,191,232,0.45)] scale-[1.02]"
                      : "bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#5A6A85] dark:text-slate-300 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(166,180,200,0.50)] dark:shadow-none border border-white/80 dark:border-white/10 hover:text-[#2A354F]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive ? "bg-white/20 text-white" : "bg-[#E6ECF5] dark:bg-black/30 text-[#7E8BA0] shadow-inner"
                    }`}
                  >
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Neumorphic Search Field */}
          <div className="w-full md:w-72 relative">
            <NeumorphicInput
              icon={<Search className="w-4 h-4" />}
              type="search"
              placeholder="Search technologies, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E8BA0] hover:text-[#2A354F] p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#7E8BA0] font-medium">
          <span>
            Showing <strong className="text-[#2A354F] dark:text-white font-bold">{filtered.length}</strong> of {projects.length} projects
          </span>
          {(searchQuery || activeCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="text-[#00BFE8] dark:text-[#1CE0FD] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* ─── PROJECTS GRID ──────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white/60 dark:bg-darkbg-secondary/60 rounded-3xl border border-dashed border-black/10 dark:border-white/10">
            <p className="text-base text-[#5F6368] dark:text-slate-400 font-medium">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-3 px-5 py-2 rounded-full btn-coral text-xs font-bold inline-block"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
