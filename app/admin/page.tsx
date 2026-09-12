// app/admin/page.tsx — Admin dashboard
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { projects } from "@/lib/data";
import { FolderGit2, MessageSquare, LogOut, LayoutDashboard, Sparkles } from "lucide-react";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#F3F4F1] dark:bg-[#12151A] text-[#202225] dark:text-white pt-0">
      {/* Admin Navbar */}
      <nav className="light-glass-nav px-6 py-4 flex items-center justify-between border-b border-black/5 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#00BFE8]/10 dark:bg-[#00BFE8]/20 flex items-center justify-center text-[#00BFE8]">
            <LayoutDashboard className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm tracking-tight text-[#202225] dark:text-white">Washim Admin Console</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#5F6368] dark:text-slate-400 text-xs font-medium">{session.user?.email}</span>
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 text-red-500 text-xs font-semibold hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1CE0FD]/15 text-[#07131F] dark:text-[#1CE0FD] border border-[#1CE0FD]/30 inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#1CE0FD]" /> Control Panel
          </span>
        </div>
        <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Welcome back, Washim 👋</h1>
        <p className="text-[#5F6368] dark:text-slate-400 mb-10 text-sm">Manage your portfolio content, projects, and contact messages.</p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#FFFFFF] dark:bg-[#181C24] rounded-2xl border border-white/80 dark:border-white/10 p-6 shadow-[-6px_-6px_16px_rgba(255,255,255,0.9),6px_8px_18px_rgba(163,166,160,0.22)]">
            <p className="text-[#5F6368] dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Projects</p>
            <p className="text-4xl font-extrabold mt-2 text-[#00BFE8]">{projects.length}</p>
          </div>
          <div className="bg-[#FFFFFF] dark:bg-[#181C24] rounded-2xl border border-white/80 dark:border-white/10 p-6 shadow-[-6px_-6px_16px_rgba(255,255,255,0.9),6px_8px_18px_rgba(163,166,160,0.22)]">
            <p className="text-[#5F6368] dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Featured Projects</p>
            <p className="text-4xl font-extrabold mt-2 text-[#1CE0FD]">
              {projects.filter((p) => p.featured).length}
            </p>
          </div>
          <div className="bg-[#FFFFFF] dark:bg-[#181C24] rounded-2xl border border-white/80 dark:border-white/10 p-6 shadow-[-6px_-6px_16px_rgba(255,255,255,0.9),6px_8px_18px_rgba(163,166,160,0.22)]">
            <p className="text-[#5F6368] dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Contact Messages</p>
            <p className="text-4xl font-extrabold mt-2 text-[#2C75AF]">—</p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/admin/projects"
            className="bg-[#FFFFFF] dark:bg-[#181C24] rounded-2xl border border-white/80 dark:border-white/10 p-6 shadow-[-6px_-6px_16px_rgba(255,255,255,0.9),6px_8px_18px_rgba(163,166,160,0.22)] hover:border-[#00BFE8]/50 transition-all duration-200 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#00BFE8]/10 flex items-center justify-center mb-4 group-hover:bg-[#00BFE8]/20 transition-colors">
              <FolderGit2 className="w-6 h-6 text-[#00BFE8]" />
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-[#00BFE8] transition-colors">Manage Projects</h3>
            <p className="text-[#5F6368] dark:text-slate-400 text-sm">View and manage portfolio projects, technologies, and repositories.</p>
          </Link>
          <Link
            href="/admin/messages"
            className="bg-[#FFFFFF] dark:bg-[#181C24] rounded-2xl border border-white/80 dark:border-white/10 p-6 shadow-[-6px_-6px_16px_rgba(255,255,255,0.9),6px_8px_18px_rgba(163,166,160,0.22)] hover:border-[#1CE0FD]/50 transition-all duration-200 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1CE0FD]/10 flex items-center justify-center mb-4 group-hover:bg-[#1CE0FD]/20 transition-colors">
              <MessageSquare className="w-6 h-6 text-[#1CE0FD]" />
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-[#1CE0FD] transition-colors">Contact Messages</h3>
            <p className="text-[#5F6368] dark:text-slate-400 text-sm">View and manage inbound contact form submissions.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
