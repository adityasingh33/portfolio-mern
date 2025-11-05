import React, { useState } from 'react';
import Toast, { ToastProps } from './Toast';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Hidden field for spam protection
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastProps | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
  const EMAIL = 'adityasinghbharadwaj688@gmail.com'; // Your email from resume

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name cannot exceed 100 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message cannot exceed 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setToast({
        message: 'Please fix the errors in the form',
        type: 'error',
        onClose: () => setToast(null),
      });
      return;
    }

    // Check honeypot - if filled, it's a bot
    if (formData.honeypot.trim() !== '') {
      // Silently ignore bot submissions
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success
        setToast({
          message: data.message || 'Thank you for your message! We will get back to you soon.',
          type: 'success',
          onClose: () => setToast(null),
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          honeypot: '',
        });
        setErrors({});
      } else {
        // Server validation errors
        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors: FormErrors = {};
          data.errors.forEach((error: string) => {
            if (error.includes('Name')) serverErrors.name = error;
            else if (error.includes('Email')) serverErrors.email = error;
            else if (error.includes('Message')) serverErrors.message = error;
          });
          setErrors(serverErrors);
          setToast({
            message: 'Please fix the errors in the form',
            type: 'error',
            onClose: () => setToast(null),
          });
        } else {
          setToast({
            message: data.error || data.message || 'Failed to send message. Please try again.',
            type: 'error',
            onClose: () => setToast(null),
          });
        }
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setToast({
        message: 'Network error. Please try again or use the email link below.',
        type: 'error',
        onClose: () => setToast(null),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const mailtoLink = `mailto:${EMAIL}?subject=Contact from Portfolio&body=${encodeURIComponent(
    `Name: ${formData.name || '[Your Name]'}\nEmail: ${formData.email || '[Your Email]'}\n\nMessage:\n${formData.message || '[Your Message]'}`
  )}`;

  return (
    <section
      id="contact"
      className="section bg-gray-50 dark:bg-gray-800 py-20 md:py-24"
      aria-label="Contact section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="sr-only"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg border transition-colors
                  bg-white dark:bg-gray-900
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  ${
                    errors.name
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }
                `}
                placeholder="Your name"
                required
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg border transition-colors
                  bg-white dark:bg-gray-900
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  ${
                    errors.email
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }
                `}
                placeholder="your.email@example.com"
                required
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`
                  w-full px-4 py-3 rounded-lg border transition-colors resize-none
                  bg-white dark:bg-gray-900
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  ${
                    errors.message
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }
                `}
                placeholder="Your message here..."
                required
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              <div className="mt-1 flex justify-between items-center">
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
                <span
                  className={`text-xs ml-auto ${
                    formData.message.length > 2000
                      ? 'text-red-500'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {formData.message.length}/2000
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full px-6 py-3 rounded-lg font-semibold text-white
                transition-all duration-200 focus-ring
                ${
                  isSubmitting
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transform hover:scale-105'
                }
              `}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Fallback Mailto Link */}
            <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Or send an email directly:
              </p>
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors focus-ring"
                aria-label="Send email to Aditya Singh"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {EMAIL}
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && <Toast {...toast} />}
    </section>
  );
}

