import Link from "next/link";

export default function EventsPage() {
  const events: Array<{
    title: string;
    date: string;
    time: string;
    description: string;
  }> = [];

  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex justify-center px-4 py-10">
      <section className="max-w-5xl w-full">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-6 md:px-10 py-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-3 text-center md:text-left">
            Events
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left">
            Stay connected with upcoming services, conferences, and special gatherings at Life Boat Ministries
            International. Here you&apos;ll find key dates for church programs, conferences, and outreaches.
          </p>
        </div>

        {events.length === 0 ? (
          <div className="bg-white/85 rounded-2xl shadow-md px-6 md:px-8 py-6 text-center md:text-left text-gray-700 space-y-3">
            <p className="text-base md:text-lg font-medium">
              Our detailed events schedule is coming soon.
            </p>
            <p className="text-sm md:text-base">
              In the meantime, you can reach out to the church office for information about upcoming services,
              conferences, and special gatherings.
            </p>
            <div className="flex flex-col md:flex-row gap-3 items-center md:items-start md:justify-start pt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#d79a1e] hover:bg-[#b88419] text-white font-semibold px-6 py-2 rounded-md shadow-sm transition-colors"
              >
                Contact Us
              </Link>
              <p className="text-xs md:text-sm text-gray-600 max-w-sm">
                Use the contact page to ask about upcoming events, or share how we can pray for you as you plan
                to attend.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white/80 rounded-2xl shadow-md p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                <p className="text-sm md:text-base text-[#8b6a2a] font-semibold">
                  {event.date} • {event.time}
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
