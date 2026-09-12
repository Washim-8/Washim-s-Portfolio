"use client";

import React from "react";

interface NeumorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "coral" | "white" | "inset" | "icon";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export default function NeumorphicButton({
  variant = "white",
  size = "md",
  children,
  className = "",
  ...props
}: NeumorphicButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-full gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-full gap-2",
    lg: "px-7 py-3.5 text-base rounded-full gap-2.5",
  };

  const variantStyles = {
    coral:
      "bg-gradient-to-br from-[#00C8F8] to-[#00AEDB] hover:from-[#1CE0FD] hover:to-[#00BCE8] text-white font-bold shadow-[-4px_-4px_10px_rgba(255,255,255,0.85),4px_6px_16px_rgba(0,191,232,0.45),inset_0_1px_1px_rgba(255,255,255,0.6)] border border-white/35 active:translate-y-[1px] active:shadow-[inset_3px_3px_6px_rgba(0,130,160,0.60),inset_-3px_-3px_6px_rgba(255,255,255,0.35)]",
    white:
      "bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#2A354F] dark:text-white font-bold shadow-[-5px_-5px_12px_rgba(255,255,255,0.95),5px_5px_12px_rgba(166,180,200,0.52)] border border-white/85 dark:border-white/10 hover:text-[#00BFE8] hover:-translate-y-0.5 hover:shadow-[-7px_-7px_16px_rgba(255,255,255,1.0),7px_7px_16px_rgba(166,180,200,0.62)] active:translate-y-[1px] active:shadow-[inset_3px_3px_6px_rgba(166,180,200,0.60),inset_-3px_-3px_6px_rgba(255,255,255,0.90)]",
    inset:
      "bg-[#E6ECF5] dark:bg-darkbg-tertiary text-[#2A354F] dark:text-white shadow-[inset_4px_4px_8px_rgba(166,180,200,0.55),inset_-4px_-4px_8px_rgba(255,255,255,0.90)] border border-white/50 dark:border-white/5",
    icon:
      "w-10 h-10 p-0 rounded-full flex items-center justify-center bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#5A6A85] dark:text-slate-300 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(166,180,200,0.50)] border border-white/85 dark:border-white/10 hover:text-[#00BFE8] hover:shadow-[-6px_-6px_14px_rgba(255,255,255,1.0),6px_6px_14px_rgba(166,180,200,0.60)] hover:scale-105 active:scale-95 active:shadow-[inset_2px_2px_5px_rgba(166,180,200,0.60),inset_-2px_-2px_5px_rgba(255,255,255,0.90)]",
  };

  return (
    <button
      className={`inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
        variant === "icon" ? variantStyles.icon : `${sizeStyles[size]} ${variantStyles[variant]}`
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
