import { Metadata } from "next";
import Hero from "@/components/Hero";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us - Institutional Strengthening Firm",
  description: "Learn about Mithrive Global's mission to eliminate the Execution Gap. Performance consulting, capacity development & systems optimization across Africa.",
  alternates: {
    canonical: "https://mithriveglobal.com/about",
  },
  openGraph: {
    title: "About Mithrive Global - Institutional Strengthening Firm",
    description: "Performance consulting, capacity development & systems optimization. Eliminating the Execution Gap across institutions in Nigeria and Africa.",
    url: "https://mithriveglobal.com/about",
  },
};

const faqs = [
  {
    question: "What is the Execution Gap?",
    answer: "The Execution Gap is the structural disconnect between an organization's vision and its ability to deliver results. Across Africa, institutions often fail to scale not because of a lack of vision or funding, but due to inefficiency, barriers to access, and unmeasured potential. Mithrive Global's interventions are designed to close this gap through capacity alignment and engineered growth."
  },
  {
    question: "How does Mithrive Global help institutions perform better?",
    answer: "Mithrive Global applies a comprehensive, evidence-based approach combining organizational development, results-based management, and data intelligence. Through our proprietary 6-Step Mithrive Path - Diagnose, Analyze, Redesign, Align, Deploy, Measure - we engineer systems that transition organizations from potential to performance."
  },
  {
    question: "Where does Mithrive Global operate?",
    answer: "Mithrive Global is headquartered in Abuja, Nigeria, and operates across the African continent. We have delivered capacity development and institutional strengthening projects for federal ministries, state governments, private sector organizations, development agencies, and NGOs across Nigeria and beyond."
  },
  {
    question: "What makes Mithrive Global different from other consulting firms?",
    answer: "Mithrive Global is purpose-built for institutional performance in the African context, enabling us to solve complex challenges with practical, sustainable solutions. By combining global best practices with deep local insight, we empower the society to build resilient, high-performing organizations. We don’t measure success by the reports we produce, but by the lasting capabilities, stronger institutions, and tangible impact we leave behind."
  }
];

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <BreadcrumbSchema items={[{ name: "About", href: "/about" }]} />
      
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <Hero 
        title="About Mithrive Global"
        subtitle="Unlocking growth capacity by integrating systems optimization with transformative leadership frameworks."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030518/startupstockphotos-startup-593304_1920_nws8tc.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mithrive Global is a performance-focused consulting and capacity development firm committed to strengthening institutions, optimizing systems, and delivering measurable development impact across Africa. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The firm helps organizations transition from potential to performance, building institutions that work - not just exist. We believe that growth should be engineered, not accidental.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-brand-lime mb-3 uppercase tracking-wider text-sm">Mission</h3>
                <p className="text-xl text-brand-navy font-medium leading-relaxed">
                  To unlock growth capacity by integrating systems optimization with transformative leadership frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-lime mb-3 uppercase tracking-wider text-sm">Vision</h3>
                <p className="text-xl text-brand-navy font-medium leading-relaxed">
                  To become the leading authority in institutional performance and systems strengthening across the African continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The Problem We Solve - The Execution Gap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Across Africa, organizations fail to scale not due to a lack of vision, but due to structural friction. The gap between funding and impact is driven by three recurring problems:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-brand-lime mb-4">Inefficiency</h3>
              <p className="text-gray-300 leading-relaxed">
                Wasted resources from poor systems design and a lack of optimization in operational frameworks.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-brand-lime mb-4">Barriers to Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Structural blockages preventing execution and scaling of successful initiatives.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-brand-lime mb-4">Unmeasured Potential</h3>
              <p className="text-gray-300 leading-relaxed">
                Value lost from a lack of evidence-based planning and rigorous results monitoring.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-2xl font-medium italic text-brand-lime">
              Our Purpose: To eliminate friction through capacity alignment and engineered growth.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold text-brand-navy mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
