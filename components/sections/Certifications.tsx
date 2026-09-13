"use client";

import React, { useState, useEffect, useRef } from "react";
import LightGlassCard from "@/components/ui/LightGlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  certifications,
  workshops,
  verifiedInternshipCredentials,
  Certification,
} from "@/lib/data";
import {
  Award,
  BookOpen,
  ExternalLink,
  FileText,
  CheckCircle2,
  Shield,
  Code,
  Brain,
  Building2,
  Eye,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageUtils";

interface ModalData {
  title: string;
  issuer: string;
  previewImage: string;
  fileUrl?: string;
  verifyUrl?: string;
  year?: string;
  credentialId?: string;
  score?: string;
  category?: string;
  skills?: string[];
  type?: string;
}

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [modalItem, setModalItem] = useState<ModalData | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalItem(null);
    };
    if (modalItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalItem]);

  const categories = [
    "All",
    "AI & Data Science",
    "Programming & Software",
    "Cybersecurity & IT",
  ];

  const filteredCerts =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [filteredCerts]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getCategoryIcon = (category: Certification["category"]) => {
    switch (category) {
      case "AI & Data Science":
        return Brain;
      case "Cybersecurity & IT":
        return Shield;
      case "Programming & Software":
        return Code;
      default:
        return Award;
    }
  };

  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CREDENTIALS & WORKSHOPS"
          badgeVariant="emerald"
          title="Professional Certifications &"
          highlightedWord="Workshops."
          description={
            <>
              Verified industry certifications, specialized technical workshops, and official internship credentials
              <br className="hidden sm:inline" /> in AI/ML, Prompt Engineering, Cloud, and Software Development.
            </>
          }
        />

        {/* ─── CATEGORY FILTER PILLS ─────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#00BFE8] text-white shadow-[-3px_-3px_8px_rgba(255,255,255,0.85),3px_5px_14px_rgba(0,191,232,0.45)] scale-[1.02]"
                    : "bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#475569] dark:text-slate-300 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(166,180,200,0.50)] dark:shadow-none border border-white/80 dark:border-white/10 hover:text-[#2A354F]"
                }`}
              >
                {cat === "All" ? "All Certifications" : cat}
              </button>
            );
          })}
        </div>

        {/* ─── CERTIFICATIONS RESPONSIVE HORIZONTAL SCROLL SHOWCASE ────────── */}
        <div className="mb-24">
          {/* Scroll Navigation Controls & Status Bar */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#475569] dark:text-slate-300">
                Displaying <span className="text-[#00BFE8] font-extrabold">{filteredCerts.length}</span> Verified Credentials
              </span>
              {filteredCerts.length > 4 && (
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#10AB7C] bg-[#D1FAE5] dark:bg-[#10AB7C]/20 px-2.5 py-0.5 rounded-full border border-[#10AB7C]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10AB7C] animate-pulse" />
                  Scroll to explore
                </span>
              )}
            </div>

            {filteredCerts.length > 2 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleScroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Scroll left"
                  className="w-9 h-9 rounded-xl bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#2A354F] dark:text-white hover:text-[#00BFE8] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] border border-white/80 dark:border-white/10 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Scroll right"
                  className="w-9 h-9 rounded-xl bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#2A354F] dark:text-white hover:text-[#00BFE8] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] border border-white/80 dark:border-white/10 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Responsive Scrollable Grid: 1-row on mobile (<sm) for clean touch swipe, 2-row on desktop */}
          <div
            ref={scrollContainerRef}
            className="grid grid-rows-1 sm:grid-rows-2 grid-flow-col gap-4 sm:gap-5 overflow-x-auto pb-6 pt-2 px-1 scroll-smooth snap-x snap-mandatory auto-cols-[85vw] sm:auto-cols-[calc(46%-10px)] md:auto-cols-[calc(36%-12px)] lg:auto-cols-[calc(29%-14px)] xl:auto-cols-[calc(28.5%-14px)]"
            style={{ scrollbarWidth: "thin" }}
          >
            {filteredCerts.map((cert) => {
              const IconComponent = getCategoryIcon(cert.category);
              const previewImg = cert.previewImage || cert.fileUrl || "";

              return (
                <LightGlassCard
                  key={cert.name}
                  variant="elevated"
                  className="p-4 sm:p-4.5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group snap-start h-full"
                >
                  <div>
                    {/* Visual Certificate Preview Image Frame */}
                    <div
                      onClick={() =>
                        setModalItem({
                          title: cert.name,
                          issuer: cert.issuer,
                          previewImage: previewImg,
                          fileUrl: cert.fileUrl,
                          verifyUrl: cert.verifyUrl,
                          year: cert.year,
                          credentialId: cert.credentialId,
                          score: cert.score,
                          category: cert.category,
                          skills: cert.skills,
                        })
                      }
                      className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden mb-3.5 bg-[#DEE5F0] dark:bg-black/40 border border-white/90 dark:border-white/10 shadow-inner cursor-pointer group/thumb"
                    >
                      {previewImg ? (
                        <Image
                          src={previewImg}
                          alt={`${cert.name} certificate`}
                          fill
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={BLUR_DATA_URL}
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                          className="object-contain p-1.5 transition-transform duration-500 group-hover/thumb:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#475569]">
                          <Award className="w-10 h-10 opacity-40" />
                        </div>
                      )}

                      {/* Hover Overlay with Preview Badge */}
                      <div className="absolute inset-0 bg-[#07131F]/40 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-darkbg-secondary text-[#00BFE8] text-[11px] font-extrabold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover/thumb:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Certificate</span>
                        </span>
                      </div>

                      {/* Verified Ribbon / Score Pin */}
                      <div className="absolute top-2 right-2 flex items-center gap-1">
                        {cert.score ? (
                          <span className="text-[10px] font-black text-[#10AB7C] bg-white/95 dark:bg-[#161B26]/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm border border-[#10AB7C]/30">
                            {cert.score.split(" ")[0]}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-[#00BFE8] bg-white/95 dark:bg-[#161B26]/95 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm border border-[#00BFE8]/30 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#10AB7C]" /> Verified
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Top Info Bar */}
                    <div className="flex items-center justify-between gap-2 mb-2 w-full">
                      <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
                        <div className="w-7 h-7 rounded-lg bg-[#D1FAE5] dark:bg-[#10AB7C]/20 text-[#10AB7C] flex items-center justify-center font-bold shadow-inner border border-[#10AB7C]/20 shrink-0">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-[#00BFE8] truncate block" title={cert.issuer}>
                          {cert.issuer}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-[#2A354F] dark:text-white bg-[#E6ECF5] dark:bg-darkbg-tertiary shadow-[-2px_-2px_5px_rgba(255,255,255,0.95),2px_2px_5px_rgba(166,180,200,0.40)] px-2 py-0.5 rounded-full border border-white/80 dark:border-white/10 shrink-0">
                        {cert.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#2A354F] dark:text-white mb-2 leading-snug line-clamp-2 group-hover:text-[#00BFE8] transition-colors">
                      {cert.name}
                    </h3>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] font-semibold text-[#475569] dark:text-slate-300 bg-[#E6ECF5] dark:bg-darkbg-tertiary px-1.5 py-0.5 rounded-md border border-white/60 dark:border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Card Footer: Action Button & Credential ID */}
                  <div>
                    <div className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[10px] text-[#475569] dark:text-slate-400 font-medium mb-2.5">
                      {cert.credentialId ? (
                        <span className="font-mono text-[10px] text-[#475569] dark:text-slate-400 truncate max-w-[140px]">
                          ID: {cert.credentialId}
                        </span>
                      ) : cert.score ? (
                        <span className="text-[10px] font-bold text-[#10AB7C]">
                          {cert.score}
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#10AB7C] flex items-center gap-1 font-semibold">
                          <Check className="w-3 h-3" /> Official Credential
                        </span>
                      )}
                      <span className="text-[9px] font-bold text-[#475569] dark:text-slate-400 uppercase tracking-wider">
                        {cert.category.split(" ")[0]}
                      </span>
                    </div>

                    {/* View Certificate Action Button */}
                    <button
                      onClick={() =>
                        setModalItem({
                          title: cert.name,
                          issuer: cert.issuer,
                          previewImage: previewImg,
                          fileUrl: cert.fileUrl,
                          verifyUrl: cert.verifyUrl,
                          year: cert.year,
                          credentialId: cert.credentialId,
                          score: cert.score,
                          category: cert.category,
                          skills: cert.skills,
                        })
                      }
                      className="w-full py-2 px-3 rounded-xl bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#00BFE8] hover:text-white hover:bg-[#00BFE8] text-xs font-bold flex items-center justify-center gap-1.5 shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.95),2px_3px_8px_rgba(0,191,232,0.40)] border border-white/80 dark:border-white/10 transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </LightGlassCard>
              );
            })}
          </div>
        </div>

        {/* ─── TECHNICAL WORKSHOPS & SPECIALIZED PROGRAMS ─────────────────── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-[#CCEFF9] text-[#00BFE8] flex items-center justify-center font-bold shadow-inner">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#202225] dark:text-white">
                Technical Workshops & Specialized Programs
              </h3>
              <p className="text-xs text-[#475569] dark:text-slate-400 mt-0.5">
                Hands-on technical workshops, national quizzes, and leadership initiatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {workshops.map((ws) => {
              const previewImg = ws.previewImage || ws.fileUrl || "";
              return (
                <LightGlassCard
                  key={ws.name}
                  variant="elevated"
                  className="p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div>
                    {/* Visual Certificate Preview for Workshop */}
                    {previewImg && (
                      <div
                        onClick={() =>
                          setModalItem({
                            title: ws.name,
                            issuer: ws.organizer,
                            previewImage: previewImg,
                            fileUrl: ws.fileUrl,
                            year: ws.year,
                            type: ws.type,
                          })
                        }
                        className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden mb-4 bg-[#DEE5F0] dark:bg-black/40 border border-white/90 dark:border-white/10 shadow-inner cursor-pointer group/thumb"
                      >
                        <Image
                          src={previewImg}
                          alt={`${ws.name} workshop certificate`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain p-1.5 transition-transform duration-500 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#07131F]/40 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-darkbg-secondary text-[#00BFE8] text-xs font-extrabold shadow-lg flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#00BFE8] bg-[#CCEFF9] dark:bg-[#00BFE8]/15 border border-[#00BFE8]/30 px-2.5 py-0.5 rounded-full shrink-0">
                        {ws.badge}
                      </span>
                      <span className="text-[11px] font-bold text-[#475569] dark:text-slate-400">
                        {ws.year}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-extrabold text-[#202225] dark:text-white mb-1.5 leading-snug line-clamp-2 group-hover:text-[#00BFE8] transition-colors">
                      {ws.name}
                    </h4>
                    <p className="text-xs font-bold text-[#00BFE8] mb-2.5">
                      {ws.organizer}
                    </p>
                    <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed mb-4">
                      {ws.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#475569] dark:text-slate-400">
                      {ws.type}
                    </span>
                    <button
                      onClick={() =>
                        setModalItem({
                          title: ws.name,
                          issuer: ws.organizer,
                          previewImage: previewImg,
                          fileUrl: ws.fileUrl,
                          year: ws.year,
                          type: ws.type,
                        })
                      }
                      className="text-xs font-bold text-[#00BFE8] hover:text-[#009bbd] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>View Certificate</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </LightGlassCard>
              );
            })}
          </div>
        </div>

        {/* ─── VERIFIED INDUSTRY INTERNSHIP CREDENTIALS ───────────────────── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-[#D1FAE5] text-[#10AB7C] flex items-center justify-center font-bold shadow-inner">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#202225] dark:text-white">
                Verified Internship & Industry Documents
              </h3>
              <p className="text-xs text-[#475569] dark:text-slate-400 mt-0.5">
                Official offer letters, industrial project reports, and internship completion certificates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {verifiedInternshipCredentials.map((ic) => (
              <LightGlassCard
                key={ic.company + ic.role}
                variant="elevated"
                className="p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-[#10AB7C] bg-[#D1FAE5] dark:bg-[#10AB7C]/20 border border-[#10AB7C]/30 px-2.5 py-0.5 rounded-full">
                      {ic.status}
                    </span>
                    <span className="text-[11px] font-semibold text-[#475569] dark:text-slate-400">
                      {ic.period}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#202225] dark:text-white mb-1 leading-snug">
                    {ic.company}
                  </h4>
                  <p className="text-xs font-bold text-[#00BFE8] mb-2.5">
                    {ic.role}
                  </p>
                  <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed mb-4">
                    {ic.description}
                  </p>
                </div>

                {/* Attached Documents List with Image Preview Triggers */}
                <div className="pt-3 border-t border-black/5 dark:border-white/10 space-y-2">
                  <div className="text-[11px] font-bold text-[#475569] dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#00BFE8]" />
                    <span>Attached Official Documents ({ic.documents.length})</span>
                  </div>
                  {ic.documents.map((doc) => {
                    const previewImg = doc.previewImage || doc.fileUrl || "";
                    return (
                      <button
                        key={doc.title}
                        onClick={() =>
                          setModalItem({
                            title: doc.title,
                            issuer: ic.company,
                            previewImage: previewImg,
                            fileUrl: doc.fileUrl,
                            type: doc.type,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-[#E6ECF5] dark:bg-darkbg-tertiary hover:bg-[#CCEFF9] dark:hover:bg-[#00BFE8]/20 text-[#2A354F] dark:text-slate-200 hover:text-[#00BFE8] text-xs font-semibold flex items-center justify-between transition-colors group/doc shadow-sm border border-white/70 dark:border-white/5 cursor-pointer text-left"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <Eye className="w-3.5 h-3.5 text-[#00BFE8] shrink-0" />
                          <span className="truncate">{doc.title}</span>
                        </div>
                        <span className="text-[10px] text-[#475569] dark:text-slate-400 group-hover/doc:text-[#00BFE8] font-bold shrink-0">
                          View
                        </span>
                      </button>
                    );
                  })}
                </div>
              </LightGlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* ─── INTERACTIVE CERTIFICATE LIGHTBOX / FULL IMAGE MODAL ────────── */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#E6ECF5] dark:bg-darkbg-primary rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/80 dark:border-white/10 flex flex-col justify-between overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3 sm:pb-4 border-b border-black/10 dark:border-white/10 shrink-0">
              <div className="min-w-0 flex-1 pr-2">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#00BFE8] bg-[#CCEFF9] dark:bg-[#00BFE8]/20 px-2.5 py-0.5 rounded-full">
                    {modalItem.issuer}
                  </span>
                  {modalItem.year && (
                    <span className="text-xs font-semibold text-[#475569] dark:text-slate-400">
                      {modalItem.year}
                    </span>
                  )}
                  {modalItem.score && (
                    <span className="text-xs font-extrabold text-[#10AB7C] bg-[#D1FAE5] dark:bg-[#10AB7C]/20 px-2 py-0.5 rounded-md">
                      {modalItem.score}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-[#2A354F] dark:text-white leading-snug line-clamp-2">
                  {modalItem.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setModalItem(null)}
                aria-label="Close certificate modal"
                className="w-9 h-9 rounded-2xl bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#475569] hover:text-[#FF6B6B] flex items-center justify-center shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] hover:shadow-inner border border-white/80 dark:border-white/10 transition-all cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: High-Res Certificate / Document Image Display */}
            <div className="relative my-3 sm:my-4 flex-1 max-h-[58vh] sm:max-h-[64vh] rounded-2xl bg-[#DEE5F0]/90 dark:bg-black/60 border border-white/80 dark:border-white/5 shadow-inner overflow-auto flex items-center justify-center p-2 sm:p-4">
              {modalItem.previewImage ? (
                <div className="relative max-h-full max-w-full flex items-center justify-center">
                  <img
                    src={modalItem.previewImage}
                    alt={`${modalItem.title} certificate document`}
                    className="max-h-[52vh] sm:max-h-[58vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-lg border border-white/40 dark:border-white/10 select-none"
                    loading="eager"
                  />
                </div>
              ) : (
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 text-[#00BFE8] mx-auto mb-3" />
                  <p className="text-sm font-bold text-[#2A354F] dark:text-white">
                    Official Document Attached
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer: Action buttons & Verification */}
            <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-[#475569] dark:text-slate-300 flex flex-wrap items-center gap-2 font-medium">
                {modalItem.credentialId && (
                  <span className="font-mono bg-white/70 dark:bg-darkbg-tertiary px-2.5 py-1 rounded-lg border border-black/5 dark:border-white/5 text-[#2A354F] dark:text-white font-bold">
                    ID: {modalItem.credentialId}
                  </span>
                )}
                {modalItem.skills && (
                  <div className="hidden sm:flex items-center gap-1.5">
                    {modalItem.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[11px] bg-white/70 dark:bg-darkbg-tertiary px-2 py-0.5 rounded-md text-[#475569] dark:text-slate-300 font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Direct High-Res Open in New Tab Button */}
                {modalItem.previewImage && (
                  <a
                    href={modalItem.previewImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#00BFE8] text-white hover:bg-[#00AEDB] text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open High-Res Document</span>
                  </a>
                )}

                {/* Verify Online Button */}
                {modalItem.verifyUrl && (
                  <a
                    href={modalItem.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#2A354F] dark:text-slate-200 hover:text-[#00BFE8] text-xs font-bold flex items-center gap-1.5 shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] border border-white/80 dark:border-white/10 transition-all cursor-pointer"
                  >
                    <Shield className="w-3.5 h-3.5 text-[#10AB7C]" />
                    <span>Verify Online</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

