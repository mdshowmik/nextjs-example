import Link from "next/link";
import LoginForm from "../ui/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 relative">

      {/* Back Button — Top Left */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-slate-300 hover:text-white"
      >
        ← Back
      </Link>

      {/* Centered Login */}
      <div className="flex items-center justify-center min-h-screen">

        <div className="w-[380px] bg-slate-800 p-8 rounded-xl shadow-xl">

          <h1 className="text-3xl font-bold text-center text-white">
            Sign in
          </h1>

          <p className="text-center text-slate-400 mt-2 mb-6">
            Enter your credentials
          </p>

          <LoginForm />

        </div>

      </div>
    </div>
  );
}
