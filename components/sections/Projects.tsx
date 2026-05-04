"use client";
// app/projects/page.tsx — Projects page with filter
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import SectionWrapper from "@/components/SectionWrapper";
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
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
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
    <div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {/* Header */}
      <SectionWrapper className="py-16 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 dark:from-darkbg-primary dark:via-darkbg-secondary dark:to-darkbg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            My Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-darktext-primary mt-2 mb-4">
            Projects
          </h1>
          <p className="text-slate-500 dark:text-darktext-muted text-lg max-w-xl mx-auto">
            {stats.projects} projects spanning AI/ML, Full Stack Web Development, and Data Science.
          </p>
        </div>
      </SectionWrapper>

      {/* Filter + Grid */}
      <SectionWrapper className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <div key={cat} className="dark">
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-1.5 px-5 py-2.5 btn-gold text-sm font-bold transition-all duration-300 ${
                      activeCategory === cat
                        ? "opacity-100 scale-[1.03]"
                        : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.02]"
                    }`}
                  >
                    <span className="text-white whitespace-nowrap">{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        activeCategory === cat
                          ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {counts[cat]}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-darktext-muted" />
              <input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-darktext-primary placeholder:text-slate-400 dark:placeholder:text-darktext-muted focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 focus:border-primary dark:focus:border-primary bg-white dark:bg-darkbg-tertiary transition-all"
              />
            </div>
          </div>

          {/* Results count */}
          <p className="text-slate-500 dark:text-darktext-muted text-sm mb-6">
            Showing <span className="font-semibold text-slate-900 dark:text-darktext-primary">{filtered.length}</span> project
            {filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-400 dark:text-darktext-muted text-lg">No projects match your search.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 text-primary dark:text-primary-light text-sm font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
