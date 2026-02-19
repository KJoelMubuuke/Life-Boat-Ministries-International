import Image from "next/image";

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-10 pb-20">

      {/* Hero Section */}
      <section className="relative px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-2">
            Our Work
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
            Our <span className="text-primary">Ministries</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            At Life Boat Ministries International, our ministries are focused on restoring lives, building the house of God, and reaching our community with the love of Christ.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">

        {/* Children rehabilitation section */}
        <section className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-border/50">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-md">
              <Image
                src="/church/children.png"
                alt="Children at the rehabilitation center"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Children Rehabilitation Centre</h2>
              <p className="text-lg font-semibold text-primary">
                Reaching, restoring, and discipling vulnerable children.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Children Rehabilitation Centre is a safe place where children are loved, cared for, and taught the Word of God. Through counseling, education, and daily care, we help children heal from trauma, discover their God-given identity, and grow in a Christ-centered community.
              </p>
            </div>
          </div>
        </section>

        {/* Construction project gallery */}
        <section className="bg-muted/30 rounded-[2.5rem] p-6 md:p-8 border border-border/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Construction Project</h2>
            <p className="text-lg text-gray-600">Putting up a home and sanctuary for the children.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "church_project1.png",
              "church_project2.png",
              "church_project3.png",
              "church_project4.png",
            ].map((src, i) => (
              <div
                key={src}
                className="relative w-full h-40 md:h-56 rounded-2xl overflow-hidden shadow-md group"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <Image
                  src={`/church/${src}`}
                  alt={`Construction project ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              This building project is focused on providing a safe, permanent home for the children in our rehabilitation centre. As we construct dormitories, classrooms, and prayer spaces, we are preparing an environment where children can be nurtured spiritually, emotionally, and socially.
            </p>
          </div>
        </section>

        {/* Other Ministries */}
        <div className="grid gap-8 md:grid-cols-2">
          {[{
            title: "Choir & Intercessors",
            subtitle: "Raising a sound of worship and prayer.",
            desc: "The choir and intercessory team lead the church into the presence of God through praise, worship, and prayer. They are devoted to standing in the gap for the church, families, and the nation."
          }, {
            title: "Evangelism & Outreach",
            subtitle: "Taking the gospel beyond the church walls.",
            desc: "The evangelism ministry is committed to fulfilling the Great Commission through street evangelism, home visits, hospital and community outreaches, and open-air meetings."
          }].map((min, i) => (
            <article key={i} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">{min.title}</h2>
              <p className="text-lg font-semibold text-primary mb-4">
                {min.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {min.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
