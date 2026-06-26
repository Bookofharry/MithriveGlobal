import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the experts driving institutional performance and systems strengthening across Africa.",
};

const coreTeam = [
  {
    name: "Mohammed Ibrahim M.",
    role: "Director of Programs",
    credentials: "Harvard-trained, SURCON member.",
    expertise: "Geospatial data & strategic development."
  },
  {
    name: "Karl Klausewitz",
    role: "Int'l Technical Support (Strategy)",
    credentials: "International strategy advisory.",
    expertise: "Strategic planning and execution."
  },
  {
    name: "Tejaswini Hiremath",
    role: "Int'l Technical Support (Community Dev.)",
    credentials: "Community development advisory.",
    expertise: "Community empowerment and engagement."
  },
  {
    name: "Mrs. Rosemary Okonkwo",
    role: "Global Human Resources Partner",
    credentials: "HR systems & people operations.",
    expertise: "Human capital management."
  },
  {
    name: "Fatima Binta M.",
    role: "Int'l Research & Analyst Partner",
    credentials: "Research intelligence & analytics.",
    expertise: "Data-driven research methodologies."
  }
];

const globalFacilitators = [
  {
    name: "Mohammed Ibrahim M.",
    credentials: "Harvard-trained, SURCON member",
    expertise: "Geospatial data & strategic development for high-performance institutional systems."
  },
  {
    name: "Dr. Abubakar Rufai",
    credentials: "PhD Tech Mgt | 17+ yrs | Oracle & Google Certified",
    expertise: "Cloud Security lead for CBN & TAJ Bank. Bridges social statistics with cybersecurity."
  },
  {
    name: "Dr. Ochotokpo Sylvanus",
    credentials: "PhD | 15+ yrs in Education | Lecturer, NTI Centre Mgr",
    expertise: "Academic management & institutional strengthening. Bridges educational theory and operational impact."
  },
  {
    name: "Dr. Feyisayo Jegede",
    credentials: "PhD Human Parasitology, BUK | MLS, FMLSCN",
    expertise: "Deputy Director WRP-N, Ex-Family Health International. Public health & lab systems leader."
  },
  {
    name: "Sunday Osafaron",
    credentials: "M.Sc. | 15+ yrs | ICAN, NIM, NIPR, NOUN",
    expertise: "Bridges academic rigor and industry execution for sustainable institutional excellence."
  },
  {
    name: "Engr. Kazeem Abubakar (PhD)",
    credentials: "PhD Malaysia | Registered Engineer | 13+ yrs",
    expertise: "Operations Research specialist. Optimizes production systems and industrial innovation."
  }
];

export default function Team() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Our Team"
        subtitle="Meet the experts driving institutional performance and systems strengthening across Africa."
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
                <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 uppercase tracking-widest font-semibold">
                  Photo
                </div>
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

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Global Facilitators</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalFacilitators.map((fac, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="sm:w-1/3 bg-gray-200 min-h-[160px] flex items-center justify-center text-gray-400 font-semibold uppercase text-xs tracking-widest">
                  Photo
                </div>
                <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{fac.name}</h3>
                  <p className="text-xs text-brand-lime font-semibold uppercase tracking-wider mb-3">{fac.credentials}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{fac.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
