// app/admin/projects/page.tsx — Admin project list
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowLeft, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default async function AdminProjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin" className="text-slate-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold">Projects ({projects.length})</h1>
        </div>

        <div className="space-y-3">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="flex items-center gap-4 bg-slate-900 rounded-xl border border-slate-800 px-5 py-4"
            >
              <span className="text-slate-600 text-sm w-6 text-right flex-shrink-0">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium truncate">{p.name}</h3>
                  {p.featured && (
                    <span className="flex-shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-xs">
                  {p.category} · {p.technologies.join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    p.category === "AI/ML"
                      ? "bg-violet-900/60 text-violet-300"
                      : p.category === "Web Development"
                      ? "bg-blue-900/60 text-blue-300"
                      : "bg-emerald-900/60 text-emerald-300"
                  }`}
                >
                  {p.category}
                </span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label={`GitHub for ${p.name}`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-600 text-sm text-center mt-8">
          Projects are managed via <code className="text-slate-400">lib/data.ts</code>. Future update: MongoDB CRUD.
        </p>
      </div>
    </div>
  );
}
