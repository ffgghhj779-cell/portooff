import { ContactForm } from '@/components/ContactForm';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Contact',
  'Get in touch with Tasami — tell us about your project.'
);

export default function ContactPage() {
  return (
    <>
      <Navbar variant="light" />
      <main className="min-h-screen overflow-x-hidden font-sans">
        <section data-scroll-theme="light" className="theme-light">
          <ContactForm />
        </section>
        <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
          <Footer />
        </section>
      </main>
    </>
  );
}
