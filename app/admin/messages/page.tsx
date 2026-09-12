// app/admin/messages/page.tsx — Admin messages
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";
import { ArrowLeft, Mail, MailOpen } from "lucide-react";

export default async function AdminMessagesPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  let messages: Array<{
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    read: boolean;
    createdAt: Date;
  }> = [];

  try {
    await dbConnect();
    const raw = await Contact.find({}).sort({ createdAt: -1 }).lean();
    messages = raw.map((m) => ({
      _id: String(m._id),
      name: m.name,
      email: m.email,
      subject: m.subject,
      message: m.message,
      read: m.read,
      createdAt: m.createdAt,
    }));
  } catch {
    // DB not configured yet
  }

  return (
    <div className="min-h-screen bg-[#F3F4F1] dark:bg-[#12151A] text-[#202225] dark:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/admin"
            className="w-9 h-9 rounded-full bg-white dark:bg-[#181C24] shadow-sm flex items-center justify-center text-[#5F6368] hover:text-[#00BFE8] transition-colors border border-black/5 dark:border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Contact Messages ({messages.length})</h1>
            <p className="text-xs text-[#5F6368] dark:text-slate-400 font-medium">Inbound recruiter inquiries and messages</p>
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-[#181C24] rounded-3xl border border-white/80 dark:border-white/10 shadow-[-6px_-6px_16px_rgba(255,255,255,0.9),6px_8px_18px_rgba(163,166,160,0.2)] p-8 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#00BFE8]/10 flex items-center justify-center mx-auto mb-4 text-[#00BFE8]">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-sm text-[#202225] dark:text-white mb-1">No Messages Yet</h3>
            <p className="text-[#5F6368] dark:text-slate-400 text-xs">
              When recruiters or visitors submit the contact form, submissions will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`bg-white dark:bg-[#181C24] rounded-2xl border px-5 py-4 shadow-[-4px_-4px_12px_rgba(255,255,255,0.9),4px_6px_14px_rgba(163,166,160,0.18)] ${
                  msg.read ? "border-black/5 dark:border-white/10" : "border-[#1CE0FD]/50 ring-1 ring-[#1CE0FD]/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7F8F6] dark:bg-[#202632] flex items-center justify-center text-[#00BFE8] shrink-0">
                      {msg.read ? (
                        <MailOpen className="w-4 h-4 text-[#85898E]" />
                      ) : (
                        <Mail className="w-4 h-4 text-[#00BFE8]" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#202225] dark:text-white">{msg.name}</p>
                      <p className="text-[#5F6368] dark:text-slate-400 text-xs">{msg.email}</p>
                    </div>
                  </div>
                  <span className="text-[#85898E] text-[11px] font-mono shrink-0">
                    {new Date(msg.createdAt).toLocaleDateString("en-IN")}
                  </span>
                </div>
                <p className="text-[#202225] dark:text-slate-200 text-xs font-bold mt-3">{msg.subject}</p>
                <p className="text-[#5F6368] dark:text-slate-400 text-xs mt-1 leading-relaxed">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
