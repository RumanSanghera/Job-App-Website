import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--card-background))] border-t border-[rgb(var(--border-color))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-[rgb(var(--foreground-rgb))] opacity-70">
              Empowering young professionals to navigate the job market with confidence through comprehensive educational resources and personalized guidance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/career-tools" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  Career Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[rgb(var(--foreground-rgb))] opacity-70 hover:opacity-100 transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[rgb(var(--border-color))] text-center text-[rgb(var(--foreground-rgb))] opacity-70">
          <p>&copy; {new Date().getFullYear()} Goldthorn Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 