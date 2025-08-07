'use client';

import Navbar from '@/components/custom/navbar';
import { useEffect, useState } from 'react';
import { Download, MoveRight } from 'lucide-react';


export default function WelcomePage() {

  return (
    <>
    <Navbar />


      {/* Hero Section */}
      <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full place-items-center bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto text-center px-4">
            <span className="inline-block text-xs rounded-lg border border-gray-200 bg-white px-3 py-1 font-medium text-green-600">
              Exciting News! Introducing our latest innovation
            </span>

            <h1 className="mt-6 text-6xl lg:text-8xl font-extrabold text-gray-800 leading-snug ">
             S A G I P
            </h1>
            <p className='text-green-500 text-3xl lg:text-5xl font-bold'>Smart AI-Powered Guidance in Indentifying Pest </p>

            <p className="mt-4 text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              SAGIP is your intelligent farming companion — built to with real-time pest detection, smart monitoring, and offline support to protect your crops and boost productivity.
            </p>

            {/* Email Input & Button */}
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition w-full md:w-auto flex gap-2 justify-center">
                Download App <Download/>
              </button>
              <button className="bg-gray-100 text-black px-4 py-2 rounded-md hover:bg-gray-200 transition w-full md:w-auto border-1 flex gap-2 justify-center">
                View Dashboard <MoveRight/>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

 