import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team - Expert Consultants Nigeria & Africa",
  description: "Harvard-trained, SURCON, ICAN, Oracle & Google certified experts driving institutional performance and systems strengthening across Africa.",
  alternates: {
    canonical: "https://mithriveglobal.com/team",
  },
  openGraph: {
    title: "Our Team - Expert Consultants Across Nigeria & Africa",
    description: "Meet the experts driving institutional performance: Harvard-trained, PhD, SURCON, ICAN certified professionals strengthening systems across Africa.",
    url: "https://mithriveglobal.com/team",
  },
};

const coreTeam = [
  {
    name: "Mohammed Ibrahim M.",
    role: "Director of Programs",
    credentials: "Harvard-trained, SURCON member.",
    expertise: "Geospatial data & strategic development.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556321/image26_gflbah.jpg"
  },
  {
    name: "Karl Klausewitz",
    role: "Int'l Technical Support (Strategy)",
    credentials: "International strategy advisory.",
    expertise: "Strategic planning and execution.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556565/image17_fvsttx.jpg"
  },
  {
    name: "Tejaswini Hiremath",
    role: "Int'l Technical Support (Community Dev.)",
    credentials: "Community development advisory.",
    expertise: "Community empowerment and engagement.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556608/image25_if8qsm.jpg"
  },
  {
    name: "Chinonso F. Aninwodo",
    role: "Head, Corporate Branding & Marketing",
    credentials: "Nearly a decade in branding & multimedia communications.",
    expertise: "Brand strategy, digital communications & market positioning.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782558410/image23_kxjooi.jpg"
  },
  {
    name: "Fatima Binta M.",
    role: "Int'l Research & Analyst Partner",
    credentials: "Research intelligence & analytics.",
    expertise: "Data-driven research methodologies.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556665/image28_kcops5.jpg"
  },
  {
    name: "Mrs. Agada Lucy",
    role: "Head, Human Capital & Organizational Development",
    credentials: "Administrative & operational roles at Kashoco Global & RoyalKings Court.",
    expertise: "Talent management, organizational effectiveness, and workforce development.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782558393/image20_murzsu.jpg"
  }
];


export default function Team() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Our Team"
        subtitle="Meet the experts driving institutional performance and systems strengthening across Africa."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782559540/IMG_2446_yyx3vj.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">The Core Team</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {member.image ? (
                  <div className="h-72 w-full relative bg-gray-50 border-b border-gray-100">
                    <Image src={member.image} alt={member.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="h-72 bg-gray-50 w-full relative border-b border-gray-100 flex items-center justify-center">
                    <Image src="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx" alt="Mithrive Global Logo" fill className="object-contain p-8 opacity-20" />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
                  <p className="text-brand-lime font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2"><span className="font-semibold text-gray-700">Background:</span> {member.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
