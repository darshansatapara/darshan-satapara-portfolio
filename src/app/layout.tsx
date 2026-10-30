import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import RevealObserver from "@/components/RevealObserver";
import ScrollProgress from "@/components/ScrollProgress";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: site.seo.defaultTitle,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.contact.email}`,
  telephone: site.contact.phone,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.country,
  },
  sameAs: site.socials.map((s) => s.url),
  knowsAbout: site.seo.keywords,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
