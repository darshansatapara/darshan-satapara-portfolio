import { getBaseUrl } from "../seo";
import portfolio from "../data/portfolio.json";

export const metadata = {
  title: "AI Automation, Full-Stack & Data Engineering Services",
  description: "Full-stack web development, Python APIs, generative AI and LLM automation, OCR document processing, ETL pipelines and database optimization.",
  keywords: ["AI automation services", "full stack developer India", "Python backend developer", "LLM automation developer", "OCR development", "data engineering services"],
  alternates: {
    canonical: `${getBaseUrl()}/service`,
  },
  openGraph: {
    title: `${portfolio.personal.name} - AI Automation & Full-Stack Services`,
    description: "React, Next.js, Node.js, Python, OCR, LLM automation and data-engineering capabilities.",
    url: `${getBaseUrl()}/service`,
    type: "website",
  },
};

export default function ServiceLayout({ children }) {
  return children;
}
