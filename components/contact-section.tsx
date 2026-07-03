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
    <section id="contact" className="section-container py-24">
      <SectionTitle
        title="Contact"
        subtitle="Connect with Kebron for banking leadership, analysis, and transformation opportunities."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr]"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/70">Get in touch</p>
          <h3 className="mt-4 text-2xl font-semibold text-brand">Direct conversation</h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Email, phone, or Telegram are available for professional inquiries, project discussions, and executive networking.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Email: </span>
              <a href={`mailto:${profile.email}`} className="text-brand hover:underline">{profile.email}</a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Phone: </span>
              <a href={`tel:${profile.phone}`} className="text-brand hover:underline">{profile.phone}</a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Telegram: </span>
              <a href={profile.telegram} target="_blank" rel="noreferrer" className="text-brand hover:underline">
                {profile.telegram}
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel"
          noValidate
        >
          <div className="grid gap-6">
            <label className="space-y-3 text-sm text-slate-700">
              <span className="font-semibold">Name</span>
              <input
                type="text"
                {...register('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
              {errors.name ? <p className="text-xs text-red-600">{errors.name.message}</p> : null}
            </label>
            <label className="space-y-3 text-sm text-slate-700">
              <span className="font-semibold">Email</span>
              <input
                type="email"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
              {errors.email ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
            </label>
            <label className="space-y-3 text-sm text-slate-700">
              <span className="font-semibold">Message</span>
              <textarea
                rows={5}
                {...register('message')}
                aria-invalid={errors.message ? 'true' : 'false'}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
              {errors.message ? <p className="text-xs text-red-600">{errors.message.message}</p> : null}
            </label>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? 'Sending…' : 'Send message'}
            </Button>
            {submitted ? (
              <p className="text-sm font-medium text-brand">Message ready to send. Thanks for reaching out.</p>
            ) : null}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
