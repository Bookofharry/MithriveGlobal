"use client";

export default function BrochureDownloadCTA() {
  return (
    <section className="py-20 bg-brand-lime">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-brand-navy">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-extrabold mb-4">Download Our Corporate Brochure</h3>
            <p className="text-lg opacity-90 font-medium">
              Get a comprehensive overview of all our consulting services, capacity building programs, and impact metrics.
            </p>
          </div>
          <button 
            onClick={() => alert("Brochure PDF download triggered. (Replace with actual PDF link)")}
            className="flex-shrink-0 px-8 py-4 bg-brand-navy text-white rounded-xl font-bold text-lg hover:bg-opacity-90 hover:shadow-xl transition-all flex items-center group"
          >
            <svg className="w-6 h-6 mr-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}
