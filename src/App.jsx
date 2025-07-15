import React, { useState, useEffect } from "react";

const pageColors = [
  "bg-green-200",
  "bg-blue-200",
  "bg-pink-200",
  "bg-gray-300",
  "bg-yellow-200",
  "bg-purple-200",
];

export default function App() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    document.body.classList.remove(...pageColors);
    document.body.classList.add(pageColors[colorIndex]);
  }, [colorIndex]);
  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % pageColors.length);
  };
  return (
    <header
      className="flex flex-col items-center justify-center min-h-screen text-black text-center"
      style={{ width: "100vw" }}
    >
      <h2 className="text-4xl font-bold mb-4">Welcome!</h2>
      <p className="text-lg mb-6 max-w-md">
        This is our Website What Do You Want?{" "}
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        VISIT OUR WEBSITE
      </button>
    </header>
  );
}
