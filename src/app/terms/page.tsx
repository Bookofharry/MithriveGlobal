import Hero from "@/components/Hero";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Terms & Conditions"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            [Placeholder Content] By accessing this website, you agree to be bound by these terms and conditions.
          </p>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">2. Intellectual Property</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            [Placeholder Content] All content on this website is the property of Mithrive Global Limited.
          </p>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">3. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            [Placeholder Content] Mithrive Global Limited shall not be held liable for any damages arising from the use of this website.
          </p>
        </div>
      </section>
    </div>
  );
}
