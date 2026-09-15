"use client";

import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageUtils";
import { ArrowUp, Mail, Phone, MapPin, Sparkles, FileDown, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 sm:mt-24 border-t border-black/5 dark:border-slate-800/80 bg-[#E6ECF5]/90 dark:bg-[#0D121D] backdrop-blur-2xl overflow-hidden text-[#2A354F] dark:text-slate-200">
      {/* ─── AMBIENT GLOW BACKDROPS ───────────────────────────────────────── */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[250px] bg-gradient-to-tr from-[#00BFE8]/15 via-[#3B82F6]/10 to-transparent dark:from-cyan-500/15 dark:via-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#1CE0FD]/10 dark:bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* ─── TOP SECTION: NAVIGATION, BRAND, AND CONNECT ────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-black/5 dark:border-slate-800/80">
          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black text-[#7E8BA0] dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00BFE8]" /> Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#5A6A85] dark:text-slate-300 hover:text-[#00BFE8] dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#00BFE8] transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand & Persona Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#00BFE8] to-[#1CE0FD] shadow-[-2px_-2px_6px_rgba(255,255,255,0.95),2px_4px_10px_rgba(0,191,232,0.4)] border border-white/80 dark:border-white/20 shrink-0">
                  <Image
                    src="/profile.webp"
                    alt="Washim Shaikh"
                    width={48}
                    height={48}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="w-full h-full object-cover object-top rounded-[14px]"
                  />
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0D121D] shadow-sm animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#2A354F] dark:text-white tracking-tight">
                    Washim Shaikh
                  </h3>
                  <p className="text-xs font-bold text-[#00BFE8] dark:text-cyan-400">
                    Software Engineer & AI/ML Developer
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A6A85] dark:text-slate-300 leading-relaxed font-medium max-w-sm mb-5">
                Computer Science & Engineering graduate from BIT Mangalore / VTU (&apos;26). Specializing in real-time Computer Vision, scalable ML pipelines, and full-stack web applications.
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[11px] font-extrabold border border-emerald-500/30 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open for Full-Time & Internship Roles
              </div>
            </div>
          </div>

          {/* Direct Channels & Connect */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-[#7E8BA0] dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#00BFE8]" /> Contact & Socials
              </h4>

              <div className="space-y-2.5 mb-5">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#E6ECF5]/70 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-[-2px_-2px_6px_rgba(255,255,255,0.95),2px_2px_6px_rgba(166,180,200,0.35)] dark:shadow-none hover:text-[#00BFE8] transition-all group"
                >
                  <div className="w-7 h-7 rounded-xl bg-[#CCEFF9] dark:bg-cyan-500/20 text-[#00BFE8] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold truncate">{personal.email}</span>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#E6ECF5]/70 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-[-2px_-2px_6px_rgba(255,255,255,0.95),2px_2px_6px_rgba(166,180,200,0.35)] dark:shadow-none hover:text-[#00BFE8] transition-all group"
                >
                  <div className="w-7 h-7 rounded-xl bg-[#EDE9FE] dark:bg-purple-500/20 text-[#8B5CF6] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold">{personal.phone}</span>
                </a>

                <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#E6ECF5]/70 dark:bg-slate-800/80 border border-white/80 dark:border-slate-700/60 shadow-[-2px_-2px_6px_rgba(255,255,255,0.95),2px_2px_6px_rgba(166,180,200,0.35)] dark:shadow-none">
                  <div className="w-7 h-7 rounded-xl bg-[#D1FAE5] dark:bg-emerald-500/20 text-[#10B981] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#5A6A85] dark:text-slate-300 truncate">
                    {personal.location}
                  </span>
                </div>
              </div>

              {/* Social Action Pills */}
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#E6ECF5] dark:bg-slate-800/90 text-[#2A354F] dark:text-white text-xs font-extrabold shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] dark:shadow-none border border-white/80 dark:border-slate-700/60 hover:text-[#00BFE8] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#E6ECF5] dark:bg-slate-800/90 text-[#2A354F] dark:text-white text-xs font-extrabold shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] dark:shadow-none border border-white/80 dark:border-slate-700/60 hover:text-[#00BFE8] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="/resume/washim-shaikh-resume.pdf"
                  download
                  aria-label="Download Resume"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-[#00BFE8] text-white text-xs font-extrabold shadow-[0_2px_10px_rgba(0,191,232,0.4)] hover:bg-[#00a7cc] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM ROW: COPYRIGHT, CREDITS & BACK TO TOP ──────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#7E8BA0] dark:text-slate-400">
          <p className="text-center sm:text-left">
            © {year} <strong className="font-extrabold text-[#2A354F] dark:text-white">Washim Shaikh</strong>.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6ECF5] dark:bg-slate-800/90 text-[#2A354F] dark:text-slate-200 text-xs font-extrabold shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] dark:shadow-none border border-white/80 dark:border-slate-700/60 hover:text-[#00BFE8] dark:hover:text-cyan-300 hover:scale-[1.02] transition-all cursor-pointer group"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#00BFE8]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
