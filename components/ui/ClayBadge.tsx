"use client";

import React from "react";

interface ClayBadgeProps {
  children: React.ReactNode;
  variant?: "coral" | "cyan" | "emerald" | "amber" | "neutral";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export default function ClayBadge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  dot = false,
}: ClayBadgeProps) {
  const sizeStyles = {
    sm: "px-2.5 py-1 text-[11px]",
    md: "px-3.5 py-1.5 text-xs",
  };

  const variantStyles = {
    coral: "bg-[#CCEFF9] text-[#0284C7] dark:text-[#1CE0FD] border border-[#00BFE8]/30",
    cyan: "bg-[#CCEFF9] text-[#07131F] dark:text-[#1CE0FD] border border-[#1CE0FD]/30",
    emerald: "bg-[#D1FAE5] text-[#10B981] border border-[#10B981]/20",
    amber: "bg-[#FEF3C7] text-[#D97706] border border-[#F59E0B]/20",
    neutral: "bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#5A6A85] dark:text-slate-300 border border-white/80 dark:border-white/10",
  };

  const dotColors = {
    coral: "bg-[#00BFE8]",
    cyan: "bg-[#1CE0FD]",
    emerald: "bg-[#10AB7C]",
    amber: "bg-[#F5B759]",
    neutral: "bg-[#7E8BA0]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-extrabold shadow-[-3px_-3px_8px_rgba(255,255,255,0.98),3px_4px_10px_rgba(166,180,200,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.95)] dark:shadow-none transition-transform duration-200 hover:-translate-y-0.5 cursor-default ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-2 h-2 rounded-full ${dotColors[variant]} animate-pulse`}
        />
      )}
      {children}
    </span>
  );
}
