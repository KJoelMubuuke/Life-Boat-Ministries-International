import Image from "next/image";
import Link from "next/link";
import PastorCard from "@/components/PastorCard";
import ContactInfo from "@/components/ContactInfo";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-24 md:justify-center md:pt-0 overflow-hidden bg-[#bbb09a]"
    >
      {/* Background illustration (boat + surrounding text ring) */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
        <div className="relative w-[520px]  h-[520px] md:w-[720px] md:h-[720px]">
          {/* Central boat illustration */}
          <Image
            src="/church/Fin1.png"
            alt="Life Boat Ministries International boat illustration"
            fill
            priority
            className="object-contain"
          />

          {/* Curved ministry name surrounding the boat, using a plain img to avoid layout quirks on small screens */}
          <img
            src="/church/cat.png"
            alt="Life Boat Ministries International text surrounding the boat"
            className="absolute inset-0 w-full h-full object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* --- WIDE TRANSLUCENT BAR BEHIND CARDS & BOAT (DESKTOP/TABLET ONLY) --- */}
      <div
        className="hidden md:block absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:w-[65%] md:h-48 bg-white/35 rounded-3xl shadow-xl backdrop-blur-md"
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

      {/* Get in Touch card on the left (desktop/tablet) */}
      <div className="hidden md:block absolute z-20 left-[17%] top-1/2 -translate-y-1/2">
        <ContactInfo />
      </div>

      {/* Verse card on the right (desktop/tablet) */}
      <div className="hidden md:flex absolute z-20 right-[9%] top-1/2 -translate-y-1/2 w-[320px] justify-center">
        <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl px-6 py-11.5 w-full text-center text-gray-800">
          <p className="text-sm md:text-base font-semibold leading-snug mb-1">
            "...Quiet! Be still!" Then the wind died down and it was completely calm...
          </p>
          <p className="text-xs md:text-lg text-gray-700 font-bold">Mark 4:35–41</p>
        </div>
      </div>

      {/* Pastor card at the bottom center (desktop/tablet) */}
      <div className="hidden md:flex relative z-20 w-full justify-left left-[7%] top-[5%] mt-auto mb-6 px-4">
        <div className="max-w-md w-full flex justify-center">
          <PastorCard />
        </div>
      </div>

      {/* Mobile layout: adjustments for small screens (do not block hero button clicks) */}
      <div className="md:hidden relative z-20 w-full flex flex-col items-center gap-3 mt-4 px-7 pb-6 pointer-events-none">
        
        {/* --- TOP ROW (Contact & Verse) --- */}
        <div className="w-full max-w-sm grid grid-cols-2 gap-2 items-stretch">
          
          {/* 1. SHIFT CONTACT CARD (Left Side) */}
          <div className="flex justify-start pointer-events-auto">
            {/* translate-x-[-15px] -> Moves LEFT (increased from -5 to -15)
               translate-y-[10px]  -> Moves DOWN slightly to clear the text ring
            */}
            <div className="w-full max-w-[180px] scale-50 origin-left translate-y-[200px] translate-x-[-0px]">
              <ContactInfo />
            </div>
          </div>

          {/* 2. SHIFT VERSE CARD (Right Side) */}
          <div className="flex justify-end pointer-events-auto">
            {/* translate-x-[15px] -> Moves RIGHT (increased from 5 to 15)
               translate-y-[10px] -> Moves DOWN slightly to clear the text ring
            */}
            <div className="w-full max-w-[180px] scale-80 origin-right translate-y-[265px] translate-x-[75px]">
              <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl px-3 py-3 w-full text-center text-gray-800">
                <p className="text-[10px] font-semibold leading-snug mb-1">
                  "....Quiet! Be still!...." Then the wind died down...
                </p>
                <p className="text-[10px] text-gray-700 font-bold">Mark 4:35–41</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SHIFT PASTOR CARD (Bottom Center) */}
        {/* CHANGED from mt-[-20px] to mt-[20px] 
            Positive number pushes it DOWN away from the "Welcome Home" text 
        */}
        <div className="mt-[200px] mr-[435px] right-[80%] scale-70 pointer-events-auto">
          <PastorCard />
        </div>

      </div>
      
  

    </section>
  );
}