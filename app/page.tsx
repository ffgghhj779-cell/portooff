import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { Story } from "@/components/Story";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Belief } from "@/components/Belief";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden font-sans">

        {/* ── Dark opening: hero statement + numbers strip ── */}
        <section data-scroll-theme="dark" className="theme-dark">
          <Hero />
          <Numbers />
        </section>

        {/* ── Warm cream zone: origin story + marquee ── */}
        <section
          data-scroll-theme="light"
          className="rounded-t-[2.5rem]"
          style={{ backgroundColor: '#f5f0ea' }}
        >
          <Story />
          <Marquee />
        </section>

        {/* ── Dark zone: selected work ── */}
        <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
          <Projects limit={6} />
        </section>

        {/* ── Dark zone: how we work (services) ── */}
        <section data-scroll-theme="dark" className="theme-dark">
          <Services />
        </section>

        {/* ── Warm cream zone: belief manifesto ── */}
        <section
          data-scroll-theme="light"
          className="rounded-t-[2.5rem]"
          style={{ backgroundColor: '#f5f0ea' }}
        >
          <Belief />
        </section>

        {/* ── Dark footer ── */}
        <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
          <Footer />
        </section>

      </main>
    </>
  );
}
