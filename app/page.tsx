import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Welcome 👋</h1>

      <Link
        href="/login"
        className="px-4 py-2 rounded-lg bg-black text-white"
      >
        Go to Login Page
      </Link>
    </main>
  );
}
