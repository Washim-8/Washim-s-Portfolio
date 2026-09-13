"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageUtils";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();
  const router = useRouter();

  // Continuous, high-precision active section tracking on scroll
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const checkActiveSection = () => {
      // If at top of the page, immediately highlight 'home'
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      // If scrolled to the bottom of the page, activate 'contact'
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      let currentActive = "home";
      const threshold = 160; // offset below top navbar

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentActive = id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    checkActiveSection();
    window.addEventListener("scroll", checkActiveSection, { passive: true });
    window.addEventListener("resize", checkActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkActiveSection);
      window.removeEventListener("resize", checkActiveSection);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    const sectionId = href.slice(1);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Pill Container */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full light-glass-nav hover:scale-[1.02] transition-transform duration-200 group"
          aria-label="Washim Shaikh Home"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#00BFE8] to-[#1CE0FD] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),2px_2px_5px_rgba(166,180,200,0.35)] shrink-0">
            <Image
              src="/profile.webp"
              alt="Washim Shaikh"
              width={32}
              height={32}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-sm font-extrabold text-[#2A354F] dark:text-white leading-tight">
              Washim Shaikh
            </span>
            <span className="text-[10px] font-semibold text-[#7E8BA0]">
              Software Engineer & AI/ML
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Capsule */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full light-glass-nav shadow-[-4px_-4px_12px_rgba(255,255,255,0.95),4px_6px_16px_rgba(166,180,200,0.45)]">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${isActive
                  ? "bg-[#00BFE8] text-white shadow-[0_2px_10px_rgba(0,191,232,0.40)] scale-[1.02]"
                  : "text-[#5A6A85] dark:text-slate-300 hover:text-[#2A354F] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Utility & Resume Pill */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center light-glass-nav text-[#5F6368] dark:text-slate-300 hover:text-[#00BFE8] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center light-glass-nav text-[#5F6368] dark:text-slate-300 hover:text-[#00BFE8] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Primary Resume Button */}
          <a
            href="/resume/washim-shaikh-resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 rounded-full btn-coral text-xs font-bold"
            aria-label="Download Resume"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center light-glass-nav text-[#202225] dark:text-white"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden pointer-events-auto mt-2 max-w-md mx-auto ${isOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="p-4 rounded-3xl light-glass-nav space-y-1 shadow-2xl">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`block px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${isActive
                  ? "bg-[#00BFE8] text-white shadow-sm"
                  : "text-[#5F6368] dark:text-slate-200 hover:bg-white/60 dark:hover:bg-white/10"
                  }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/70 dark:bg-white/10 text-[#5F6368] dark:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/70 dark:bg-white/10 text-[#5F6368] dark:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
