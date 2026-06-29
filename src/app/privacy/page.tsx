import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mithrive Global Limited protects, manages, and respects your personal data and organizational information.",
  alternates: {
    canonical: "https://mithriveglobal.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Privacy Policy"
        subtitle="How we protect, manage, and respect your data."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782718476/eb351c2b-9107-446a-ba83-0937c02a1bc5_i0h9di.jpg"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-10 border-b border-gray-100 pb-6">Effective Date: January 1, 2024</p>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Mithrive Global Limited, we are committed to safeguarding the privacy and security of your personal data. This Privacy Policy outlines our practices regarding the collection, use, processing, and protection of your information when you interact with our website, services, and consulting engagements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Data Collection & Processing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information necessary to provide our capacity development, strategic interventions, and institutional strengthening services. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Professional contact details (names, job titles, institutional affiliations).</li>
                  <li>Data provided directly during consulting engagements and diagnostics.</li>
                  <li>Technical information collected automatically through our digital platforms (e.g., IP addresses, usage analytics).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Data Security & Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  As a performance-focused firm dealing with sensitive organizational data, confidentiality is paramount. We deploy rigorous physical, technical, and administrative safeguards to protect your data against unauthorized access, disclosure, or alteration. Data collected during our interventions is stored securely and handled strictly on a need-to-know basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Third-Party Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  Mithrive Global does not sell, rent, or trade your personal information. We may share data only with trusted strategic partners or service providers necessary for project execution, bound by strict confidentiality agreements, or when legally compelled by regulatory authorities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions or concerns regarding our privacy practices or wish to exercise your data rights, please contact our data compliance team via the information provided on our Contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
