"use client";
// components/sections/Testimonials.tsx — Achievements & Recognition section
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Users, Briefcase, Award, Code2, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import HoverCard from "@/components/HoverCard";
import { achievements, stats, internships, certifications, projects } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  star: Star,
  users: Users,
};

const gradients = [
  "from-amber-400 to-orange-500",
  "from-primary to-accent-violet",
  "from-accent-green to-accent-cyan",
];

const shadowColors = [
  "shadow-amber-200 dark:shadow-amber-900/20",
  "shadow-primary/20",
  "shadow-accent-green/20",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const statHighlights = [
  {
    icon: Briefcase,
    value: `${internships.length}`,
    label: "Internships Completed",
    gradient: "from-primary to-accent-violet",
    bg: "bg-slate-100 dark:bg-white/5",
    text: "text-slate-800 dark:text-slate-100",
  },
  {
    icon: Code2,
    value: `${stats.projects}+`,
    label: "Projects Built",
    gradient: "from-accent-green to-accent-cyan",
    bg: "bg-slate-100 dark:bg-white/5",
    text: "text-slate-800 dark:text-slate-100",
  },
  {
    icon: Award,
    value: `${certifications.length}`,
    label: "Certifications Earned",
    gradient: "from-amber-400 to-orange-500",
    bg: "bg-slate-100 dark:bg-white/5",
    text: "text-slate-800 dark:text-slate-100",
  },
  {
    icon: TrendingUp,
    value: stats.cgpa,
    label: "CGPA (VTU)",
    gradient: "from-accent-violet to-accent-pink",
    bg: "bg-slate-100 dark:bg-white/5",
    text: "text-slate-800 dark:text-slate-100",
  },
];

export default function TestimonialsSection() {
  return (
    <div>
      {/* Header */}
      <SectionWrapper className="py-16 bg-gradient-to-br from-amber-50/60 via-white to-violet-50/40 dark:from-darkbg-primary dark:via-darkbg-secondary dark:to-darkbg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wider">
            Recognition & Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mt-2 mb-4">
            Achievements & Social Proof
          </h2>
          <p className="text-slate-500 dark:text-darktext-muted text-lg max-w-xl mx-auto">
            Real milestones, measurable impact — the numbers and moments that define the journey.
          </p>
        </div>
      </SectionWrapper>

      {/* Stats Row */}
      <SectionWrapper className="py-12 bg-white dark:bg-darkbg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {statHighlights.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  className="h-full"
                >
                  <HoverCard
                    className="bg-white dark:bg-darkbg-secondary p-6 text-center"
                    gradientFrom="#EC4899"
                    gradientTo="#8B5CF6"
                    glowColor="rgba(236,72,153,0.25)"
                  >
                    <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`w-6 h-6 ${stat.text}`} />
                    </div>
                    <div className={`text-3xl font-extrabold ${stat.text} mb-1`}>{stat.value}</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold">{stat.label}</p>
                  </HoverCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA Strip */}
      <SectionWrapper className="py-14 bg-gradient-to-r from-primary to-accent-violet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to work together?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Washim is actively looking for internships, full-time roles, and exciting project collaborations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3.5 btn-gold text-[13px] font-bold flex items-center justify-center transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/resume/washim-shaikh-resume.pdf"
                download
                className="px-8 py-3.5 btn-gold text-[13px] font-bold flex items-center justify-center transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
