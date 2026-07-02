import Hero from "@/components/Hero";
import ServiceTabs from "@/components/ServiceTabs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const services = [
  {
    id: "org-dev",
    title: "Organizational Development",
    description: "Diagnostics, Governance, Workforce Optimization, Culture",
    details: "We optimize organizational structures and processes to enhance efficiency and alignment with strategic goals.",
    subItems: [
      { title: "Diagnostics", desc: "Comprehensive assessment of current organizational health, identifying gaps and opportunities for improvement." },
      { title: "Governance", desc: "Establishing robust frameworks for decision-making, accountability, and leadership." },
      { title: "Workforce Optimization", desc: "Ensuring the right people are in the right roles with the right systems." },
      { title: "Culture", desc: "Cultivating a high-performance environment that fosters innovation and employee engagement." },
    ],
    outcomes: [
      "Clear visibility into performance gaps and structural risks.",
      "Defined authority, improved accountability & stronger compliance systems.",
      "Higher productivity, role clarity, and performance alignment.",
      "Performance-driven behaviors & sustainable organizational mindset shift."
    ]
  },
  {
    id: "rbm",
    title: "Results-Based Management",
    description: "RBM Framework, M&E, Impact Assessments",
    details: "Driving impact through rigorous M&E, RBM frameworks, and comprehensive assessments.",
    subItems: [
      { title: "RBM Framework & Implementation", desc: "Implementing management strategies focused on achieving specific, measurable results. We align resources and activities with strategic objectives." },
      { title: "Monitoring & Evaluation (M&E)", desc: "Continuous tracking of progress and rigorous assessment of outcomes. Our systems drive organizational learning." },
      { title: "Impact Assessments", desc: "Measuring the long-term effects and value created by organizational initiatives." },
    ],
    outcomes: [
      "Strategy translated into measurable, accountable results.",
      "Data-backed decisions and proactive performance control.",
      "Higher productivity, role clarity, and performance alignment.",
      "Verified impact and stronger funding credibility."
    ]
  },
  {
    id: "data-intel",
    title: "Data Intelligence",
    description: "GIS & Geospatial Analytics, Decision-Support Systems, Data-Driven Insights",
    details: "Empowering decisions with GIS, geospatial analytics, and advanced support systems.",
    subItems: [
      { title: "GIS & Geospatial Analytics", desc: "Utilizing spatial data to visualize and analyze geographic patterns. We apply sophisticated modeling." },
      { title: "Decision-Support Systems", desc: "Developing tools and platforms that empower leaders with data-backed recommendations." },
      { title: "Data-Driven Insights", desc: "Leveraging advanced analytics to uncover hidden trends and opportunities." },
    ],
    outcomes: [
      "Smarter territorial and operational planning.",
      "Executive clarity and accelerated decision-making.",
      "Higher productivity, role clarity, and performance alignment.",
      "Insight-led strategy and predictive growth planning."
    ]
  }
];

const faqs = [
  {
    question: "What is organizational development consulting?",
    answer: "Organizational development consulting involves diagnosing institutional structures, optimizing governance and workforce alignment, and cultivating high-performance cultures. At Mithrive Global, we go beyond surface-level assessments to engineer systems that eliminate friction and drive measurable capacity improvement across African institutions."
  },
  {
    question: "What is results-based management (RBM)?",
    answer: "Results-Based Management is a strategic management approach where organizations define expected results, monitor progress through M&E systems, and adjust strategies based on evidence. Mithrive Global implements RBM frameworks that translate strategy into measurable, accountable outcomes for development agencies, government ministries, and private sector institutions."
  },
  {
    question: "How can GIS and geospatial analytics improve institutional performance?",
    answer: "GIS and geospatial analytics enable institutions to visualize spatial data, optimize resource allocation across territories, and make evidence-based planning decisions. Mithrive Global applies GIS consulting to support urban planning, service delivery optimization, and strategic development across Nigeria and Africa."
  },
  {
    question: "What is M&E consulting and why is it important?",
    answer: "Monitoring & Evaluation (M&E) consulting establishes the systems and frameworks needed to continuously track project progress, assess outcomes, and verify impact. For development programs, donor-funded initiatives, and institutional projects, M&E is essential for accountability, learning, and demonstrating return on investment."
  },
  {
    question: "How does Mithrive Global differ from other consulting firms in Nigeria?",
    answer: "Mithrive Global is uniquely positioned as a performance-focused firm that combines organizational development, results-based management, and data intelligence into a single integrated approach. Our proprietary frameworks - the Execution Gap analysis and the 6-Step Mithrive Path - are designed specifically for African institutional contexts, backed by Harvard-trained, SURCON and ICAN certified experts."
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }]} />
      
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
        title="Our Service Portfolio"
        subtitle="We design full performance ecosystems anchored in Purpose-Led Growth, Capacity & System Architecture."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782506744/IMG_7489_da2zgv.heic"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTabs services={services} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-8">
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
