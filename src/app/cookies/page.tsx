export default function CookiePolicy() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Cookie Policy</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                This Cookie Policy explains how Goldthorn Collective (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. What are cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Why do we use cookies?</h2>
              <p className="text-gray-600 mb-4">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as(&ldquo;essential&rdquo;) or (&ldquo;strictly&rdquo;) ,(&ldquo;necessary&rdquo;) cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-2">4.1 Essential Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
              </p>

              <h3 className="text-xl font-semibold mb-2">4.2 Performance Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </p>

              <h3 className="text-xl font-semibold mb-2">4.3 Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>

              <h3 className="text-xl font-semibold mb-2">4.4 Marketing Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. How to Control Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
              <p className="text-gray-600 mb-4">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-blue-600 hover:text-blue-800">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:text-blue-800">www.allaboutcookies.org</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: privacy@goldthorncollective.com
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