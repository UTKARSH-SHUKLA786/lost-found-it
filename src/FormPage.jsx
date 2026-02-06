import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage({ type }) {
  const navigate = useNavigate();
  const title = type === "found" ? "Report Found Item" : "Report Lost Item";

  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4">

      <button
        onClick={() => navigate("/")}
        className="self-start mb-6 bg-gray-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-700 transition"
      >
        ← Back
      </button>

      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Item Name"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="text"
            placeholder="Description"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="text"
            placeholder="Contact Info"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-full h-40 object-cover rounded-xl border border-white/10"
            />
          )}

          <button
            type="submit"
            className="bg-cyan-500 py-2 rounded-xl font-semibold hover:bg-cyan-600 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}
