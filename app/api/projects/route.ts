// app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ projects });
}

export async function POST(req: NextRequest) {
  // Admin-only project creation (future: use DB)
  const adminKey = req.headers.get("x-admin-key");
  if (adminKey !== process.env.NEXTAUTH_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  return NextResponse.json({ success: true, project: body }, { status: 201 });
}
