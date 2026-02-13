import Image from "next/image";

export default function LeadershipCard() {
  return (
    <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md border border-white/60 shadow-2xl rounded-3xl px-6 sm:px-8 py-6 sm:py-8 flex flex-col md:flex-row items-center gap-6">
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
        <Image
          src="/church/pastor.png"
          alt="Apostle Kaikede Olowo John Stephen"
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 font-serif">
          Our Leadership
        </h2>
        <p className="text-base sm:text-lg font-semibold text-gray-900">
          Apostle Kaikede Olowo John Stephen
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-3">
          Lead Pastor, Life Boat Ministries International
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
          Apostle Kaikede carries a passion for preaching Christ and seeing lives transformed spiritually,
          socially, and economically. He provides spiritual covering, teaching, and pastoral care for the
          Life Boat Ministries International family.
        </p>
        <div className="text-sm sm:text-base text-gray-800 space-y-1">
          <p>
            <span className="font-semibold">Phone / WhatsApp:</span>{" "}
            <a href="tel:+256776875248" className="text-blue-700 underline">
              +256 776 875 248
            </a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:kaikedeolo@gmail.com" className="text-blue-700 underline">
              kaikedeolo@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
