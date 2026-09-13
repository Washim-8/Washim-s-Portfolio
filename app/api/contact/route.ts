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

    let dbSaved = false;

    // 1. MongoDB persistence with 3-second timeout
    const mongoUri = process.env.MONGODB_URI;
    if (mongoUri && !mongoUri.includes("username:password")) {
      try {
        const { default: dbConnect } = await import("@/lib/db");
        const { default: Contact } = await import("@/models/Contact");
        await Promise.race([
          (async () => {
            await dbConnect();
            await Contact.create({ name, email, phone, subject, message });
            dbSaved = true;
          })(),
          new Promise((_, reject) => setTimeout(() => reject(new Error("DB timeout")), 3000)),
        ]);
      } catch (dbErr) {
        console.warn("[Contact API] DB save non-fatal error:", dbErr);
      }
    }

    // 2. Dispatch Email notification to washimshaikh33@gmail.com
    let emailSent = false;
    let emailErrorMsg = "";

    try {
      await sendContactEmail({ name, email, phone, subject, message });
      emailSent = true;
      console.log(`[Contact API] Notification email dispatched successfully to ${process.env.EMAIL_TO || "washimshaikh33@gmail.com"}`);
    } catch (emailErr: unknown) {
      const err = emailErr as Error;
      emailErrorMsg = err?.message || "Email delivery failed";
      console.error("[Contact API] Email transmission failed:", emailErrorMsg);
    }

    // If email sent successfully, or if message was persisted to DB
    if (emailSent || dbSaved) {
      return NextResponse.json(
        {
          success: true,
          message: emailSent
            ? "Inquiry sent and delivered to inbox!"
            : "Inquiry received and logged to admin dashboard!",
          emailDelivered: emailSent,
          dbSaved,
        },
        { status: 201 }
      );
    }

    // If both failed or email failed with auth error
    let userFriendlyError = "Email delivery failed. Please check EMAIL_PASS or contact directly via email.";
    if (emailErrorMsg.includes("535") || emailErrorMsg.includes("Username and Password not accepted") || emailErrorMsg.includes("EAUTH")) {
      userFriendlyError = "Gmail Authentication Failed: Google requires a 16-character App Password (from myaccount.google.com/apppasswords), not your standard email password.";
    }

    return NextResponse.json(
      {
        error: userFriendlyError,
        details: emailErrorMsg,
      },
      { status: 500 }
    );
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

