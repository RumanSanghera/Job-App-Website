export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Goldthorn Collective</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Goldthorn Collective, we believe that career success comes from knowledge, preparation, and self-confidence. Our mission is to provide comprehensive educational resources that empower individuals to navigate the job market independently, armed with the skills and knowledge they need to succeed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="text-gray-600 mb-4">
              We provide a comprehensive learning platform that helps you develop essential career skills:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Master the art of crafting compelling CVs and cover letters</li>
              <li>Develop interview techniques and communication skills</li>
              <li>Learn effective job search strategies and networking</li>
              <li>Build confidence in professional settings</li>
              <li>Understand the complete job application process</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Education First</h3>
                <p className="text-gray-600">We focus on providing comprehensive learning resources that build real skills and knowledge.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
                <p className="text-gray-600">We believe in giving you the tools and knowledge to take control of your career journey.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
                <p className="text-gray-600">Our resources are designed to provide practical, actionable knowledge you can apply immediately.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
                <p className="text-gray-600">We&apos;re committed to expanding our educational content to cover all aspects of career development.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 