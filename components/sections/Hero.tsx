"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  FileDown,
  Sparkles,
  Activity,
  Layers,
  Award,
} from "lucide-react";
import TypewriterTitle from "@/components/TypewriterTitle";
import { personal, stats } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* ─── AMBIENT BACKGROUND LIGHTS ────────────────────────────────────────── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-[#00BFE8]/15 via-[#3B82F6]/10 to-transparent dark:from-cyan-500/20 dark:via-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#1CE0FD]/10 dark:bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* ─── 2-COLUMN HERO MAIN GRID ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-6 sm:mb-8">
        
        {/* ─── LEFT COLUMN: HEADLINES, ROLE & CTAS ────────────────────────────── */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3.5 flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold border border-emerald-500/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Full-Time & Internship Roles (2026 Grad)
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[3.3rem] font-black text-[#2A354F] dark:text-white leading-[1.14] tracking-tight mb-3.5"
          >
            Building Intelligent{" "}
            <span className="bg-gradient-to-r from-[#00BFE8] via-[#1CE0FD] to-[#3B82F6] dark:from-cyan-400 dark:via-teal-300 dark:to-blue-400 bg-clip-text text-transparent">
              AI Systems
            </span>{" "}
            & Scalable Software.
          </motion.h1>

          {/* Dynamic Typewriter Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base font-bold text-[#5A6A85] dark:text-slate-300 mb-3.5 flex items-center gap-2"
          >
            <span className="px-2.5 py-1 rounded-lg bg-[#E6ECF5] dark:bg-slate-800/90 text-[#7E8BA0] dark:text-slate-400 border border-white/80 dark:border-slate-700/60 font-mono text-xs shadow-inner">
              Focused on:
            </span>
            <div className="text-[#2A354F] dark:text-white font-mono font-bold">
              <TypewriterTitle words={personal.roles} />
            </div>
          </motion.div>

          {/* Professional Narrative / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-[15px] text-[#5A6A85] dark:text-slate-300 leading-relaxed max-w-xl mb-5 sm:mb-6 font-medium"
          >
            Software Engineer & AI/ML Developer from Bengaluru (CSE&apos;26,{" "}
            <strong className="font-bold text-[#2A354F] dark:text-white">
              BIT Mangalore / VTU
            </strong>
            ). Experienced in building real-time computer vision pipelines, predictive ML systems, and full-stack web applications with{" "}
            <span className="font-bold text-[#00BFE8] dark:text-cyan-400">
              Python, PyTorch, React, Next.js & FastAPI
            </span>
            .
          </motion.p>

          {/* CTA Action Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3 sm:gap-3.5"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#00BFE8] text-white text-xs sm:text-sm font-extrabold shadow-[-3px_-3px_8px_rgba(255,255,255,0.85),3px_5px_16px_rgba(0,191,232,0.45)] hover:bg-[#00a7cc] hover:scale-[1.02] active:scale-98 transition-all group cursor-pointer"
            >
              <span>Explore 20+ Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4.5 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-[#E6ECF5] dark:bg-slate-800/90 text-[#2A354F] dark:text-white text-xs sm:text-sm font-bold shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(166,180,200,0.50)] hover:text-[#00BFE8] dark:hover:text-cyan-300 border border-white/80 dark:border-slate-700/60 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#00BFE8] dark:text-cyan-400" />
              <span>Let&apos;s Connect</span>
            </a>
            <a
              href="/resume/washim-shaikh-resume.pdf"
              download
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl bg-[#E6ECF5] dark:bg-slate-800/90 text-[#5A6A85] dark:text-slate-200 text-xs font-bold shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),3px_3px_8px_rgba(166,180,200,0.45)] hover:text-[#2A354F] dark:hover:text-white border border-white/80 dark:border-slate-700/60 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-rose-500" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* ─── RIGHT COLUMN: SCULPTED MODERN GLASS CAPSULE PORTRAIT FRAME ─────── */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] mx-auto select-none"
          >
            {/* Ambient Multi-Tone Radiant Glow Backdrops */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-tr from-[#00BFE8]/30 via-[#3B82F6]/25 to-emerald-400/20 dark:from-cyan-500/30 dark:via-blue-600/25 dark:to-emerald-500/15 rounded-full blur-[85px] pointer-events-none -z-10" />



            {/* Sculpted Modern Frame Canvas */}
            <div className="relative w-full aspect-[4/4.6] rounded-[2.8rem] overflow-hidden bg-gradient-to-b from-white/95 via-[#EDF3FB]/90 to-[#DCE6F5]/90 dark:from-slate-800/95 dark:via-slate-900/90 dark:to-slate-950/95 border border-white/95 dark:border-slate-800/90 shadow-[-8px_-8px_24px_rgba(255,255,255,0.95),8px_16px_32px_rgba(166,180,200,0.40)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] group">
              
              {/* Corner Ambient Shine */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#00BFE8]/20 via-transparent to-transparent rounded-tr-[2.8rem] pointer-events-none z-10" />

              {/* High-Resolution Portrait Photo */}
              <Image
                src="/profile.webp"
                alt="WASHIM SHAIKH"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-105 z-0"
              />

              {/* Soft Bottom Gradient Scrim to Gracefully Ground the Portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A354F]/25 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── HERO STATISTICS STRIP (4 TACTILE CARDS) ──────────────────────────── */}
      <div className="pt-5 sm:pt-6 border-t border-black/5 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
        <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/90 dark:border-slate-800 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_6px_14px_rgba(166,180,200,0.40)] dark:shadow-none flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-cyan-500/15 text-[#00BFE8] dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-inner">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#2A354F] dark:text-white">
              {stats.projects}+
            </div>
            <div className="text-xs font-semibold text-[#7E8BA0] dark:text-slate-400">
              Projects Built
            </div>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/90 dark:border-slate-800 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_6px_14px_rgba(166,180,200,0.40)] dark:shadow-none flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-500/15 text-[#3B82F6] dark:text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#2A354F] dark:text-white">
              {stats.internships}
            </div>
            <div className="text-xs font-semibold text-[#7E8BA0] dark:text-slate-400">
              Internships
            </div>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/90 dark:border-slate-800 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_6px_14px_rgba(166,180,200,0.40)] dark:shadow-none flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#2A354F] dark:text-white">
              {stats.cgpa}
            </div>
            <div className="text-xs font-semibold text-[#7E8BA0] dark:text-slate-400">
              CGPA (VTU)
            </div>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/90 dark:border-slate-800 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_6px_14px_rgba(166,180,200,0.40)] dark:shadow-none flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#2A354F] dark:text-white">
              {stats.languages}+
            </div>
            <div className="text-xs font-semibold text-[#7E8BA0] dark:text-slate-400">
              Core Languages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
