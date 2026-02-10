"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage(){

  const router = useRouter();

  const [mode,setMode] = useState<"login"|"signup">("login");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  async function parse(res:Response){
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  }

  async function handleSignup(){

    if(!email || !password){
      setMsg("Provide email and password");
      return;
    }

    const res = await fetch("/api/signup",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ email,password })
    });

    const data = await parse(res);
    setMsg(data.message);
  }

  async function handleLogin(){

    if(!email || !password){
      setMsg("Provide email and password");
      return;
    }

    const res = await fetch("/api/login",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ email,password })
    });

    const data = await parse(res);

    if(data.ok){
      alert("✅ Login Successful");   // ⭐ Popup notification
      setMsg("");
    } else {
      setMsg(data.message);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">

      {/* BACK BUTTON */}
      <button
        onClick={()=>router.push("/")}
        className="absolute top-6 left-6 bg-slate-700 px-3 py-1 rounded"
      >
        ← Back
      </button>

      {/* CENTER FORM */}
      <div className="flex h-screen items-center justify-center">

        <div className="bg-slate-800 p-8 rounded-xl w-[340px] space-y-4">

          <h2 className="text-xl text-center font-semibold">
            {mode==="login"?"Login":"Create Account"}
          </h2>

          <input
            className="p-2 text-black w-full rounded"
            placeholder="Email"
            onChange={e=>setEmail(e.target.value)}
          />

          <input
            className="p-2 text-black w-full rounded"
            type="password"
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
          />

          {mode==="login" ? (
            <button
              onClick={handleLogin}
              className="bg-white text-black w-full py-2 rounded font-semibold"
            >
              Login
            </button>
          ):(
            <button
              onClick={handleSignup}
              className="bg-white text-black w-full py-2 rounded font-semibold"
            >
              Sign Up
            </button>
          )}

          {msg && (
            <p className="text-yellow-300 text-center">{msg}</p>
          )}

          <p
            className="text-blue-400 text-sm text-center cursor-pointer"
            onClick={()=>setMode(mode==="login"?"signup":"login")}
          >
            {mode==="login"
              ? "New user? Create account"
              : "Already have account? Login"}
          </p>

        </div>
      </div>
    </div>
  );
}
