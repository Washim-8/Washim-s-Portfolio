"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

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

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length < 20) errs.message = "Message must be at least 20 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Shared input class with full dark mode support
  const inputCls = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-slate-900 dark:text-darktext-primary placeholder:text-slate-400 dark:placeholder:text-darktext-muted focus:outline-none focus:ring-2 transition-all bg-white dark:bg-darkbg-tertiary ${
      errors[field]
        ? "border-red-300 dark:border-red-500/50 focus:ring-red-200 dark:focus:ring-red-500/20 bg-red-50 dark:bg-red-500/5"
        : "border-slate-200 dark:border-white/10 focus:ring-primary/20 dark:focus:ring-primary/20 focus:border-primary dark:focus:border-primary hover:border-slate-300 dark:hover:border-white/20"
    }`;

  const baseInputCls = "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-darktext-primary placeholder:text-slate-400 dark:placeholder:text-darktext-muted focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20 focus:border-primary dark:focus:border-primary bg-white dark:bg-darkbg-tertiary hover:border-slate-300 dark:hover:border-white/20 transition-all";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-slate-700 dark:text-darktext-secondary mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls("name")}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            aria-invalid={!!errors.name}
            disabled={status === "loading"}
          />
          {errors.name && <p id="cf-name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 dark:text-darktext-secondary mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls("email")}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            aria-invalid={!!errors.email}
            disabled={status === "loading"}
          />
          {errors.email && <p id="cf-email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-medium text-slate-700 dark:text-darktext-secondary mb-1.5">
            Phone <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={baseInputCls}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="cf-subject" className="block text-sm font-medium text-slate-700 dark:text-darktext-secondary mb-1.5">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            id="cf-subject"
            type="text"
            placeholder="What is this about?"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={inputCls("subject")}
            aria-describedby={errors.subject ? "cf-subject-error" : undefined}
            aria-invalid={!!errors.subject}
            disabled={status === "loading"}
          />
          {errors.subject && <p id="cf-subject-error" className="mt-1 text-xs text-red-500">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-slate-700 dark:text-darktext-secondary mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder="Write your message here..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputCls("message")} resize-none`}
          aria-describedby={errors.message ? "cf-message-error" : "cf-message-hint"}
          aria-invalid={!!errors.message}
          disabled={status === "loading"}
        />
        {errors.message && <p id="cf-message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>}
        <p id="cf-message-hint" className="mt-1 text-xs text-slate-400">{form.message.length} characters</p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-premium text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle className="w-4 h-4" /> Message Sent!
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-accent-green/10 border border-emerald-200 dark:border-accent-green/30 text-emerald-700 dark:text-accent-green">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-sm">Message sent successfully!</p>
            <p className="text-xs mt-0.5 text-emerald-600 dark:text-accent-green/80">
              I&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-sm">Failed to send message</p>
            <p className="text-xs mt-0.5 text-red-600 dark:text-red-400/80">
              Please try again or email me directly at washimshaikh33@gmail.com
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
