import Hero from "@/components/Hero";
import { Metadata } from "next";
import Card from "@/components/Card";
import ClientLogoGrid from "@/components/ClientLogoGrid";

export const metadata: Metadata = {
  title: "Home",
};
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero 
        title="Engineering Growth. Strengthening Systems. Delivering Results."
        subtitle="Mithrive Global is a performance-focused consulting and capacity development firm operating across Africa. We help organizations transition from potential to performance."
        primaryCta={{ label: "Learn More", href: "/about" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782505127/IMG_2912_oeeht0.heic"
      />

      {/* About Snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-8">About Mithrive Global</h2>
          <p className="text-2xl font-medium text-brand-navy italic mb-8 max-w-4xl mx-auto leading-snug">
            &quot;Strong economies are built on strong institutions. Strong institutions are built on optimized people and systems.&quot;
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mithrive Global is a performance-focused consulting and capacity development firm committed to strengthening institutions, optimizing systems, and delivering measurable development impact across Africa. We are dedicated to helping organizations transition from potential to performance, building institutions that work, not just exist.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Our Service Portfolio</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We design full performance ecosystems anchored in Purpose-Led Growth, Capacity & System Architecture, and End-to-End Strategic Interventions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="Organizational Development"
              description="Diagnostics, governance, workforce optimization, and culture alignment to enhance institutional capacity."
              href="/services"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <Card 
              title="Results-Based Management"
              description="RBM framework implementation, comprehensive M&E, and rigorous impact assessments."
              href="/services"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
            <Card 
              title="Data Intelligence"
              description="GIS & geospatial analytics, decision-support systems, and data-driven insights for predictive growth."
              href="/services"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Clients Served</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse portfolio of public and private sector institutions served across Nigeria and beyond.
            </p>
          </div>
          
          <ClientLogoGrid limit={8} />
          
          <div className="mt-12 text-center">
            <Link href="/clients" className="inline-flex items-center text-brand-navy font-semibold hover:text-brand-lime transition-colors">
              View all 24 clients
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-brand-lime text-brand-navy text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to eliminate friction through capacity alignment?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Partner with us to optimize your systems, strengthen your institution, and deliver measurable impact.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded bg-brand-navy text-white hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
