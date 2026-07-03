import { getBaseUrl } from "../seo";
import portfolio from "../data/portfolio.json";

export const metadata = {
  title: "Full-Stack, AI & Data Engineering Projects",
  description: "Explore Darshan Satapara's React, Next.js, Node.js, Python, SaaS, eCommerce, OCR, ETL, LLM fine-tuning and AI automation projects.",
  keywords: ["full stack projects", "AI developer portfolio", "Python projects", "data engineering projects", "OCR project", "LLM projects", "Next.js portfolio"],
  alternates: {
    canonical: `${getBaseUrl()}/work`,
  },
  openGraph: {
    title: `${portfolio.personal.name} - Full-Stack, AI & Data Engineering Projects`,
    description: "SaaS, eCommerce, OCR, ETL, generative AI and automation case studies.",
    url: `${getBaseUrl()}/work`,
    type: "website",
  },
};

export default function WorkLayout({ children }) {
  return children;
}
