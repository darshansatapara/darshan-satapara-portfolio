import Link from "next/link";
import portfolio from "../data/portfolio.json";

export default function Projects() {
  return (
    <section id="work" className="w-full mx-auto border-x-4 border-b-4 border-black bg-white text-black font-mono border-t-0">
      <div className="bg-black text-white hover:bg-white hover:text-black p-6 md:p-8 border-b-4 border-black flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Projects & Case Studies</h2>
        <a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest border border-current px-4 py-2 rounded-full">
          View GitHub Profile ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <article key={project.id} className={`group relative p-8 md:p-12 border-b-4 border-black ${index % 2 === 0 ? "md:border-r-4" : ""} hover:bg-[#fffdf5] transition-colors`}>
            <div className="flex justify-between items-start mb-6">
              <span className="text-5xl font-black opacity-10 group-hover:opacity-100 transition-opacity">{project.id}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest border-2 border-black px-2 py-1 ${project.color}`}>{project.category}</span>
            </div>
            <h3 className="text-3xl font-black uppercase mb-4 leading-none group-hover:translate-x-2 transition-transform">{project.title}</h3>
            <p className="font-medium text-sm leading-relaxed opacity-80 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => <span key={tech} className="text-xs font-bold bg-gray-100 border border-black px-2 py-1">#{tech}</span>)}
            </div>
            <div className="flex gap-4">
              {project.demo && <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black text-white text-center py-3 font-bold border-2 border-black hover:bg-transparent hover:text-black shadow-[4px_4px_0_#000] transition-all">VIEW</Link>}
              {project.code && <Link href={project.code} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-black text-center py-3 font-bold border-2 border-black hover:bg-[#ff6b6b] hover:text-white shadow-[4px_4px_0_#000] transition-all">CODE</Link>}
              {!project.demo && !project.code && <span className="text-xs font-bold uppercase border-2 border-black bg-gray-100 px-4 py-3">Internal project</span>}
            </div>
          </article>
        ))}
      </div>

      <div className="bg-[#facc15] p-8 text-center">
        <h3 className="text-2xl font-bold uppercase mb-4">Have a project in mind?</h3>
        <Link href="/contact" className="inline-block bg-black text-white px-8 py-4 font-black text-xl border-2 border-black hover:bg-white hover:text-black shadow-[6px_6px_0_#fff] transition-all">LET&apos;S BUILD IT ⚡</Link>
      </div>
    </section>
  );
}
