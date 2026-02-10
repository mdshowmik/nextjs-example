"use client";

import { useState } from "react";

export default function Signup() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function handleSignup() {
    await fetch("/api/signup",{
      method:"POST",
      body: JSON.stringify({ email, password })
    });

    alert("User created!");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl space-y-3">

        <input
          className="p-2 text-black w-full"
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          className="p-2 text-black w-full"
          type="password"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-white text-black px-4 py-2 w-full"
        >
          Sign Up
        </button>

      </div>
    </div>
  );
}
