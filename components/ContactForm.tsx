"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [serverError, setServerError] = useState<string>("");

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length < 15) errs.message = "Message must be at least 15 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setServerError(data?.error || "Failed to send message. Please email washimshaikh33@gmail.com directly.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please email washimshaikh33@gmail.com directly.");
    }
  };

  const inputStyle = (field: keyof FormErrors) =>
    `w-full h-[46px] px-4 py-3 rounded-2xl bg-[#E6ECF5] dark:bg-[#161B26] text-[#2A354F] dark:text-white placeholder:text-[#7E8BA0] text-xs sm:text-sm shadow-[inset_4px_4px_8px_rgba(166,180,200,0.55),inset_-4px_-4px_8px_rgba(255,255,255,0.90)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.65),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] border ${
      errors[field]
        ? "border-red-400 focus:ring-2 focus:ring-red-400/20"
        : "border-white/40 dark:border-white/5 focus:shadow-[inset_5px_5px_10px_rgba(166,180,200,0.65),inset_-5px_-5px_10px_rgba(255,255,255,0.95)] focus:border-[#00BFE8]/60 focus:ring-2 focus:ring-[#00BFE8]/25"
    } focus:outline-none transition-all`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            Full Name <span className="text-[#00BFE8]">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            placeholder="Washim Shaikh"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputStyle("name")}
            disabled={status === "loading"}
          />
          {errors.name && <p className="mt-1 text-[11px] text-red-500 font-semibold pl-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            Email Address <span className="text-[#00BFE8]">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputStyle("email")}
            disabled={status === "loading"}
          />
          {errors.email && <p className="mt-1 text-[11px] text-red-500 font-semibold pl-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-phone" className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            Phone <span className="text-[#7E8BA0] font-normal">(Optional)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="+91 8884958185"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputStyle("phone")}
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label htmlFor="cf-subject" className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
            Subject <span className="text-[#00BFE8]">*</span>
          </label>
          <input
            id="cf-subject"
            type="text"
            placeholder="Software Engineering Role / Project"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={inputStyle("subject")}
            disabled={status === "loading"}
          />
          {errors.subject && <p className="mt-1 text-[11px] text-red-500 font-semibold pl-1">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-bold text-[#2A354F] dark:text-slate-300 mb-1.5">
          Message <span className="text-[#00BFE8]">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Hi Washim, we loved your portfolio and would like to discuss..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputStyle("message")} !h-[116px] py-3.5 resize-none`}
          disabled={status === "loading"}
        />
        {errors.message && <p className="mt-1 text-[11px] text-red-500 font-semibold pl-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-[48px] px-6 rounded-full btn-coral text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Message Sent Successfully!</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {status === "success" && (
        <div className="p-3 rounded-2xl bg-[#D1FAE5] text-[#065F46] text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
          <span>Thank you! I will get back to you within 24 hours.</span>
        </div>
      )}

      {status === "error" && (
        <div className="p-3.5 rounded-2xl bg-[#FEE2E2] dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-[#991B1B] dark:text-rose-300 text-xs font-semibold space-y-2">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              {serverError || "Email delivery failed. Please contact directly via email."}
            </span>
          </div>
          <div className="pt-1 flex items-center justify-end">
            <a
              href={`mailto:washimshaikh33@gmail.com?subject=${encodeURIComponent(
                form.subject || "Portfolio Contact: " + form.name
              )}&body=${encodeURIComponent(
                `Hi Washim,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}`
              )}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white text-[11px] font-bold shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Send via Email Client (1-Click)</span>
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
