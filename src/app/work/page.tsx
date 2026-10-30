import type { Metadata } from "next";
import { work, pageMeta, type Project, type Experience as Exp } from "@/lib/data";
import PageHeader from "@/components/sections/PageHeader";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = pageMeta(work.meta);

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Work & Projects"
        sub="Full-stack, AI and data engineering work — 5 roles and 16 shipped projects."
      />
      <Experience items={work.sections.experience as Exp[]} />
      <Projects
        items={work.sections.projects as Project[]}
        showFilter
        heading="All projects"
      />
    </>
  );
}
