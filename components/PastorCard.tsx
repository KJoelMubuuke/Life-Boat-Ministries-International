import Image from 'next/image';

export default function PastorCard() {
  return (
    <div className="w-full max-w-[220px] bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl p-4 flex flex-col items-center text-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-2 rounded-full overflow-hidden border-2 border-white/70 shadow-sm">
        <Image
          src="/church/pastor.png"
          alt="Our Pastor"
          fill
          className="object-cover"
        />
      </div>

      <div className="text-gray-900 font-bold text-xs md:text-sm leading-tight">
        Our Pastor
      </div>
    </div>
  );
}