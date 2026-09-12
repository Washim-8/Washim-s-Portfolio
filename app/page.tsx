import type { Metadata } from "next";
import HeroSection from "@/components/sections/Hero";

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
  title: "WASHIM SHAIKH",
  description:
    "Portfolio of Washim Shaikh — B.E. CSE student at BIT Mangalore / VTU. 20+ projects, 6 internships, CGPA 8.2. AI/ML, Full-Stack Development, Computer Vision.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#E6ECF5] dark:bg-[#111622] overflow-hidden text-[#2A354F] dark:text-slate-100">
      {/* ─── HERO SECTION (HEADLINE + PROFILE PHOTO SHOWCASE) ──────────────────── */}
      <HeroSection />

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

      <AnimatedSection id="certifications" delay={0.1}>
        <CertificationsSection />
      </AnimatedSection>

      <AnimatedSection id="achievements" delay={0.1}>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection id="contact" delay={0.1}>
        <ContactSection />
      </AnimatedSection>

      {/* Floating AI Chatbot Assistant */}
      <ResumeChatbot />
    </div>
  );
}
