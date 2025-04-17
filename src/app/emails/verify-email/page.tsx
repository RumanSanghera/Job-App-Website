export default function VerifyEmail() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Verify Your Email</h2>
          <p className="mt-2 text-gray-600">
            We&apos;ve sent a verification link to your email address. Please click the link to verify your account.
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Didn&apos;t receive the email? Check your spam folder or{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              click here to resend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 