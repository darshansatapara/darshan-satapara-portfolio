import Image from "next/image";
import Link from "next/link";
import portfolio from "../data/portfolio.json";
import { breadcrumbJsonLd, profilePageJsonLd } from "../seo";

export default function About() {
  const { personal, education, skills, certificates, languages } = portfolio;
  const schemas = [
    profilePageJsonLd(),
    breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])
  ];

  return (
    <main className="min-h-screen bg-[#fffdf5] py-12 px-4 md:px-8 font-mono text-black">
      {schemas.map((schema) => <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-4 border-black bg-white shadow-[12px_12px_0_#000]">
        <div className="lg:col-span-7 p-8 md:p-14 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <span className="inline-block bg-[#facc15] border-2 border-black px-3 py-1 text-xs font-black uppercase -rotate-2">About me</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] my-8">{personal.firstName}<br />{personal.lastName}</h1>
          <p className="text-lg md:text-xl font-bold leading-relaxed text-gray-700">{personal.about}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href={portfolio.socials.linkedin} target="_blank" className="bg-black text-white border-2 border-black px-5 py-3 font-bold uppercase">LinkedIn ↗</Link>
            <Link href={portfolio.socials.github} target="_blank" className="bg-[#4ecdc4] border-2 border-black px-5 py-3 font-bold uppercase">GitHub ↗</Link>
            {portfolio.resumes.map((resume) => <a key={resume.id} href={resume.file} download className="bg-[#ff6b6b] text-white border-2 border-black px-5 py-3 font-bold uppercase">{resume.shortLabel} ↓</a>)}
          </div>
        </div>
        <div className="lg:col-span-5 relative min-h-[500px]">
          <Image src={personal.secondaryProfileImage} alt={personal.name} fill className="object-cover" priority />
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="border-4 border-black bg-[#4ecdc4] p-8 shadow-[8px_8px_0_#000]">
          <h2 className="text-3xl font-black uppercase mb-6">Education</h2>
          {education.map((item) => <div key={item.degree}><h3 className="text-xl font-black">{item.degree}</h3><p className="font-bold mt-2">{item.institution}</p><p>{item.period} • {item.score}</p></div>)}
        </div>
        <div className="border-4 border-black bg-[#facc15] p-8 shadow-[8px_8px_0_#000]">
          <h2 className="text-3xl font-black uppercase mb-6">Certificates</h2>
          <ul className="space-y-4">{certificates.map((certificate) => <li key={certificate.name} className="font-bold flex gap-3"><span>→</span><span>{certificate.name}<small className="block opacity-70 mt-1">{certificate.issuer}</small></span></li>)}</ul>
        </div>
        <div className="border-4 border-black bg-[#ff6b6b] text-white p-8 shadow-[8px_8px_0_#000]">
          <h2 className="text-3xl font-black uppercase mb-6">Languages</h2>
          <div className="flex flex-wrap gap-3">{languages.map((language) => <span key={language} className="border-2 border-white px-4 py-2 font-bold uppercase">{language}</span>)}</div>
        </div>
      </section>

      <section className="mt-16 border-4 border-black bg-white shadow-[12px_12px_0_#000]">
        <h2 className="text-4xl md:text-6xl font-black uppercase p-8 border-b-4 border-black">Technical Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category} className={`p-8 border-b-4 border-black ${index % 3 !== 2 ? "lg:border-r-4" : ""}`}>
              <h3 className="text-xl font-black uppercase mb-5">{category}</h3>
              <div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="border-2 border-black bg-gray-100 px-3 py-1 text-xs font-bold">{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-4 border-black bg-black text-white shadow-[12px_12px_0_#ff6b6b]">
        <div className="p-8 md:p-12 border-b-4 border-white/30">
          <span className="inline-block bg-[#facc15] text-black border-2 border-white px-3 py-1 text-xs font-black uppercase -rotate-2">Beyond Code</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mt-6">Podcasting, discussions<br />& vlogging.</h2>
          <p className="mt-6 max-w-3xl text-lg font-bold text-gray-300 leading-relaxed">I enjoy conversations as much as code. Through my channels, I host podcasts and group discussions, share ideas with people, and document personal experiences through vlogs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {portfolio.creatorProfiles.map((profile, index) => (
            <Link
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-8 text-black border-b-4 border-white/30 ${index % 2 === 0 ? "md:border-r-4" : ""} ${profile.color} hover:brightness-95 transition-all group`}
            >
              <div className="flex justify-between items-start gap-4 mb-8">
                <span className="border-2 border-black px-3 py-1 text-xs font-black uppercase">{profile.platform}</span>
                <span className="text-3xl font-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </div>
              <h3 className="text-3xl font-black uppercase">{profile.name}</h3>
              <p className="font-black mt-2">{profile.handle}</p>
              <p className="mt-5 font-bold opacity-70">{profile.focus}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
