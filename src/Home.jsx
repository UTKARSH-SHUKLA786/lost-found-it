import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Only keep notifications state since we're not updating it yet
  const [notifications] = useState([]); // empty means no notifications

  const handleNotificationsClick = () => {
    if (notifications.length === 0) {
      alert("No notifications"); // show alert if none
    } else {
      navigate("/notifications"); // go to notifications page if exists
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">

      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-black/70 z-20">
        <button
          onClick={handleNotificationsClick}
          className="bg-yellow-500 px-4 py-1 rounded-full font-semibold hover:scale-105 transition"
        >
          Notifications
        </button>

        <div className="flex gap-3">
          <Link to="/login">
            <button className="bg-green-500 px-4 py-1 rounded-full font-semibold hover:scale-105 transition">
              Login / Sign Up
            </button>
          </Link>
          <button className="bg-blue-500 px-4 py-1 rounded-full font-semibold hover:scale-105 transition">
            Help
          </button>
        </div>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 py-12 space-y-12 relative">

        {/* Background bubbles */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="bubble w-6 h-6 bg-blue-400 bubble-fast" style={{ left: "90%" }} />
          <div className="bubble w-8 h-8 bg-purple-500 bubble-medium" style={{ left: "30%" }} />
          <div className="bubble w-4 h-4 bg-pink-400 bubble-fast" style={{ left: "50%" }} />
          <div className="bubble w-6 h-6 bg-cyan-400 bubble-medium" style={{ left: "70%" }} />
          <div className="bubble w-5 h-5 bg-yellow-400 bubble-slow" style={{ left: "90%" }} />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold z-10">
          Found It?
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 max-w-xl z-10">
          Helping others get their lost belongings back.  
          A small honest step can make someone smile again.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-12 z-10">

          {/* FOUND */}
          <button
            onClick={() => navigate("/found")}
            className="
              w-36 h-36 rounded-full
              flex items-center justify-center
              text-lg font-bold text-white
              bg-[radial-gradient(circle_at_top_left,_#4ade80,_#22d3ee,_#3b82f6)]
              ring-4 ring-cyan-400/40
              shadow-[0_0_30px_8px_rgba(34,211,238,0.45)]
              hover:scale-110
              hover:shadow-[0_0_50px_12px_rgba(34,211,238,0.75)]
              transition-all duration-300 ease-out
              cursor-pointer
            "
          >
            FOUND
          </button>

          {/* LOST */}
          <button
            onClick={() => navigate("/lost")}
            className="
              w-36 h-36 rounded-full
              flex items-center justify-center
              text-lg font-bold text-white
              bg-[radial-gradient(circle_at_top_left,_#fb7185,_#ec4899,_#9333ea)]
              ring-4 ring-pink-400/40
              shadow-[0_0_30px_8px_rgba(236,72,153,0.45)]
              hover:scale-110
              hover:shadow-[0_0_50px_12px_rgba(236,72,153,0.75)]
              transition-all duration-300 ease-out
              cursor-pointer
            "
          >
            LOST
          </button>

        </div>

        {/* Image */}
        <img
          src="/happy-found.png"
          alt="happy-found"
          className="w-60 mt-10 z-10"
        />

        {/* Quote */}
        <div className="px-6 z-10">
          <p className="italic text-xl text-gray-300 max-w-3xl mx-auto">
            “Honesty is returning what was never lost by the heart.”
          </p>
          <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
            A small act of honesty can bring a big smile to someone’s life.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;
