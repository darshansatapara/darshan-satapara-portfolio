import { getBaseUrl } from "../seo";
import portfolio from "../data/portfolio.json";

export const metadata = {
  title: "Services",
  description: `${portfolio.personal.name}'s capabilities in full-stack development, AI automation, and data engineering.`,
  alternates: {
    canonical: `${getBaseUrl()}/service`,
  },
};

export default function ServiceLayout({ children }) {
  return children;
}
