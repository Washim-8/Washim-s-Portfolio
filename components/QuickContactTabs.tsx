"use client";

import { useState } from "react";
import { Mail, Phone, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/lib/data";

export default function QuickContactTabs() {
  const [activeTab, setActiveTab] = useState("email");

  const tabs = [
    {
      id: "email",
      label: "Email",
      icon: Mail,
      message: "Hi Washim, I'd like to discuss a project...",
      actionText: "Open Mail",
      link: "mailto:washimshaikh33@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Washim,%20I'd%20like%20to%20discuss%20a%20project..."
    },
    {
      id: "sms",
      label: "Text Message",
      icon: MessageSquare,
      message: "Hey Washim! I saw your portfolio and wanted to connect.",
      actionText: "Send SMS",
      link: "sms:+918884958185?body=Hey%20Washim!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: Phone,
      message: "Quick chat on WhatsApp?",
      actionText: "Start WhatsApp Chat",
      link: "https://wa.me/918884958185?text=Hi%20Washim,%20I%20saw%20your%20portfolio..."
    },
    {
      id: "linkedin",
      label: "LinkedIn Chat",
      icon: LinkedinIcon,
      message: "Hi Washim, I'd like to connect and chat regarding a project.",
      actionText: "Open LinkedIn",
      link: personal.linkedin
    }
  ];

  const activeContent = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:w-[35%] pb-2 md:pb-0">
        {tabs.map((tab) => (
          <div key={tab.id} className="dark w-full">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-start gap-3 px-5 py-3 btn-gold text-[13px] font-bold transition-all duration-300 ${activeTab === tab.id
                  ? "opacity-100 scale-[1.03] text-primary"
                  : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.02]"
                }`}
            >
              <tab.icon className={`w-5 h-5 shrink-0 ${activeTab === tab.id ? "text-primary" : "text-white"}`} />
              <span className="whitespace-nowrap truncate text-white">{tab.label}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Display Box */}
      <div className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 relative overflow-hidden group">
        {/* Glow effect matching the theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-pink/5 pointer-events-none" />

        <div key={activeTab} className="relative z-10 animate-fade-in-up">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-darktext-primary mb-2">
              Reach out via {activeContent.label}
            </h3>
            <p className="text-slate-500 dark:text-darktext-muted text-sm">
              Send a direct message through your preferred platform.
            </p>
          </div>

          <div className="bg-white dark:bg-darkbg-secondary border border-slate-200 dark:border-white/10 rounded-xl p-4 mb-8 shadow-sm relative">
            <div className="absolute -top-3 left-4 bg-white dark:bg-darkbg-secondary px-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />

            </div>
            <p className="text-slate-700 dark:text-darktext-primary font-medium italic mt-2">
              "{activeContent.message}"
            </p>
          </div>

          <div className="dark w-full">
            <a
              href={activeContent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center w-full gap-2 px-6 py-4 text-[14px] font-bold transition-all duration-300"
            >
              <activeContent.icon className="w-5 h-5" />
              {activeContent.actionText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
