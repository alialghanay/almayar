import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "your.smtp.host.com",
    port: 465,
    secure: true,
    auth: {
      user: "your@email.com",
      pass: "your-email-password",
    },
  });

  try {
    await transporter.sendMail({
      from: '"Website Contact" <your@email.com>',
      to: "your@email.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email failed to send:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
