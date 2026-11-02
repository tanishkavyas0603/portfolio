import React, { useState, useRef } from 'react';
import { Mail, MapPin, ExternalLink, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, LeetcodeIcon as Leetcode } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  // Form State
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  };

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Your name is required';
    } else if (trimmedName.length > 100) {
      newErrors.name = 'Name must be 100 characters or less';
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Email address is required';
    } else if (trimmedEmail.length > 100) {
      newErrors.email = 'Email must be 100 characters or less';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please provide a valid email address';
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = 'Please write a message';
    } else if (trimmedMessage.length > 1000) {
      newErrors.message = 'Message must be 1000 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam protection: honeypot field filled indicates bot activity
    if (honeypot.trim()) {
      return;
    }

    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'tanishka.v634@gmail.com';
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`;

    try {
      const payload: Record<string, string> = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        _subject: `Portfolio contact from ${formData.name.trim()}`,
        _replyto: formData.email.trim(),
        _template: 'table',
        _captcha: 'false',
      };

      if (formData.subject.trim()) {
        payload.subject = formData.subject.trim();
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });

      const rawText = await response.text();
      let data: Record<string, unknown> | null = null;
      try {
        data = JSON.parse(rawText) as Record<string, unknown>;
      } catch {
        // non-JSON response payload
      }

      // Explicit success: data.success is strictly true or "true"
      const isSuccess =
        response.ok &&
        (data?.success === true ||
          data?.success === 'true' ||
          (data?.success !== false &&
            data?.success !== 'false' &&
            typeof data?.message === 'string' &&
            data.message.toLowerCase().includes('success')));

      const isActivation =
        !isSuccess &&
        ((typeof data?.message === 'string' &&
          (data.message.toLowerCase().includes('activation') || data.message.toLowerCase().includes('activate'))) ||
          rawText.toLowerCase().includes('activation') ||
          rawText.toLowerCase().includes('activate'));

      if (isSuccess) {
        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully! Tanishka will get back to you soon.');
        // Clear form fields only on confirmed provider success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setHoneypot('');
        setErrors({});
      } else if (isActivation) {
        console.warn('[FormSubmit Activation Required]', data?.message || rawText);
        setSubmitStatus('error');
        setStatusMessage(
          "Action Required: FormSubmit has dispatched a one-time activation email to tanishka.v634@gmail.com. Please open the email and click 'Activate Form' (check Spam/Junk if needed). Once activated once, all future submissions will work automatically!"
        );
      } else {
        const errorMsg =
          typeof data?.message === 'string' && data.message.trim()
            ? data.message.trim()
            : 'Could not send your message. Please try again later or contact Tanishka directly.';
        console.error('[FormSubmit Response Error]', { status: response.status, data, rawText });
        setSubmitStatus('error');
        setStatusMessage(errorMsg);
      }
    } catch (err: unknown) {
      console.error('[Contact Form Network Error]', err);
      setSubmitStatus('error');
      setStatusMessage('Could not send your message. Please try again later or contact Tanishka directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-brand-border/40 bg-brand-card/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-br from-purple-800/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold">
            LET'S CONNECT
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-primary tracking-tight mt-2">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>

        {/* Big "Let's build something real" Banner */}
        <div className="mb-14 text-center">
          <a
            href={`mailto:${portfolioData.socials.email}`}
            className="group block text-decoration-none cursor-none py-4 select-none"
            onPointerMove={handlePointerMove}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
          >
            <span
              className="block font-mihir font-black text-[2.2rem] sm:text-6xl md:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-transparent transition-colors duration-300"
              style={{
                WebkitTextStroke: '1.5px var(--brand-primary)',
                color: isHovered ? 'var(--brand-primary)' : 'transparent',
                fontStretch: '122%',
                fontWeight: 850,
              }}
            >
              Let's build
            </span>
            <span
              className="block font-mihir font-black text-[2.2rem] sm:text-6xl md:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-transparent transition-colors duration-300"
              style={{
                WebkitTextStroke: '1.5px var(--brand-primary)',
                color: isHovered ? 'var(--brand-primary)' : 'transparent',
                fontStretch: '122%',
                fontWeight: 850,
              }}
            >
              something real{' '}
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-4"
                style={{ WebkitTextStroke: '0px', color: 'var(--brand-accent)' }}
              >
                →
              </span>
            </span>
          </a>
        </div>

        {/* Floating Tooltip Pill */}
        <span
          ref={tooltipRef}
          className="fixed top-0 left-0 z-50 pointer-events-none"
          style={{ transform: 'translate(0px, 0px)' }}
        >
          <span
            className={`inline-block px-3 py-1.5 rounded-full bg-brand-accent text-brand-bg text-[10px] font-mono font-bold tracking-wider uppercase shadow-xl transition-all duration-200 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transform: 'translate(16px, -36px)' }}
          >
            Email Me →
          </span>
        </span>

        {/* Interactive Contact Form Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-brand-card/85 border border-brand-border hover:border-brand-accent/40 shadow-2xl backdrop-blur-md transition-all duration-300">
          <div className="mb-6">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-primary">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted mt-1 leading-relaxed">
              Have an AI/ML opportunity, project inquiry, or collaboration idea? Leave a message below and I will get back to you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Honeypot field for spam prevention */}
            <input
              type="text"
              name="_honey"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono font-semibold uppercase text-brand-text mb-1.5">
                  Your Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  maxLength={100}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="e.g., Alex Morgan"
                  autoComplete="off"
                  className={`w-full px-4 py-3 rounded-xl bg-brand-bg/70 border text-sm text-brand-primary placeholder:text-zinc-500 outline-none transition-all ${
                    errors.name
                      ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                      : 'border-brand-border focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono font-semibold uppercase text-brand-text mb-1.5">
                  Your Email <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  maxLength={100}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="e.g., alex@example.com"
                  autoComplete="off"
                  className={`w-full px-4 py-3 rounded-xl bg-brand-bg/70 border text-sm text-brand-primary placeholder:text-zinc-500 outline-none transition-all ${
                    errors.email
                      ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                      : 'border-brand-border focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-mono font-semibold uppercase text-brand-text mb-1.5">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                maxLength={150}
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isSubmitting}
                placeholder="e.g., Python Backend / AI Systems Collaboration"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl bg-brand-bg/70 border border-brand-border focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40 text-sm text-brand-primary placeholder:text-zinc-500 outline-none transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="contact-message" className="block text-xs font-mono font-semibold uppercase text-brand-text">
                  Message <span className="text-brand-accent">*</span>
                </label>
                <span className="text-[10px] font-mono text-brand-text-muted">
                  {formData.message.length}/1000
                </span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                maxLength={1000}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                placeholder="Write your message or project requirements here..."
                className={`w-full px-4 py-3 rounded-xl bg-brand-bg/70 border text-sm text-brand-primary placeholder:text-zinc-500 outline-none transition-all resize-y ${
                  errors.message
                    ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                    : 'border-brand-border focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40'
                }`}
              />
              {errors.message && (
                <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submission Status Alerts */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5 font-medium animate-fadeIn">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-center gap-2.5 font-medium animate-fadeIn">
                <AlertCircle size={18} className="shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-primary text-brand-bg font-bold text-xs uppercase tracking-wider hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/10 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

              <p className="text-[11px] font-mono text-brand-text-muted">
                Messages route securely via FormSubmit directly to inbox
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Email Card - Spans 2 columns on medium screens for prominence */}
          <div className="sm:col-span-2 md:col-span-3 p-6 rounded-2xl bg-brand-card/80 border border-brand-border hover:border-brand-accent/40 shadow-xl transition-all duration-300 group flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="p-4 rounded-xl bg-brand-accent-glow text-brand-accent border border-brand-accent/20 group-hover:scale-105 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold uppercase text-brand-accent tracking-wider">Email Address</p>
                <h4 className="font-heading font-bold text-lg md:text-xl text-brand-primary mt-1 select-all">
                  {portfolioData.socials.email}
                </h4>
              </div>
            </div>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-brand-primary text-brand-bg font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shrink-0"
            >
              Email Directly
              <ExternalLink size={13} />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-brand-card/85 border border-brand-border hover:border-brand-accent/40 shadow-lg transition-all duration-300 group flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Linkedin size={20} />
              </div>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Professional</span>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold uppercase text-brand-text-muted mt-4">LinkedIn</p>
              <h4 className="font-heading font-bold text-base text-brand-primary mt-1 truncate">
                {portfolioData.name}
              </h4>
            </div>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-4 py-2 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card text-brand-text hover:text-brand-accent font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              Connect On LinkedIn
              <ExternalLink size={11} />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-brand-card/85 border border-brand-border hover:border-brand-accent/40 shadow-lg transition-all duration-300 group flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 group-hover:scale-105 transition-transform duration-300">
                <Github size={20} />
              </div>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Codebase</span>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold uppercase text-brand-text-muted mt-4">GitHub</p>
              <h4 className="font-heading font-bold text-base text-brand-primary mt-1 truncate">
                @{portfolioData.socials.github.split('github.com/')[1]?.replace(/\/$/, '') || 'tanishkavyas0603'}
              </h4>
            </div>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-4 py-2 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card text-brand-text hover:text-brand-accent font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              Explore Repos
              <ExternalLink size={11} />
            </a>
          </div>

          {/* LeetCode Card */}
          {portfolioData.socials.leetcode && (
            <div className="p-6 rounded-2xl bg-brand-card/85 border border-brand-border hover:border-brand-accent/40 shadow-lg transition-all duration-300 group flex flex-col justify-between h-48">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 group-hover:scale-105 transition-transform duration-300">
                  <Leetcode size={20} />
                </div>
                <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Problem Solving</span>
              </div>
              <div>
                <p className="text-xs font-mono font-semibold uppercase text-brand-text-muted mt-4">LeetCode</p>
                <h4 className="font-heading font-bold text-base text-brand-primary mt-1 truncate">
                  @{portfolioData.socials.leetcode.split('/u/')[1]?.replace(/\/$/, '') || 'tanishka_vyas'}
                </h4>
              </div>
              <a
                href={portfolioData.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="mt-4 px-4 py-2 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card text-brand-text hover:text-brand-accent font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                View Solved Problems
                <ExternalLink size={11} />
              </a>
            </div>
          )}
        </div>

        {/* Location & Status Summary */}
        <div className="mt-12 p-5 rounded-2xl bg-brand-card/40 border border-brand-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <MapPin className="text-brand-accent shrink-0" size={18} />
            <p className="text-xs md:text-sm text-brand-text-muted">
              Based in <span className="text-brand-primary font-semibold">{portfolioData.location}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-xs text-brand-text-muted">
              Actively open to software & AI engineering opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
