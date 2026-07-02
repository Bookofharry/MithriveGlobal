import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: HeroProps) {
  return (
    <div className="relative bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          fetchPriority="high"
          quality={90}
          className="object-cover z-0 opacity-0 animate-bg-fade"
        />
      )}

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-xl text-gray-200 max-w-2xl leading-relaxed">
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
      </div>
    </div>
  );
}
