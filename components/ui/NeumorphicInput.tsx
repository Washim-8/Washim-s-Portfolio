"use client";

import React, { forwardRef } from "react";

interface NeumorphicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const NeumorphicInput = forwardRef<HTMLInputElement, NeumorphicInputProps>(
  ({ icon, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full relative">
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-4 text-[#85898E] pointer-events-none flex items-center">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full py-3 ${
              icon ? "pl-11 pr-4" : "px-4"
            } rounded-2xl bg-[#E6ECF5] dark:bg-[#161B26] text-[#2A354F] dark:text-white placeholder:text-[#7E8BA0] text-sm shadow-[inset_4px_4px_8px_rgba(166,180,200,0.55),inset_-4px_-4px_8px_rgba(255,255,255,0.90)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.65),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] border border-white/40 dark:border-white/5 focus:outline-none focus:shadow-[inset_5px_5px_10px_rgba(166,180,200,0.65),inset_-5px_-5px_10px_rgba(255,255,255,0.95)] focus:border-[#00BFE8]/60 focus:ring-2 focus:ring-[#00BFE8]/25 transition-all ${
              error ? "border-red-400 focus:ring-red-400/20" : ""
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-xs text-red-500 font-medium pl-2">{error}</p>}
      </div>
    );
  }
);

NeumorphicInput.displayName = "NeumorphicInput";
export default NeumorphicInput;
