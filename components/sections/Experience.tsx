"use client";

import React from "react";
import LightGlassCard from "@/components/ui/LightGlassCard";
import ClayBadge from "@/components/ui/ClayBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { internships } from "@/lib/data";
import { MapPin } from "lucide-react";

const companyBadgeColors = [
  { bg: "bg-[#CCEFF9]", text: "text-[#00BFE8]" },
  { bg: "bg-[#CCEFF9]", text: "text-[#07131F] dark:text-[#1CE0FD]" },
  { bg: "bg-[#D1FAE5]", text: "text-[#10B981]" },
  { bg: "bg-[#FEF3C7]", text: "text-[#D97706]" },
  { bg: "bg-[#EBF3FE]", text: "text-[#2563EB]" },
  { bg: "bg-[#F3F4F1]", text: "text-[#475569]" },
];

export default function ExperienceSection() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="EXPERIENCE"
          badgeVariant="coral"
          title="Internship & Industry"
          highlightedWord="Track Record."
          description={`Comprehensive hands-on experience across ${internships.length} industry internships specializing in Machine Learning, Cloud Systems, and Full-Stack Engineering.`}
        />

        {/* ─── INTERNSHIP TIMELINE ────────────────────────────────────────── */}
        <div className="relative pl-6 sm:pl-8 space-y-8">
          {/* Vertical Timeline Guide */}
          <div className="absolute left-2.5 sm:left-3 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00BFE8] via-[#1CE0FD] to-transparent opacity-40" />

          {internships.map((intern, i) => {
            const style = companyBadgeColors[i % companyBadgeColors.length];
            return (
              <div key={intern.title + intern.company} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[23px] sm:-left-[27px] top-6 w-3.5 h-3.5 rounded-full bg-[#00BFE8] border-2 border-white dark:border-darkbg-primary shadow-sm" />

                <LightGlassCard
                  variant={intern.isCurrent ? "elevated" : "default"}
                  className="p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${style.bg} ${style.text} font-black text-lg flex items-center justify-center shadow-inner shrink-0`}
                      >
                        {intern.company[0]}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-extrabold text-[#2A354F] dark:text-white">
                            {intern.title}
                          </h3>
                          {intern.isCurrent && (
                            <ClayBadge variant="coral" size="sm" dot>
                              CURRENT
                            </ClayBadge>
                          )}
                        </div>
                        <p className="text-sm font-bold text-[#00BFE8] mt-0.5">
                          {intern.company}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-[#7E8BA0] mt-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#7E8BA0]" />
                          <span>{intern.location}</span>
                          <span className="mx-1">•</span>
                          <span className="font-semibold text-[#5A6A85] dark:text-slate-300">
                            {intern.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 text-right shrink-0">
                      <span className="text-xs font-bold text-[#2A354F] dark:text-white bg-[#E6ECF5] dark:bg-[#161B26] shadow-[-2px_-2px_5px_rgba(255,255,255,0.95),2px_2px_5px_rgba(166,180,200,0.35)] px-3 py-1 rounded-full border border-white/80 dark:border-white/10">
                        {intern.period}
                      </span>
                      <span className="text-[11px] font-medium text-[#7E8BA0]">
                        {intern.duration}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities Bullets */}
                  <ul className="space-y-2.5 mt-4 pt-4 border-t border-black/5 dark:border-white/10">
                    {intern.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A6A85] dark:text-slate-300 leading-relaxed font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00BFE8] mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </LightGlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
