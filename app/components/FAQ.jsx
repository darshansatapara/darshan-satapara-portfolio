import portfolio from "../data/portfolio.json";

export default function FAQ() {
  return (
    <section id="faq" className="w-full border-x-4 border-b-4 border-black bg-white font-mono text-black">
      <div className="border-b-4 border-black bg-[#4ecdc4] p-6 md:p-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] mb-3">Quick answers</p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">About my development work</h2>
        <p className="mt-4 max-w-3xl font-bold leading-relaxed">
          Full-stack development, Python backends, data engineering, generative AI, OCR and business automation—all in plain language.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {portfolio.seo.faq.map((item, index) => (
          <details key={item.question} className={`group p-6 md:p-8 border-b-4 border-black ${index % 2 === 0 ? "lg:border-r-4" : ""}`}>
            <summary className="cursor-pointer list-none flex items-start justify-between gap-5 text-lg md:text-xl font-black uppercase">
              <span>{item.question}</span>
              <span className="text-3xl leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
            </summary>
            <p className="mt-5 pr-8 font-medium leading-relaxed text-gray-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
