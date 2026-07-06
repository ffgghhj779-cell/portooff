'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { SITE } from '@/lib/data/site';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

export function ContactForm() {
  const t = useTranslations();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const budgets = ['10–20k EGP', '30–50k EGP', '50–100k EGP', '100k+ EGP'];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          message: data.get('message'),
          interests: selectedInterests,
          budget: selectedBudget,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to send');

      setStatus('success');
      form.reset();
      setSelectedInterests([]);
      setSelectedBudget(null);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : t.contact.messageSent);
    }
  };

  if (status === 'success') {
    return (
      <div className="section-pad flex min-h-[70vh] w-full items-center">
        <div className="section-shell max-w-2xl text-center md:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
            {t.contact.success}
          </p>
          <h1 className="heading-display type-section mb-6 font-bold tracking-tighter">
            {t.contact.successBody}
          </h1>
          <p className="mb-8 text-lg text-black/60">
            {t.contact.callUs}{' '}
            <a href={`tel:${SITE.phone}`} className="font-semibold text-black underline">
              {SITE.phone}
            </a>
          </p>
          <MagneticButton>
            <Link href="/" className="btn-pill inline-block bg-black text-white">
              {t.contact.backHome}
            </Link>
          </MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <div className="section-pad min-h-screen w-full bg-[#f4f4f4] text-black">
      <div className="section-shell max-w-4xl">
        <div className="mb-16 border-b border-black/10 pb-12 md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
            {SITE.name} · {SITE.nameAr}
          </p>
          <h1 className="heading-display type-section mb-10 font-bold leading-[0.92]">
            {t.contact.title}
          </h1>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                {t.contact.callUs}
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="heading-display type-section block font-bold leading-none tracking-tight"
              >
                {SITE.phone}
              </a>
            </div>
            <MagneticButton>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex rounded-full border border-black/20 px-6 py-3 text-sm font-medium"
              >
                {SITE.email}
              </a>
            </MagneticButton>
          </div>
        </div>

        <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <label className="heading-display text-2xl font-bold">{t.contact.interestedIn}</label>
            <div className="flex flex-wrap gap-3">
              {t.contact.interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`rounded-full border px-6 py-3 text-base font-medium transition-colors ${
                    selectedInterests.includes(interest)
                      ? 'border-black bg-black text-white'
                      : 'border-black/20 bg-transparent text-black/60'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <input
              name="name"
              type="text"
              placeholder={t.contact.placeholderName}
              required
              className="w-full border-b border-black/20 bg-transparent pb-4 text-2xl placeholder-black/35 outline-none focus:border-black"
            />
            <input
              name="email"
              type="email"
              placeholder={t.contact.placeholderEmail}
              required
              className="w-full border-b border-black/20 bg-transparent pb-4 text-2xl placeholder-black/35 outline-none focus:border-black"
            />
            <input
              name="phone"
              type="tel"
              placeholder={t.contact.placeholderPhone}
              className="w-full border-b border-black/20 bg-transparent pb-4 text-2xl placeholder-black/35 outline-none focus:border-black"
            />
            <input
              name="message"
              type="text"
              placeholder={t.contact.placeholderMessage}
              className="w-full border-b border-black/20 bg-transparent pb-4 text-2xl placeholder-black/35 outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-col gap-6">
            <label className="heading-display text-2xl font-bold">{t.contact.budget}</label>
            <div className="flex flex-wrap gap-3">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`rounded-full border px-6 py-3 text-base font-medium transition-colors ${
                    selectedBudget === budget
                      ? 'border-black bg-black text-white'
                      : 'border-black/20 bg-transparent text-black/60'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {status === 'error' && (
            <p className="text-sm font-medium text-red-600">{errorMsg}</p>
          )}

          <div>
            <MagneticButton>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-black px-12 py-5 font-medium text-white disabled:opacity-60"
              >
                {status === 'loading' ? t.contact.sending : t.contact.send}
              </button>
            </MagneticButton>
          </div>
        </form>
      </div>
    </div>
  );
}
