// app/contact/page.tsx — Contact page

import SectionWrapper from "@/components/SectionWrapper";
import QuickContactTabs from "@/components/QuickContactTabs";
import HoverCard from "@/components/HoverCard";
import { personal } from "@/lib/data";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";



const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    theme: { from: "#10B981", to: "#14B8A6", glow: "rgba(16,185,129,0.15)", text: "text-emerald-600 dark:text-emerald-400", bg: "from-emerald-500 to-teal-500" },
    external: false,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    theme: { from: "#10B981", to: "#14B8A6", glow: "rgba(16,185,129,0.15)", text: "text-emerald-600 dark:text-emerald-400", bg: "from-emerald-500 to-teal-500" },
    external: false,
  },
  {
    Icon: MapPin,
    label: "Location",
    value: personal.location,
    href: "https://maps.google.com/?q=Bengaluru,+Karnataka,+India",
    theme: { from: "#10B981", to: "#14B8A6", glow: "rgba(16,185,129,0.15)", text: "text-emerald-600 dark:text-emerald-400", bg: "from-emerald-500 to-teal-500" },
    external: true,
  },
];

export default function ContactSection() {
  return (
    <div>
      {/* Header */}
      <SectionWrapper className="py-16 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 dark:from-darkbg-primary dark:via-darkbg-secondary dark:to-darkbg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Let&apos;s Connect
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-darktext-primary mt-2 mb-4">
            Contact Me
          </h1>
          <p className="text-slate-500 dark:text-darktext-muted text-lg max-w-xl mx-auto">
            I&apos;m currently open to new opportunities, collaborations, and interesting projects.
          </p>
        </div>
      </SectionWrapper>

      {/* Main */}
      <SectionWrapper className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-darktext-primary mb-6">Contact Information</h2>

              {/* Basic contact cards */}
              {contactInfo.map((info) => (
                <HoverCard
                  key={info.label}
                  className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6 flex items-start gap-4"
                  gradientFrom={info.theme.from}
                  gradientTo={info.theme.to}
                  glowColor={info.theme.glow}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${info.theme.bg} text-white shadow-sm`}>
                    <info.Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-darktext-primary mb-1">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-slate-600 dark:text-darktext-muted hover:${info.theme.text.split(' ')[0]} dark:hover:${info.theme.text.split(' ')[1]} transition-colors`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-darktext-muted">{info.value}</p>
                    )}
                  </div>
                </HoverCard>
              ))}

              {/* Socials */}
              <div className="block group">
                <HoverCard
                  className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-primary/20 dark:to-accent-violet/20 dark:backdrop-blur-xl p-8 text-white relative overflow-hidden"
                  gradientFrom="#D4AF37"
                  gradientTo="#0EA5E9"
                  glowColor="rgba(212,175,55,0.25)"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 dark:text-darktext-primary">Connect online</h3>
                    <p className="text-slate-300 dark:text-darktext-muted mb-6">
                      Find me on these platforms to see my latest work or have a chat.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {/* GitHub */}
                      <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 btn-gold flex items-center justify-center transition-all duration-300"
                        aria-label="GitHub"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/washim-shaikh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 btn-gold flex items-center justify-center transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>

                      {/* Email */}
                      <a
                        href="mailto:washimshaikh33@gmail.com?subject=Portfolio%20Inquiry"
                        className="w-12 h-12 btn-gold flex items-center justify-center transition-all duration-300"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/918884958185?text=Hi%20Washim,%20I%20saw%20your%20portfolio..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 btn-gold flex items-center justify-center transition-all duration-300"
                        aria-label="WhatsApp"
                      >
                        <Phone className="w-5 h-5" />
                      </a>

                      {/* SMS */}
                      <a
                        href="sms:+918884958185?body=Hi%20Washim,%20I'd%20like%20to%20connect."
                        className="w-12 h-12 btn-gold flex items-center justify-center transition-all duration-300"
                        aria-label="SMS"
                      >
                        <MessageSquare className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </HoverCard>
              </div>
            </div>

            {/* Tabs */}
            <div className="lg:col-span-3 h-full">
              <HoverCard
                className="bg-white dark:bg-darkbg-secondary dark:backdrop-blur-md p-6 sm:p-8 flex flex-col justify-center h-full"
                gradientFrom="#D4AF37" // Refreshed to Gold
                gradientTo="#0EA5E9"   // Refreshed to Sky Blue
                glowColor="rgba(212,175,55,0.25)"
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-darktext-primary mb-6">Quick Contact</h2>
                <QuickContactTabs />
              </HoverCard>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
