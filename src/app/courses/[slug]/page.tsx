import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Course Hero */}
      <div className="relative bg-brand-navy text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={course.imageUrl} 
            alt={course.title} 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 pt-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-lime bg-white/10 px-4 py-1.5 rounded-full border border-brand-lime/30">
              {course.category}
            </span>
            <span className="text-sm font-bold uppercase tracking-wider bg-brand-lime text-brand-navy px-4 py-1.5 rounded-full shadow-md">
              {course.mode}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            {course.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {course.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Course Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Course Highlights</h2>
              <ul className="space-y-4">
                {course.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Who Should Attend</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                This executive program is designed for senior managers, public sector directors, policy makers, and strategic leads who are responsible for driving institutional change and managing large-scale performance ecosystems.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are joining us In-Person at our Abuja training center or connecting via our interactive Virtual platform, you will engage in intensive case studies and peer-to-peer networking.
              </p>
            </div>
          </div>

          {/* Registration Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-28">
              <div className="mb-8 pb-8 border-b border-gray-100 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Duration</span>
                  <span className="font-bold text-brand-navy">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Date</span>
                  <span className="font-bold text-brand-navy">{course.date}</span>
                </div>
                <div className="flex justify-between items-center text-xl mt-4 pt-4 border-t border-gray-50">
                  <span className="text-gray-500 font-medium">Fee</span>
                  <span className="font-extrabold text-brand-lime">{course.price}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-6">Register Online</h3>
              <CourseRegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
