import Link from "next/link";

export default function EventsPage() {
  const events: Array<{
    title: string;
    date: string;
    time: string;
    description: string;
    category: string;
  }> = [
      // Placeholder events to show design, can be removed or emptied if "Coming Soon" is preferred strict
      {
        title: "Sunday Service",
        date: "Every Sunday",
        time: "7:00 AM - 11:00 AM",
        description: "Join us for a time of powerful worship, teaching of the Word, and fellowship.",
        category: "Weekly Service"
      },
      {
        title: "Bible Study",
        date: "Every Tuesday",
        time: "4:00 PM - 6:00 PM",
        description: "Dig deeper into the scriptures and grow in your understanding of God's will.",
        category: "Discipleship"
      }
    ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-10 pb-20">

      {/* Hero Section */}
      <section className="relative px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-2">
            Calendar
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
            Upcoming <span className="text-primary">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Stay connected with upcoming services, conferences, and special gatherings. Join us as we grow together in faith.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Featured / Coming Soon Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/5 border border-border/50 relative overflow-hidden mb-16 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100%] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-tr-[100%] -z-10"></div>

          <span className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </span>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Detailed Schedule Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We are finalizing our calendar for the upcoming season. In the meantime, you are welcome to join our weekly services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Weekly Events Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-10">Weekly Gatherings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-8 shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-bold mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {event.date} • {event.time}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
