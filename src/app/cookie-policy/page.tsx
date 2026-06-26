import Hero from "@/components/Hero";

export default function CookiePolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Cookie Policy"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">1. What Are Cookies</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            [Placeholder Content] Cookies are small text files placed on your device to enhance user experience.
          </p>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">2. How We Use Cookies</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            [Placeholder Content] We use cookies to analyze website traffic and optimize our platform.
          </p>
          <h2 className="text-2xl font-bold text-brand-navy mb-6">3. Managing Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            [Placeholder Content] You can control and/or delete cookies as you wish through your browser settings.
          </p>
        </div>
      </section>
    </div>
  );
}
