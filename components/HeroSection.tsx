import PastorCard from "./PastorCard";
import ContactInfo from "./ContactInfo";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-24 md:justify-center md:pt-0 overflow-hidden bg-[#bbb09a]"
    >
      {/* Background illustration centered, above background bar but behind text and cards */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
        <Image
          src="/church/Fin1.png"
          alt="Life Boat Ministries International"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* --- HERO CONTENT (Text) --- */}
      <div className="relative z-10 text-center px-4 mb-24 md:mb-0 md:mt-[-150px]">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 drop-shadow-sm mb-2 font-serif">
          Welcome Home
        </h1>
        <p className="text-gray-700 text-lg md:text-2xl font-medium tracking-wide mb-6">
          A Place to Belong, Believe, and Become
        </p>
        <button className="bg-[#d79a1e] hover:bg-[#b88419] text-white font-semibold px-8 py-3 rounded shadow-lg transition-all transform hover:scale-105">
          Plan Your Visit
        </button>
      </div>

      {/* --- WIDE TRANSLUCENT BAR BEHIND BOAT & CARDS --- */}
      <div
        className="absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[95%] md:w-4/5 h-40 md:h-48 bg-white/35 rounded-3xl shadow-xl backdrop-blur-md"
      />

      {/* Contact card on left, centered vertically over white bar */}
      <div
        className="absolute z-20 left-6 top-[52%] -translate-y-1/2 md:left-[10%] md:top-1/2 md:-translate-y-1/2"
      >
        <ContactInfo />
      </div>

      {/* Pastor card slightly lower and more inward, like the mockup */}
      <div
        className="absolute z-20 left-10 bottom-10 md:left-[18%] md:bottom-[14%]"
      >
        <PastorCard />
      </div>

      {/* Vision text on the right translucent panel */}
      <div
        className="hidden md:flex absolute z-20 right-[8%] top-1/2 -translate-y-1/2 w-72 h-40 items-center justify-center text-center px-6"
      >
        <p className="text-sm md:text-base font-semibold text-gray-800 drop-shadow-sm leading-relaxed">
          Teaching Christ, changing lives spiritually, socially and economically.
        </p>
      </div>

    </section>
  );
}