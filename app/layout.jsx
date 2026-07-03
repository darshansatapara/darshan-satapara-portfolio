import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { getBaseUrl, organizationJsonLd, personJsonLd, siteConfig, websiteJsonLd } from "./seo";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body", display: "swap" });

export default function RootLayout({ children }) {
  const schemas = [personJsonLd(), websiteJsonLd(), organizationJsonLd()];

  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${spaceMono.variable} antialiased`}>
        <Navbar />
        {children}
        {schemas.map((schema) => (
          <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: getBaseUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getBaseUrl(),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: `${siteConfig.name} - Full-Stack, Python & AI Developer` }]
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: ["/profile.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "technology"
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#fefbed" };
