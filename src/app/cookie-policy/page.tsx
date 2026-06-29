import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Mithrive Global Limited uses cookies to improve your digital experience on our website.",
  alternates: {
    canonical: "https://mithriveglobal.com/cookie-policy",
  },
};


export default function CookiePolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Cookie Policy"
        subtitle="How we use cookies to improve your digital experience."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782718752/IMG_0191_idjmdu.jpg"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-10 border-b border-gray-100 pb-6">Effective Date: January 1, 2024</p>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. What are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites function efficiently, improve user experience, and provide analytical data to site owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mithrive Global uses cookies strictly to enhance your browsing experience and analyze site traffic. We utilize:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly and securely.</li>
                  <li><strong>Performance & Analytics Cookies:</strong> To understand how visitors interact with our platform, allowing us to optimize our digital presence.</li>
                  <li><strong>Functionality Cookies:</strong> To remember your preferences and settings.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline them if you prefer. Please note that disabling cookies may affect the functionality of certain areas of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Updates to this Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy periodically to reflect changes in technology, regulation, or our operational practices. Any changes will be posted on this page with an updated effective date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
