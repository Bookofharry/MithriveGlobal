import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients — Public & Private Sector Nigeria",
  description: "24+ institutions served: CBN, NLNG, FIRS, BUA Cement, ICPC, NIRSAL & more. Trusted by Nigeria's leading public and private sector organizations.",
  alternates: {
    canonical: "https://mithriveglobal.com/clients",
  },
  openGraph: {
    title: "Our Clients — Public & Private Sector Institutions Nigeria",
    description: "A diverse portfolio of 24+ public and private sector institutions served across Nigeria and beyond.",
    url: "https://mithriveglobal.com/clients",
  },
};
import ClientLogoGrid from "@/components/ClientLogoGrid";

export default function Clients() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero 
        title="Our Clients"
        subtitle="A diverse portfolio of public and private sector institutions served across Nigeria and beyond."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782506991/IMG_8067_yf75il.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Clients Served</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We have had the privilege of serving and retaining trust from prestigious organizations.
            </p>
          </div>
          
          <ClientLogoGrid />
          
        </div>
      </section>
    </div>
  );
}
