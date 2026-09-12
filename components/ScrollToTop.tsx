"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-32 right-6 sm:bottom-36 sm:right-8 z-50 pointer-events-auto">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#5A6A85] dark:text-slate-300 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(166,180,200,0.50)] dark:shadow-none hover:text-[#00BFE8] hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.95),2px_2px_6px_rgba(166,180,200,0.50)] border border-white/80 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
