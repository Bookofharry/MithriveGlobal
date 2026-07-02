import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Case Studies & Project Impact",
  description: "Project highlights: JDPI Maiduguri, Financial Reporting Council of Nigeria, Kano State Ministry. Measurable development impact across Nigeria.",
  alternates: {
    canonical: "https://mithriveglobal.com/work",
  },
  openGraph: {
    title: "Our Work - Case Studies & Measurable Impact",
    description: "Driving transformative change across public and private sectors. Case studies from JDPI Maiduguri, Financial Reporting Council, and more.",
    url: "https://mithriveglobal.com/work",
  },
};

const caseStudies = [
  {
    title: "Operational Efficiency",
    client: "JDPI Maiduguri",
    challenge: "Weak HES structure, inconsistent profiling, limited measurable impact.",
    intervention: "Built capacity, standardization tools, aligned HES with data-driven systems.",
    result: "Stronger targeting, clearer metrics, improved household resilience."
  },
  {
    title: "Strategic Governance",
    client: "Financial Reporting Council of Nigeria",
    challenge: "Lack of leadership alignment and robust accountability frameworks across the organization.",
    intervention: "Implementation of governance structures and leadership synchronization workshops.",
    result: "Aligned execution, stronger program ownership, and compliance."
  },
  {
    title: "Data-Driven Growth",
    client: "Kano State Ministry of Lands & Physical Planning",
    challenge: "Urban planning decisions lacked spatial data integration and evidence-based insight.",
    intervention: "Contextualized smart city concepts, and delivered executive-GIS capacity education.",
    result: "Improved institutional understanding of geospatial strategy for smarter urban development."
  }
];

export default function Work() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Our Work"
        subtitle="Project highlights demonstrating our commitment to measurable impact."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782559190/Copy_of_20240716_121626_qa8uty.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-8 border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-lime transition-colors">{study.title}</h3>
                  <p className="text-brand-lime font-medium text-sm tracking-wide uppercase">{study.client}</p>
                </div>
                
                <div className="space-y-6 flex-grow flex flex-col">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Intervention</h4>
                    <p className="text-gray-600 leading-relaxed">{study.intervention}</p>
                  </div>
                  
                  <div className="bg-brand-navy/5 p-5 rounded-lg mt-auto border border-brand-navy/10 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    <h4 className="text-sm font-bold text-brand-lime uppercase tracking-wider mb-2">The Result</h4>
                    <p className="font-medium leading-relaxed group-hover:text-white text-brand-navy transition-colors">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
