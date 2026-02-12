export default function AboutPage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex items-center justify-center px-4">
      <section className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-xl px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">About Us</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3">
          Life Boat Ministries International is a Christ-centered community where people can belong, believe,
          and become all that God has called them to be.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our mission is to reach, teach, and impact lives spiritually, socially, and economically through the
          transforming power of the gospel of Jesus Christ.
        </p>
      </section>
    </main>
  );
}
