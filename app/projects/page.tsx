import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Projects } from '@/components/Projects';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Projects',
  'Selected work from Tasami — digital products, brand sites, and design systems.'
);

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden font-sans">
        <section data-scroll-theme="dark" className="theme-dark min-h-screen">
          <div className="section-pad pb-0 pt-32 md:pt-40">
            <div className="section-shell mb-8 md:mb-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                Portfolio
              </p>
              <h1 className="heading-display type-section max-w-3xl font-bold tracking-tighter text-white">
                All projects
              </h1>
            </div>
          </div>
          <Projects />
        </section>
        <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
          <Footer />
        </section>
      </main>
    </>
  );
}
