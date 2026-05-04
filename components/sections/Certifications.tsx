// app/certifications/page.tsx

import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import HoverCard from "@/components/HoverCard";
import { certifications, workshops, achievements, extraCurricular } from "@/lib/data";
import { Award, BookOpen, Trophy, Users, Star } from "lucide-react";



const achievementIcons: Record<string, React.ElementType> = {
  trophy: Trophy,
  star: Star,
  users: Users,
};

export default function CertificationsSection() {
  return (
    <div>
      {/* Header */}
      <SectionWrapper className="py-16 bg-gradient-to-br from-amber-50/50 via-white to-emerald-50/50 dark:from-darkbg-primary dark:via-darkbg-secondary dark:to-darkbg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Credentials & Milestones
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mt-2 mb-4">
            Certifications & Achievements
          </h1>
          <p className="text-slate-500 dark:text-darktext-muted text-lg max-w-xl mx-auto">
            Professional certifications, workshops, and notable achievements.
          </p>
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-10 flex items-center gap-2">
            <Award className="w-7 h-7 text-primary" /> Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <HoverCard
                key={i}
                className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6 relative overflow-hidden"
                gradientFrom="#F59E0B"
                gradientTo="#F97316"
                glowColor="rgba(245,158,11,0.25)"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-primary" />
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-darktext-primary mb-1 leading-snug">{cert.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">{cert.issuer}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-darkbg-tertiary text-slate-600 dark:text-darktext-muted text-xs font-medium">
                    {cert.year}
                  </span>
                  {cert.score && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-500/30">
                      {cert.score}
                    </span>
                  )}
                </div>
                {cert.credentialId && (
                  <p className="text-slate-400 dark:text-darktext-muted text-xs mt-2">ID: {cert.credentialId}</p>
                )}
              </HoverCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Workshops */}
      <SectionWrapper className="py-16 bg-slate-50 dark:bg-darkbg-secondary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-10 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-accent-violet" /> Workshops & Training
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {workshops.map((ws, i) => (
              <HoverCard
                key={i}
                className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6 flex gap-4"
                gradientFrom="#F59E0B"
                gradientTo="#F97316"
                glowColor="rgba(245,158,11,0.25)"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-darktext-primary leading-snug">{ws.name}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mt-1">{ws.organizer}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-200 dark:border-emerald-500/30">
                      {ws.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-darkbg-tertiary text-slate-600 dark:text-darktext-muted text-xs">
                      {ws.year}
                    </span>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements */}
      <SectionWrapper className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-10 flex items-center gap-2">
            <Trophy className="w-7 h-7 text-amber-500" /> Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((ach, i) => {
              const Icon = achievementIcons[ach.icon] ?? Trophy;
              return (
                <HoverCard
                  key={i}
                  className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6 text-center"
                  gradientFrom="#F59E0B"
                  gradientTo="#F97316"
                  glowColor="rgba(245,158,11,0.25)"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200 dark:shadow-amber-900/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-darktext-primary mb-2">{ach.title}</h3>
                  <p className="text-slate-500 dark:text-darktext-muted text-sm leading-relaxed">{ach.description}</p>
                  <span className="inline-block mt-3 px-3 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-medium border border-amber-200 dark:border-amber-500/30">
                    {ach.year}
                  </span>
                </HoverCard>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Extra Curricular */}
      <SectionWrapper className="py-16 bg-slate-50 dark:bg-darkbg-secondary/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-10 flex items-center gap-2">
            <Star className="w-7 h-7 text-accent-green" /> Extra-Curricular Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {extraCurricular.map((activity, i) => (
              <HoverCard
                key={i}
                className="flex gap-4 bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-5"
                gradientFrom="#F59E0B"
                gradientTo="#F97316"
                glowColor="rgba(245,158,11,0.25)"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm">✦</span>
                </div>
                <p className="text-slate-600 dark:text-darktext-muted text-sm leading-relaxed">{activity}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
