import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-2xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-4">Portfolio MERN</h1>
        <p className="mb-6">Vite + React + TS + Tailwind</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setCount((c) => c + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}



