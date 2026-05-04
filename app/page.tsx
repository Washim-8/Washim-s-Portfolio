// app/page.tsx — Master Single Page Portfolio
import type { Metadata } from "next";
import { Download, Code2, Terminal, Sparkles, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import TypewriterTitle from "@/components/TypewriterTitle";
import { personal, stats } from "@/lib/data";

// Import all sections
import AboutSection from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsSection from "@/components/sections/Projects";
import CertificationsSection from "@/components/sections/Certifications";
import ContactSection from "@/components/sections/Contact";
import TestimonialsSection from "@/components/sections/Testimonials";
import AnimatedSection from "@/components/AnimatedSection";
import ResumeChatbot from "@/components/ResumeChatbot";

export const metadata: Metadata = {
  title: "Washim Shaikh — Software Engineer & AI/ML Developer",
  description:
    "Hi, I'm Washim Shaikh — CSE'26 student at BIT Mangalore building real-world AI & Web solutions. 20+ projects, 6 internships, CGPA 8.01.",
};

const statItems = [
  { value: `${stats.projects}+`, label: "Projects Built", icon: "🚀" },
  { value: `${stats.internships}`, label: "Internships", icon: "💼" },
  { value: `${stats.languages}`, label: "Languages Known", icon: "🌍" },
  { value: stats.cgpa, label: "CGPA (VTU)", icon: "🎓" },
];

const techStack = [
  "Python", "FastAPI", "TensorFlow", "OpenCV", "React",
  "Next.js", "PHP", "MySQL", "Machine Learning",
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-white dark:bg-darkbg-primary"
      >
        {/* Animated Background Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Main gradient glow - Changed to white/neutral */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white rounded-full blur-[140px]" />
          {/* Secondary orbs - Removed gold tint */}
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-slate-100/5 dark:bg-white/5 rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-slate-100/5 dark:bg-white/5 rounded-full blur-[80px] animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

            {/* Left Column - Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-400/40 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6 animate-fade-in w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Opportunities</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              {/* Main Heading with Rainbow Border */}
              <div className="rainbow-border w-fit mb-4 animate-fade-in-up">
                <div className="rainbow-border-inner">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 drop-shadow-sm">
                    Hi, I&apos;m {personal.name}
                  </h1>
                </div>
              </div>

              {/* Role with Typewriter */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-darktext-secondary mb-5 h-10 animate-fade-in-up animate-delay-100">
                <TypewriterTitle words={personal.roles} />
              </div>

              {/* Bio */}
              <p className="text-slate-500 dark:text-darktext-muted text-base sm:text-lg max-w-xl mb-6 leading-relaxed animate-fade-in-up animate-delay-200">
                CSE&apos;26 at{" "}
                <span className="text-primary font-semibold">BIT Mangalore (VTU)</span>.
                Building scalable AI solutions, full-stack applications, and data-driven systems
                that solve real-world problems.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up animate-delay-300">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-darktext-muted border border-slate-200 dark:border-white/10 hover:border-primary/40 hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up animate-delay-300">
                <a
                  href="#projects"
                  className="btn-gold flex items-center gap-2 px-6 py-3 text-sm font-bold group"
                >
                  <Code2 className="w-4 h-4" />
                  View Projects
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="btn-gold flex items-center gap-2 px-6 py-3 text-sm font-bold"
                >
                  <Terminal className="w-4 h-4" />
                  Let&apos;s Talk
                </a>
                <a
                  href="/resume/washim-shaikh-resume.pdf"
                  download
                  className="btn-gold flex items-center gap-2 px-6 py-3 text-sm font-bold"
                  aria-label="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 animate-fade-in-up animate-delay-400">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 btn-gold flex items-center justify-center transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 btn-gold flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="ml-2 text-sm text-slate-400 dark:text-darktext-muted hover:text-primary dark:hover:text-primary-light transition-colors font-mono"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Right Column - Code Editor Terminal */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md animate-fade-in-up animate-delay-200">
                {/* Editor Window */}
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-slate-200 dark:border-white/10 bg-slate-900">
                  {/* Editor Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700/60">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-slate-400 font-mono">washim.profile.ts</span>
                    </div>
                    <div className="w-14" />
                  </div>
                  {/* Editor Content */}
                  <div className="p-5 font-mono text-sm leading-7">
                    <div className="text-slate-400">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">developer</span>{" "}
                      <span className="text-slate-400">= {"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">name</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-green-400">&quot;{personal.name}&quot;</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">role</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-green-400">&quot;Software Engineer&quot;</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">location</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-green-400">&quot;Bengaluru, India&quot;</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">skills</span>
                      <span className="text-slate-400">: [</span>
                      <span className="text-green-400">&quot;Python&quot;</span>
                      <span className="text-slate-500">,</span>{" "}
                      <span className="text-green-400">&quot;AI/ML&quot;</span>
                      <span className="text-slate-500">,</span>{" "}
                      <span className="text-green-400">&quot;Full Stack&quot;</span>
                      <span className="text-slate-400">],</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">internships</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-400">{stats.internships}</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">projects</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-400">{stats.projects}</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">cgpa</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-400">{stats.cgpa}</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-sky-300">available</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-accent-green">true</span>
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="text-slate-400">{"}"}</div>
                    <div className="mt-3 text-slate-600 text-xs">
                      <span className="text-slate-500">// </span>
                      <span className="text-slate-400">Let&apos;s build something amazing!</span>
                    </div>
                    {/* Blinking cursor */}
                    <div className="mt-1 flex items-center">
                      <span className="text-accent-green text-sm">❯</span>
                      <span className="ml-1.5 inline-block w-2 h-4 bg-accent-green animate-pulse rounded-sm opacity-75" />
                    </div>
                  </div>
                </div>

                {/* Floating Stat Cards */}
                <div
                  className="absolute -bottom-5 -left-5 bg-white dark:bg-darkbg-secondary rounded-xl p-3 shadow-xl border border-slate-100 dark:border-white/10 animate-float"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">🚀</div>
                    <div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-none">
                        {stats.projects}+
                      </div>
                      <div className="text-xs text-slate-500 dark:text-darktext-muted">Projects</div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -top-4 -right-4 bg-white dark:bg-darkbg-secondary rounded-xl p-3 shadow-xl border border-slate-100 dark:border-white/10 animate-float"
                  style={{ animationDelay: "0.6s" }}
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center text-xl">⚡</div>
                    <div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-none">
                        {stats.internships}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-darktext-muted">Internships</div>
                    </div>
                  </div>
                </div>

                {/* CGPA card */}
                <div
                  className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white dark:bg-darkbg-secondary rounded-xl p-3 shadow-xl border border-slate-100 dark:border-white/10 animate-float"
                  style={{ animationDelay: "1.2s" }}
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-xl">🎓</div>
                    <div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-none">
                        {stats.cgpa}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-darktext-muted">CGPA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/10">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
              {statItems.map((s) => (
                <div
                  key={s.label}
                  className={`text-center group cursor-default ${s.label === "Languages Known" ? "ml-2 sm:ml-16" : ""}`}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 group-hover:scale-110 transition-transform duration-300 origin-center">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800/70 dark:text-slate-100/70 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60"
          aria-hidden="true"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary/60" />
          </div>
        </div>
      </section>

      {/* ─── FULL SECTIONS ──────────────────────────────────────────────────────── */}
      <AnimatedSection id="about">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection id="experience" delay={0.1}>
        <ExperienceSection />
      </AnimatedSection>

      <AnimatedSection id="projects" delay={0.1}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection id="achievements" delay={0.1}>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection id="certifications" delay={0.1}>
        <CertificationsSection />
      </AnimatedSection>

      <AnimatedSection id="contact" delay={0.1}>
        <ContactSection />
      </AnimatedSection>

      {/* Floating AI Chatbot */}
      <ResumeChatbot />
    </>
  );
}
