import type { Metadata } from "next";
import { home, work, pageMeta, type Project } from "@/lib/data";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Statement from "@/components/sections/Statement";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = pageMeta(home.meta);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Statement />
      <About />
      <Services />
      <Projects
        items={work.sections.projects as Project[]}
        limit={6}
        heading="Featured projects"
      />
      <Faq />
    </>
  );
}
