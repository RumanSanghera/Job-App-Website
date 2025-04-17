import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to Goldthorn Collective</h1>
            <p className="text-xl mb-8">Empowering young professionals to navigate the job market with confidence</p>
            <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">CV & Cover Letter Builder</h3>
              <p className="text-gray-600">Create professional CVs and cover letters that stand out to employers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Interview Preparation</h3>
              <p className="text-gray-600">Practice interviews and get feedback to boost your confidence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Assessment Center Training</h3>
              <p className="text-gray-600">Master group exercises and presentations with our expert guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of young professionals who have found success with our platform</p>
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>
    </main>
  );
}
