'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Goldthorn Collective
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/about') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/contact') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className={`text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/login') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className={`block text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/about') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/contact') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className={`block text-gray-600 hover:text-blue-600 transition duration-300 ${
                isActive('/login') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 