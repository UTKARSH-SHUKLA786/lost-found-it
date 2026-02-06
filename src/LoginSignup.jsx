import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [mode, setMode] = useState(""); // "college" | "phone"
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white 
                    flex items-center justify-center px-4">

      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-sm text-gray-400 hover:text-white"
        >
          ← Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">
          Login / Sign Up
        </h2>

        {/* Options */}
        {!mode && (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setMode("college")}
              className="bg-cyan-500 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              Login via College ID
            </button>

            <button
              onClick={() => setMode("phone")}
              className="bg-green-500 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Login via Phone Number
            </button>
          </div>
        )}

        {/* College ID Form */}
        {mode === "college" && (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="College ID"
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />
            <button className="bg-cyan-500 py-2 rounded-xl font-semibold">
              Login
            </button>

            <button
              type="button"
              onClick={() => setMode("")}
              className="text-sm text-gray-400"
            >
              ← Change method
            </button>
          </form>
        )}

        {/* Phone Login Form */}
        {mode === "phone" && (
          <form className="flex flex-col gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />
            <input
              type="text"
              placeholder="OTP"
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            />
            <button className="bg-green-500 py-2 rounded-xl font-semibold">
              Verify & Login
            </button>

            <button
              type="button"
              onClick={() => setMode("")}
              className="text-sm text-gray-400"
            >
              ← Change method
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
