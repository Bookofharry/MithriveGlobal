"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  images?: string[];
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  images,
  backgroundImage,
}: HeroProps) {
  const heroImages = images && images.length > 0 ? images : (backgroundImage ? [backgroundImage] : []);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % heroImages.length);
      }, 6000); // 6 seconds per slide
      return () => clearInterval(interval);
    }
  }, [heroImages.length]);

  return (
    <div className="relative bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Slider Images */}
      {heroImages.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`Hero Background ${idx + 1}`}
          fill
          priority={idx === 0}
          fetchPriority={idx === 0 ? "high" : "auto"}
          quality={90}
          className={`object-cover z-0 transition-opacity duration-1000 ${
            idx === currentIdx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 flex flex-col justify-center min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight transition-all drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex gap-4 flex-wrap">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded bg-brand-lime text-brand-navy hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded border-2 border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-300"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        
        {/* Slider Indicators */}
        {heroImages.length > 1 && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "bg-brand-lime w-12" : "bg-white/50 w-6 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
