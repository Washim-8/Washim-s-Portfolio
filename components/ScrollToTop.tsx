"use client";
// components/ScrollToTop.tsx — Floating scroll-to-top button
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
    <div className="dark fixed bottom-24 right-6 z-40">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-11 h-11 btn-gold flex items-center justify-center group transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
