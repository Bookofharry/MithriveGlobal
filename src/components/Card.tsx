import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Card({ title, description, icon, href, className = "" }: CardProps) {
  const content = (
    <div className={`bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col ${className}`}>
      {icon && (
        <div className="w-12 h-12 rounded bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:text-brand-navy transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-lime transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>
      {href && (
        <div className="mt-6 font-semibold text-brand-navy group-hover:text-brand-lime flex items-center gap-2">
          Learn more 
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }
  return content;
}
