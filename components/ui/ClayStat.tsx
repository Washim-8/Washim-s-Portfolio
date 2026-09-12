"use client";

import React from "react";

interface ClayStatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  iconBgColor?: string;
  iconTextColor?: string;
  className?: string;
}

export default function ClayStat({
  icon,
  value,
  label,
  iconBgColor = "bg-[#CCEFF9]",
  iconTextColor = "text-[#00BFE8]",
  className = "",
}: ClayStatProps) {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-[#E6ECF5] dark:bg-darkbg-secondary shadow-[-7px_-7px_18px_rgba(255,255,255,0.98),7px_9px_20px_rgba(166,180,200,0.50),inset_0_1px_1.5px_rgba(255,255,255,0.95)] dark:shadow-none border border-white/85 dark:border-white/10 flex items-center gap-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[-9px_-9px_24px_rgba(255,255,255,1.0),9px_14px_26px_rgba(166,180,200,0.62)] cursor-default ${className}`}
    >
      <div
        className={`w-11 h-11 rounded-xl ${iconBgColor} ${iconTextColor} flex items-center justify-center shrink-0 shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),3px_3px_8px_rgba(166,180,200,0.40),inset_0_1px_1px_rgba(255,255,255,0.85)]`}
      >
        {icon}
      </div>
      <div>
        <div className="text-xl sm:text-2xl font-extrabold text-[#2A354F] dark:text-white tracking-tight leading-none">
          {value}
        </div>
        <div className="text-xs font-semibold text-[#5A6A85] dark:text-slate-300 mt-1">
          {label}
        </div>
      </div>
    </div>
  );
}
