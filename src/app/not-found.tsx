'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </Link>
          <div className="text-sm text-gray-500">
            Or try one of these pages:
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 