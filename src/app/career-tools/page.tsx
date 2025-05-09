'use client';

import { motion } from 'framer-motion';

export default function CareerToolsPage() {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Career Tools</h1>
          <p className="text-center text-gray-600 mb-12">
            Coming soon! We&apos;re developing a suite of tools to help you navigate your career path more effectively.
          </p>
        </motion.div>
      </div>
    </main>
  );
} 