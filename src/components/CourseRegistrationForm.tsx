"use client";

export default function CourseRegistrationForm() {
  return (
    <form 
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Registration request submitted! A representative will contact you shortly with payment details.");
      }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input type="text" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Mode</label>
        <select required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all bg-white">
          <option value="">Select mode...</option>
          <option value="virtual">Virtual Attendance</option>
          <option value="in-person">In-Person (Abuja)</option>
        </select>
      </div>
      <button 
        type="submit"
        className="w-full py-4 mt-4 bg-brand-navy text-white font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-all flex justify-center items-center"
      >
        Submit Registration
        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}
