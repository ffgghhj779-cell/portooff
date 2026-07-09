import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Projects } from '@/components/Projects';
import { pageMetadata } from '@/lib/metadata';
import { WorkHeader } from './WorkHeader';

export const metadata = pageMetadata(
  'Work',
  'Selected work from Madar — digital products, brand sites, and design systems.'
);

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden font-sans">
        <section data-scroll-theme="dark" className="theme-dark min-h-screen">
          <WorkHeader />
          <Projects />
        </section>
        <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
          <Footer />
        </section>
      </main>
    </>
  );
}
