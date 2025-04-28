"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      <main className="max-w-5xl mx-auto">
        {/* Header with thick border */}
        <header className="bg-pink-200 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h1 className="text-5xl font-black text-black">README GEN</h1>
          <p className="text-xl mt-2 font-medium text-neutral-700">Beautiful READMEs in seconds.</p>
        </header>

        {/* Hero section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1 bg-blue-200 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Make Your Projects Stand Out</h2>
            <p className="text-lg mb-6 text-neutral-700">
              A good README is the face of your project. Our generator creates
              professional READMEs that grab attention and provide all the info
              people need.
            </p>
            <Link 
              href="/readme" 
              className="inline-block bg-green-300 text-black font-bold py-3 px-8 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              START GENERATING →
            </Link>
          </div>
          
          <div className="flex-1 bg-purple-200 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">Features</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-center">
                <span className="bg-yellow-300 border-2 border-black w-6 h-6 flex items-center justify-center mr-2">✓</span>
                <span>Professional formatting</span>
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 border-2 border-black w-6 h-6 flex items-center justify-center mr-2">✓</span>
                <span>All essential sections</span>
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 border-2 border-black w-6 h-6 flex items-center justify-center mr-2">✓</span>
                <span>Markdown ready</span>
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 border-2 border-black w-6 h-6 flex items-center justify-center mr-2">✓</span>
                <span>Copy with one click</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-orange-200 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-4 text-center text-neutral-700">
            <div className="flex-1 p-4">
              <div className="bg-white border-4 border-black w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">1</div>
              <p className="font-medium">Fill in your project details</p>
            </div>
            <div className="flex-1 p-4">
              <div className="bg-white border-4 border-black w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">2</div>
              <p className="font-medium">Generate your README</p>
            </div>
            <div className="flex-1 p-4">
              <div className="bg-white border-4 border-black w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl font-bold">3</div>
              <p className="font-medium">Copy and use in your project</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center bg-green-200 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-black mb-4 text-neutral-900">Ready to level up your project?</h2>
          <Link 
            href="/readme" 
            className="inline-block bg-pink-300 text-black font-bold py-4 px-10 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-xl"
          >
            CREATE README NOW
          </Link>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto mt-12 text-center">
        <p className="font-medium text-neutral-500">Built with ♥ for developers everywhere</p>
      </footer>
    </div>
  );
}