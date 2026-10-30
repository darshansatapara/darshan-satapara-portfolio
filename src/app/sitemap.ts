import type { MetadataRoute } from "next";
import { site, projectsWithPages } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = site.nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));
  const projects = projectsWithPages.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...projects];
}
