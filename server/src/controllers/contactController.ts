import { Request, Response, NextFunction } from 'express';
import Contact from '../models/Contact';
import { sendEmail } from '../utils/email';

interface ContactRequest extends Request {
  body: {
    name: string;
    email: string;
    message: string;
    honeypot?: string; // Hidden field to catch bots
  };
}

/**
 * POST /api/contact - Handle contact form submission
 */
export async function submitContact(
  req: ContactRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email, message, honeypot } = req.body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
      // Silently reject but return success to avoid revealing the honeypot
      res.status(200).json({
        success: true,
        message: 'Thank you for your message!',
      });
      return;
    }

    // Validation
    const errors: string[] = [];

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push('Name is required');
    } else if (name.trim().length > 100) {
      errors.push('Name cannot exceed 100 characters');
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      errors.push('Email is required');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.push('Please provide a valid email address');
      }
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      errors.push('Message is required');
    } else if (message.trim().length > 2000) {
      errors.push('Message cannot exceed 2000 characters');
    }

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        errors,
      });
      return;
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };

    // Save to MongoDB
    const contact = new Contact({
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message,
      createdAt: new Date(),
    });

    await contact.save();

    // Send email notification
    let emailResult;
    try {
      emailResult = await sendEmail({
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails - message is still saved
      emailResult = {
        success: false,
        message: 'Contact saved but email notification failed',
      };
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      emailSent: emailResult.success,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    next(error);
  }
}

