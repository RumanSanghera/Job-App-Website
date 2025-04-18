import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to Goldthorn Collective</h1>
            <p className="text-xl mb-8">Your comprehensive guide to mastering the job search process and building a successful career</p>
            <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Application Mastery</h3>
              <p className="text-gray-600">Learn to create compelling CVs and cover letters that showcase your unique strengths and experiences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Interview Excellence</h3>
              <p className="text-gray-600">Develop the skills and confidence to excel in any interview scenario through our comprehensive training.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Career Strategy</h3>
              <p className="text-gray-600">Master the art of job searching, networking, and professional development for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career Journey?</h2>
          <p className="text-xl mb-8">Join our community of learners and gain the skills you need to succeed in today's job market</p>
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Begin Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
