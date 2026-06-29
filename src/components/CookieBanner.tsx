"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-navy border-t border-brand-lime shadow-2xl p-4 md:p-6 text-sm text-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="flex-1 text-center md:text-left leading-relaxed">
          We use cookies to enhance your browsing experience, analyze site traffic, and serve tailored content. By clicking &quot;Accept&quot;, you consent to our use of cookies. Read our{" "}
          <Link href="/cookie-policy" className="text-brand-lime hover:underline font-semibold">
            Cookie Policy
          </Link>{" "}
          for more information.
        </p>
        <button 
          onClick={acceptCookies}
          className="whitespace-nowrap px-6 py-2.5 bg-brand-lime text-brand-navy font-bold rounded hover:bg-white transition-colors duration-300"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
