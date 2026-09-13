// lib/mailer.ts — Nodemailer email delivery to washimshaikh33@gmail.com
import nodemailer from "nodemailer";

export interface MailOptions {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

function createTransporters(user: string, pass: string) {
  return [
    // Strategy 1: Port 587 STARTTLS with IPv4 for cloud container reliability
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 6000,
      greetingTimeout: 4000,
      socketTimeout: 8000,
    } as Parameters<typeof nodemailer.createTransport>[0]),
    // Strategy 2: Port 465 Direct SSL
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 6000,
      greetingTimeout: 4000,
      socketTimeout: 8000,
    } as Parameters<typeof nodemailer.createTransport>[0]),
    // Strategy 3: Standard Gmail Service descriptor
    nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
      connectionTimeout: 6000,
      greetingTimeout: 4000,
      socketTimeout: 8000,
    } as Parameters<typeof nodemailer.createTransport>[0]),
  ];
}

export async function sendContactEmail(data: MailOptions): Promise<void> {
  const targetEmail = process.env.EMAIL_TO?.trim() || "washimshaikh33@gmail.com";
  const senderUser = (process.env.EMAIL_USER?.trim() || "washimshaikh33@gmail.com");
  const rawPass = (process.env.EMAIL_PASS?.replace(/[\s"']/g, "").trim() || "");

  const transporters = createTransporters(senderUser, rawPass);

  const formattedDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Message</title>
      </head>
      <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #E6ECF5; color: #2A354F;">
        <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(166, 180, 200, 0.4);">
          <!-- Header Bar -->
          <div style="background: linear-gradient(135deg, #050C1A 0%, #07131F 50%, #0A1320 100%); padding: 32px 28px; text-align: center; border-bottom: 2px solid #1CE0FD;">
            <div style="display: inline-block; background: rgba(28, 224, 253, 0.15); border: 1px solid #1CE0FD; padding: 4px 14px; border-radius: 20px; color: #1CE0FD; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
              ⚡ New Portfolio Contact
            </div>
            <h1 style="color: #FFFFFF; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">
              Inquiry from ${data.name}
            </h1>
            <p style="color: #A5EBFB; margin: 6px 0 0; font-size: 13px;">
              Received via washimshaikh.dev on ${formattedDate}
            </p>
          </div>

          <!-- Body Content -->
          <div style="padding: 32px 28px;">
            <!-- Sender Info Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #7E8BA0; font-size: 12px; font-weight: 700; text-transform: uppercase; width: 110px;">
                  Full Name
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #2A354F; font-size: 14px; font-weight: 700;">
                  ${data.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #7E8BA0; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                  Email
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #00BFE8; font-size: 14px; font-weight: 700;">
                  <a href="mailto:${data.email}" style="color: #00BFE8; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              ${
                data.phone
                  ? `<tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #7E8BA0; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                        Phone
                      </td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #2A354F; font-size: 14px; font-weight: 600;">
                        <a href="tel:${data.phone}" style="color: #2A354F; text-decoration: none;">${data.phone}</a>
                      </td>
                    </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #7E8BA0; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                  Subject
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E6ECF5; color: #2A354F; font-size: 14px; font-weight: 700;">
                  ${data.subject}
                </td>
              </tr>
            </table>

            <!-- Message Card -->
            <div style="margin-bottom: 28px;">
              <p style="color: #7E8BA0; font-size: 12px; font-weight: 700; text-transform: uppercase; margin: 0 0 8px;">
                Message Content
              </p>
              <div style="background: #E6ECF5; border-radius: 14px; padding: 18px 20px; color: #2A354F; line-height: 1.65; font-size: 14px; border-left: 4px solid #00BFE8;">
                ${data.message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <!-- Action Button: 1-Click Direct Reply -->
            <div style="text-align: center; padding-top: 12px;">
              <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" style="display: inline-block; background: linear-gradient(135deg, #00C8F8 0%, #00AEDB 100%); color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-size: 14px; font-weight: 700; box-shadow: 0 4px 14px rgba(0, 191, 232, 0.4);">
                ✉️ Reply Directly to ${data.name}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #F7F8F6; padding: 16px 24px; text-align: center; color: #7E8BA0; font-size: 12px; border-top: 1px solid #E6ECF5;">
            Washim Shaikh Portfolio • <a href="mailto:washimshaikh33@gmail.com" style="color: #00BFE8; text-decoration: none;">washimshaikh33@gmail.com</a>
          </div>
        </div>
      </body>
    </html>
  `;

  let lastError: Error | null = null;

  for (let i = 0; i < transporters.length; i++) {
    try {
      await transporters[i].sendMail({
        from: `"Washim Portfolio Contact" <${senderUser}>`,
        to: targetEmail,
        replyTo: data.email,
        subject: `⚡ [Portfolio Inquiry] ${data.subject} — from ${data.name}`,
        html,
      });
      console.log(`[Mailer] Custom HTML email dispatched successfully via strategy ${i + 1} to ${targetEmail}`);
      return; // Succeeded with custom HTML template!
    } catch (err: unknown) {
      lastError = err as Error;
      console.warn(`[Mailer] Strategy ${i + 1} failed:`, lastError?.message || lastError);
    }
  }

  if (lastError) {
    throw lastError;
  }
}
