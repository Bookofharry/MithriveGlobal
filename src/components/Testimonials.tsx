"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782505127/IMG_2912_oeeht0.heic')] bg-cover bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-lime uppercase mb-4">Testimonials</h2>
          <p className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight">
            Hear From Our Alumni & Partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:bg-white/10 transition-colors backdrop-blur-sm">
              {testimonial.type === "video" ? (
                <div 
                  className="relative w-full h-48 mb-6 rounded-lg overflow-hidden group cursor-pointer bg-black"
                  onClick={() => alert("Video playback would trigger here (Modal or Link to: " + testimonial.videoUrl + ")")}
                >
                  <Image 
                    src={testimonial.videoThumbnail || ""} 
                    alt={`Video from ${testimonial.author}`} 
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-brand-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 flex-grow">
                  <svg className="w-10 h-10 text-brand-lime opacity-50 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
                  </svg>
                  <p className="text-lg text-gray-300 italic leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>
              )}
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="font-bold text-white text-lg">{testimonial.author}</p>
                <p className="text-sm text-brand-lime">{testimonial.role}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
