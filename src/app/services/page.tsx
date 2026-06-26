"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

const services = [
  {
    id: "org-dev",
    title: "Organizational Development",
    description: "Diagnostics, Governance, Workforce Optimization, Culture",
    details: "We optimize organizational structures and processes to enhance efficiency and alignment with strategic goals.",
    subItems: [
      { title: "Diagnostics", desc: "Comprehensive assessment of current organizational health, identifying gaps and opportunities for improvement." },
      { title: "Governance", desc: "Establishing robust frameworks for decision-making, accountability, and leadership." },
      { title: "Workforce Optimization", desc: "Ensuring the right people are in the right roles with the right systems." },
      { title: "Culture", desc: "Cultivating a high-performance environment that fosters innovation and employee engagement." },
    ],
    outcomes: [
      "Clear visibility into performance gaps and structural risks.",
      "Defined authority, improved accountability & stronger compliance systems.",
      "Higher productivity, role clarity, and performance alignment.",
      "Performance-driven behaviors & sustainable organizational mindset shift."
    ]
  },
  {
    id: "rbm",
    title: "Results-Based Management",
    description: "RBM Framework, M&E, Impact Assessments",
    details: "Driving impact through rigorous M&E, RBM frameworks, and comprehensive assessments.",
    subItems: [
      { title: "RBM Framework & Implementation", desc: "Implementing management strategies focused on achieving specific, measurable results. We align resources and activities with strategic objectives." },
      { title: "Monitoring & Evaluation (M&E)", desc: "Continuous tracking of progress and rigorous assessment of outcomes. Our systems drive organizational learning." },
      { title: "Impact Assessments", desc: "Measuring the long-term effects and value created by organizational initiatives." },
    ],
    outcomes: [
      "Strategy translated into measurable, accountable results.",
      "Data-backed decisions and proactive performance control.",
      "Higher productivity, role clarity, and performance alignment.",
      "Verified impact and stronger funding credibility."
    ]
  },
  {
    id: "data-intel",
    title: "Data Intelligence",
    description: "GIS & Geospatial Analytics, Decision-Support Systems, Data-Driven Insights",
    details: "Empowering decisions with GIS, geospatial analytics, and advanced support systems.",
    subItems: [
      { title: "GIS & Geospatial Analytics", desc: "Utilizing spatial data to visualize and analyze geographic patterns. We apply sophisticated modeling." },
      { title: "Decision-Support Systems", desc: "Developing tools and platforms that empower leaders with data-backed recommendations." },
      { title: "Data-Driven Insights", desc: "Leveraging advanced analytics to uncover hidden trends and opportunities." },
    ],
    outcomes: [
      "Smarter territorial and operational planning.",
      "Executive clarity and accelerated decision-making.",
      "Higher productivity, role clarity, and performance alignment.",
      "Insight-led strategy and predictive growth planning."
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Our Service Portfolio"
        subtitle="We design full performance ecosystems anchored in Purpose-Led Growth, Capacity & System Architecture."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782506744/IMG_7489_da2zgv.heic"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Tabs Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left px-6 py-6 border-l-4 transition-all duration-300 ${
                      activeTab === service.id 
                        ? "border-brand-lime bg-brand-navy/5" 
                        : "border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeTab === service.id ? "text-brand-lime" : "text-brand-navy"
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 min-h-full">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">{activeService.title}</h2>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  {activeService.details}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-10">
                    {activeService.subItems.map((item, idx) => (
                      <div key={idx}>
                        <h4 className="text-xl font-bold text-brand-lime mb-3">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <div className="bg-brand-navy rounded-xl p-8 text-white sticky top-28">
                      <h3 className="text-2xl font-bold text-brand-lime mb-6">Key Outcomes</h3>
                      <ul className="space-y-4">
                        {activeService.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-brand-lime mr-3 mt-1">—</span>
                            <span className="text-gray-200 leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
