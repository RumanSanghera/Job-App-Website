'use client';

import { motion } from 'framer-motion';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Learning Resources</h1>
          <p className="text-center text-gray-600 mb-12">
            Coming soon! We&apos;re curating a collection of valuable resources to help you develop your skills and advance your career.
          </p>
        </motion.div>
      </div>
    </main>
  );
} 