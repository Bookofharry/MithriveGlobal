"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Application Error</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            We encountered an unexpected issue while loading this page. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
