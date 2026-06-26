"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Metadata } from "next";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-brand-navy mb-4">Something went wrong!</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        We apologize for the inconvenience. An unexpected error has occurred while loading this page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-lime hover:text-brand-navy transition-colors shadow-sm"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-white border border-gray-200 text-brand-navy rounded-lg font-medium hover:border-brand-lime transition-colors shadow-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
