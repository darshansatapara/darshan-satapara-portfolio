import type { Metadata } from "next";
import { about, pageMeta } from "@/lib/data";
import PageHeader from "@/components/sections/PageHeader";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = pageMeta(about.meta);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label={about.sections.intro.label}
        title="Darshan Satapara"
      />
      <AboutContent />
    </>
  );
}
