import Link from "next/link";
import portfolio from "../data/portfolio.json";
import { breadcrumbJsonLd, servicesJsonLd } from "../seo";

export default function ServicesPage() {
  const colors = ["bg-white", "bg-[#facc15]", "bg-black text-white"];
  const schemas = [
    servicesJsonLd(),
    breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/service" }])
  ];
  return (
    <main className="min-h-screen bg-[#fffdf5] py-20 px-4 md:px-8 font-mono text-black">
        {schemas.map((schema) => <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
        <div className="text-center mb-16"><span className="inline-block bg-black text-white px-6 py-2 font-black uppercase tracking-widest shadow-[6px_6px_0_#4ecdc4]">What I build</span><h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mt-8">Full-Stack, AI<br /><span className="bg-[#ff6b6b] text-white px-3">& Data Systems</span></h1><p className="max-w-3xl mx-auto mt-8 text-lg font-bold leading-relaxed">React and Next.js applications, Node.js and Python APIs, generative AI automation, OCR document processing, ETL pipelines and database optimization.</p></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolio.services.map((service, index) => (
            <article key={service.id} className={`border-4 border-black p-8 shadow-[8px_8px_0_#000] ${colors[index]}`}>
              <div className="flex justify-between mb-8"><span className="text-sm font-black">SERVICE {service.id}</span><span className="text-4xl">{service.icon}</span></div>
              <h2 className="text-4xl font-black uppercase mb-6">{service.title}</h2><p className="font-bold leading-relaxed mb-8 opacity-80">{service.description}</p>
              <ul className="space-y-4 mb-10">{service.features.map((feature) => <li key={feature} className="flex gap-3 font-bold"><span>✓</span><span>{feature}</span></li>)}</ul>
              <Link href="/contact" className="block text-center border-2 border-black bg-[#4ecdc4] text-black py-4 font-black uppercase shadow-[4px_4px_0_#000]">Discuss a project →</Link>
            </article>
          ))}
        </div>
    </main>
  );
}
