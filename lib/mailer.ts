// lib/mailer.ts — Nodemailer config
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface MailOptions {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: MailOptions): Promise<void> {
  const html = `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #2563EB, #7C3AED); padding: 32px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Someone reached out via your portfolio website</p>
      </div>
      <div style="padding: 32px; background: white;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748B; font-size: 13px; width: 120px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0F172A; font-weight: 500;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748B; font-size: 13px;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #2563EB;">${data.email}</td>
          </tr>
          ${data.phone ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748B; font-size: 13px;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0F172A;">${data.phone}</td></tr>` : ""}
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #64748B; font-size: 13px;">Subject</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0F172A; font-weight: 500;">${data.subject}</td>
          </tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #64748B; font-size: 13px; margin-bottom: 8px;">Message</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; color: #0F172A; line-height: 1.7; font-size: 14px; border-left: 3px solid #2563EB;">
            ${data.message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f0f0f0; text-align: center;">
          <a href="mailto:${data.email}" style="background: #2563EB; color: white; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-size: 14px; display: inline-block;">Reply to ${data.name}</a>
        </div>
      </div>
      <div style="background: #f8fafc; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
        Sent from washimshaikh.dev portfolio contact form
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO ?? "washimshaikh33@gmail.com",
    replyTo: data.email,
    subject: `[Portfolio] ${data.subject} — from ${data.name}`,
    html,
  });
}
