import Image from 'next/image';

export default function PastorCard() {
  return (
    <div className="w-full max-w-[280px] bg-white/40 backdrop-blur-md border border-white/40 shadow-2xl rounded-2xl px-6 py-5 flex flex-col items-center text-center">
      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-3 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src="/church/pastor.png"
          alt="Apostle Kaikede Olowo John Stephen"
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">Our Pastor</div>
      <div className="text-[11px] md:text-xs text-gray-700">
        Apostle Kaikede Olowo John Stephen
      </div>
    </div>
  );
}