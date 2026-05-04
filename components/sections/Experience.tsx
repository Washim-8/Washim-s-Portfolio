// app/experience/page.tsx — Experience page

import SectionWrapper from "@/components/SectionWrapper";
import HoverCard from "@/components/HoverCard";
import { internships, internshipCertificates } from "@/lib/data";
import { MapPin } from "lucide-react";

const companyGradients = [
  "from-amber-500 to-orange-500", // Inventeron
  "from-cyan-500 to-teal-500",   // iStudio
  "from-orange-500 to-red-600",  // 1Stop
  "from-rose-500 to-pink-600",   // WoRisGo
  "from-amber-400 to-yellow-500",// YHills
  "from-violet-600 to-indigo-700",// Coincent
];

export default function ExperienceSection() {
  return (
    <div>
      {/* Header */}
      <SectionWrapper className="py-16 bg-gradient-to-br from-violet-50/50 via-white to-indigo-50/50 dark:from-darkbg-primary dark:via-darkbg-secondary dark:to-darkbg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Career Journey
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-darktext-primary mt-2 mb-4">
            Internship Experience
          </h1>
          <p className="text-slate-500 dark:text-darktext-muted text-lg max-w-xl mx-auto">
            {internships.length} internships focused on AI/ML, Web Development, and Cloud Computing.
          </p>
        </div>
      </SectionWrapper>

      {/* Internship Timeline */}
      <SectionWrapper className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-12 flex items-center gap-2">
            <span className="text-2xl">💼</span> Internship Timeline
          </h2>

          <div className="relative space-y-8 pl-16">
            {/* Vertical line */}
            <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-violet to-transparent" />

            {internships.map((intern, i) => (
              <div key={i} className="relative">
                {/* Avatar circle */}
                <div
                  className={`absolute -left-7 top-4 w-12 h-12 z-10 rounded-xl bg-gradient-to-br ${companyGradients[i % companyGradients.length]
                    } flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white dark:border-darkbg-primary`}
                >
                  {intern.company[0]}
                </div>

                <HoverCard className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6" gradientFrom="#22C55E" gradientTo="#06B6D4" glowColor="rgba(34,197,94,0.25)">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-darktext-primary text-lg">{intern.title}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold">{intern.company}</p>
                      <div className="flex items-center gap-1.5 mt-1 text-slate-400 dark:text-darktext-muted text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{intern.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        {intern.isCurrent && (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-400/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-darkbg-tertiary text-slate-600 dark:text-darktext-muted text-xs font-medium">
                          {intern.type}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-600 dark:text-darktext-secondary text-sm font-medium">{intern.period}</p>
                        <p className="text-slate-400 dark:text-darktext-muted text-xs">{intern.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {intern.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-600 dark:text-darktext-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Internship Certificates */}
      <SectionWrapper className="py-16 bg-slate-50 dark:bg-darkbg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-10 flex items-center gap-2">
            <span className="text-2xl">🏆</span> Internship Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {internshipCertificates.map((item, i) => (
              <HoverCard
                key={i}
                className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6"
                gradientFrom="#22C55E"
                gradientTo="#06B6D4"
                glowColor="rgba(34,197,94,0.25)"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${companyGradients[i % companyGradients.length]
                      } flex items-center justify-center text-white font-bold`}
                  >
                    {item.company[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-darktext-primary">{item.company}</h3>
                    <p className="text-slate-500 dark:text-darktext-muted text-xs">{item.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.certificates.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border bg-sky-100 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/30"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
