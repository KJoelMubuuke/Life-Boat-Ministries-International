"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HERO_MESSAGES = [
  "Renewal of the Mind – Theme of the Year 2026",
  "WELCOME HOME",
  "A PLACE TO BELONG, BELIEVE, AND BECOME",
  "I LOVE MY CHURCH, I SUPPORT MY CHURCH",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_MESSAGES.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 md:pt-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/church/church_members.png')" }}
    >
      {/* --- HERO CONTENT (Text) --- */}
      <div
        className="relative z-10 text-center px-4 mt-6 md:mt-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white drop-shadow-sm mb-4 font-serif transition-opacity duration-700">
          {HERO_MESSAGES[currentIndex]}
        </h1>
        <p className="text-white-700 text-lg md:text-2xl font-medium tracking-wide mb-0 md:mb-6">
          Romans 12:1–2 • Be transformed by the renewing of your mind
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#d79a1e] hover:bg-[#b88419] text-white font-semibold px-5 py-2 text-sm md:px-8 md:py-3 md:text-base rounded shadow-lg transition-all transform hover:scale-105 mt-[-4px] md:mt-0"
        >
          Plan Your Visit
        </Link>
      </div>

    </section>

    {/* Mobile-only: verse section below hero */}
    <section className="md:hidden w-full bg-white px-4 pt-10 pb-12">
      {/* Verse card on top */}
      <div className="max-w-md mx-auto mb-6">
        <div className="bg-white/25 backdrop-blur-lg border border-black/60 rounded-2xl shadow-xl px-4 py-3 text-center text-gray-900">
          <p className="text-[12px] font-semibold leading-snug mb-1">
            "...Quiet! Be still!" Then the wind died down and it was completely calm...
          </p>
          <p className="text-[11px] text-gray-800 font-bold">Mark 4:35–41</p>
        </div>
      </div>

    </section>
    </>
  );
}