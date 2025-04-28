"use client";

import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    console.log("count called ", count);
  }, [count]);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Counter App</h1>
        
        <p
          className="text-blue-500 hover:text-blue-600 text-3xl underline mb-4 block text-center"
        >
          dub.sh/counter
        </p>
        <div className="flex justify-center items-center mb-8">
          <div className="text-6xl font-bold text-black">{count}</div>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
          >
            Decrement
          </button>
          
          <button
            onClick={reset}
            className="px-6 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          
          <button
            onClick={increment}
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}