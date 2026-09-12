// app/admin/login/page.tsx — Admin login
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.ok) {
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F1] dark:bg-[#12151A] px-4 light-canvas-mesh">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#181C24] shadow-[-6px_-6px_16px_rgba(255,255,255,0.95),6px_8px_18px_rgba(163,166,160,0.25)] border border-white flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7 text-[#00BFE8]" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#202225] dark:text-white">Admin Authentication</h1>
          <p className="text-[#5F6368] dark:text-slate-400 text-xs font-medium mt-1">Washim Shaikh Portfolio Management Portal</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 dark:bg-[#181C24]/90 backdrop-blur-xl rounded-3xl border border-white dark:border-white/10 p-8 space-y-5 shadow-[-10px_-10px_24px_rgba(255,255,255,0.95),12px_16px_32px_rgba(163,166,160,0.25)]"
        >
          <div>
            <label className="block text-[#202225] dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-2">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#85898E]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl neu-inset text-[#202225] dark:text-white placeholder:text-[#85898E] focus:outline-none focus:ring-2 focus:ring-[#00BFE8]/40 text-xs font-medium"
                placeholder="admin@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[#202225] dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#85898E]" />
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-2xl neu-inset text-[#202225] dark:text-white placeholder:text-[#85898E] focus:outline-none focus:ring-2 focus:ring-[#00BFE8]/40 text-xs font-medium"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#85898E] hover:text-[#202225] dark:hover:text-white"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs font-semibold bg-red-50 dark:bg-red-950/40 px-4 py-2.5 rounded-xl border border-red-200 dark:border-red-900/40">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-coral py-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold cursor-pointer disabled:opacity-60"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Authenticating...</>
            ) : (
              <><ShieldCheck className="w-4 h-4" /> Sign In to Dashboard</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
