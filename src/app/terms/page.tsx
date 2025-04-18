export default function Terms() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms and Conditions</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Goldthorn Collective. These terms and conditions govern your use of our website and services. By using our platform, you agree to these terms in full.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Data Protection and Privacy</h2>
              <p className="text-gray-600 mb-4">
                We are committed to protecting your privacy and handling your data in an open and transparent manner. Our data collection and processing practices are in accordance with the UK GDPR and Data Protection Act 2018.
              </p>
              <h3 className="text-xl font-semibold mb-2">2.1 Data Collection</h3>
              <p className="text-gray-600 mb-4">
                We collect personal data that you provide to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Account credentials</li>
                <li>Marketing preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Marketing Communications</h2>
              <p className="text-gray-600 mb-4">
                We will only send you marketing communications if you have explicitly consented to receive them. You can withdraw your consent at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Using the unsubscribe link in our emails</li>
                <li>Updating your preferences in your account settings</li>
                <li>Contacting us directly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Under UK data protection laws, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (right to be forgotten)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on our platform, including text, graphics, logos, and software, is the property of Goldthorn Collective and is protected by UK and international copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Goldthorn Collective provides educational resources and guidance. While we strive to provide accurate and helpful information, we cannot guarantee specific outcomes from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any significant changes via email or through our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions regarding these terms or your data rights, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: support@goldthorncollective.com
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-8">
              <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 