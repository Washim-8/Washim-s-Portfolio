"use client";

import React from "react";
import ClayBadge from "./ClayBadge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "coral" | "cyan" | "emerald" | "amber" | "neutral";
  title: string;
  highlightedWord?: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
}

export default function SectionHeading({
  badge,
  badgeVariant = "coral",
  title,
  highlightedWord,
  description,
  align = "center",
  className = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl lg:max-w-4xl mb-12 ${alignClasses} ${className}`}>
      {badge && (
        <div className="mb-3">
          <ClayBadge variant={badgeVariant} dot>
            {badge}
          </ClayBadge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202225] dark:text-white tracking-tight">
        {title}{" "}
        {highlightedWord && (
          <span className="text-[#00BFE8] dark:text-[#1CE0FD]">{highlightedWord}</span>
        )}
      </h2>
      {description && (
        <p className={`mt-3 text-base sm:text-lg text-[#5F6368] dark:text-slate-300 leading-relaxed max-w-3xl mx-auto ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}
