// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // 配置邮件服务（以 Gmail 为例）
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // 从环境变量读取
      pass: process.env.GMAIL_PASSWORD, // 从环境变量读取
    },
  });

  try {
    // 发送邮件
    await transporter.sendMail({
      from: email, // 访客的邮箱
      to: process.env.GMAIL_USER, // 你的邮箱
      subject: `New Contact: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}