import { getBaseUrl } from "../seo";
import portfolio from "../data/portfolio.json";

export const metadata = {
  title: `About ${portfolio.personal.name}`,
  description: portfolio.personal.about,
  keywords: [portfolio.personal.name, `About ${portfolio.personal.name}`, portfolio.personal.role],
  alternates: {
    canonical: `${getBaseUrl()}/about`,
  },
  openGraph: {
    title: `About ${portfolio.personal.name}`,
    description: portfolio.personal.about,
    url: `${getBaseUrl()}/about`,
    type: "profile",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
