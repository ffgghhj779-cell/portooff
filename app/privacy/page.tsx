import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { pageMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/data/site';

export const metadata = pageMetadata(
  'Privacy Policy',
  `Privacy policy for ${SITE.name} digital agency website.`
);

export default function PrivacyPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className="min-h-screen bg-[#f4f4f4] text-black">
        <div className="section-pad pt-32 md:pt-40">
          <div className="section-shell max-w-3xl">
            <h1 className="heading-display type-section mb-8 font-bold tracking-tighter">
              Privacy Policy
            </h1>
            <div className="space-y-6 text-base leading-relaxed text-black/75">
              <p>
                {SITE.name} ({SITE.nameAr}) respects your privacy. This policy explains how we
                collect and use information when you visit our website or contact us.
              </p>
              <h2 className="text-xl font-bold text-black">Information we collect</h2>
              <p>
                When you submit our contact form, we collect your name, email, phone number
                (optional), project details, and service interests you select.
              </p>
              <h2 className="text-xl font-bold text-black">How we use it</h2>
              <p>
                We use this information solely to respond to inquiries, provide quotes, and
                deliver our services. We do not sell your data to third parties.
              </p>
              <h2 className="text-xl font-bold text-black">Contact</h2>
              <p>
                Questions? Email{' '}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>{' '}
                or call{' '}
                <a href={`tel:${SITE.phone}`} className="underline">
                  {SITE.phone}
                </a>
                .
              </p>
            </div>
            <Link
              href="/"
              className="btn-pill mt-12 inline-block border border-black/20 text-black"
            >
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
