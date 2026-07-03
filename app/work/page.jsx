import Link from "next/link";
import portfolio from "../data/portfolio.json";
import { breadcrumbJsonLd, projectsJsonLd } from "../seo";

export default function Work() {
  const schemas = [
    projectsJsonLd(),
    breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])
  ];

  return (
    <main className="min-h-screen bg-[#fffdf5] py-12 px-4 md:px-8 font-mono text-black">
      {schemas.map((schema) => <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <span className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase shadow-[4px_4px_0_#4ecdc4]">Portfolio 2026</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mt-4">Full-Stack, AI<br />& Data Projects</h1>
        </div>
        <a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer" className="border-4 border-black bg-[#facc15] px-6 py-4 font-black uppercase shadow-[6px_6px_0_#000]">GitHub profile ↗</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolio.projects.map((project) => (
          <article key={project.id} className="border-4 border-black bg-white p-8 shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-transform">
            <div className="flex justify-between gap-4 mb-6">
              <span className="text-5xl font-black opacity-15">{project.id}</span>
              <span className={`${project.color} border-2 border-black px-3 py-1 h-fit text-xs font-bold uppercase`}>{project.category}</span>
            </div>
            <h2 className="text-3xl font-black uppercase mb-5">{project.title}</h2>
            <p className="font-medium leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">{project.tech.map((tech) => <span key={tech} className="border border-black bg-gray-100 px-2 py-1 text-xs font-bold">#{tech}</span>)}</div>
            <div className="flex gap-4">
              {project.demo && <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-black text-white border-2 border-black px-5 py-3 font-bold uppercase">View ↗</Link>}
              {project.code && <Link href={project.code} target="_blank" rel="noopener noreferrer" className="bg-[#4ecdc4] border-2 border-black px-5 py-3 font-bold uppercase">Code ↗</Link>}
              {!project.demo && !project.code && <span className="border-2 border-black bg-gray-100 px-5 py-3 font-bold uppercase">Internal project</span>}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
