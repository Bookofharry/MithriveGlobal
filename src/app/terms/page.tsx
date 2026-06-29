import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The rules, guidelines, and agreements governing Mithrive Global Limited's consulting services and website usage.",
  alternates: {
    canonical: "https://mithriveglobal.com/terms",
  },
};


export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Terms & Conditions"
        subtitle="The rules, guidelines, and agreements governing our services."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782718712/F8FD5D97-AB38-4A7E-BAE0-F566319CB73D_rxqsgs.jpg"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-10 border-b border-gray-100 pb-6">Effective Date: January 1, 2024</p>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing the Mithrive Global website or engaging our consulting services, you agree to be bound by these Terms and Conditions. These terms govern the relationship between you (the client or user) and Mithrive Global Limited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Intellectual Property Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  All original content, strategic frameworks, methodologies, diagnostics tools, and materials presented by Mithrive Global remain the exclusive intellectual property of the firm. Unauthorized reproduction, distribution, or commercial exploitation of our proprietary blueprints without prior written consent is strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Professional Consulting Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  Mithrive Global delivers capacity development and institutional strengthening based on agreed scopes of work. While we engineer systems for growth, the realization of measurable impact is dependent on collaborative execution and organizational compliance. We do not guarantee absolute outcomes beyond the parameters of our strategic interventions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by applicable law, Mithrive Global Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our website or the application of our general insights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any dispute arising from these terms will be subject to the exclusive jurisdiction of the Nigerian courts.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
