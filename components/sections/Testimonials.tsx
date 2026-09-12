"use client";

import React from "react";
import { Trophy, Star, Users } from "lucide-react";
import LightGlassCard from "@/components/ui/LightGlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";

const achievementIcons: Record<string, React.ElementType> = {
  trophy: Trophy,
  star: Star,
  users: Users,
};

const badgeColors = [
  { bg: "bg-[#CCEFF9]", text: "text-[#00BFE8]" },
  { bg: "bg-[#FEF3C7]", text: "text-[#D97706]" },
  { bg: "bg-[#D1FAE5]", text: "text-[#10B981]" },
];

export default function TestimonialsSection() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="RECOGNITION"
          badgeVariant="amber"
          title="Achievements & Notable"
          highlightedWord="Milestones."
          description="Recognition in technical aptitude, leadership excellence, and competitive collegiate challenges."
        />

        {/* ─── ACHIEVEMENTS GRID ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = achievementIcons[item.icon] || Trophy;
            const style = badgeColors[idx % badgeColors.length];
            return (
              <LightGlassCard
                key={item.title}
                variant="elevated"
                className="p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${style.bg} ${style.text} flex items-center justify-center font-bold shadow-inner group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#7E8BA0] bg-[#E6ECF5] dark:bg-[#161B26] shadow-[-2px_-2px_5px_rgba(255,255,255,0.95),2px_2px_5px_rgba(166,180,200,0.35)] px-3 py-1 rounded-full border border-white/80 dark:border-white/10">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#2A354F] dark:text-white mb-2 leading-snug group-hover:text-[#00BFE8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6A85] dark:text-slate-300 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </LightGlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
