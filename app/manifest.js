import { getBaseUrl, siteConfig } from "./seo";

export default function manifest() {
  const baseUrl = getBaseUrl();

  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fefbed",
    theme_color: "#fefbed",
    lang: "en-IN",
    icons: [
      {
        src: `${baseUrl}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
