import Hero from "@/components/Hero";
import { Metadata } from "next";
import Card from "@/components/Card";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import LatestPublications from "@/components/LatestPublications";
import OurInfluence from "@/components/OurInfluence";
import Testimonials from "@/components/Testimonials";
import BrochureDownloadCTA from "@/components/BrochureDownloadCTA";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Consulting & Capacity Development Firm Nigeria | Institutional Strengthening Africa",
  description: "Mithrive Global - performance-focused consulting firm. Organizational development, RBM, M&E, GIS analytics. Strengthening institutions across Nigeria & Africa.",
  alternates: {
    canonical: "https://mithriveglobal.com",
  },
  openGraph: {
    title: "Mithrive Global - Engineering Growth. Strengthening Systems.",
    description: "Performance-focused consulting and capacity development firm operating across Africa. We help organizations transition from potential to performance.",
    url: "https://mithriveglobal.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero 
        title="Engineering Growth. Strengthening Systems. Delivering Results."
        subtitle="Mithrive Global is a performance-focused consulting and capacity development firm operating across Africa. We help organizations transition from potential to performance."
        primaryCta={{ label: "Learn More", href: "/about" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        images={[
          "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1783019427/geralt-adults-3984852_1920_zi3pxa.jpg",
          "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1783019430/geralt-business-10234773_1920_xczn7o.jpg",
          "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783019447/IMG_3854_t3bpwo.heic",
          "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1783019428/Capacity_building_ctvxad.png",
        ]}
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

      {/* Featured Courses */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-brand-navy">Upcoming Courses</h2>
              <p className="mt-4 text-lg text-gray-600">
                Browse our upcoming capacity-building programs and register online for virtual or in-person attendance.
              </p>
            </div>
            <Link 
              href="/courses" 
              className="inline-flex items-center text-brand-navy font-semibold hover:text-brand-lime transition-colors whitespace-nowrap"
            >
              View all courses
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col group">
                <div className="relative h-56 w-full overflow-hidden bg-brand-navy">
                  <Image 
                    src={course.imageUrl} 
                    alt={course.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-4 right-4 bg-brand-lime text-brand-navy text-xs font-bold px-3 py-1 rounded-full shadow">
                    {course.mode}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {course.date}
                    </span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="font-bold text-brand-navy">{course.price}</span>
                    <Link 
                      href={`/courses/${course.slug}`}
                      className="text-brand-lime bg-brand-navy hover:bg-opacity-90 px-5 py-2 rounded font-medium transition-colors text-sm"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white border-t border-gray-100">
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

      <OurInfluence />
      
      <Testimonials />
      <BrochureDownloadCTA />

      <LatestPublications />

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
