import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload) {
  const { name, email, message: userMessage } = payload;

  const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

  const mailOptions = {
    from: "Portfolio",
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error while sending email:", error.message);
    return false;
  }
}

// CORS headers helper
function setCorsHeaders(response) {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Or specify your domain
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}

// Handle OPTIONS preflight request
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 });
  return setCorsHeaders(response);
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    console.log(process.env.EMAIL_ADDRESS, process.env.GMAIL_PASSKEY);

    // Validate required fields
    if (!name || !email || !userMessage) {
      const response = NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
      return setCorsHeaders(response);
    }

    // Validate environment variables
    if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
      const response = NextResponse.json(
        {
          success: false,
          message: "Email configuration is missing.",
        },
        { status: 500 }
      );
      return setCorsHeaders(response);
    }

    // Send email
    const emailSuccess = await sendEmail(payload);

    if (emailSuccess) {
      const response = NextResponse.json(
        {
          success: true,
          message: "Email sent successfully!",
        },
        { status: 200 }
      );
      return setCorsHeaders(response);
    }

    const response = NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
    return setCorsHeaders(response);
  } catch (error) {
    console.error("API Error:", error.message);
    const response = NextResponse.json(
      {
        success: false,
        message: "Server error occurred.",
      },
      { status: 500 }
    );
    return setCorsHeaders(response);
  }
}
