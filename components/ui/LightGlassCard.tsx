"use client";

import React from "react";

interface LightGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "subtle" | "floating";
  specular?: boolean;
}

export default function LightGlassCard({
  children,
  className = "",
  variant = "default",
  specular = true,
  ...props
}: LightGlassCardProps) {
  const variantStyles = {
    default: "bg-[#E6ECF5] dark:bg-slate-900/80 backdrop-blur-xl border border-white/80 dark:border-slate-800/80 shadow-[-8px_-8px_18px_rgba(255,255,255,0.95),8px_8px_18px_rgba(166,180,200,0.55),inset_0_1px_1.5px_rgba(255,255,255,0.90)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]",
    elevated: "bg-[#E6ECF5] dark:bg-slate-900/90 backdrop-blur-2xl border border-white/90 dark:border-slate-800/90 shadow-[-10px_-10px_24px_rgba(255,255,255,1.0),10px_10px_24px_rgba(166,180,200,0.60),inset_0_1.5px_2px_rgba(255,255,255,0.95)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
    subtle: "bg-[#E6ECF5] dark:bg-slate-900/70 backdrop-blur-lg border border-white/70 dark:border-slate-800/70 shadow-[-6px_-6px_14px_rgba(255,255,255,0.90),6px_6px_14px_rgba(166,180,200,0.45),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_2px_15px_rgba(0,0,0,0.3)]",
    floating: "bg-[#E6ECF5] dark:bg-slate-900/95 backdrop-blur-2xl border border-white/95 dark:border-slate-800/90 shadow-[-14px_-14px_34px_rgba(255,255,255,1.0),14px_18px_38px_rgba(166,180,200,0.68),inset_0_2px_2.5px_rgba(255,255,255,0.98)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]",
  };

  return (
    <div
      className={`relative rounded-3xl transition-all duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Specular top-left glass reflection edge */}
      {specular && (
        <div
          className="absolute inset-x-0 top-0 h-[1.5px] rounded-t-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
