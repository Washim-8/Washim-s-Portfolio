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
      buttonText: "Email App",
      labelText: "Email",
      message: "Hi Washim, I'd like to discuss a project or opportunity...",
      actionText: "Open Mail App",
      link: "mailto:washimshaikh33@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Washim,%20I'd%20like%20to%20discuss%20a%20project...",
    },
    {
      id: "sms",
      label: "Text Message",
      icon: MessageSquare,
      buttonText: "Direct SMS",
      labelText: "Text Message",
      message: "Hey Washim! I saw your portfolio and wanted to connect.",
      actionText: "Send SMS",
      link: "sms:+918884958185?body=Hey%20Washim!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: Phone,
      buttonText: "WhatsApp Chat",
      labelText: "WhatsApp",
      message: "Hi Washim, let's connect on WhatsApp.",
      actionText: "Open WhatsApp Chat",
      link: "https://wa.me/918884958185?text=Hi%20Washim,%20I%20saw%20your%20portfolio...",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: LinkedinIcon,
      buttonText: "LinkedIn Profile",
      labelText: "LinkedIn",
      message: "Hi Washim, let's connect on LinkedIn regarding software engineering roles.",
      actionText: "View LinkedIn Profile",
      link: personal.linkedin,
    },
  ];

  const activeContent = tabs.find((t) => t.id === activeTab) || tabs[0];

  const buttonStyle = (isActive: boolean) =>
    `w-full h-[46px] flex items-center justify-start gap-2.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-[#00BFE8] text-white shadow-[-3px_-3px_8px_rgba(255,255,255,0.85),3px_5px_14px_rgba(0,191,232,0.45)] scale-[1.02]"
        : "bg-[#E6ECF5] dark:bg-darkbg-secondary text-[#5A6A85] dark:text-slate-300 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(166,180,200,0.50)] dark:shadow-none border border-white/80 dark:border-white/10 hover:text-[#2A354F]"
    }`;

  return (
    <div className="space-y-4">
      {/* Row 1: Email & SMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            Email <span className="text-[#00BFE8]">*</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveTab("email")}
            className={buttonStyle(activeTab === "email")}
          >
            <Mail className={`w-4 h-4 shrink-0 ${activeTab === "email" ? "text-white" : "text-[#00BFE8]"}`} />
            <span className="truncate">Email App</span>
          </button>
        </div>

        <div>
          <div className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            Text Message <span className="text-[#00BFE8]">*</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveTab("sms")}
            className={buttonStyle(activeTab === "sms")}
          >
            <MessageSquare className={`w-4 h-4 shrink-0 ${activeTab === "sms" ? "text-white" : "text-[#00BFE8]"}`} />
            <span className="truncate">Direct SMS</span>
          </button>
        </div>
      </div>

      {/* Row 2: WhatsApp & LinkedIn */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            WhatsApp <span className="text-[#7E8BA0] font-normal">(Instant)</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={buttonStyle(activeTab === "whatsapp")}
          >
            <Phone className={`w-4 h-4 shrink-0 ${activeTab === "whatsapp" ? "text-white" : "text-[#00BFE8]"}`} />
            <span className="truncate">WhatsApp Chat</span>
          </button>
        </div>

        <div>
          <div className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            LinkedIn <span className="text-[#00BFE8]">*</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveTab("linkedin")}
            className={buttonStyle(activeTab === "linkedin")}
          >
            <LinkedinIcon className={`w-4 h-4 shrink-0 ${activeTab === "linkedin" ? "text-white" : "text-[#00BFE8]"}`} />
            <span className="truncate">LinkedIn Profile</span>
          </button>
        </div>
      </div>

      {/* Row 3: Prepared Message Box */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-bold text-[#2A354F] dark:text-slate-300">
            Prepared Message <span className="text-[#00BFE8]">*</span>
          </span>
          <span className="text-[11px] font-bold text-[#00BFE8] bg-[#00BFE8]/10 px-2.5 py-0.5 rounded-full">
            Channel: {activeContent.label}
          </span>
        </div>

        <div className="h-[116px] p-4 sm:p-5 rounded-2xl bg-[#E6ECF5] dark:bg-[#161B26] border border-white/40 dark:border-white/5 shadow-[inset_4px_4px_8px_rgba(166,180,200,0.55),inset_-4px_-4px_8px_rgba(255,255,255,0.90)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.65),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] flex flex-col justify-center">
          <div className="flex items-center gap-1.5 text-xs text-[#10AB7C] font-bold mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Pre-composed Note</span>
          </div>
          <p className="text-xs sm:text-sm text-[#2A354F] dark:text-slate-200 italic font-medium leading-relaxed line-clamp-3">
            &ldquo;{activeContent.message}&rdquo;
          </p>
        </div>
      </div>

      {/* Row 4: Action Button */}
      <a
        href={activeContent.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[48px] px-6 rounded-full btn-coral text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:scale-[1.01]"
      >
        <span>{activeContent.actionText}</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
