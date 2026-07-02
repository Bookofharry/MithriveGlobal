"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BrandedLoader() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if user has visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setLoading(false);
      setShow(false);
      return;
    }

    // Set visited flag
    sessionStorage.setItem("hasVisited", "true");

    // Allow animations to play, then trigger fade out
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for fade out animation to finish before removing from DOM
      setTimeout(() => setShow(false), 700); 
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-700 ease-in-out ${
        loading ? "opacity-100" : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Outer spinning ring - elegant thin border */}
        <div className="absolute inset-0 -m-8 rounded-full border border-gray-100 border-t-blue-600 animate-[spin_1.5s_linear_infinite]"></div>
        <div className="absolute inset-0 -m-4 rounded-full border border-gray-50 border-b-blue-800 animate-[spin_2s_linear_infinite_reverse]"></div>
        
        {/* Inner pulsing logo container */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center bg-white rounded-full p-2 transition-transform duration-1000 animate-pulse">
          <Image
            src="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx"
            alt="Mithrive Global Loader"
            width={100}
            height={100}
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
      </div>
      
      {/* Brand Name */}
      <div className="mt-14 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-[0.25em] animate-pulse">
          MITHRIVE GLOBAL
        </h2>
        <div className="w-16 h-[2px] bg-blue-600 mt-4 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
