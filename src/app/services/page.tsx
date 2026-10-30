import type { Metadata } from "next";
import { services, pageMeta } from "@/lib/data";
import PageHeader from "@/components/sections/PageHeader";
import ServicesDetailed from "@/components/sections/ServicesDetailed";

export const metadata: Metadata = pageMeta(services.meta);

export default function ServicesPage() {
  const intro = services.sections.intro;
  return (
    <>
      <PageHeader label={intro.label} title={intro.heading} sub={intro.sub} />
      <ServicesDetailed />
    </>
  );
}
