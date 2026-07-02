"use client";

import { useState } from "react";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  details: string;
  subItems: { title: string; desc: string }[];
  outcomes: string[];
}

export default function ServiceTabs({ services }: { services: ServiceData[] }) {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
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
                      <span className="text-brand-lime mr-3 mt-1">-</span>
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
  );
}
