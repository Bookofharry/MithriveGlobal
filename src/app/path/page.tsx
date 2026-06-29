import Hero from "@/components/Hero";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "The Mithrive Path — 6-Step Performance Blueprint",
  description: "Our proven 6-step methodology: Diagnose, Analyze, Redesign, Align, Deploy, Measure. Engineering institutional growth through systems strengthening.",
  alternates: {
    canonical: "https://mithriveglobal.com/path",
  },
  openGraph: {
    title: "The Mithrive Path — 6-Step Performance Blueprint",
    description: "A proven 6-step blueprint for engineering growth and strengthening systems across institutions in Nigeria and Africa.",
    url: "https://mithriveglobal.com/path",
  },
};

const steps = [
  {
    number: "01",
    title: "Diagnose",
    desc: "Comprehensive state assessment to understand the current organizational health and operational baseline.",
  },
  {
    number: "02",
    title: "Analyze",
    desc: "Rigorous risk mapping and gap identification to pinpoint areas of friction and structural blockages.",
  },
  {
    number: "03",
    title: "Redesign",
    desc: "Systems architecture and engineering to build robust frameworks that support scalable growth.",
  },
  {
    number: "04",
    title: "Align",
    desc: "Leadership synchronization and strategic cohesion to ensure buy-in across all levels of the institution.",
  },
  {
    number: "05",
    title: "Deploy",
    desc: "Precision implementation of redesigned systems, driven by expert execution and continuous monitoring.",
  },
  {
    number: "06",
    title: "Measure",
    desc: "Quantifying total impact through evidence-based assessments, ensuring engineered growth is realized.",
  }
];

const faqs = [
  {
    question: "What is the Mithrive Path?",
    answer: "The Mithrive Path is a proprietary 6-step strategic intervention methodology designed by Mithrive Global to engineer institutional growth. It covers the full lifecycle from organizational diagnosis through to measurable impact assessment, ensuring that every intervention is systematic, evidence-based, and results-driven."
  },
  {
    question: "How does the Performance Blueprint work?",
    answer: "The Performance Blueprint is Mithrive Global's proven methodology for transitioning organizations from potential to performance. It follows six sequential phases — Diagnose, Analyze, Redesign, Align, Deploy, and Measure — each building on the previous to create a comprehensive, sustainable transformation framework."
  },
  {
    question: "What is a 6-step strategic intervention?",
    answer: "A 6-step strategic intervention is an end-to-end consulting engagement that addresses every stage of organizational transformation. Starting with a comprehensive diagnosis, through gap analysis, systems redesign, leadership alignment, precision implementation, and impact measurement, it ensures that no aspect of institutional performance is left unaddressed."
  }
];

export default function Path() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BreadcrumbSchema items={[{ name: "The Mithrive Path", href: "/path" }]} />
      
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "The Mithrive Path — How to Strengthen Institutional Performance",
            description: "A 6-step blueprint for engineering growth and strengthening systems across institutions in Nigeria and Africa.",
            step: steps.map((step, idx) => ({
              "@type": "HowToStep",
              position: idx + 1,
              name: step.title,
              text: step.desc,
            })),
          }),
        }}
      />

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
        title="The Mithrive Path"
        subtitle="A 6-step blueprint for engineering growth and strengthening systems."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782559051/af283b49-7934-413e-b40f-08301b209b02_pks89s.jpg"
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-brand-navy">The Performance Blueprint</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven methodology for transitioning organizations from potential to performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-brand-navy p-8 rounded-xl text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-navy hover:border-brand-lime"
              >
                <div className="absolute -top-4 -right-4 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-8xl font-black">{step.number}</span>
                </div>
                <div className="relative z-10">
                  <span className="text-brand-lime font-bold text-xl mb-4 block">Step {step.number}</span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
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
