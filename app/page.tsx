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
      <main className="min-h-screen overflow-x-hidden font-sans">
        <section data-scroll-theme="dark">
          <Hero />
        </section>

        <div
          data-theme-bridge
          data-theme-from="dark"
          data-theme-to="light"
          className="theme-bridge pointer-events-none h-[32vh] min-h-[200px] max-h-[360px]"
          aria-hidden="true"
        />

        <section data-scroll-theme="light">
          <VideoShowcase />
          <Marquee />
          <WhatWeDo />
        </section>

        <div
          data-theme-bridge
          data-theme-from="light"
          data-theme-to="dark"
          className="theme-bridge pointer-events-none h-[32vh] min-h-[200px] max-h-[360px]"
          aria-hidden="true"
        />

        <section data-scroll-theme="dark">
          <Projects />
        </section>

        <div
          data-theme-bridge
          data-theme-from="dark"
          data-theme-to="light"
          className="theme-bridge pointer-events-none h-[28vh] min-h-[180px] max-h-[320px]"
          aria-hidden="true"
        />

        <section data-scroll-theme="light">
          <Services />
        </section>

        <div
          data-theme-bridge
          data-theme-from="light"
          data-theme-to="dark"
          className="theme-bridge pointer-events-none h-[24vh] min-h-[160px] max-h-[280px]"
          aria-hidden="true"
        />

        <section data-scroll-theme="dark">
          <Blog />
          <Footer />
        </section>
      </main>
    </>
  );
}
