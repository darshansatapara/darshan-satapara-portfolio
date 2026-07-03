import { getBaseUrl } from "../seo";
import portfolio from "../data/portfolio.json";

export const metadata = {
  title: "Work",
  description: `Selected projects by ${portfolio.personal.name}, including full-stack products, ETL pipelines, OCR, and AI automation.`,
  alternates: {
    canonical: `${getBaseUrl()}/work`,
  },
};

export default function WorkLayout({ children }) {
  return children;
}
