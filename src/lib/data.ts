import siteJson from "@/data/site.json";
import homeJson from "@/data/home.json";
import aboutJson from "@/data/about.json";
import servicesJson from "@/data/services.json";
import workJson from "@/data/work.json";
import contactJson from "@/data/contact.json";

export const site = siteJson;
export const home = homeJson;
export const about = aboutJson;
export const services = servicesJson;
export const work = workJson;
export const contact = contactJson;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
};

export type Project = {
  n: string;
  cat: string;
  title: string;
  desc: string;
  tags: string[];
  view?: string;
  code?: string;
  /** present only on projects that have a repo/live link and so get a detail page */
  slug?: string;
  overview?: string;
  features?: string[];
  /** screenshot of the live site, served from /public */
  image?: string;
};

/** Projects that have a dedicated case-study page (they carry a slug). */
export const projectsWithPages = (work.sections.projects as Project[]).filter(
  (p): p is Project & { slug: string } => Boolean(p.slug)
);

export function getProjectBySlug(slug: string): Project | undefined {
  return (work.sections.projects as Project[]).find((p) => p.slug === slug);
}

export type Experience = {
  period: string;
  current?: boolean;
  role: string;
  company: string;
  points: string[];
};

/** Build a Next.js Metadata object from a page's meta block. */
export function pageMeta(meta: PageMeta) {
  const isHome = meta.path === "/";
  return {
    title: isHome ? meta.title : { absolute: `${meta.title} | ${site.name}` },
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: meta.path },
    openGraph: {
      title: isHome ? meta.title : `${meta.title} | ${site.name}`,
      description: meta.description,
      url: meta.path,
      siteName: site.name,
      type: "website" as const,
    },
  };
}
