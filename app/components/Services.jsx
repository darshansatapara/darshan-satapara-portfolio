import Link from "next/link";
import portfolio from "../data/portfolio.json";

export default function Services() {
  const ticker = Object.values(portfolio.skills)
    .flat()
    .slice(0, 10)
    .join(" • ");

  return (
    <section className="w-full mx-auto border-4 border-black bg-white text-black font-mono">
      <div className="w-full border-b-4 border-black bg-yellow-400 overflow-hidden py-4">
        <div className="whitespace-nowrap flex animate-scroll">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="text-2xl md:text-3xl font-black uppercase tracking-widest mx-8"
            >
              • {ticker}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
        {portfolio.services.map((service, index) => (
          <div
            key={service.id}
            className={`p-8 hover:bg-gray-800 hover:text-white transition-colors group ${index === 1 ? "bg-[#ff6b6b]" : index === 2 ? "bg-amber-100" : ""}`}
          >
            <span className="text-5xl mb-6 block">{service.icon}</span>
            <h3 className="text-2xl font-black mb-4 uppercase">
              {service.title}
            </h3>
            <p className="font-medium text-sm leading-relaxed opacity-80 mb-6">
              {service.description}
            </p>
            <Link
              href="/service"
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-current pb-1"
            >
              Explore service ↘
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
