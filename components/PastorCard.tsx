import Image from 'next/image';

export default function PastorCard() {
  return (
    <div className="w-full max-w-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Leadership</h2>

      <div className="relative w-28 h-28 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-white/80 shadow-lg">
        <Image
          src="/church/pastor.png"
          alt="Apostle Kaikede Olowo John Stephen"
          fill
          className="object-cover"
        />
      </div>

      <div className="text-gray-900 font-semibold text-base md:text-lg leading-tight">
        Apostle Kaikede Olowo John Stephen
      </div>
      <div className="text-gray-600 text-sm md:text-base mt-1">
        Lead Pastor, Life Boat Ministries International
      </div>

      <div className="mt-4 text-xs md:text-sm text-gray-700 leading-relaxed">
        <p>
          For prayer, counseling, and ministry inquiries, please reach out directly to our pastor using the
          contact details below.
        </p>
        <div className="mt-3 space-y-1">
          <p className="font-semibold">
            Phone / WhatsApp:&nbsp;
            <span className="font-normal">
              {/* TODO: Replace with the exact phone numbers from your flyer */}
              +XXX XXX XXXX, +XXX XXX XXXX
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}