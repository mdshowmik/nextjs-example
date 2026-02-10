"use client";

import { useState } from "react";

type FormState = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit =
    form.email.trim().length > 0 && form.password.trim().length >= 6 && !loading;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (form.password.trim().length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    // Fake request
    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    alert(`Logged in as ${form.email} (demo)`);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          autoComplete="email"
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">Password</label>
        <div className="mt-1 flex items-center gap-2 rounded-xl border px-3 py-2 focus-within:ring-2 focus-within:ring-slate-300">
          <input
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="••••••••"
            autoComplete="current-password"
            className="w-full outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <p className="mt-1 text-xs text-slate-500">Min 6 characters.</p>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

        <button
            type="submit"
            disabled={!canSubmit}
            style={{ backgroundColor: "white", color: "black" }}
            className="w-full rounded-xl px-4 py-2 font-semibold transition disabled:opacity-80 disabled:cursor-not-allowed"
            >
            Sign in
        </button>


      <div className="text-center">
        <a className="text-sm text-slate-700 underline" href="#">
          Forgot password?
        </a>
      </div>
    </form>
  );
}
