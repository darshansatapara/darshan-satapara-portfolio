import portfolio from "./data/portfolio.json";

const { personal, socials, skills, seo } = portfolio;

export const siteConfig = {
  name: personal.name,
  shortName: personal.firstName,
  title: seo.title,
  description: seo.description,
  domain: personal.domain,
  keywords: [...seo.primaryKeywords, ...seo.longTailKeywords],
  email: personal.email,
  phone: personal.phone,
  profileImage: personal.profileImage,
  locale: "en_IN",
  sameAs: [...Object.values(socials), ...portfolio.creatorProfiles.map((profile) => profile.url)]
};

export function getBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain).replace(/\/$/, "");
}

function personEntity() {
  const baseUrl = getBaseUrl();
  const currentCompanies = portfolio.experience
    .filter((job) => job.current)
    .map((job) => ({ "@type": "Organization", name: job.company, url: job.url }));

  return {
    "@type": "Person",
    "@id": `${baseUrl}/#darshan-satapara`,
    name: personal.name,
    alternateName: [personal.brand, "Darshan", ...portfolio.creatorProfiles.map((profile) => profile.handle)],
    url: baseUrl,
    image: [`${baseUrl}${personal.profileImage}`, `${baseUrl}${personal.secondaryProfileImage}`],
    jobTitle: personal.role,
    hasOccupation: [
      { "@type": "Occupation", name: "Full-Stack Developer" },
      { "@type": "Occupation", name: "Python Developer" },
      { "@type": "Occupation", name: "AI Developer" },
      { "@type": "Occupation", name: "Data Engineer" }
    ],
    description: personal.summary,
    email: personal.email,
    telephone: personal.phone,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    alumniOf: { "@type": "CollegeOrUniversity", name: portfolio.education[0].institution },
    worksFor: currentCompanies,
    knowsAbout: [...Object.values(skills).flat(), ...seo.expertiseTopics],
    knowsLanguage: portfolio.languages,
    award: portfolio.certificates.map((certificate) => `${certificate.name} - ${certificate.issuer}`),
    nationality: "Indian",
    sameAs: siteConfig.sameAs
  };
}

export function personJsonLd() {
  return { "@context": "https://schema.org", ...personEntity() };
}

export function websiteJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.title,
    alternateName: personal.brand,
    url: baseUrl,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${baseUrl}/#darshan-satapara` }
  };
}

export function profilePageJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${baseUrl}/about#profile-page`,
    url: `${baseUrl}/about`,
    name: `About ${personal.name} - Full-Stack, Python and AI Developer`,
    description: personal.about,
    dateModified: personal.contentUpdated,
    mainEntity: personEntity()
  };
}

export function projectsJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}/work#project-list`,
    name: `${personal.name} software, AI and data engineering projects`,
    description: "Full-stack, SaaS, eCommerce, OCR, ETL, generative AI and automation projects.",
    numberOfItems: portfolio.projects.length,
    itemListElement: portfolio.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: project.category,
        keywords: project.tech.join(", "),
        ...(project.demo || project.code ? { url: project.demo || project.code } : {}),
        author: { "@id": `${baseUrl}/#darshan-satapara` }
      }
    }))
  };
}

export function servicesJsonLd() {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}/service#service-list`,
    name: `${personal.name} development services`,
    numberOfItems: portfolio.services.length,
    itemListElement: portfolio.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: { "@id": `${baseUrl}/#darshan-satapara` },
        areaServed: { "@type": "Country", name: "India" }
      }
    }))
  };
}

export function breadcrumbJsonLd(items) {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seo.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}
