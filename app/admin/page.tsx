// app/admin/page.tsx — Admin dashboard
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { projects } from "@/lib/data";
import { FolderGit2, MessageSquare, LogOut, LayoutDashboard } from "lucide-react";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-0">
      {/* Admin Navbar */}
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LayoutDashboard className="w-5 h-5 text-blue-400" />
          <span className="font-semibold">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-sm">{session.user?.email}</span>
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-sm hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Washim 👋</h1>
        <p className="text-slate-400 mb-10">Manage your portfolio content and messages.</p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400 text-sm">Total Projects</p>
            <p className="text-4xl font-bold mt-1 gradient-text">{projects.length}</p>
          </div>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400 text-sm">Featured Projects</p>
            <p className="text-4xl font-bold mt-1 gradient-text">
              {projects.filter((p) => p.featured).length}
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400 text-sm">Contact Messages</p>
            <p className="text-4xl font-bold mt-1 gradient-text">—</p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/admin/projects"
            className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-blue-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <FolderGit2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Manage Projects</h3>
            <p className="text-slate-400 text-sm">View, add, edit, and delete projects.</p>
          </Link>
          <Link
            href="/admin/messages"
            className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-violet-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
              <MessageSquare className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Contact Messages</h3>
            <p className="text-slate-400 text-sm">View and manage contact form submissions.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
