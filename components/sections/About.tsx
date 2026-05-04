"use client";
// app/about/page.tsx — About page

import SectionWrapper from "@/components/SectionWrapper";
import SkillsOrbit from "@/components/SkillsOrbit";
import HoverCard from "@/components/HoverCard";
import {
  personal,
  careerObjective,
  education,
  skills,
  coreStrengths,
  languages,
} from "@/lib/data";
import { GraduationCap, MapPin, Mail, Phone, ExternalLink, BadgeCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { motion } from "framer-motion";



const skillSections = [
  { title: "Programming Languages",  emoji: "💻", items: skills.programmingLanguages, colorClass: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 hover:shadow-blue-500/20" },
  { title: "Web Development",        emoji: "🌐", items: skills.webDevelopment,       colorClass: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:shadow-cyan-500/20" },
  { title: "Backend Frameworks",     emoji: "⚙️", items: skills.backendFrameworks,    colorClass: "bg-gradient-to-r from-slate-500/10 to-zinc-500/10 border border-slate-200 dark:border-slate-500/30 text-slate-700 dark:text-slate-300 hover:shadow-slate-500/20" },
  { title: "Databases & Storage",    emoji: "🗄️", items: skills.database,            colorClass: "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 hover:shadow-amber-500/20" },
  { title: "AI / ML",               emoji: "🧠", items: skills.aiml,                colorClass: "bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:shadow-emerald-500/20" },
  { title: "Specialized AI",        emoji: "🔬", items: skills.specialized,          colorClass: "bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:shadow-purple-500/20" },
  { title: "Computer Vision",       emoji: "👁️", items: skills.computerVision,      colorClass: "bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 hover:shadow-violet-500/20" },
  { title: "Data Processing",       emoji: "🔢", items: skills.dataProcessing,       colorClass: "bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-200 dark:border-yellow-500/30 text-yellow-700 dark:text-yellow-300 hover:shadow-yellow-500/20" },
  { title: "Data Visualization",    emoji: "📈", items: skills.visualization,        colorClass: "bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 hover:shadow-teal-500/20" },
  { title: "NLP",                   emoji: "💬", items: skills.nlp,                  colorClass: "bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200 dark:border-orange-500/30 text-orange-700 dark:text-orange-300 hover:shadow-orange-500/20" },
  { title: "Auth & Security",       emoji: "🔐", items: skills.authSecurity,         colorClass: "bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-300 hover:shadow-red-500/20" },
  { title: "Media Processing",      emoji: "🎬", items: skills.mediaProcessing,      colorClass: "bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-200 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 hover:shadow-pink-500/20" },
  { title: "APIs & Architecture",   emoji: "📡", items: skills.coreTechnologies,     colorClass: "bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 hover:shadow-sky-500/20" },
  { title: "Tools & Platforms",     emoji: "🛠️", items: skills.tools,               colorClass: "bg-gradient-to-r from-stone-500/10 to-neutral-500/10 border border-stone-200 dark:border-stone-500/30 text-stone-700 dark:text-stone-300 hover:shadow-stone-500/20" },
  { title: "Emerging Tech",         emoji: "🚀", items: skills.emerging,             colorClass: "bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 hover:shadow-rose-500/20" },
  { title: "Other",                 emoji: "📦", items: skills.other,               colorClass: "bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-200 dark:border-lime-500/30 text-lime-700 dark:text-lime-300 hover:shadow-lime-500/20" },
];

const degreeColors: Record<string, string> = {
  undergraduate: "from-primary to-accent-violet",
  puc: "from-accent-green to-accent-cyan",
  sslc: "from-amber-500 to-orange-500",
};

export default function AboutSection() {
  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <SectionWrapper className="py-20 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 dark:from-darkbg-primary dark:via-darkbg-secondary dark:to-darkbg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-36 h-36 rounded-3xl overflow-hidden bg-white dark:bg-darkbg-tertiary flex items-center justify-center shadow-2xl shadow-primary/20 border-4 border-white dark:border-darkbg-secondary">
                  <img
                    src="/logo.png"
                    alt="WS Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white dark:bg-darkbg-secondary border-2 border-slate-100 dark:border-white/10 flex items-center justify-center shadow-lg">
                  <BadgeCheck className="w-7 h-7 text-emerald-500 fill-emerald-50" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-darktext-primary mb-1">
                {personal.name}
              </h1>
              <p className="text-primary font-semibold text-lg mb-3">{personal.title}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 dark:text-darktext-muted mb-5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {personal.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">
                    {personal.email}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${personal.phone}`} className="hover:text-primary transition-colors">
                    {personal.phone}
                  </a>
                </span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 dark:bg-darkbg-tertiary text-white text-sm font-medium hover:bg-slate-700 dark:hover:bg-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 dark:bg-darkbg-tertiary text-white text-sm font-medium hover:bg-slate-700 dark:hover:bg-white/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── CAREER OBJECTIVE ─────────────────────────────────────── */}
      <SectionWrapper className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">🎯</span> Career Objective
          </h2>
          <HoverCard className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-8" gradientFrom="#6366F1" gradientTo="#8B5CF6" glowColor="rgba(99,102,241,0.25)">
            <p className="text-slate-700 dark:text-darktext-secondary leading-relaxed text-base">{careerObjective}</p>
          </HoverCard>
        </div>
      </SectionWrapper>



      {/* ─── EDUCATION TIMELINE ───────────────────────────────────── */}
      <SectionWrapper className="py-16" id="education">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-10 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-primary" /> Education
          </h2>
          <div className="relative space-y-6 pl-12">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-violet to-transparent" />

            {education.map((edu, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div
                  className={`absolute -left-7 top-4 w-5 h-5 rounded-full bg-gradient-to-br ${degreeColors[edu.type]
                    } border-4 border-white dark:border-darkbg-secondary shadow-md`}
                />
                <HoverCard className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6" gradientFrom="#6366F1" gradientTo="#8B5CF6" glowColor="rgba(99,102,241,0.25)">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-darktext-primary text-base">{edu.degree}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mt-0.5">{edu.institution}</p>
                      {edu.university && (
                        <p className="text-slate-500 dark:text-darktext-muted text-xs mt-0.5">{edu.university}</p>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-slate-500 dark:text-darktext-muted text-sm font-medium">{edu.period}</span>
                      <div className="mt-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-500/30">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── SKILLS GRID ──────────────────────────────────────────── */}
      <SectionWrapper className="py-16 bg-slate-50 dark:bg-darkbg-secondary/30" id="skills">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-6 flex items-center gap-2">
            <span className="text-2xl">🛠️</span> Technical Skills
          </h2>
          {/* Animated skills orbit visual */}
          <SkillsOrbit />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {skillSections.map((section) => (
              <HoverCard
                key={section.title}
                className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-5 group"
                gradientFrom="#6366F1"
                gradientTo="#8B5CF6"
                glowColor="rgba(99,102,241,0.25)"
              >
                <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-darktext-primary mb-4 text-sm uppercase tracking-wide transition-colors group-hover:text-primary dark:group-hover:text-primary-light">
                  <span className="group-hover:scale-125 transition-transform origin-center duration-300">{section.emoji}</span> {section.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${section.colorClass} transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default backdrop-blur-sm`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── CORE STRENGTHS ───────────────────────────────────────── */}
      <SectionWrapper className="py-16 bg-slate-50 dark:bg-darkbg-secondary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-8 flex items-center gap-2">
            <span className="text-2xl">⚡</span> Core Strengths
          </h2>
          <div className="flex flex-wrap gap-3">
            {coreStrengths.map((s) => (
              <span
                key={s}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md text-slate-700 dark:text-darktext-primary text-sm font-medium border border-slate-200 dark:border-white/10 shadow-sm hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary-light hover:-translate-y-1 transition-all cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── LANGUAGES ────────────────────────────────────────────── */}
      <SectionWrapper className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-10 flex items-center gap-2">
            <span className="text-2xl">🌍</span> Languages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {languages.map((lang) => (
              <HoverCard
                key={lang.language}
                className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-5"
                gradientFrom="#6366F1"
                gradientTo="#8B5CF6"
                glowColor="rgba(99,102,241,0.25)"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 dark:text-darktext-primary">{lang.language}</h3>
                  <span className="text-xs text-slate-400 dark:text-darktext-muted">{lang.level}%</span>
                </div>
                <div className="w-full h-4 bg-slate-200 dark:bg-darkbg-primary rounded-full mb-3 p-0.5 shadow-inner">
                  <div className="dark h-full w-full relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                      className="absolute left-0 top-0 bottom-0 h-full btn-gold rounded-full"
                    />
                  </div>
                </div>
                <p className="text-slate-500 dark:text-darktext-muted text-xs">{lang.proficiency}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
