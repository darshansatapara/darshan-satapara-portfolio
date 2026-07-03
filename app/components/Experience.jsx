import Image from "next/image";
import Link from "next/link";
import portfolio from "../data/portfolio.json";

export default function Experience() {
  return (
    <section className="w-full mx-auto border-x-4 border-b-4 border-black bg-white text-black font-mono border-t-0">
      <div className="bg-black text-white hover:bg-white hover:text-black p-4 flex justify-between items-center border-b-4 border-black transition-colors">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Work History</h2>
        <span className="text-xs font-bold border border-current px-3 py-1 rounded-full">{portfolio.experience.length} ROLES</span>
      </div>

      {portfolio.experience.map((job, index) => (
        <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 border-b-4 last:border-b-0 border-black">
          <div className="lg:col-span-3 bg-[#fffdf5] p-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-center relative">
            {job.current && <span className="absolute top-5 right-5 bg-green-500 border-2 border-black px-3 py-1 text-xs font-bold uppercase shadow-[2px_2px_0_#000]">Current</span>}
            <span className="text-6xl font-black opacity-10">{job.id}</span>
            <p className="text-lg font-bold mt-2 uppercase">{job.period}</p>
          </div>
          <div className="lg:col-span-9 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative w-14 h-14 shrink-0 border-2 border-black bg-white">
                <Image src={job.logo} alt={`${job.company} logo`} fill className="object-contain p-1" sizes="56px" unoptimized />
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase">{job.role}</h3>
            </div>
            <p className="mb-6 text-sm font-bold uppercase" style={{ color: job.accent }}>@ {job.company}</p>
            <ul className="bg-gray-100 p-6 border-l-4 border-black mb-6 space-y-3">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 font-medium leading-relaxed"><span className="font-black">→</span><span>{highlight}</span></li>
              ))}
            </ul>
            <Link href={job.url} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_#000]">
              Visit {job.company} ↗
            </Link>
          </div>
          {index < portfolio.experience.length - 1 && <div className="lg:col-span-12 h-3 bg-[#facc15] border-t-4 border-black" />}
        </div>
      ))}
    </section>
  );
}
