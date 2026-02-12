export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex items-center justify-center px-4">
      <section className="max-w-3xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-xl px-8 py-10 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Contact Us</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We would love to hear from you. Reach out for prayer, information, or to plan your visit.
        </p>
        <div className="text-gray-800 text-base md:text-lg space-y-1">
          <p><span className="font-semibold">Phone:</span> 0776875248</p>
          <p><span className="font-semibold">Email:</span> kaikedeolo@gmail.com</p>
        </div>
      </section>
    </main>
  );
}
