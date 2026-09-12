// app/admin/projects/page.tsx — Admin project list
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowLeft, Star, ExternalLink, Code2 } from "lucide-react";

export default async function AdminProjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

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
            <h1 className="text-2xl font-extrabold tracking-tight">Projects Repository ({projects.length})</h1>
            <p className="text-xs text-[#5F6368] dark:text-slate-400 font-medium">All active showcase items configured in the portfolio</p>
          </div>
        </div>

        <div className="space-y-3">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="flex items-center gap-4 bg-white dark:bg-[#181C24] rounded-2xl border border-white/80 dark:border-white/10 px-5 py-4 shadow-[-4px_-4px_12px_rgba(255,255,255,0.9),4px_6px_14px_rgba(163,166,160,0.18)]"
            >
              <span className="text-[#85898E] text-xs font-mono font-bold w-6 text-right flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm truncate text-[#202225] dark:text-white">{p.name}</h3>
                  {p.featured && (
                    <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-[#00BFE8]/15 text-[#00BFE8] text-[10px] font-bold flex items-center gap-1 border border-[#00BFE8]/30">
                      <Star className="w-2.5 h-2.5 fill-current" /> Featured
                    </span>
                  )}
                </div>
                <p className="text-[#5F6368] dark:text-slate-400 text-xs mt-0.5 truncate">
                  {p.category} · {p.technologies.join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    p.category === "AI/ML"
                      ? "bg-[#1CE0FD]/15 text-[#07131F] dark:text-[#1CE0FD] border-[#1CE0FD]/40"
                      : p.category === "Web Development"
                      ? "bg-[#00BFE8]/15 text-[#00BFE8] border-[#00BFE8]/40"
                      : "bg-[#2C75AF]/15 text-[#2C75AF] border-[#2C75AF]/40"
                  }`}
                >
                  {p.category}
                </span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-[#5F6368] hover:text-[#00BFE8] bg-[#F7F8F6] dark:bg-[#202632] hover:bg-[#CCEFF9]/50 transition-colors border border-black/5 dark:border-white/5"
                  aria-label={`GitHub for ${p.name}`}
                >
                  <Code2 className="w-4 h-4" />
                </a>
                {p.liveDemo && (
                  <a
                    href={p.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-[#5F6368] hover:text-[#1CE0FD] bg-[#F7F8F6] dark:bg-[#202632] hover:bg-[#A5EBFB]/30 transition-colors border border-black/5 dark:border-white/5"
                    aria-label={`Live Demo for ${p.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#85898E] text-xs text-center mt-8">
          Project records are managed via <code className="text-[#202225] dark:text-slate-300 font-mono">lib/data.ts</code>.
        </p>
      </div>
    </div>
  );
}
