"use client";

import Image from "next/image";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import LightGlassCard from "@/components/ui/LightGlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  personal,
  careerObjective,
  education,
  coreStrengths,
} from "@/lib/data";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function AboutSection() {
  return (
    <div className="py-16">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          badgeVariant="coral"
          title="Engineering Purposeful"
          highlightedWord="AI & Software."
          description="A dedicated Software Engineer and AI/ML Developer from Bengaluru, passionate about transforming real-world problems into high-performance software."
        />

        {/* Profile Card & Career Objective 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left: Master Professional Card */}
          <div className="lg:col-span-5 flex flex-col">
            <LightGlassCard
              variant="elevated"
              className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative overflow-hidden border-t-2 border-t-[#00BFE8]/40 group"
            >
              {/* Background ambient glow */}
              <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#00BFE8]/15 blur-3xl pointer-events-none group-hover:bg-[#00BFE8]/25 transition-all" />

              <div className="flex flex-col gap-4">
                {/* Header: Professional Avatar & Name */}
                <div className="flex items-start gap-3.5">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-gradient-to-tr from-[#00BFE8] to-[#1CE0FD] p-0.5 shadow-[-3px_-3px_8px_rgba(255,255,255,0.9),3px_5px_15px_rgba(0,191,232,0.45)] border border-white/80 dark:border-white/20">
                      <Image
                        src="/profile.webp"
                        alt="Washim Shaikh"
                        width={72}
                        height={72}
                        loading="lazy"
                        unoptimized
                        className="w-full h-full object-cover object-top rounded-[14px]"
                      />
                    </div>
                    {/* Active Status Beacon */}
                    <span
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#10AB7C] border-2 border-white dark:border-[#161B26] shadow-sm flex items-center justify-center"
                      title="Available for Opportunities"
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#CCEFF9]/80 dark:bg-[#00BFE8]/15 text-[#00BFE8] text-[10px] font-extrabold border border-[#00BFE8]/30 mb-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BFE8] animate-ping" />
                      Software Engineer & AI/ML
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#2A354F] dark:text-white tracking-tight leading-tight">
                      {personal.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#5A6A85] dark:text-slate-300 mt-0.5">
                      B.E. CSE &apos;26 • BIT Mangalore (VTU)
                    </p>
                  </div>
                </div>

                {/* 3-Column Tactile Metric Strip */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#E6ECF5]/70 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_5px_rgba(166,180,200,0.35)] dark:shadow-none text-center">
                    <div className="text-base sm:text-lg font-black text-[#2A354F] dark:text-white">
                      8.2
                    </div>
                    <div className="text-[10px] font-bold text-[#00BFE8] dark:text-cyan-400">
                      CGPA (VTU)
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#E6ECF5]/70 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_5px_rgba(166,180,200,0.35)] dark:shadow-none text-center">
                    <div className="text-base sm:text-lg font-black text-[#2A354F] dark:text-white">
                      6
                    </div>
                    <div className="text-[10px] font-bold text-[#3B82F6] dark:text-blue-400">
                      Internships
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#E6ECF5]/70 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_5px_rgba(166,180,200,0.35)] dark:shadow-none text-center">
                    <div className="text-base sm:text-lg font-black text-[#2A354F] dark:text-white">
                      20+
                    </div>
                    <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      Projects
                    </div>
                  </div>
                </div>

                {/* Quick Info List */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#E6ECF5]/60 dark:bg-black/20 border border-white/70 dark:border-white/5 shadow-inner">
                    <div className="w-8 h-8 rounded-xl bg-[#CCEFF9] dark:bg-[#00BFE8]/20 flex items-center justify-center text-[#00BFE8] shrink-0 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-[#7E8BA0] dark:text-slate-400 uppercase tracking-wider">
                        Location
                      </div>
                      <div className="text-xs font-bold text-[#2A354F] dark:text-slate-200 truncate">
                        {personal.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#E6ECF5]/60 dark:bg-black/20 border border-white/70 dark:border-white/5 shadow-inner">
                    <div className="w-8 h-8 rounded-xl bg-[#D1FAE5] dark:bg-[#10B981]/20 flex items-center justify-center text-[#10B981] shrink-0 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-[#7E8BA0] dark:text-slate-400 uppercase tracking-wider">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs font-bold text-[#2A354F] dark:text-slate-200 hover:text-[#00BFE8] transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#E6ECF5]/60 dark:bg-black/20 border border-white/70 dark:border-white/5 shadow-inner">
                    <div className="w-8 h-8 rounded-xl bg-[#EDE9FE] dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-[#7E8BA0] dark:text-slate-400 uppercase tracking-wider">
                        Phone & WhatsApp
                      </div>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-xs font-bold text-[#2A354F] dark:text-slate-200 hover:text-[#00BFE8] transition-colors block"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#E6ECF5]/60 dark:bg-black/20 border border-white/70 dark:border-white/5 shadow-inner">
                    <div className="w-8 h-8 rounded-xl bg-[#FEF3C7] dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-sm">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold text-[#7E8BA0] dark:text-slate-400 uppercase tracking-wider">
                        Work Availability
                      </div>
                      <div className="text-xs font-bold text-[#2A354F] dark:text-slate-200 truncate">
                        Full-Time & Internships • Remote / On-Site
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>

              {/* Social Action Cluster */}
              <div className="flex items-center gap-3 pt-3.5 mt-2 border-t border-black/5 dark:border-white/10">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#2A354F] dark:text-white hover:text-[#00BFE8] text-xs font-extrabold flex items-center justify-center gap-2 shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] hover:shadow-inner border border-white/80 dark:border-white/10 transition-all cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5]" /> LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#2A354F] dark:text-white hover:text-[#00BFE8] text-xs font-extrabold flex items-center justify-center gap-2 shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] hover:shadow-inner border border-white/80 dark:border-white/10 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              </div>
            </LightGlassCard>
          </div>

          {/* Right: Career Objective & Core Strengths */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Career Objective Card */}
            <LightGlassCard
              variant="elevated"
              className="p-6 sm:p-7 relative overflow-hidden border-t-2 border-t-[#3B82F6]/40 group"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#3B82F6]/10 blur-2xl pointer-events-none group-hover:bg-[#3B82F6]/20 transition-all" />
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] dark:bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center text-base font-bold shadow-inner">
                    🎯
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#2A354F] dark:text-white">
                    Career Objective
                  </h3>
                </div>
                <span className="text-[10px] font-extrabold text-[#3B82F6] bg-[#E0F2FE] dark:bg-[#3B82F6]/15 px-2.5 py-1 rounded-full border border-[#3B82F6]/30 shadow-sm">
                  Strategic Vision
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6A85] dark:text-slate-300 leading-relaxed font-medium">
                {careerObjective}
              </p>
            </LightGlassCard>

            {/* Core Strengths Card */}
            <LightGlassCard
              variant="elevated"
              className="p-6 sm:p-7 relative overflow-hidden border-t-2 border-t-[#10B981]/40 group"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#10B981]/10 blur-2xl pointer-events-none group-hover:bg-[#10B981]/20 transition-all" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#D1FAE5] dark:bg-[#10B981]/20 text-[#10B981] flex items-center justify-center text-base font-bold shadow-inner">
                    ⚡
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#2A354F] dark:text-white">
                    Core Strengths & Engineering Mindset
                  </h3>
                </div>
                <span className="text-[10px] font-extrabold text-[#10B981] bg-[#D1FAE5] dark:bg-[#10B981]/15 px-2.5 py-1 rounded-full border border-[#10B981]/30 shadow-sm">
                  6 Key Pillars
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreStrengths.map((strength) => (
                  <div
                    key={strength}
                    className="p-3 rounded-xl bg-white/80 dark:bg-darkbg-tertiary/90 border border-white/90 dark:border-white/10 shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_2px_6px_rgba(166,180,200,0.3)] dark:shadow-none flex items-center gap-2.5 text-xs font-bold text-[#2A354F] dark:text-slate-200 hover:-translate-y-0.5 hover:border-[#10B981]/50 transition-all duration-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#D1FAE5] dark:bg-[#10B981]/20 flex items-center justify-center text-[#10B981] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-tight">{strength}</span>
                  </div>
                ))}
              </div>
            </LightGlassCard>
          </div>
        </div>

        {/* ─── EDUCATION TIMELINE ────────────────────────────────────────── */}
        <div id="education" className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6 text-[#00BFE8]" />
            <h3 className="text-2xl font-extrabold text-[#202225] dark:text-white">
              Education Timeline
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-6">
            {/* Soft vertical line */}
            <div className="absolute left-2.5 sm:left-3 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00BFE8] via-[#1CE0FD] to-transparent opacity-40" />

            {education.map((edu) => (
              <div key={edu.degree} className="relative">
                {/* Node dot */}
                <div className="absolute -left-[23px] sm:-left-[27px] top-6 w-3.5 h-3.5 rounded-full bg-[#00BFE8] border-2 border-white dark:border-darkbg-primary shadow-sm" />

                <LightGlassCard variant="default" className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#202225] dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-[#00BFE8]">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-[#85898E] mt-0.5">{edu.university}</p>
                      )}
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-2.5 shrink-0">
                      <span className="text-xs font-semibold text-[#7E8BA0] dark:text-slate-400">
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-2xl bg-[#E6ECF5] dark:bg-slate-800/90 text-sm sm:text-base font-extrabold text-[#00BFE8] dark:text-cyan-300 shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),3px_3px_8px_rgba(166,180,200,0.40)] dark:shadow-none border border-white/90 dark:border-slate-700/70">
                        <span className="w-2 h-2 rounded-full bg-[#00BFE8] dark:bg-cyan-400 animate-pulse" />
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </LightGlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TECHNICAL SKILLS FULL CATALOG ─────────────────────────────── */}
        <TechnicalSkills />

        {/* ─── LANGUAGES ─────────────────────────────────────────────────── */}
        <div className="mt-12 pt-10 border-t border-black/5 dark:border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCEFF9]/90 dark:bg-cyan-500/10 text-[#00BFE8] dark:text-cyan-400 text-xs font-extrabold border border-[#00BFE8]/30 dark:border-cyan-500/20 mb-2.5 shadow-sm">
                <Globe className="w-3.5 h-3.5" /> Linguistic Proficiency
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2A354F] dark:text-slate-100 tracking-tight">
                Languages Known & <span className="text-[#00BFE8] dark:text-cyan-400">Fluency.</span>
              </h3>
            </div>
            <span className="text-xs font-bold text-[#7E8BA0] dark:text-slate-300 bg-[#E6ECF5] dark:bg-slate-800/80 px-3.5 py-1.5 rounded-xl shadow-inner border border-white/80 dark:border-slate-700/60 self-start sm:self-auto">
              <strong className="text-[#00BFE8] dark:text-cyan-300">5 Languages</strong> • Cross-Cultural Collaboration
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                language: "English",
                nativeName: "English",
                glyph: "EN",
                proficiency: "Professional Working Proficiency",
                level: 85,
                tag: "Global / Tech",
                color: "#00BFE8",
                bgLight: "rgba(0, 191, 232, 0.14)",
              },
              {
                language: "Hindi",
                nativeName: "हिन्दी",
                glyph: "हि",
                proficiency: "Native / Bilingual Proficiency",
                level: 100,
                tag: "Native / National",
                color: "#10B981",
                bgLight: "rgba(16, 185, 129, 0.14)",
              },
              {
                language: "Kannada",
                nativeName: "ಕನ್ನಡ",
                glyph: "ಕ",
                proficiency: "Native / Bilingual Proficiency",
                level: 100,
                tag: "Native / State",
                color: "#F59E0B",
                bgLight: "rgba(245, 158, 11, 0.14)",
              },
              {
                language: "Urdu",
                nativeName: "اُردُو",
                glyph: "اردو",
                proficiency: "Full Professional Proficiency",
                level: 90,
                tag: "Fluent / Pro",
                color: "#8B5CF6",
                bgLight: "rgba(139, 92, 246, 0.14)",
              },
              {
                language: "Marathi",
                nativeName: "मराठी",
                glyph: "म",
                proficiency: "Limited Working Proficiency",
                level: 50,
                tag: "Conversational",
                color: "#3B82F6",
                bgLight: "rgba(59, 130, 246, 0.14)",
              },
            ].map((lang) => (
              <div
                key={lang.language}
                className="p-4 sm:p-5 rounded-3xl bg-[#E6ECF5] dark:bg-slate-900/80 dark:backdrop-blur-md shadow-[-5px_-5px_14px_rgba(255,255,255,0.95),5px_6px_14px_rgba(166,180,200,0.45)] dark:shadow-none border border-white/90 dark:border-slate-800/80 hover:-translate-y-1.5 hover:shadow-[-3px_-3px_10px_rgba(255,255,255,0.95),3px_8px_20px_rgba(0,191,232,0.28)] hover:dark:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                style={{
                  borderTopColor: `${lang.color}80`,
                  borderTopWidth: "3px",
                }}
              >
                {/* Background ambient subtle glow on hover */}
                <div
                  className="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                  style={{ backgroundColor: `${lang.color}30` }}
                />

                <div>
                  {/* Top: Native Glyph & Category Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_5px_rgba(166,180,200,0.4)] dark:shadow-inner border border-white/80 dark:border-slate-700/60 dark:bg-slate-800/90 group-hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: lang.bgLight,
                        color: lang.color,
                      }}
                    >
                      {lang.glyph}
                    </div>
                    <span
                      className="text-[9px] font-extrabold px-2 py-0.5 rounded-full border shadow-sm dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/25"
                      style={{
                        backgroundColor: lang.bgLight,
                        color: lang.color,
                        borderColor: `${lang.color}40`,
                      }}
                    >
                      {lang.tag}
                    </span>
                  </div>

                  {/* Language Title & Native Script Subtitle */}
                  <div className="mb-3">
                    <div className="flex items-baseline justify-between gap-1">
                      <h4 className="text-base font-black text-[#2A354F] dark:text-slate-100 group-hover:text-[#00BFE8] dark:group-hover:text-cyan-300 transition-colors">
                        {lang.language}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#7E8BA0] dark:text-slate-400">
                        {lang.nativeName}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-[#5A6A85] dark:text-slate-400 leading-tight mt-1">
                      {lang.proficiency}
                    </p>
                  </div>
                </div>

                {/* Progress Bar & Percentage Gauge */}
                <div className="pt-3 border-t border-black/5 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-extrabold mb-1.5">
                    <span className="text-[#7E8BA0] dark:text-slate-400">Fluency</span>
                    <span className="font-bold dark:text-cyan-300" style={{ color: lang.color }}>{lang.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E6ECF5] dark:bg-slate-800/90 overflow-hidden shadow-inner border border-white/60 dark:border-slate-700/60 p-0.5">
                    <div
                      className="h-full rounded-full transition-all duration-700 relative shadow-sm"
                      style={{
                        width: `${lang.level}%`,
                        background: `linear-gradient(90deg, ${lang.color}, #1CE0FD)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
