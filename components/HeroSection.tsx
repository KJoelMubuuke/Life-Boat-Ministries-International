"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HERO_MESSAGES = [
  "Renewal of the Mind – Theme of the Year 2026",
  "WELCOME HOME",
  "A PLACE TO BELONG, BELIEVE, AND BECOME",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % HERO_MESSAGES.length);
        setIsVisible(true);
      }, 500); // Wait for fade out
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: "url('/church/church_members.png')" }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 z-20" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center max-w-4xl">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-block mb-4 px-3 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-white/90 text-sm md:text-base font-medium tracking-wider uppercase">
              Life Boat Ministries International
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {HERO_MESSAGES[currentIndex]}
          </h1>

          <p className="text-white/90 text-lg md:text-2xl font-light tracking-wide mb-8 max-w-2xl mx-auto border-l-4 border-primary pl-4 md:pl-0 md:border-l-0 md:border-b-4 md:pb-2 md:inline-block">
            Romans 12:1–2 • Be transformed by the renewing of your mind
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/50"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/ministries"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold px-8 py-4 text-lg rounded-full transition-all hover:-translate-y-1"
            >
              Our Ministries
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce cursor-pointer opacity-70 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}