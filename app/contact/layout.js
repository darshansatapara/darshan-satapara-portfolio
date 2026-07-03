import { getBaseUrl } from "../seo";
import portfolio from "../data/portfolio.json";

export const metadata = {
  title: `Contact ${portfolio.personal.name}`,
  description: `Contact ${portfolio.personal.name} for full-stack, Python, data engineering, and AI automation opportunities.`,
  keywords: [`Contact ${portfolio.personal.name}`, `${portfolio.personal.name} developer`, portfolio.personal.email],
  alternates: {
    canonical: `${getBaseUrl()}/contact`,
  },
  openGraph: {
    title: `Contact ${portfolio.personal.name}`,
    description: `Reach out to ${portfolio.personal.name} for development work and collaboration.`,
    url: `${getBaseUrl()}/contact`,
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
