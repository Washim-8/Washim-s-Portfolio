// app/api/contact/route.ts — Contact Form Endpoint dispatching to washimshaikh33@gmail.com
import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Try to persist to DB if MongoDB is configured
    const mongoUri = process.env.MONGODB_URI;
    if (mongoUri && !mongoUri.includes("username:password")) {
      try {
        const { default: dbConnect } = await import("@/lib/db");
        const { default: Contact } = await import("@/models/Contact");
        await dbConnect();
        await Contact.create({ name, email, phone, subject, message });
      } catch (dbErr) {
        console.error("DB save failed (non-fatal):", dbErr);
      }
    }

    // 2. Dispatch Email notification to washimshaikh33@gmail.com
    const emailUser = process.env.EMAIL_USER?.trim() || "washimshaikh33@gmail.com";
    const emailPass = process.env.EMAIL_PASS?.trim();
    const isEmailReady = emailPass && emailPass !== "your_gmail_app_password";

    if (isEmailReady) {
      try {
        await sendContactEmail({ name, email, phone, subject, message });
        console.log(`[Contact API] Notification email dispatched successfully to ${process.env.EMAIL_TO || "washimshaikh33@gmail.com"}`);
      } catch (emailErr) {
        console.error("[Contact API] Email transmission failed:", emailErr);
      }
    } else {
      console.warn(
        `[Contact API] Notice: EMAIL_PASS is not set with a Gmail App Password in .env.local. To receive live emails at ${emailUser}, create a 16-character Google App Password.`
      );
    }

    return NextResponse.json({ success: true, message: "Inquiry received successfully" }, { status: 201 });
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
