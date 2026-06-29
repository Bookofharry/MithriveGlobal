import Hero from "@/components/Hero";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Impact — Community Development Nigeria",
  description: "Mithrive Initiative for Development and Smart Climate Innovation. Empowering communities and fostering sustainable growth across Nigeria.",
  alternates: {
    canonical: "https://mithriveglobal.com/social-impact",
  },
  openGraph: {
    title: "Social Impact — Community Development & Climate Innovation",
    description: "Empowering communities through the Mithrive Initiative for Development and Smart Climate Innovation across Nigeria.",
    url: "https://mithriveglobal.com/social-impact",
  },
};

export default function SocialImpact() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Social Impact"
        subtitle="Empowering communities and fostering sustainable growth across Nigeria."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782559312/IMG_1893_yssgye.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-brand-navy/5 rounded-2xl h-80 w-full flex items-center justify-center border border-brand-navy/10 overflow-hidden relative shadow-md">
                <Image 
                  src="https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782494380/PHOTO-2025-07-30-18-01-35_azjcbj.jpg" 
                  alt="Mithrive Initiative for Development Community Impact" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Mithrive Initiative for Development</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The firm extends beyond consulting into community development, scaling impact through youth entrepreneurship and poverty alleviation strategies across Nigeria.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By investing in human capital at the grassroots level, we ensure that capacity alignment reaches those who need it most, creating a ripple effect of sustainable economic empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Smart Climate Innovation</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Mithrive designed a climate-awareness wristband combining technology, education, and behavioral design to foster environmental responsibility and cultivate resilient behavior across communities and institutions.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 mt-1">✓</span>
                  <span className="text-gray-200">Combining technology with education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 mt-1">✓</span>
                  <span className="text-gray-200">Fostering environmental responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 mt-1">✓</span>
                  <span className="text-gray-200">Cultivating resilient behavior across institutions</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white/5 rounded-2xl h-80 w-full flex items-center justify-center border border-white/10 backdrop-blur-sm overflow-hidden relative shadow-md">
                <Image 
                  src="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782494809/IMG_8888_ktqqho.heic" 
                  alt="Smart Climate Innovation Wristband" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
