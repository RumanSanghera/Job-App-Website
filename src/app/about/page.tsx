'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function About() {
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              About Goldthorn Collective
            </h1>
            <p className="text-xl text-blue-100">
              Empowering careers through knowledge, preparation, and confidence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[rgb(var(--background-rgb))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-[rgb(var(--foreground-rgb))]">Our Mission</h2>
            <p className="text-xl text-[rgb(var(--foreground-rgb))] opacity-70 text-center leading-relaxed">
              At Goldthorn Collective, we believe that career success comes from knowledge, preparation, and self-confidence. Our mission is to provide comprehensive educational resources that empower individuals to navigate the job market independently, armed with the skills and knowledge they need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-[rgb(var(--card-background))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(var(--foreground-rgb))]">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📝",
                  title: "Application Excellence",
                  description: "Master the art of crafting compelling CVs and cover letters that stand out"
                },
                {
                  icon: "💬",
                  title: "Interview Mastery",
                  description: "Develop interview techniques and communication skills for any scenario"
                },
                {
                  icon: "🔍",
                  title: "Strategic Job Search",
                  description: "Learn effective job search strategies and professional networking"
                },
                {
                  icon: "💪",
                  title: "Confidence Building",
                  description: "Build confidence in professional settings and presentations"
                },
                {
                  icon: "📋",
                  title: "Process Understanding",
                  description: "Understand the complete job application process from start to finish"
                },
                {
                  icon: "🎯",
                  title: "Career Planning",
                  description: "Develop long-term career strategies and professional growth plans"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[rgb(var(--background-rgb))] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--foreground-rgb))]">{item.title}</h3>
                  <p className="text-[rgb(var(--foreground-rgb))] opacity-70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[rgb(var(--background-rgb))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[rgb(var(--foreground-rgb))]">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "📚",
                  title: "Education First",
                  description: "We focus on providing comprehensive learning resources that build real skills and knowledge."
                },
                {
                  icon: "💡",
                  title: "Empowerment",
                  description: "We believe in giving you the tools and knowledge to take control of your career journey."
                },
                {
                  icon: "🎯",
                  title: "Practical Learning",
                  description: "Our resources are designed to provide practical, actionable knowledge you can apply immediately."
                },
                {
                  icon: "🌱",
                  title: "Continuous Growth",
                  description: "We&apos;re committed to expanding our educational content to cover all aspects of career development."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[rgb(var(--card-background))] p-8 rounded-xl hover:bg-[rgb(var(--card-background))] transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--foreground-rgb))]">{value.title}</h3>
                  <p className="text-[rgb(var(--foreground-rgb))] opacity-70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 