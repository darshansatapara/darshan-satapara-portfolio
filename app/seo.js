import portfolio from "./data/portfolio.json";

const { personal, socials, skills } = portfolio;

export const siteConfig = {
  name: personal.name,
  shortName: personal.firstName,
  title: `${personal.name} | ${personal.role} Portfolio`,
  description: personal.summary,
  domain: personal.domain,
  keywords: [personal.name, `${personal.name} portfolio`, personal.role, "Full Stack Developer", "Python Developer", "React Developer", "Node.js Developer", "AI Automation", "OCR", "Data Engineering"],
  email: personal.email,
  phone: personal.phone,
  locale: "en_IN",
  sameAs: Object.values(socials)
};

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain;
}

export function personJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: baseUrl,
    image: `${baseUrl}${personal.profileImage}`,
    jobTitle: personal.role,
    description: personal.summary,
    email: personal.email,
    telephone: personal.phone,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    alumniOf: { "@type": "CollegeOrUniversity", name: portfolio.education[0].institution },
    knowsAbout: Object.values(skills).flat(),
    nationality: "Indian",
    sameAs: siteConfig.sameAs
  };
}

export function websiteJsonLd() {
  return { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.title, url: getBaseUrl(), inLanguage: "en-IN" };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: personal.name,
    url: getBaseUrl(),
    logo: `${getBaseUrl()}/favicon.ico`,
    sameAs: siteConfig.sameAs,
    contactPoint: [{ "@type": "ContactPoint", contactType: "professional inquiries", email: personal.email, availableLanguage: portfolio.languages }]
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `Who is ${personal.name}?`, acceptedAnswer: { "@type": "Answer", text: `${personal.name} is a full-stack and Python developer building scalable web products, data pipelines, OCR systems, and AI automation.` } },
      { "@type": "Question", name: `What does ${personal.name} build?`, acceptedAnswer: { "@type": "Answer", text: "Darshan builds React and Next.js applications, Node.js and Python backends, ETL pipelines, OCR systems, and LLM automation workflows." } },
      { "@type": "Question", name: `How can I contact ${personal.name}?`, acceptedAnswer: { "@type": "Answer", text: `Contact Darshan at ${personal.email}, by phone, LinkedIn, or GitHub.` } }
    ]
  };
}
