export default function GivePage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex items-center justify-center px-4">
      <section className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-xl px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Give</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          Your generosity helps us continue sharing the Gospel and serving our community through the ministries of
          Life Boat Ministries International.
        </p>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          You can give during our services, through bank transfer, or by contacting the church office for more
          options. Online giving options will be added here soon.
        </p>
        <div className="space-y-2 text-gray-700 text-sm md:text-base">
          <p className="font-semibold">For more information about giving:</p>
          <p>Email: kaikedeloo@gmail.com</p>
          <p>Phone: 0776875248</p>
        </div>
      </section>
    </main>
  );
}
