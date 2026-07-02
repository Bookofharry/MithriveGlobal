"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import OurInfluence from "@/components/OurInfluence";
import { courses } from "@/data/courses";
import { useState } from "react";

export default function CoursesPage() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(courses.map(c => c.category)))];

  const filteredCourses = filter === "All" 
    ? courses 
    : courses.filter(c => c.category === filter || filter.includes(c.category));

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Capacity Building & Training"
        subtitle="Explore our cutting-edge courses designed to optimize leadership, strengthen governance, and build high-performance teams."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030917/leejeongsoo-lecture-3986809_1920_r2mecu.jpg"
      />

      {/* Main Course Catalog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold text-brand-navy">Upcoming Courses</h2>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? "bg-brand-navy text-white shadow-md" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
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
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {course.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="font-bold text-brand-navy">{course.price}</span>
                    <Link 
                      href={`/courses/${course.slug}`}
                      className="text-brand-lime bg-brand-navy hover:bg-opacity-90 px-5 py-2 rounded font-medium transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-lime rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-extrabold text-brand-navy mb-4">Download Our Full 2026 Course Brochure</h3>
              <p className="text-brand-navy text-lg opacity-90">
                Get a comprehensive overview of all our capacity building programs, curricula, and executive masterclasses in one PDF.
              </p>
            </div>
            <button 
              onClick={() => alert("Brochure PDF will start downloading here!")}
              className="flex-shrink-0 px-8 py-4 bg-brand-navy text-white rounded-xl font-bold text-lg hover:bg-opacity-90 hover:shadow-xl transition-all flex items-center group"
            >
              <svg className="w-6 h-6 mr-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </section>

      <OurInfluence />
      <Testimonials />
    </div>
  );
}
