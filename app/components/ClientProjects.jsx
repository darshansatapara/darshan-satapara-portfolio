import Link from "next/link";
import portfolio from "../data/portfolio.json";

export default function ClientProjects() {
  return (
    <section className="mt-16 border-4 border-black bg-white shadow-[12px_12px_0_#000]">
      <div className="p-8 md:p-12 border-b-4 border-black bg-[#facc15]">
        <span className="inline-block bg-black text-white px-3 py-1 text-xs font-black uppercase -rotate-2">
          Freelance Work
        </span>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mt-6">
          Client Projects
        </h2>
        <p className="mt-5 max-w-4xl text-base md:text-lg font-bold text-black/80 leading-relaxed">
          Selected freelance client work across real estate, edtech, and service
          marketplace products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {portfolio.clientProjects?.map((project, index) => (
          <article
            key={project.id}
            className={`p-8 md:p-10 border-b-4 border-black ${index % 3 !== 2 ? "lg:border-r-4" : ""} hover:bg-[#fffdf5] transition-colors`}
          >
            <div className="flex justify-between items-start gap-4 mb-6">
              <span className="text-5xl font-black opacity-10">
                {project.id}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest border-2 border-black px-2 py-1 bg-gray-100">
                {project.category}
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-70">
              {project.client}
            </p>
            <h3 className="text-3xl font-black uppercase leading-none mb-3">
              {project.title}
            </h3>
            <p className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70">
              {project.year}
            </p>

            <ul className="space-y-3 mb-8 text-sm leading-relaxed">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="font-black">→</span>
                  <span className="font-medium text-black/80">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold bg-gray-100 border border-black px-2 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-3 text-sm font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-colors"
                >
                  {link.label} ↗
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
