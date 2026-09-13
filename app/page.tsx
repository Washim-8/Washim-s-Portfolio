import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/Hero";
import AnimatedSection from "@/components/AnimatedSection";

// ── Dynamic (lazy) imports for below-fold sections ──────────────────────────
// Each section loads only when user is about to see it, slashing initial JS.
const AboutSection = dynamic(() => import("@/components/sections/About"));
const ExperienceSection = dynamic(
  () => import("@/components/sections/Experience")
);
const ProjectsSection = dynamic(
  () => import("@/components/sections/Projects")
);
const CertificationsSection = dynamic(
  () => import("@/components/sections/Certifications")
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/Testimonials")
);
const ContactSection = dynamic(
  () => import("@/components/sections/Contact")
);
const ResumeChatbot = dynamic(() => import("@/components/ResumeChatbot"));


export const metadata: Metadata = {
  title: "WASHIM SHAIKH",
  description:
    "Portfolio of Washim Shaikh — B.E. CSE student at BIT Mangalore / VTU. 20+ projects, 6 internships, CGPA 8.2. AI/ML, Full-Stack Development, Computer Vision.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#E6ECF5] dark:bg-[#111622] overflow-hidden text-[#2A354F] dark:text-slate-100">
      {/* ─── HERO: Loaded immediately, above the fold ─────────────────────── */}
      <HeroSection />

      {/* ─── BELOW FOLD: All lazy-loaded to reduce initial bundle ─────────── */}
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

      {/* Floating AI Chatbot — defer until after page paint */}
      <ResumeChatbot />
    </div>
  );
}

