"use client";

import { useState, useEffect } from "react";

export default function LeadGenModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  // Trigger popup after 10 seconds for MVP demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user already saw it this session
      if (!sessionStorage.getItem("leadGenSeen")) {
        setIsOpen(true);
        sessionStorage.setItem("leadGenSeen", "true");
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Placeholder Header */}
        <div className="bg-brand-navy p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Build Your Capacity</h2>
          <p className="text-brand-lime">Tell us what you&apos;re looking for and we&apos;ll guide you.</p>
        </div>

        {/* Placeholder Funnel Body */}
        <div className="p-8">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 text-center mb-6">What area are you most interested in?</h3>
              {["Executive Leadership", "Technology & AI", "Development"].map((category) => (
                <button
                  key={category}
                  onClick={() => setStep(2)}
                  className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-100 hover:border-brand-lime hover:bg-brand-lime/5 transition-all font-semibold text-brand-navy flex justify-between items-center group"
                >
                  {category}
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-brand-lime transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in slide-in-from-right-4">
              <h3 className="text-lg font-bold text-gray-800 text-center mb-6">Where should we send your custom curriculum?</h3>
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime outline-none"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime outline-none"
              />
              <button 
                onClick={() => {
                  alert("Lead captured! Redirecting to specific course...");
                  setIsOpen(false);
                }}
                className="w-full py-4 mt-2 bg-brand-navy text-white font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-all"
              >
                Send Me The Curriculum
              </button>
              <button 
                onClick={() => setStep(1)}
                className="w-full text-sm text-gray-500 hover:text-brand-navy py-2"
              >
                ← Back
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
