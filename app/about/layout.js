import { getBaseUrl } from "../seo";
import portfolio from "../data/portfolio.json";

export const metadata = {
  title: "About Me - AI, Python & Full-Stack Developer",
  description: "Meet Darshan Satapara, a full-stack, Python and AI developer experienced in React, Node.js, data engineering, OCR, LLM automation and podcasting.",
  keywords: [portfolio.personal.name, "AI developer India", "Python developer portfolio", "full stack developer portfolio", "LLM engineer", "data engineer"],
  alternates: {
    canonical: `${getBaseUrl()}/about`,
  },
  openGraph: {
    title: `About ${portfolio.personal.name} - AI, Python & Full-Stack Developer`,
    description: "Full-stack development, Python, data engineering, OCR, generative AI, podcasting and creator work.",
    url: `${getBaseUrl()}/about`,
    type: "profile",
    images: [portfolio.personal.secondaryProfileImage],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
