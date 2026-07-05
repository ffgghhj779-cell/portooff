'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';

const PRIMARY_PHONE = '01144003490';
const PRIMARY_EMAIL = 'hello@tasami.com';

export function ContactForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const interests = [
    'Site from scratch',
    'UX/UI design',
    'Product design',
    'Webflow site',
    'Motion design',
    'Branding',
    'Mobile development',
  ];

  const budgets = ['10-20k', '30-40k', '40-50k', '50-100k', '> 100k'];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="section-pad min-h-screen w-full">
      <div className="section-shell max-w-4xl">
        <div className="mb-16 border-b border-black/10 pb-12 md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
            Tasami · تسامي
          </p>
          <h1 className="heading-display mb-10 text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.9]">
            Hey! Tell us all
            <br />
            the things
          </h1>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                Call us directly
              </p>
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="heading-display block text-[clamp(2rem,6vw,3.5rem)] font-bold leading-none tracking-tight"
              >
                {PRIMARY_PHONE}
              </a>
            </div>
            <MagneticButton>
              <a
                href={`mailto:${PRIMARY_EMAIL}`}
                className="inline-flex rounded-full border border-black/20 px-6 py-3 text-sm font-medium"
              >
                {PRIMARY_EMAIL}
              </a>
            </MagneticButton>
          </div>
        </div>

        <form className="flex flex-col gap-16" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-6">
            <label className="heading-display text-2xl font-bold">
              I&apos;m interested in...
            </label>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`rounded-full border px-6 py-3 text-base font-medium ${
                    selectedInterests.includes(interest)
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 bg-transparent text-gray-500'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full border-b border-gray-300 bg-transparent pb-4 text-2xl placeholder-gray-400 outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border-b border-gray-300 bg-transparent pb-4 text-2xl placeholder-gray-400 outline-none focus:border-black"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="w-full border-b border-gray-300 bg-transparent pb-4 text-2xl placeholder-gray-400 outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="Tell us about your project"
              className="w-full border-b border-gray-300 bg-transparent pb-4 text-2xl placeholder-gray-400 outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-6">
            <label className="heading-display text-2xl font-bold">
              Project budget (USD)
            </label>
            <div className="flex flex-wrap gap-3">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`rounded-full border px-6 py-3 text-base font-medium ${
                    selectedBudget === budget
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 bg-transparent text-gray-500'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          <div>
            <MagneticButton>
              <button
                type="submit"
                className="rounded-full bg-black px-12 py-5 font-medium text-white"
              >
                Send request
              </button>
            </MagneticButton>
          </div>

          <p className="max-w-sm text-sm text-gray-400">
            Prefer a quick call? Dial{' '}
            <a href={`tel:${PRIMARY_PHONE}`} className="font-semibold text-black underline">
              {PRIMARY_PHONE}
            </a>{' '}
            — we respond within one business day.
          </p>
        </form>
      </div>
    </div>
  );
}
