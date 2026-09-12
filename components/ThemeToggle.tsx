"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  return () => {
    callback();
  };
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full opacity-0" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full flex items-center justify-center light-glass-nav text-[#5A6A85] dark:text-slate-300 hover:text-[#00BFE8] dark:hover:text-cyan-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group select-none"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 dark:text-cyan-300 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#5A6A85] dark:text-slate-300 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
