
export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Authentication Error
        </h1>
        <p className="mt-2 text-gray-600">
          Something went wrong during login. Please try again.
        </p>
      </div>
    </div>
  );
}
