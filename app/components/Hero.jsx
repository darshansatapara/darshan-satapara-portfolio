import Image from "next/image";
import Link from "next/link";
import portfolio from "../data/portfolio.json";

export default function Hero() {
  const { personal } = portfolio;

  return (
    <section className="w-full mx-auto border-x-4 border-t-4 border-black grid grid-cols-1 lg:grid-cols-12 mt-8 bg-white font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
      <div className="lg:col-span-8 border-b-4 lg:border-r-4 border-black p-8 md:p-12 flex flex-col justify-center hover:bg-[#ff6b6b] hover:text-white transition-colors duration-300 group">
        <p className="font-bold text-xs md:text-sm tracking-widest mb-2 opacity-60 group-hover:text-black">
          PORTFOLIO
        </p>
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none wrap-break-words">
          {personal.firstName} <br className="hidden md:block" /> {personal.lastName}
        </h1>
      </div>

      <div className="lg:col-span-4 border-b-4 border-black p-8 flex flex-col justify-between bg-[#4ecdc4] min-h-50">
        <div className="flex justify-between items-start">
          <span className="text-4xl font-black opacity-50">01</span>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border-2 border-black rounded-full shadow-[2px_2px_0_0_#000]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600 border border-black" />
            </span>
            <span className="text-sm font-bold uppercase">{personal.availability}</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold border-b-2 border-black pb-1 mb-2 inline-block">STATUS</h2>
          <p className="text-xl md:text-2xl font-bold leading-tight">{personal.shortRole}</p>
        </div>
      </div>

      <div className="lg:col-span-5 lg:row-span-2 border-b-4 lg:border-b-0 lg:border-r-4 border-black relative h-150 lg:h-auto min-h-150 group overflow-hidden bg-[#e8f3e2]">
        <Image
          src={personal.profileImage}
          alt={personal.name}
          fill
          className="object-cover md:object-[center_25%] transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <p className="text-white text-sm">📍 {personal.location.toUpperCase()}</p>
        </div>
      </div>

      <div className="lg:col-span-7 border-b-4 border-black p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-black text-white px-2">FULL-STACK</span> & PYTHON DEVELOPER
        </h2>
        <p className="text-base md:text-xl text-[#444] font-medium leading-relaxed max-w-3xl">
          {personal.summary}
        </p>
        <div className="flex flex-wrap gap-2 mt-7">
          {portfolio.skills["Programming Languages"].concat(["React.js", "Node.js", "AI Automation"]).map((skill) => (
            <span key={skill} className="border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-bold uppercase">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 min-h-25">
        {portfolio.resumes.map((resume) => (
          <a key={resume.id} href={resume.file} download className="bg-white hover:bg-black hover:text-white border-b-4 sm:border-b-0 sm:border-r-4 border-black p-5 text-sm md:text-base font-bold flex items-center justify-center text-center transition-all">
            {resume.shortLabel.toUpperCase()} ↓
          </a>
        ))}
        <Link href="/contact" className="bg-[#ff6b6b] hover:bg-[#ff4747] text-white p-5 text-lg font-bold flex items-center justify-center gap-2 transition-all">
          LET&apos;S TALK →
        </Link>
      </div>
    </section>
  );
}
