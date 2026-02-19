import Hero from "@/components/HeroSection";
import PastorCard from "@/components/PastorCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />

      {/* Intro Section - "Who We Are" */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0a09] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
                Welcome to Life Boat
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                A Family of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Faith</span>,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white"> Hope</span>,
                and Love.
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Life Boat Ministries International is more than just a church; we are a Christ-centered family committed to sharing the hope of Jesus. We exist to help people encounter God&apos;s love, grow as disciples, and live out their God-given purpose.
              </p>
              <div className="pt-2">
                <Link href="/about" className="text-white font-medium hover:text-primary transition-colors inline-flex items-center gap-2 group text-lg">
                  Learn more about us
                  <span className="group-hover:translate-x-1 transition-transform text-primary">→</span>
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-sm"></div>
              <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">

                <h3 className="text-3xl font-serif font-bold mb-6 text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed mb-8 italic text-lg border-l-2 border-primary/50 pl-4">
                  "To go out to serve the hurting, encourage the broken, and lift high the name of Jesus in every area of life."
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/20 p-5 rounded-xl text-center border border-white/5 hover:bg-black/40 transition-colors">
                    <span className="block text-2xl md:text-3xl font-bold text-primary mb-1">Worship</span>
                    <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">In Spirit & Truth</span>
                  </div>
                  <div className="bg-black/20 p-5 rounded-xl text-center border border-white/5 hover:bg-black/40 transition-colors">
                    <span className="block text-2xl md:text-3xl font-bold text-primary mb-1">Serve</span>
                    <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">With Humility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center md:justify-end w-full md:w-1/3">
              <PastorCard />
            </div>
            <div className="order-1 md:order-2 w-full md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Visionary Leadership</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under the guidance of <strong>Apostle Kaikede Olowo John Stephen</strong>, Life Boat Ministries International is led with a passion for God&apos;s presence and sound teaching.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our pastor carries a prophetic and apostolic mandate to raise, equip, and send believers into every sphere of life, demonstrating the love and power of Jesus Christ. We believe in leadership that serves and empowers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-widest uppercase">
              Join Us
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Service Times</h2>
            <p className="text-muted-foreground text-lg">
              We gather regularly to worship Jesus, grow in the Word, and build a strong family of faith. You are warmly invited.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Sunday Service", day: "Sunday", time: "7:00am – 11:00am", desc: "Our main weekly gathering with praise, worship, testimonies, and the Word." },
              { title: "Bible Studies", day: "Tuesday", time: "4:00pm – 6:00pm", desc: "Interactive study where we dig deep into the Scriptures together." },
              { title: "Deliverance Service", day: "Thursday", time: "4:00pm – 6:00pm", desc: "Focusing on freedom, healing, and restoration in Christ." },
              { title: "Prayer & Fasting", day: "Friday", time: "8:00am – 6:00pm", desc: "Seeking God for breakthroughs in families, the church, and the nation." },
              { title: "Worship Practice", day: "Saturday", time: "10:00am – 6:00pm", desc: "Preparing our hearts and the house of God for worship." },
              { title: "Night of Encounter", day: "Last Friday/Month", time: "6:00pm – 6:00am", desc: "An all-night vigil of intense worship and prayer." },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">{service.title}</h3>
                  <div className="flex flex-col mt-2 text-sm font-medium text-secondary/80">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> {service.day}
                    </span>
                    <span className="ml-3.5 text-muted-foreground">{service.time}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h3 className="text-2xl font-serif font-bold">Come As You Are</h3>
              <p className="text-muted-foreground">
                There is no special dress code. Whether you're dressed up or casual, you are welcome here. Come expecting God to meet you, heal you, and speak to you.
              </p>
            </div>
            <Link
              href="/give"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 whitespace-nowrap"
            >
              Support Our Ministry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
