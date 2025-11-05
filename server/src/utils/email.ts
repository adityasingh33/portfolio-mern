
// Research on this file carefully
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

/**
 * Send email using EmailJS (if configured) or fallback to nodemailer/SMTP
 */
export async function sendEmail(
  data: ContactEmailData
): Promise<{ success: boolean; message: string }> {
  const EMAILJS_API_KEY = process.env.EMAILJS_API_KEY;
  const SMTP_URL = process.env.SMTP_URL;
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || SMTP_USER || 'admin@example.com';

  // Try EmailJS first if API key is configured
  if (EMAILJS_API_KEY) {
    try {
      return await sendViaEmailJS(data, EMAILJS_API_KEY, ADMIN_EMAIL);
    } catch (error) {
      console.error('EmailJS failed, falling back to SMTP:', error);
      // Fall through to SMTP
    }
  }

  // Fallback to nodemailer with SMTP
  if (SMTP_URL || (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS)) {
    return await sendViaSMTP(data, {
      smtpUrl: SMTP_URL,
      host: SMTP_HOST,
      port: SMTP_PORT ? parseInt(SMTP_PORT, 10) : 587,
      user: SMTP_USER,
      pass: SMTP_PASS,
      from: SMTP_FROM,
      to: ADMIN_EMAIL,
    });
  }

  // No email configuration found
  console.warn(
    'No email configuration found. EmailJS_API_KEY or SMTP settings required.'
  );
  return {
    success: false,
    message: 'Email service not configured',
  };
}

/**
 * Send email via EmailJS API
 */
async function sendViaEmailJS(
  data: ContactEmailData,
  apiKey: string,
  adminEmail: string
): Promise<{ success: boolean; message: string }> {
  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'default_service';
  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'default_template';

  // EmailJS API endpoint
  const url = 'https://api.emailjs.com/api/v1.0/email/send';

  const emailData = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: apiKey,
    template_params: {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: adminEmail,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`EmailJS API error: ${response.status} - ${errorText}`);
    }

    return {
      success: true,
      message: 'Email sent successfully via EmailJS',
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
}

/**
 * Send email via nodemailer with SMTP
 */
async function sendViaSMTP(
  data: ContactEmailData,
  config: {
    smtpUrl?: string;
    host?: string;
    port?: number;
    user?: string;
    pass?: string;
    from?: string;
    to: string;
  }
): Promise<{ success: boolean; message: string }> {
  let transporter;

  if (config.smtpUrl) {
    // Use SMTP URL (e.g., smtp://user:pass@host:port)
    transporter = nodemailer.createTransport(config.smtpUrl);
  } else if (config.host && config.port && config.user && config.pass) {
    // Use individual SMTP config
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465, // true for 465, false for other ports
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  } else {
    throw new Error('SMTP configuration incomplete');
  }

  const mailOptions = {
    from: config.from || config.user,
    to: config.to,
    subject: `New Contact Form Submission from ${data.name}`,
    text: `
New contact form submission:

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
Sent from Portfolio MERN Contact Form
    `.trim(),
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Sent from Portfolio MERN Contact Form</em></p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent via SMTP:', info.messageId);
    return {
      success: true,
      message: 'Email sent successfully via SMTP',
    };
  } catch (error) {
    console.error('SMTP error:', error);
    throw error;
  }
}

