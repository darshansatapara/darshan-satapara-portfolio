import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import portfolio from "./data/portfolio.json";
import { faqJsonLd, getBaseUrl } from "./seo";

export default function Home() {
  const baseUrl = getBaseUrl();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    name: `${portfolio.personal.name} | ${portfolio.personal.role} Portfolio`,
    url: `${baseUrl}/`,
    description: portfolio.seo.description,
    keywords: [...portfolio.seo.primaryKeywords, ...portfolio.seo.longTailKeywords].join(", "),
    dateModified: portfolio.personal.contentUpdated,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#darshan-satapara` },
    primaryImageOfPage: `${baseUrl}${portfolio.personal.profileImage}`,
    inLanguage: "en-IN"
  };

  return (
    <main className="bg-[#fefbed] min-h-screen pb-20 flex flex-col items-center px-4">
      <h1 className="sr-only">{portfolio.personal.name} {portfolio.personal.role} Portfolio</h1>
      <p className="sr-only">{portfolio.personal.summary}</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <FAQ />
    </main>
  );
}
