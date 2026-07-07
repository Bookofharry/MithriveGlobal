"use client";

import { useState, useEffect, FormEvent } from "react";

export default function LeadGenModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Trigger popup after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user already saw it this session
      if (!sessionStorage.getItem("leadGenSeen")) {
        setIsOpen(true);
        sessionStorage.setItem("leadGenSeen", "true");
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      type: "Organizational Health Assessment Lead",
    };

    try {
      const res = await fetch("https://www.saveform.io/api/submit/3db165ed-4a2e-4a21-a3ec-8777dc668b19", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/20 hover:bg-black/40 rounded-full p-1"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-brand-navy p-8 text-center relative overflow-hidden">
          <h2 className="text-3xl font-bold text-white mb-3 relative z-10 leading-tight">How Healthy Is Your Organization?</h2>
        </div>

        {/* Body */}
        <div className="p-8">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Spot Reserved!</h3>
              <p className="text-gray-600 mb-6">You're on the list. We'll be in touch with your resources shortly.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                Leave your details and be among the first to receive our free <span className="font-bold text-brand-navy">Organizational Health Assessment</span> when it launches. You&apos;ll also receive exclusive leadership insights and practical growth resources.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 animate-in slide-in-from-bottom-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime outline-none transition-all"
                  />
                </div>
                
                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
                )}

                <button 
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 mt-2 bg-brand-lime text-brand-navy font-bold rounded-lg shadow-md hover:bg-[#b0d136] transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {status === "sending" ? "Reserving..." : "Reserve My Spot"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
