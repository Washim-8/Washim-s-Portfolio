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

    // 1. Non-blocking MongoDB persistence with timeout (won't hang email if DB is unreachable)
    const mongoUri = process.env.MONGODB_URI;
    if (mongoUri && !mongoUri.includes("username:password")) {
      const dbSavePromise = (async () => {
        try {
          const { default: dbConnect } = await import("@/lib/db");
          const { default: Contact } = await import("@/models/Contact");
          await dbConnect();
          await Contact.create({ name, email, phone, subject, message });
        } catch (dbErr) {
          console.warn("[Contact API] DB save failed (non-fatal):", dbErr);
        }
      })();

      // Set a 3-second maximum wait for DB to prevent hanging the HTTP response
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 3000));
      Promise.race([dbSavePromise, timeoutPromise]).catch(() => {});
    }

    // 2. Dispatch Email notification to washimshaikh33@gmail.com
    const emailUser = process.env.EMAIL_USER?.trim() || "washimshaikh33@gmail.com";
    const rawPass = process.env.EMAIL_PASS?.replace(/[\s"']/g, "").trim();
    const isEmailReady = rawPass && rawPass !== "your_gmail_app_password" && rawPass.length >= 8;

    let emailSent = false;
    let emailErrorMsg = "";

    if (isEmailReady) {
      try {
        await sendContactEmail({ name, email, phone, subject, message });
        emailSent = true;
        console.log(`[Contact API] Notification email dispatched successfully to ${process.env.EMAIL_TO || "washimshaikh33@gmail.com"}`);
      } catch (emailErr: unknown) {
        const err = emailErr as Error;
        emailErrorMsg = err?.message || "Email delivery failed";
        console.error("[Contact API] Email transmission failed:", emailErrorMsg);
      }
    } else {
      console.warn(
        `[Contact API] Notice: EMAIL_PASS is not configured in environment variables. To receive live emails at ${emailUser}, add EMAIL_PASS in your deployment dashboard (e.g., Render Environment).`
      );
    }

    // If email failed because of authentication / connection error when password was provided
    if (isEmailReady && !emailSent) {
      return NextResponse.json(
        {
          error: "Email delivery failed. Please check EMAIL_PASS or contact directly via email.",
          details: emailErrorMsg,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully",
        emailDelivered: emailSent,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

