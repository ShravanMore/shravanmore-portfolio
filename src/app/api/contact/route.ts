import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (notification)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Message:</strong></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 5px;">
                ${message}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This email was sent from your portfolio contact form.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Email to sender (confirmation)
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">Thank You for Contacting Me!</h2>
            
            <p style="color: #333; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
            
            <div style="margin: 20px 0; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;"><strong>Your message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #333;">${message}</p>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
              Best regards,<br/>
              <strong style="color: #8b5cf6;">Shravan More</strong>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>📧 shravanmore125@gmail.com</p>
              <p>🔗 <a href="https://github.com/ShravanMore" style="color: #8b5cf6; text-decoration: none;">GitHub</a> | 
                 <a href="https://www.linkedin.com/in/shravanmore/" style="color: #8b5cf6; text-decoration: none;">LinkedIn</a></p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
