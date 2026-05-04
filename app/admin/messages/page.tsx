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
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin" className="text-slate-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold">Contact Messages ({messages.length})</h1>
        </div>

        {messages.length === 0 ? (
          <div className="text-center py-20">
            <Mail className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No messages yet, or MongoDB is not configured.</p>
            <p className="text-slate-600 text-sm mt-2">
              Add MONGODB_URI to .env.local to enable message storage.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`bg-slate-900 rounded-xl border px-5 py-4 ${
                  msg.read ? "border-slate-800" : "border-blue-500/40"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {msg.read ? (
                      <MailOpen className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    ) : (
                      <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium">{msg.name}</p>
                      <p className="text-slate-400 text-sm">{msg.email}</p>
                    </div>
                  </div>
                  <span className="text-slate-500 text-xs flex-shrink-0">
                    {new Date(msg.createdAt).toLocaleDateString("en-IN")}
                  </span>
                </div>
                <p className="text-slate-300 text-sm font-medium mt-2">{msg.subject}</p>
                <p className="text-slate-500 text-sm mt-1 line-clamp-2">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
