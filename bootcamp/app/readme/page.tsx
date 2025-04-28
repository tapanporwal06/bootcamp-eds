"use client";

import { useState } from "react";

export default function ReadmeGenerator() {
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setGeneratedContent("");

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/readme", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-pink-200 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-black text-black mb-8">
              README GENERATOR
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div>
                <label htmlFor="title" className="block text-lg font-bold text-black mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="mt-1 block w-full border-4 border-black p-3 bg-white"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-lg font-bold text-black mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  required
                  rows={3}
                  className="mt-1 block w-full border-4 border-black p-3 bg-white"
                />
              </div>

              <div>
                <label htmlFor="motive" className="block text-lg font-bold text-black mb-2">
                  Motive behind the project
                </label>
                <textarea
                  name="motive"
                  id="motive"
                  required
                  rows={3}
                  className="mt-1 block w-full border-4 border-black p-3 bg-white"
                />
              </div>

              <div>
                <label htmlFor="features" className="block text-lg font-bold text-black mb-2">
                  Features and Working
                </label>
                <textarea
                  name="features"
                  id="features"
                  required
                  rows={3}
                  className="mt-1 block w-full border-4 border-black p-3 bg-white"
                />
              </div>

              <div>
                <label htmlFor="technologies" className="block text-lg font-bold text-black mb-2">
                  Technologies
                </label>
                <input
                  type="text"
                  name="technologies"
                  id="technologies"
                  required
                  className="mt-1 block w-full border-4 border-black p-3 bg-white"
                />
              </div>

              <div>
                <label htmlFor="domain" className="block text-lg font-bold text-black mb-2">
                  Domain
                </label>
                <input
                  type="text"
                  name="domain"
                  id="domain"
                  required
                  className="mt-1 block w-full border-4 border-black p-3 bg-white"
                />
              </div>

              <div>
                <label htmlFor="setup" className="block text-lg font-bold text-black mb-2">
                  Setup Instructions
                </label>
                <textarea
                  name="setup"
                  id="setup"
                  required
                  rows={3}
                  className="mt-1 block w-full border-4 border-black p-3 bg-white"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-3 px-4 border-4 border-black text-lg font-black ${
                    loading
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-green-300 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                  }`}
                >
                  {loading ? "GENERATING..." : "GENERATE README"}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-200 border-4 border-black">
                <p className="text-black font-bold">{error}</p>
              </div>
            )}

            {generatedContent && (
              <div className="mt-8">
                <h2 className="text-xl font-black text-black mb-4">
                  GENERATED README
                </h2>
                <div className="bg-blue-100 p-6 border-4 border-black">
                  <div className="flex justify-end mb-2">
                    <button 
                      onClick={() => navigator.clipboard.writeText(generatedContent)}
                      className="bg-purple-200 px-4 py-2 border-2 border-black font-bold hover:bg-purple-300"
                    >
                      COPY
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap text-black overflow-auto">{generatedContent}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}