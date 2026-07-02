"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group">
            {member.image ? (
              <div className="relative h-[350px] w-full bg-gray-50 border-b border-gray-100 overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ) : (
              <div className="relative h-[350px] w-full bg-gray-50 flex items-center justify-center border-b border-gray-100">
                <Image 
                  src="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx" 
                  alt="Mithrive Global Logo" 
                  fill 
                  className="object-contain p-12 opacity-20" 
                />
              </div>
            )}
            <div className="p-8 flex flex-col flex-grow items-center text-center">
              <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
              <p className="text-brand-lime font-medium text-sm mb-4">{member.role}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-50 w-full flex justify-center">
                <button 
                  onClick={() => setSelectedMember(member)}
                  className="text-brand-navy hover:text-brand-lime font-semibold text-sm transition-colors flex items-center"
                >
                  Read Bio
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 z-10 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="h-48 sm:h-64 relative w-full bg-brand-navy">
                <Image 
                  src={selectedMember.image || "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx"} 
                  alt={selectedMember.name} 
                  fill 
                  className={`object-cover ${!selectedMember.image ? 'opacity-30 p-10 object-contain' : ''}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-brand-navy mb-2">{selectedMember.name}</h3>
              <p className="text-brand-lime font-bold uppercase tracking-wide mb-6">{selectedMember.role}</p>
              
              <div className="text-gray-600 leading-relaxed space-y-4">
                {selectedMember.bio.split(". ").map((sentence, i, arr) => (
                  <p key={i}>{sentence}{i !== arr.length - 1 ? ". " : ""}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
