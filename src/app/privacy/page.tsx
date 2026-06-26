import Hero from "@/components/Hero";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Privacy Policy"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">1. Introduction</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            [Placeholder Content] This Privacy Policy outlines how Mithrive Global Limited collects, uses, and protects your personal information.
          </p>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">2. Information Collection</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            [Placeholder Content] We may collect information from you when you interact with our website or services.
          </p>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">3. Use of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            [Placeholder Content] Your information is used to improve our services and communicate with you.
          </p>
        </div>
      </section>
    </div>
  );
}
