import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mithrive Path",
  description: "A 6-step blueprint for end-to-end strategic intervention and performance optimization.",
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

export default function Path() {
  return (
    <div className="flex flex-col w-full min-h-screen">
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
    </div>
  );
}
