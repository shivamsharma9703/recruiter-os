import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, role, size, challenge } = body;

    // Email to YOU — notification of new demo booking
    await resend.emails.send({
      from: "Recruiter OS <onboarding@resend.dev>",
      to: "shivams.9582@gmail.com",
      subject: `New Demo Booking — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #000; color: #fff;">
          <div style="margin-bottom: 32px;">
            <h1 style="font-size: 24px; font-weight: 800; color: #fff; margin: 0 0 8px;">
              New Demo Booking
            </h1>
            <p style="color: #666; margin: 0; font-size: 14px;">
              Someone just booked a demo on Recruiter OS.
            </p>
          </div>

          <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #666; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 13px; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 13px; font-weight: 600;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #666; font-size: 13px;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 13px; font-weight: 600;">${company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #666; font-size: 13px;">Role</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 13px; font-weight: 600;">${role || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #666; font-size: 13px;">Team Size</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-size: 13px; font-weight: 600;">${size || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Challenge</td>
                <td style="padding: 10px 0; color: #fff; font-size: 13px;">${challenge || "Not provided"}</td>
              </tr>
            </table>
          </div>

          <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: #fff; color: #000; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 700;">
            Reply to ${firstName} →
          </a>
        </div>
      `,
    });

    // Confirmation email to the person who booked
    await resend.emails.send({
      from: "Recruiter OS <onboarding@resend.dev>",
      to: email,
      subject: `You're booked — Recruiter OS Demo`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #000; color: #fff;">
          <div style="margin-bottom: 32px;">
            <div style="width: 40px; height: 40px; background: #fff; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; color: #000;">+</span>
            </div>
            <h1 style="font-size: 24px; font-weight: 800; color: #fff; margin: 0 0 8px;">
              You are booked, ${firstName}.
            </h1>
            <p style="color: #666; margin: 0; font-size: 15px; line-height: 1.7;">
              Thanks for booking a demo with Recruiter OS. We will be in touch within 24 hours to confirm your slot and send you a calendar invite.
            </p>
          </div>

          <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
            <p style="color: #666; font-size: 13px; margin: 0 0 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">What to expect</p>
            <ul style="color: #aaa; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0;">
              <li>A 30-minute live walkthrough of the full platform</li>
              <li>We will answer every question you have</li>
              <li>You will see the AI pipeline, CRM and revenue tracking in action</li>
              <li>No sales pressure — just the product</li>
            </ul>
          </div>

          <p style="color: #444; font-size: 12px; line-height: 1.7;">
            If you need to reach us before then, reply directly to this email.
            <br/>The Recruiter OS team
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}