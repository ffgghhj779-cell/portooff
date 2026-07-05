import { ContactForm } from '@/components/ContactForm';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden font-sans">
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
