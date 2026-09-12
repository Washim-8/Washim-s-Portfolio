"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import {
  Brain,
  Sparkles,
  MapPin,
  ShieldCheck,
  Zap,
  Code2,
  GraduationCap,
  Layers,
} from "lucide-react";

export default function HeroProfileShowcase() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none py-6">
      {/* Ambient Multi-Tone Radial Glow Backlights */}
      <div
        className="absolute w-80 h-80 rounded-full bg-[#00BFE8]/20 dark:bg-cyan-500/20 blur-3xl pointer-events-none -top-6 -right-6 animate-pulse"
        aria-hidden="true"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-[#3B82F6]/15 dark:bg-blue-600/20 blur-3xl pointer-events-none -bottom-6 -left-6 animate-pulse"
        aria-hidden="true"
        style={{ animationDuration: "5s" }}
      />

      {/* Floating Top AI Assistant Pill */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [-1, 2, -1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-3 right-0 sm:right-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white dark:border-cyan-500/30 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_6px_15px_rgba(166,180,200,0.35)] dark:shadow-[0_0_20px_rgba(0,191,232,0.25)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[11px] font-extrabold text-[#2A354F] dark:text-slate-100">
          Available for Roles (2026)
        </span>
      </motion.div>

      {/* Main 3D Interactive Portrait Showcase Container */}
      <Tilt3DCard maxTilt={7} className="relative z-10 w-full">
        <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/90 dark:border-slate-800/80 shadow-[-8px_-8px_20px_rgba(255,255,255,0.95),8px_14px_28px_rgba(166,180,200,0.40)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden group">
          
          {/* Subtle Corner Light Glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#00BFE8]/20 via-transparent to-transparent rounded-tr-[2.5rem] pointer-events-none" />

          {/* Portrait Image Frame */}
          <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.3] rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-950 border border-black/5 dark:border-white/10 shadow-inner">
            <Image
              src="/profile.jpg"
              alt="WASHIM SHAIKH"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Scrim for Bottom Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Inset Bottom Identity Bar */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-white/80 dark:border-slate-700/60 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-[#2A354F] dark:text-white leading-tight">
                    Washim Shaikh
                  </h4>
                  <p className="text-[10px] font-semibold text-[#5A6A85] dark:text-slate-300">
                    AI/ML & Full-Stack Engineer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#00BFE8] dark:text-cyan-400 bg-[#CCEFF9]/80 dark:bg-cyan-500/15 px-2.5 py-1 rounded-xl border border-cyan-500/20">
                <MapPin className="w-3 h-3" />
                <span>Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Floating Telemetry Micro-Badges around Photo */}
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {/* Metric 1: AI Vision Focus */}
            <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#E6ECF5]/80 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-inner">
              <div className="w-7 h-7 rounded-xl bg-cyan-500/15 text-[#00BFE8] dark:text-cyan-400 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-extrabold text-[#2A354F] dark:text-slate-100 truncate">
                  AI & Computer Vision
                </span>
                <span className="block text-[9px] font-semibold text-[#7E8BA0] dark:text-slate-400 truncate">
                  PyTorch • YOLOv11
                </span>
              </div>
            </div>

            {/* Metric 2: Academic Credential */}
            <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#E6ECF5]/80 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-inner">
              <div className="w-7 h-7 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-extrabold text-[#2A354F] dark:text-slate-100 truncate">
                  B.E. CSE (CGPA: 8.2)
                </span>
                <span className="block text-[9px] font-semibold text-[#7E8BA0] dark:text-slate-400 truncate">
                  BIT Mangalore / VTU
                </span>
              </div>
            </div>
          </div>
        </div>
      </Tilt3DCard>
    </div>
  );
}
