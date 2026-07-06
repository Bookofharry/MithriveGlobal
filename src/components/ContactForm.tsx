"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
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

  return (
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-brand-navy mb-8">Send a Message</h2>

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-brand-navy mb-2">Message Sent!</h3>
          <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
          <button
            onClick={() => setStatus("idle")}
            className="text-brand-navy font-semibold hover:text-brand-lime transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all resize-none"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          {status === "error" && (
            <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 px-6 rounded-lg bg-brand-navy text-white font-bold text-lg hover:bg-brand-lime hover:text-brand-navy transition-all duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
