export default function MinistriesPage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex items-center justify-center px-4">
      <section className="max-w-5xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-xl px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Our Ministries</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          We serve our community through different ministries that help people grow in faith and everyday life.
        </p>
        <ul className="space-y-3 text-gray-800 text-base md:text-lg list-disc list-inside">
          <li>Children & Youth Ministry</li>
          <li>Women of Purpose</li>
          <li>Men's Fellowship</li>
          <li>Prayer & Intercession</li>
          <li>Outreach & Evangelism</li>
        </ul>
      </section>
    </main>
  );
}
