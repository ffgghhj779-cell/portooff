import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Marquee } from "@/components/Marquee";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden font-sans">
        <section data-scroll-theme="dark" className="theme-dark">
          <Hero />
        </section>

        <section data-scroll-theme="light" className="theme-light">
          <VideoShowcase />
          <Marquee />
          <WhatWeDo />
        </section>

        <section data-scroll-theme="dark" className="theme-dark">
          <Projects />
        </section>

        <section data-scroll-theme="light" className="theme-light">
          <Services />
        </section>

        <section data-scroll-theme="light" className="theme-light">
          <Blog />
        </section>

        <section data-scroll-theme="dark" className="theme-dark">
          <Footer />
        </section>
      </main>
    </>
  );
}
