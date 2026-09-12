"use client";

import React from "react";
import QuickContactTabs from "@/components/QuickContactTabs";
import ContactForm from "@/components/ContactForm";
import LightGlassCard from "@/components/ui/LightGlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    bg: "bg-[#CCEFF9]",
    text: "text-[#00BFE8]",
  },
  {
    icon: Phone,
    title: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    bg: "bg-[#CCEFF9]",
    text: "text-[#07131F] dark:text-[#1CE0FD]",
  },
  {
    icon: MapPin,
    title: "Location",
    value: personal.location,
    href: "https://maps.google.com/?q=Bengaluru,+Karnataka,+India",
    bg: "bg-[#D1FAE5]",
    text: "text-[#10B981]",
  },
];

export default function ContactSection() {
  return (
    <div className="pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          badgeVariant="coral"
          title="Let's Build Something"
          highlightedWord="Intelligent."
          description="Open to software engineering roles, machine learning internships, technical collaborations, and data-driven projects."
        />

        {/* ─── DIRECT CONTACT CARDS ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {contactCards.map((c) => (
            <LightGlassCard key={c.title} variant="default" className="p-5 flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl ${c.bg} ${c.text} flex items-center justify-center shrink-0 shadow-inner`}
              >
                <c.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-[#85898E] uppercase tracking-wider">
                  {c.title}
                </h4>
                <a
                  href={c.href}
                  className="text-xs sm:text-sm font-bold text-[#202225] dark:text-white hover:text-[#00BFE8] transition-colors truncate block mt-0.5"
                >
                  {c.value}
                </a>
              </div>
            </LightGlassCard>
          ))}
        </div>

        {/* ─── QUICK CHANNELS & CONTACT FORM 2-COLUMN ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Quick Contact Tabs */}
          <div className="lg:col-span-6 flex flex-col">
            <LightGlassCard variant="elevated" className="p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl font-extrabold text-[#202225] dark:text-white mb-2">
                Instant Direct Message
              </h3>
              <p className="text-xs text-[#5F6368] dark:text-slate-400 mb-6">
                Select your preferred channel to reach out directly with one click.
              </p>
              <div className="flex-1 flex flex-col">
                <QuickContactTabs />
              </div>
            </LightGlassCard>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6 flex flex-col">
            <LightGlassCard variant="elevated" className="p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl font-extrabold text-[#202225] dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#5F6368] dark:text-slate-400 mb-6">
                Fill out the form below and I will respond directly to your email.
              </p>
              <div className="flex-1 flex flex-col">
                <ContactForm />
              </div>
            </LightGlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
