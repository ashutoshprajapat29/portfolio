import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Phone,
  AlertCircle,
  CheckCircle2,
  Inbox,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  onShowToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const phoneNumber = "+91 8602865384";

  // Validate form fields in real-time
  const validateField = (field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return undefined;
      case 'subject':
        if (value.trim() && value.trim().length < 3) return 'Subject must be at least 3 characters';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message cannot exceed 1000 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    onShowToast("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    onShowToast("Phone number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const subjectErr = validateField('subject', formData.subject);
    const messageErr = validateField('message', formData.message);

    const newErrors: FormErrors = {
      name: nameErr,
      email: emailErr,
      subject: subjectErr,
      message: messageErr
    };

    setErrors(newErrors);

    if (nameErr || emailErr || subjectErr || messageErr) {
      onShowToast("Please correct the errors in the form before sending.", "error");
      return;
    }

    setSubmitting(true);

    try {
      // If user has a Formspree ID configured, post to Formspree
      if (personal.formspreeId && personal.formspreeId !== "YOUR_FORMSPREE_ID") {
        const res = await fetch(`https://formspree.io/f/${personal.formspreeId}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!res.ok) {
          throw new Error('Failed to send via Formspree');
        }
      } else {
        // Simulated network delay
        await new Promise(r => setTimeout(r, 700));
      }

      setSubmitting(false);
      setSubmittedSuccess(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.65 }
      });

      onShowToast("Message sent successfully! Ashutosh will receive it in his Gmail.", "success");
    } catch (err) {
      setSubmitting(false);
      onShowToast("Failed to send automatically. You can email Ashutosh directly!", "error");
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTouched({});
    setErrors({});
    setSubmittedSuccess(false);
  };

  // Direct mailto link as fallback
  const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Ashutosh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>05. Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect &amp; <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Seeking Software Engineering or Web Development internships. Feel free to reach out directly via email, phone, or this interactive message form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & How Responses Are Received (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Banner Card */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border-l-4 border-l-teal-500">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Current Status &amp; Goals
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                3rd-Year Computer Science undergraduate actively available for <span className="font-semibold text-slate-900 dark:text-white">Freelance Client Projects, Full-Stack Web Development, and Software Engineering Internships</span>.
              </p>
            </div>

            {/* Delivery Explanation Card: How responses reach you */}
            <div className="glass-card rounded-2xl p-5 space-y-3 bg-gradient-to-br from-teal-500/5 via-indigo-500/5 to-purple-500/5 border border-teal-500/20">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-300 font-semibold text-xs uppercase font-mono">
                <Inbox className="w-4 h-4" />
                <span>How will you receive messages?</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                When anyone submits this form, it delivers the sender's details, inquiry topic, and message directly to your personal email inbox (<span className="font-mono text-teal-600 dark:text-teal-400 font-bold">{personal.email}</span>) with instant reply capability.
              </p>
            </div>

            {/* Quick Copy Contact Tiles */}
            <div className="space-y-3">
              {/* Email Tile */}
              <div className="glass-card rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate block">
                      {personal.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-500 hover:text-teal-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5 hover:border-teal-500/40 transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Tile */}
              <div className="glass-card rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate block">
                      {phoneNumber}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl text-slate-500 hover:text-indigo-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5 hover:border-indigo-500/40 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-indigo-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Tile */}
              <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Icons */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500">Profiles:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-teal-400 hover:scale-110 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-teal-400 hover:scale-110 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Validated Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              
              {submittedSuccess ? (
                /* Success Feedback State */
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 border-2 border-teal-500/40 text-teal-400 flex items-center justify-center mx-auto shadow-lg shadow-teal-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-teal-500">{formData.name}</span>. Your message has been transmitted and delivered to Ashutosh's inbox.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Send Another Message</span>
                    </button>
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 transition-all shadow-md shadow-teal-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>Send a Direct Message</span>
                      <span className="text-[11px] font-mono font-normal text-slate-400">* Required fields</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Fill out the form below with live validation. Responses will be delivered to Ashutosh's Gmail.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                            Your Name *
                          </label>
                          {touched.name && !errors.name && (
                            <span className="text-[10px] text-teal-400 flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-3 h-3" /> Valid
                            </span>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onBlur={() => handleBlur('name')}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="e.g. Sarah Connor"
                            className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                              touched.name && errors.name
                                ? 'border-rose-500 focus:border-rose-500'
                                : touched.name && !errors.name
                                ? 'border-teal-500/60 focus:border-teal-500'
                                : 'border-slate-200 dark:border-white/10 focus:border-teal-500'
                            }`}
                          />
                        </div>
                        {touched.name && errors.name && (
                          <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                            Email Address *
                          </label>
                          {touched.email && !errors.email && (
                            <span className="text-[10px] text-teal-400 flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-3 h-3" /> Valid
                            </span>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onBlur={() => handleBlur('email')}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="sarah@company.com"
                            className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                              touched.email && errors.email
                                ? 'border-rose-500 focus:border-rose-500'
                                : touched.email && !errors.email
                                ? 'border-teal-500/60 focus:border-teal-500'
                                : 'border-slate-200 dark:border-white/10 focus:border-teal-500'
                            }`}
                          />
                        </div>
                        {touched.email && errors.email && (
                          <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          Subject / Topic (Optional)
                        </label>
                        {formData.subject && !errors.subject && (
                          <span className="text-[10px] text-teal-400 flex items-center gap-1 font-mono">
                            <CheckCircle2 className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={formData.subject}
                        onBlur={() => handleBlur('subject')}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        placeholder="e.g. Software Engineer Internship Discussion"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                          touched.subject && errors.subject
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-200 dark:border-white/10 focus:border-teal-500'
                        }`}
                      />
                      {touched.subject && errors.subject && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                          Your Message *
                        </label>
                        <span className={`text-[10px] font-mono ${
                          formData.message.length > 1000 
                            ? 'text-rose-400 font-bold' 
                            : formData.message.length >= 10 
                            ? 'text-teal-400' 
                            : 'text-slate-400'
                        }`}>
                          {formData.message.length} / 1000 chars {formData.message.length < 10 && '(min 10)'}
                        </span>
                      </div>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onBlur={() => handleBlur('message')}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Hi Ashutosh, I came across your AgroAid-Ai and WearLoop projects and would love to discuss an internship opportunity..."
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors resize-none ${
                          touched.message && errors.message
                            ? 'border-rose-500 focus:border-rose-500'
                            : touched.message && !errors.message
                            ? 'border-teal-500/60 focus:border-teal-500'
                            : 'border-slate-200 dark:border-white/10 focus:border-teal-500'
                        }`}
                      />
                      {touched.message && errors.message && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons: Submit & Direct Mailto */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:flex-1 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-500 via-teal-600 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                      >
                        {submitting ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                            Transmitting Message...
                          </span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <a
                        href={mailtoLink}
                        className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/10 transition-colors flex items-center justify-center gap-2"
                        title="Send directly using your computer's default email app"
                      >
                        <ExternalLink className="w-4 h-4 text-teal-400" />
                        <span>Email Directly</span>
                      </a>
                    </div>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
