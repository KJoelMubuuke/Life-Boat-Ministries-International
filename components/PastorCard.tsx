import Image from 'next/image';

export default function PastorCard() {
  return (
    <div className="w-full max-w-[220px] md:max-w-[280px] bg-white/40 backdrop-blur-md border border-white/40 shadow-2xl rounded-2xl px-4 py-4 md:px-6 md:py-5 flex flex-col items-center text-center">
      <div className="relative w-20 h-20 md:w-28 md:h-28 mb-3 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src="/church/pastor.png"
          alt="Apostle Kaikede Olowo John Stephen"
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">Our Pastor</div>
      <div className="text-[11px] md:text-sm text-gray-700 font-bold">
        Apostle Kaikede Olowo John Stephen
      </div>
    </div>
  );
}