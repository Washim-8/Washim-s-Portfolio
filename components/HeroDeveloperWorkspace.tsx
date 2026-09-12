"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import {
  Terminal,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Code2,
} from "lucide-react";
import {
  SiPython,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiOpencv,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

export default function HeroDeveloperWorkspace() {
  const [activeTab, setActiveTab] = useState<"ai" | "stack" | "metrics">("ai");

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Ambient Radial Glowing Halos */}
      <div
        className="absolute w-72 h-72 rounded-full bg-[#00BFE8]/20 dark:bg-cyan-500/15 blur-3xl pointer-events-none -top-10 -right-10 animate-pulse"
        aria-hidden="true"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-[#1CE0FD]/15 dark:bg-blue-600/15 blur-3xl pointer-events-none -bottom-10 -left-10 animate-pulse"
        aria-hidden="true"
        style={{ animationDuration: "5s" }}
      />

      {/* Floating 3D AI Robot Mini Companion */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-2, 3, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-7 -right-3 sm:-right-5 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white dark:border-slate-800/90 shadow-[-6px_-6px_16px_rgba(255,255,255,0.98),8px_12px_24px_rgba(163,166,160,0.30)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
      >
        <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gradient-to-br from-[#07131F] to-[#141A23] p-0.5 border border-[#00BFE8] shadow-[0_0_8px_rgba(0,191,232,0.4)] shrink-0">
          <Image
            src="/robot-assistant.png"
            alt="AI Assistant"
            width={28}
            height={28}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="pr-1 text-left">
          <p className="text-[10px] font-extrabold text-[#2A354F] dark:text-slate-100 leading-tight flex items-center gap-1">
            Washim AI <span className="w-1.5 h-1.5 rounded-full bg-[#10AB7C] animate-ping" />
          </p>
          <p className="text-[9px] font-bold text-[#00BFE8] dark:text-cyan-400">Engine Active</p>
        </div>
      </motion.div>

      {/* Main Unified 3D Developer Command Center */}
      <Tilt3DCard
        maxTilt={6}
        scale={1.015}
        className="relative rounded-3xl bg-[#E6ECF5] dark:bg-slate-900/90 backdrop-blur-2xl border border-white/90 dark:border-slate-800/90 shadow-[-12px_-12px_28px_rgba(255,255,255,0.98),12px_16px_34px_rgba(166,180,200,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.95)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] p-5 sm:p-6 overflow-hidden"
      >
        {/* Top macOS-style Terminal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-black/5 dark:border-slate-800/80">
          {/* Window Control Buttons & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
            </div>
            <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#2A354F] dark:text-slate-200 bg-[#DEE5F0] dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-white/60 dark:border-slate-700/60">
              <Terminal className="w-3.5 h-3.5 text-[#00BFE8] dark:text-cyan-400" />
              <span>washim_core.py</span>
            </div>
          </div>

          {/* Interactive Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#DEE5F0] dark:bg-slate-800/90 p-1 rounded-xl border border-white/60 dark:border-slate-700/60 shadow-inner">
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                activeTab === "ai"
                  ? "bg-[#00BFE8] text-white shadow-sm scale-[1.02]"
                  : "text-[#5A6A85] dark:text-slate-300 hover:text-[#2A354F] dark:hover:text-white"
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>AI Engine</span>
            </button>

            <button
              onClick={() => setActiveTab("stack")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                activeTab === "stack"
                  ? "bg-[#00BFE8] text-white shadow-sm scale-[1.02]"
                  : "text-[#5A6A85] dark:text-slate-300 hover:text-[#2A354F] dark:hover:text-white"
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Stack</span>
            </button>

            <button
              onClick={() => setActiveTab("metrics")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                activeTab === "metrics"
                  ? "bg-[#00BFE8] text-white shadow-sm scale-[1.02]"
                  : "text-[#5A6A85] dark:text-slate-300 hover:text-[#2A354F] dark:hover:text-white"
              }`}
            >
              <Activity className="w-3 h-3" />
              <span>Metrics</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Body Content */}
        <div className="min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* ─── TAB 1: AI MODEL ENGINE CODE & PREDICTION ─────────────── */}
            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3.5"
              >
                {/* Code Terminal Display */}
                <div className="p-4 rounded-2xl bg-[#07131F] dark:bg-[#060D17] text-slate-200 font-mono text-xs shadow-inner border border-white/10 dark:border-slate-800/80 leading-relaxed overflow-x-auto">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 pb-1.5 border-b border-white/10 dark:border-slate-800/80">
                    <span className="flex items-center gap-1.5 text-[#00BFE8] dark:text-cyan-400 font-bold">
                      <Code2 className="w-3.5 h-3.5" /> PyTorch Vision Pipeline
                    </span>
                    <span className="text-[#10AB7C] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10AB7C] animate-pulse" /> Live Inference
                    </span>
                  </div>
                  <p className="text-slate-400">
                    <span className="text-[#F43F5E]">from</span> washim_ai <span className="text-[#F43F5E]">import</span> YOLOv11, ViT
                  </p>
                  <p className="text-slate-300">
                    detector = YOLOv11.<span className="text-[#38BDF8]">load_model</span>(<span className="text-[#FBBF24]">&quot;OmniDetect-v11.pt&quot;</span>)
                  </p>
                  <p className="text-slate-300">
                    result = detector.<span className="text-[#38BDF8]">infer</span>(source=<span className="text-[#FBBF24]">&quot;video_stream&quot;</span>, conf=<span className="text-[#34D399]">0.95</span>)
                  </p>
                  <p className="text-[#10AB7C] font-semibold mt-1">
                    ✓ Status: <span className="text-white">Active</span> | Latency: <span className="text-[#38BDF8]">12ms</span> | Acc: <span className="text-[#FBBF24]">99.4%</span>
                  </p>
                </div>

                {/* Real-time Telemetry Metric Badges */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#DEE5F0] dark:bg-slate-800/90 border border-white/70 dark:border-slate-700/60 shadow-inner text-center">
                    <span className="text-[10px] font-bold text-[#7E8BA0] dark:text-slate-400 block">Inference Speed</span>
                    <span className="text-xs font-black text-[#00BFE8] dark:text-cyan-300">12ms (60 FPS)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#DEE5F0] dark:bg-slate-800/90 border border-white/70 dark:border-slate-700/60 shadow-inner text-center">
                    <span className="text-[10px] font-bold text-[#7E8BA0] dark:text-slate-400 block">Model Accuracy</span>
                    <span className="text-xs font-black text-[#10AB7C] dark:text-emerald-400">99.4% Precision</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#DEE5F0] dark:bg-slate-800/90 border border-white/70 dark:border-slate-700/60 shadow-inner text-center">
                    <span className="text-[10px] font-bold text-[#7E8BA0] dark:text-slate-400 block">Architecture</span>
                    <span className="text-xs font-black text-[#2A354F] dark:text-slate-100">YOLO + ViT</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── TAB 2: FULL-STACK CORE WEAPONS & FRAMEWORKS ─────────── */}
            {activeTab === "stack" && (
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3.5"
              >
                <div className="grid grid-cols-4 gap-2.5">
                  {[
                    { name: "Python", icon: SiPython, color: "#3776AB", tag: "Core" },
                    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", tag: "AI/ML" },
                    { name: "React", icon: SiReact, color: "#00BFE8", tag: "Frontend" },
                    { name: "Next.js", icon: SiNextdotjs, color: "#000000", tag: "Full Stack" },
                    { name: "FastAPI", icon: SiFastapi, color: "#059669", tag: "Backend" },
                    { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8", tag: "Vision" },
                    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", tag: "Styling" },
                    { name: "MySQL", icon: SiMysql, color: "#4479A1", tag: "Database" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="p-2 rounded-xl bg-[#DEE5F0] dark:bg-slate-800/90 border border-white/70 dark:border-slate-700/60 shadow-inner flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform"
                      >
                        <Icon className="w-5 h-5 mb-1" style={{ color: item.color }} />
                        <span className="text-[11px] font-extrabold text-[#2A354F] dark:text-slate-100 truncate">
                          {item.name}
                        </span>
                        <span className="text-[9px] font-semibold text-[#7E8BA0] dark:text-slate-400">
                          {item.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-2xl bg-[#07131F] dark:bg-[#060D17] text-slate-200 font-mono text-[11px] flex items-center justify-between border border-white/10 dark:border-slate-800/80 shadow-inner">
                  <span className="text-[#38BDF8] truncate flex items-center gap-1.5">
                    <span className="text-[#10AB7C]">POST</span> /api/v1/predict_object
                  </span>
                  <span className="text-[#10AB7C] font-bold text-[10px] bg-[#10AB7C]/20 px-2 py-0.5 rounded">
                    200 OK (14ms)
                  </span>
                </div>
              </motion.div>
            )}

            {/* ─── TAB 3: BENCHMARKS & VERIFIED TRACK RECORD ───────────── */}
            {activeTab === "metrics" && (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3.5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#DEE5F0] dark:bg-slate-800/90 border border-white/70 dark:border-slate-700/60 shadow-inner">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#7E8BA0] dark:text-slate-400">Production Projects</span>
                      <span className="text-xs font-black text-[#00BFE8] dark:text-cyan-300">20+ Built</span>
                    </div>
                    <p className="text-[11px] text-[#5A6A85] dark:text-slate-300">
                      OmniDetect-AI, StudentPredictorAI, AvatarAI, TrafficFlow-Sim
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#DEE5F0] dark:bg-slate-800/90 border border-white/70 dark:border-slate-700/60 shadow-inner">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#7E8BA0] dark:text-slate-400">Industry Internships</span>
                      <span className="text-xs font-black text-[#10AB7C] dark:text-emerald-400">6 Completed</span>
                    </div>
                    <p className="text-[11px] text-[#5A6A85] dark:text-slate-300">
                      Inventeron, YHills (IIT-G), 1Stop, Coincent, iStudio
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#DEE5F0] dark:bg-slate-800/90 border border-white/70 dark:border-slate-700/60 shadow-inner flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#D1FAE5] dark:bg-emerald-500/20 text-[#10AB7C] dark:text-emerald-400 flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#2A354F] dark:text-slate-100">
                        Academic Standing: CGPA 8.2 / 10
                      </div>
                      <div className="text-[10px] font-semibold text-[#7E8BA0] dark:text-slate-400">
                        B.E. Computer Science & Engineering (VTU)
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#10AB7C] dark:text-emerald-400 bg-[#D1FAE5] dark:bg-emerald-500/20 px-2.5 py-1 rounded-full">
                    Graduating &apos;26
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Terminal Status Footer */}
          <div className="mt-4 pt-3 border-t border-black/5 dark:border-slate-800/80 flex items-center justify-between text-xs text-[#7E8BA0] dark:text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10AB7C] animate-pulse" />
              <span className="text-[#5A6A85] dark:text-slate-300 font-semibold">
                Washim Shaikh • AI & Full-Stack Engineer
              </span>
            </div>
            <span className="text-[11px] text-[#00BFE8] dark:text-cyan-400 font-bold">
              Bengaluru, India
            </span>
          </div>
        </div>
      </Tilt3DCard>
    </div>
  );
}
