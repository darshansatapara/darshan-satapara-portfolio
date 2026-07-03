import { getBaseUrl } from "./seo";
import portfolio from "./data/portfolio.json";

export default function sitemap() {
  const baseUrl = getBaseUrl();
  const lastModified = new Date(portfolio.personal.contentUpdated);

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
