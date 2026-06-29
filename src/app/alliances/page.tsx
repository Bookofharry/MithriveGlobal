import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Alliances — Consulting Partners Africa",
  description: "Collaborating with Capacity for Africa, GoldStead Resources, Art-Thez & Learnway Africa to scale institutional impact across the continent.",
  alternates: {
    canonical: "https://mithriveglobal.com/alliances",
  },
  openGraph: {
    title: "Strategic Alliances — Consulting Partners Africa",
    description: "Collaborating with industry leaders to scale impact and deliver comprehensive institutional solutions across Africa.",
    url: "https://mithriveglobal.com/alliances",
  },
};

const partners = [
  "Capacity for Africa",
  "GoldStead Resources LTD",
  "Art-Thez",
  "Learnway Africa"
];

export default function Alliances() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Strategic Alliances"
        subtitle="Collaborating with industry leaders to scale impact and deliver comprehensive solutions."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Our Partners</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-center hover:shadow-lg hover:border-brand-lime transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-700 group-hover:text-brand-navy transition-colors">{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
