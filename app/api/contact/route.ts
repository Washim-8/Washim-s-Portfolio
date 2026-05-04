// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Try to persist to DB if MongoDB is configured
    const mongoUri = process.env.MONGODB_URI;
    if (mongoUri && !mongoUri.includes("username:password")) {
      try {
        const { default: dbConnect } = await import("@/lib/db");
        const { default: Contact } = await import("@/models/Contact");
        await dbConnect();
        await Contact.create({ name, email, phone, subject, message });
      } catch (dbErr) {
        console.error("DB save failed (non-fatal):", dbErr);
        // Continue — don't fail the request just because DB is unavailable
      }
    }

    // Try sending email notification
    const emailConfigured =
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS &&
      process.env.EMAIL_PASS !== "your_gmail_app_password";

    if (emailConfigured) {
      try {
        await sendContactEmail({ name, email, phone, subject, message });
      } catch (emailErr) {
        console.error("Email send failed (non-fatal):", emailErr);
      }
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
