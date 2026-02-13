import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const hasSmtpConfig =
  !!process.env.SMTP_HOST &&
  !!process.env.SMTP_USER &&
  !!process.env.SMTP_PASS;

const transporter = hasSmtpConfig
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "Contact from website");
    const message = String(formData.get("message") || "");

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const toAddress =
      process.env.CONTACT_RECIPIENT ||
      process.env.SMTP_USER ||
      "kaikedeolo@gmail.com";

    if (!hasSmtpConfig || !toAddress || !transporter) {
      console.warn("SMTP configuration is incomplete; falling back to console logging.");
      console.log("New contact message (no email configured):", { name, email, subject, message });

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const textBody = `New contact message from Life Boat Ministries International website\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || "no-reply@example.com",
      to: toAddress,
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      text: textBody,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "Something went wrong. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
