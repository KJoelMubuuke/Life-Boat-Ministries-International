import Image from "next/image";

export default function PastorPage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex items-center justify-center px-4">
      <section className="max-w-3xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-xl px-8 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image src="/church/pastor.png" alt="Our Pastor" fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">Our Pastor</h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-2">
            Learn more about the heart and vision of our pastor and leadership.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Called to preach Christ and to serve the community, our pastor is committed to teaching the Word,
            equipping believers, and reaching the lost with the love of Jesus.
          </p>
        </div>
      </section>
    </main>
  );
}
