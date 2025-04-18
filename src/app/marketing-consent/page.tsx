export default function MarketingConsent() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Marketing Communications Consent</h1>
          
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-yellow-800">
              <strong>Note:</strong> Our email marketing system is currently being set up. You can still opt-in now, and we&rsquo;ll start sending communications once our SMTP service is configured.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">What You&rsquo;ll Receive</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Career development tips and strategies</li>
                <li>Updates about new educational resources</li>
                <li>Industry insights and trends</li>
                <li>Exclusive learning materials</li>
                <li>Platform updates and improvements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Your Privacy</h2>
              <p className="text-gray-600 mb-4">
                We respect your privacy and will never share your email with third parties. You can unsubscribe at any time using the link provided in every email.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">
                To manage your marketing preferences, please visit your account settings once logged in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 