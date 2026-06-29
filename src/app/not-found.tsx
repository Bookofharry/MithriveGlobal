import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="text-brand-lime font-bold text-7xl mb-6">404</div>
      <h2 className="text-3xl font-bold text-brand-navy mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-lime hover:text-brand-navy transition-colors shadow-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
