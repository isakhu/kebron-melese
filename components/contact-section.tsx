'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { profile } from '../data/profile';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email address.'),
  message: z.string().min(20, 'Please provide at least 20 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-28">
      <div className="section-container">
        <SectionTitle
          title="Contact"
          accent="Get In Touch"
          subtitle="Open to banking leadership, analysis, and project management opportunities. Let's connect."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info card */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold text-text-primary">Direct Conversation</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Available for professional inquiries, project discussions, and executive networking via email, phone, or Telegram.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-brand/30 hover:bg-brand/5 transition-all duration-300"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-brand" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Email</p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-text-primary group-hover:text-brand transition-colors duration-200">
                    {profile.email}
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-text-muted group-hover:text-brand group-hover:translate-x-1 transition-all duration-200" />
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-brand/30 hover:bg-brand/5 transition-all duration-300"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone</p>
                  <p className="mt-0.5 text-sm font-semibold text-text-primary group-hover:text-brand transition-colors duration-200">
                    {profile.phone}
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-text-muted group-hover:text-brand group-hover:translate-x-1 transition-all duration-200" />
              </a>

              <a
                href={profile.telegram}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-brand/30 hover:bg-brand/5 transition-all duration-300"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/20 transition-colors duration-300">
                  <MessageSquare className="h-5 w-5 text-brand" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Telegram</p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-text-primary group-hover:text-brand transition-colors duration-200">
                    {profile.telegram}
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-text-muted group-hover:text-brand group-hover:translate-x-1 transition-all duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card glass-card-hover rounded-2xl p-8"
            noValidate
          >
            <h3 className="font-display text-xl font-bold text-text-primary">Send a Message</h3>
            <p className="mt-2 text-sm text-text-secondary">I'll respond within 24 hours.</p>

            <div className="mt-7 grid gap-5">
              <label className="block space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Your Name</span>
                <input
                  type="text"
                  {...register('name')}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className="w-full rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 text-sm font-medium text-text-primary placeholder-text-muted/60 focus:border-brand/50 focus:bg-brand/5 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all duration-200"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-xs font-medium text-red-400">{errors.name.message}</p>
                )}
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</span>
                <input
                  type="email"
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className="w-full rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 text-sm font-medium text-text-primary placeholder-text-muted/60 focus:border-brand/50 focus:bg-brand/5 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-xs font-medium text-red-400">{errors.email.message}</p>
                )}
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</span>
                <textarea
                  rows={5}
                  {...register('message')}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className="w-full resize-none rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 text-sm font-medium text-text-primary placeholder-text-muted/60 focus:border-brand/50 focus:bg-brand/5 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all duration-200"
                  placeholder="Tell me about the opportunity or project..."
                />
                {errors.message && (
                  <p className="text-xs font-medium text-red-400">{errors.message.message}</p>
                )}
              </label>
            </div>

            <div className="mt-6">
              {submitted ? (
                <div className="flex items-center justify-center gap-3 rounded-xl border border-brand/20 bg-brand/8 py-4 text-sm font-bold text-brand">
                  <CheckCircle2 className="h-5 w-5" />
                  Message sent — thanks for reaching out!
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-surface-darker shadow-glow hover:bg-brand-light hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-surface-darker/30 border-t-surface-darker animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
