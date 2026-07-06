"use client";

import { useState, FormEvent } from "react";

export default function CourseRegistrationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      mode: (form.elements.namedItem("mode") as HTMLSelectElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      type: "Course Registration",
    };

    try {
      const res = await fetch("https://www.saveform.io/api/submit/3db165ed-4a2e-4a21-a3ec-8777dc668b19", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">Registration Submitted!</h3>
        <p className="text-gray-600 mb-6">A representative will contact you shortly with payment details.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-brand-navy font-semibold hover:text-brand-lime transition-colors"
        >
          Submit another registration
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input name="name" type="text" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input name="email" type="email" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input name="phone" type="tel" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Mode</label>
        <select name="mode" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all bg-white">
          <option value="">Select mode...</option>
          <option value="virtual">Virtual Attendance</option>
          <option value="in-person">In-Person (Abuja)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
        <input name="subject" type="text" required className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all" placeholder="Course title" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea name="message" rows={3} className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none" placeholder="Any additional requirements?"></textarea>
      </div>
      
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again.</p>
      )}

      <button 
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 mt-4 bg-brand-navy text-white font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-all flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Submitting..." : "Submit Registration"}
        {status !== "sending" && (
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </button>
    </form>
  );
}
