"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const doc = document.documentElement;
      const progress = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section detection
  const updateActiveSection = useCallback((id: string) => {
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            updateActiveSection(id);
          }
        },
        { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [updateActiveSection]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.slice(1));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 dark:bg-darkbg-primary/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-white/10"
          : "bg-transparent"
        }`}
    >
      {/* Scroll progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent-violet to-accent-pink transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-2 font-bold text-slate-900 hover:text-primary transition-colors dark:text-darktext-primary"
        >
          <div className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden bg-white shadow-sm">
            <img
              src="/logo.png"
              alt="WS Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg font-bold text-premium-charcoal drop-shadow-sm pb-0.5">
            Washim Shaikh
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                      ? "text-primary dark:text-primary-light bg-white dark:bg-darkbg-secondary shadow-sm border border-slate-100 dark:border-white/10"
                      : "text-slate-600 dark:text-darktext-secondary hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-darktext-primary"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary dark:bg-primary-light" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 btn-gold flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 btn-gold flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="ml-2 px-6 py-2.5 text-[13px] font-bold btn-gold flex items-center justify-center"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-darktext-secondary hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white/95 dark:bg-darkbg-primary/95 backdrop-blur-md border-b border-slate-100 dark:border-white/10`}
      >
        <div className="px-4 pt-4 pb-2 border-b border-slate-100 dark:border-white/10 mb-2 flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden bg-white shadow-sm">
            <img
              src="/logo.png"
              alt="WS Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-bold text-premium-charcoal dark:text-darktext-primary">
            Washim Shaikh
          </span>
        </div>
        <div className="px-4 pb-4 space-y-1">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                    ? "bg-white dark:bg-darkbg-secondary shadow-sm border border-slate-100 dark:border-white/10 text-primary dark:text-primary-light"
                    : "text-slate-600 dark:text-darktext-secondary hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-darktext-primary"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 pb-2 flex items-center gap-3 border-t border-slate-100 dark:border-white/10 mt-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2 px-4 py-2 text-[12px] font-bold"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2 px-4 py-2 text-[12px] font-bold"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
