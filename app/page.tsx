import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden font-sans">
        {/* Cuberto: dark hero + showreel */}
        <section data-scroll-theme="dark" className="theme-dark">
          <Hero />
          <VideoShowcase />
        </section>

        {/* Cuberto: light zone — about, contact marquee, work, services */}
        <section
          data-scroll-theme="light"
          className="theme-light rounded-t-[2.5rem]"
        >
          <WhatWeDo />
          <Marquee />
          <Projects />
          <Services />
        </section>

        {/* Cuberto: dark footer zone — blog + CTA */}
        <section
          data-scroll-theme="dark"
          className="theme-dark rounded-t-[2.5rem]"
        >
          <Blog />
          <Footer />
        </section>
      </main>
    </>
  );
}
