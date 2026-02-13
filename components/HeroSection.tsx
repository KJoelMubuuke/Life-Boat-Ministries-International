import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-24 md:justify-center md:pt-0 overflow-hidden bg-[#bbb09a]"
    >
      {/* Background illustration (boat + surrounding text ring) */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
        <div className="relative w-[520px] h-[520px] md:w-[720px] md:h-[720px]">
          {/* Central boat illustration */}
          <Image
            src="/church/Fin1.png"
            alt="Life Boat Ministries International boat illustration"
            fill
            priority
            className="object-contain"
          />

          {/* Curved ministry name surrounding the boat, using cat.png asset */}
          <Image
            src="/church/cat.png"
            alt="Life Boat Ministries International text surrounding the boat"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* --- WIDE TRANSLUCENT BAR BEHIND BOAT --- */}
      <div
        className="absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[95%] md:w-4/5 h-40 md:h-48 bg-white/35 rounded-3xl shadow-xl backdrop-blur-md"
      />

      {/* --- HERO CONTENT (Text) --- */}
      <div
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 mt-6 md:mt-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white-800 drop-shadow-sm mb-2 font-serif">
          Welcome Home
        </h1>
        <p className="text-white-700 text-lg md:text-2xl font-medium tracking-wide mb-6">
          A Place to Belong, Believe, and Become
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#d79a1e] hover:bg-[#b88419] text-white font-semibold px-8 py-3 rounded shadow-lg transition-all transform hover:scale-105"
        >
          Plan Your Visit
        </Link>
      </div>

      {/* Vision text on the right translucent panel */}
      <div
        className="hidden md:flex absolute z-20 right-[8%] top-1/2 -translate-y-1/2 w-72 h-40 items-center justify-center text-center px-6"
      >
        <p className="text-sm md:text-base font-semibold text-gray-800 drop-shadow-sm leading-relaxed">
          
        </p>
      </div>

    </section>
  );
}