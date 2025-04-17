export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Goldthorn Collective</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Goldthorn Collective, we believe that every young professional deserves the opportunity to succeed in their career journey. Our mission is to bridge the gap between education and employment by providing comprehensive tools and resources that empower young people to navigate the job market with confidence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <p className="text-gray-600 mb-4">
              We provide a comprehensive platform that helps young professionals:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Create professional CVs and cover letters</li>
              <li>Prepare for interviews with confidence</li>
              <li>Navigate assessment centers successfully</li>
              <li>Develop essential job-seeking skills</li>
              <li>Connect with career opportunities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
                <p className="text-gray-600">We believe in giving young professionals the tools and confidence they need to succeed.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-600">Our platform is designed to be accessible to everyone, regardless of their background or experience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">We continuously improve our platform to provide the best possible experience for our users.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">We foster a supportive community where young professionals can learn and grow together.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 