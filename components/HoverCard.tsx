"use client";
import React, { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
}

export default function HoverCard({
  children,
  className = "bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6",
  gradientFrom,
  gradientTo,
  glowColor,
}: HoverCardProps) {
  return (
    <div
      className="group/card relative rounded-2xl p-[1.5px] transition-all duration-300 w-full h-full shadow-sm hover:-translate-y-2"
      style={{ background: "transparent" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`;
        el.style.boxShadow = `0 8px 32px ${glowColor}, 0 2px 8px rgba(0,0,0,0.06)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "transparent";
        el.style.boxShadow = "none";
      }}
    >
      {/* Fallback border when not hovered */}
      <div className="absolute inset-0 rounded-2xl border border-slate-100 dark:border-white/10 group-hover/card:border-transparent transition-all duration-300 pointer-events-none" />
      
      {/* Card body */}
      <div className={`relative rounded-[14px] h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
