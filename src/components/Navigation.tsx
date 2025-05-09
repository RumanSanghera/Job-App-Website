'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAccessToken, clearTokens } from '@/utils/auth';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../utils/api';

export default function Navigation() {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    setIsAuthenticated(!!token);
  }, [pathname]); // Re-check auth state on route changes

  const handleLogout = async () => {
    try {
      await api.logout();
      clearTokens();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Failed to logout:', error);
      // Even if the API call fails, we should still clear local state
      clearTokens();
      setIsAuthenticated(false);
      window.location.href = '/';
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgb(var(--card-background))] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Goldthorn Collective Logo"
                  width={300}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? 'border-blue-600 text-[rgb(var(--foreground-rgb))]'
                    : 'border-transparent text-[rgb(var(--foreground-rgb))] opacity-70 hover:border-gray-300 hover:opacity-100'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === '/about'
                    ? 'border-blue-600 text-[rgb(var(--foreground-rgb))]'
                    : 'border-transparent text-[rgb(var(--foreground-rgb))] opacity-70 hover:border-gray-300 hover:opacity-100'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === '/contact'
                    ? 'border-blue-600 text-[rgb(var(--foreground-rgb))]'
                    : 'border-transparent text-[rgb(var(--foreground-rgb))] opacity-70 hover:border-gray-300 hover:opacity-100'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/account"
                    className={`${
                      pathname === '/account'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--foreground-rgb))]'
                    } px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
                  >
                    Account
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--foreground-rgb))'] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={`${
                      pathname === '/login'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--foreground-rgb))]'
                    } px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className={`${
                      pathname === '/signup'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--foreground-rgb))]'
                    } px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--foreground-rgb))'] hover:bg-[rgb(var(--card-background))'] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-between"
                >
                  <motion.span
                    className="w-full h-0.5 bg-[rgb(var(--foreground-rgb))]' rounded-full origin-left"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 }
                    }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-[rgb(var(--foreground-rgb))]' rounded-full"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-[rgb(var(--foreground-rgb))]' rounded-full origin-left"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 }
                    }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[rgb(var(--card-background))' border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-[rgb(var(--foreground-rgb))]'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === '/about'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-[rgb(var(--foreground-rgb))]'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === '/contact'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-[rgb(var(--foreground-rgb))]'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    href="/account"
                    className={`${
                      pathname === '/account'
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-[rgb(var(--foreground-rgb))]'
                    } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-[rgb(var(--foreground-rgb))]' hover:bg-[rgb(var(--card-background))'] hover:text-[rgb(var(--foreground-rgb))'] transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={`${
                      pathname === '/login'
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-[rgb(var(--foreground-rgb))]'
                    } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className={`${
                      pathname === '/signup'
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-[rgb(var(--foreground-rgb))]'
                    } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 