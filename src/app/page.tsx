'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Force a re-render after mount to trigger animations
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[rgb(var(--background-rgb))]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Welcome to Goldthorn Collective
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Your comprehensive guide to mastering the job search process and building a successful career
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/signup"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Start Learning
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[rgb(var(--background-rgb))]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-[rgb(var(--foreground-rgb))]"
          >
            What You&apos;ll Learn
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Application Mastery",
                description: "Learn to create compelling CVs and cover letters that showcase your unique strengths and experiences.",
                icon: "📝"
              },
              {
                title: "Interview Excellence",
                description: "Develop the skills and confidence to excel in any interview scenario through our comprehensive training.",
                icon: "💼"
              },
              {
                title: "Career Strategy",
                description: "Master the art of job searching, networking, and professional development for long-term success.",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[rgb(var(--card-background))] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[rgb(var(--foreground-rgb))]">{feature.title}</h3>
                <p className="text-[rgb(var(--foreground-rgb))] opacity-70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[rgb(var(--card-background))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                number: "100+", 
                label: "Career Resources",
                description: "Comprehensive guides and templates"
              },
              { 
                number: "50+", 
                label: "Interview Questions",
                description: "Common questions with expert answers"
              },
              { 
                number: "30+", 
                label: "Industry Insights",
                description: "Latest trends and best practices"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-[rgb(var(--background-rgb))] rounded-xl hover:bg-[rgb(var(--background-rgb))] transition-colors duration-300"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-[rgb(var(--foreground-rgb))] mb-2">{stat.label}</div>
                <div className="text-[rgb(var(--foreground-rgb))] opacity-70 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our community of learners and gain the skills you need to succeed in today&apos;s job market
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/signup"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Begin Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
