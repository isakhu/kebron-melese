'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { profile } from '../data/profile';
import { Button } from './ui/button';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email address.'),
  message: z.string().min(20, 'Please provide additional details.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

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

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="section-container py-32">
      <SectionTitle
        title="Contact"
        subtitle="Connect with Kebron for banking leadership, analysis, and transformation opportunities."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr]"
      >
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Get in touch</p>
          <h3 className="mt-4 text-2xl font-bold text-text-primary">Direct conversation</h3>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Email, phone, or Telegram are available for professional inquiries, project discussions, and executive networking.
          </p>
          <div className="mt-8 space-y-4 text-sm text-text-secondary">
            <p>
              <span className="font-semibold text-text-primary">Email: </span>
              <a href={`mailto:${profile.email}`} className="text-brand hover:text-brand-light transition">{profile.email}</a>
            </p>
            <p>
              <span className="font-semibold text-text-primary">Phone: </span>
              <a href={`tel:${profile.phone}`} className="text-brand hover:text-brand-light transition">{profile.phone}</a>
            </p>
            <p>
              <span className="font-semibold text-text-primary">Telegram: </span>
              <a href={profile.telegram} target="_blank" rel="noreferrer" className="text-brand hover:text-brand-light transition">
                {profile.telegram}
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-10"
          noValidate
        >
          <div className="grid gap-5">
            <label className="space-y-2.5 text-sm">
              <span className="font-semibold text-text-primary">Name</span>
              <input
                type="text"
                {...register('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 transition"
                placeholder="Your name"
              />
              {errors.name ? <p className="text-xs text-red-400">{errors.name.message}</p> : null}
            </label>
            <label className="space-y-2.5 text-sm">
              <span className="font-semibold text-text-primary">Email</span>
              <input
                type="email"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 transition"
                placeholder="your.email@example.com"
              />
              {errors.email ? <p className="text-xs text-red-400">{errors.email.message}</p> : null}
            </label>
            <label className="space-y-2.5 text-sm">
              <span className="font-semibold text-text-primary">Message</span>
              <textarea
                rows={5}
                {...register('message')}
                aria-invalid={errors.message ? 'true' : 'false'}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 transition resize-none"
                placeholder="Your message..."
              />
              {errors.message ? <p className="text-xs text-red-400">{errors.message.message}</p> : null}
            </label>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Sending…' : 'Send message'}
            </Button>
            {submitted ? (
              <p className="text-sm font-medium text-brand text-center">Message ready. Thanks for reaching out!</p>
            ) : null}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
