import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch to learn how we can help strengthen your institution.",
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mithrive Global Limited",
            image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx",
            "@id": "https://mithriveglobal.com",
            url: "https://mithriveglobal.com",
            telephone: "+2340000000000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Enterprise Technology Center",
              addressLocality: "Abuja",
              addressCountry: "NG"
            }
          })
        }}
      />
      <Hero 
        title="Contact Us"
        subtitle="Get in touch to learn how we can help strengthen your institution."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded bg-brand-navy/5 text-brand-navy flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Enterprise Technology Center,<br />
                      Adjacent Eagle Square,<br />
                      Abuja
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded bg-brand-navy/5 text-brand-navy flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Phone</h3>
                    <p className="text-gray-600 leading-relaxed mb-1">+234 810 631 0387</p>
                    <p className="text-gray-600 leading-relaxed">+44 842 591 984</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded bg-brand-navy/5 text-brand-navy flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Email</h3>
                    <p className="text-gray-600 leading-relaxed mb-1">
                      <a href="mailto:info@mithriveglobal.com" className="hover:text-brand-lime transition-colors">info@mithriveglobal.com</a>
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="mailto:mithriveglobal@gmail.com" className="hover:text-brand-lime transition-colors">mithriveglobal@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-navy mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full py-4 px-6 rounded-lg bg-brand-navy text-white font-bold text-lg hover:bg-brand-lime hover:text-brand-navy transition-all duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
