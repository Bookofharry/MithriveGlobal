"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Mithrive Path", href: "/path" },
    { name: "Our Work", href: "/work" },
    { name: "Clients", href: "/clients" },
    { name: "Social Impact", href: "/social-impact" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-2xl text-brand-navy flex items-center gap-2">
              <Image src="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx" alt="Mithrive Global Logo" width={250} height={96} className="h-24 w-auto object-contain -ml-2" priority />
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-lime ${
                  pathname === link.href ? "text-brand-lime" : "text-brand-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-lime focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href 
                    ? "text-brand-lime bg-brand-navy/5" 
                    : "text-brand-navy hover:text-brand-lime hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
