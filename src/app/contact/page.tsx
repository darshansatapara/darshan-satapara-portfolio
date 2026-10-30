import type { Metadata } from "next";
import { contact, pageMeta } from "@/lib/data";
import PageHeader from "@/components/sections/PageHeader";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = pageMeta(contact.meta);

export default function ContactPage() {
  const intro = contact.sections.intro;
  return (
    <>
      <PageHeader label={intro.status} title={intro.heading} sub={intro.sub} />
      <ContactContent />
    </>
  );
}
