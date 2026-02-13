import Image from "next/image";

export default function MinistriesPage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex justify-center px-4 py-10">
      <section className="max-w-6xl w-full">
        <div className="bg-white/90 rounded-3xl shadow-md px-6 md:px-10 py-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">
            Our Ministries
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Life Boat Ministries International, our ministries are focused on restoring lives,
            building the house of God, and reaching our community with the love of Christ.
          </p>
        </div>
        {/* Children rehabilitation section */}
        <section className="mb-10 space-y-4">
          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/church/children.png"
              alt="Children at the rehabilitation center"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>

          <article className="bg-white/80 rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="p-5 md:p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-gray-900">Children Rehabilitation Centre</h2>
              <p className="text-sm md:text-base text-[#8b6a2a] font-semibold">
                Reaching, restoring, and discipling vulnerable children.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The Children Rehabilitation Centre is a safe place where children are loved, cared for,
                and taught the Word of God. Through counseling, education, and daily care, we help
                children heal from trauma, discover their God-given identity, and grow in a Christ-
                centered community.
              </p>
            </div>
          </article>
        </section>

        {/* Construction project gallery */}
        <section className="mb-10 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "church_project1.png",
              "church_project2.png",
              "church_project3.png",
              "church_project4.png",
            ].map((src) => (
              <div
                key={src}
                className="relative w-full h-32 md:h-40 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={`/church/${src}`}
                  alt="Children rehabilitation centre construction project image"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>

          <article className="bg-white/80 rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="p-5 md:p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-gray-900">Children Rehabilitation Centre – Construction</h2>
              <p className="text-sm md:text-base text-[#8b6a2a] font-semibold">
                Putting up a home and sanctuary for the children.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                This building project is focused on providing a safe, permanent home for the children in
                our rehabilitation centre. As we construct dormitories, classrooms, and prayer spaces, we
                are preparing an environment where children can be nurtured spiritually, emotionally, and
                socially.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Through prayers, financial support, and voluntary work, partners are helping us raise a
                place that will shelter, train, and send out restored children as witnesses of God&apos;s
                goodness.
              </p>
            </div>
          </article>
        </section>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <article className="bg-white/80 rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="p-5 md:p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-gray-900">Choir & Intercessors</h2>
              <p className="text-sm md:text-base text-[#8b6a2a] font-semibold">
                Raising a sound of worship and prayer.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The choir and intercessory team lead the church into the presence of God through praise,
                worship, and prayer. They are devoted to standing in the gap for the church, families,
                and the nation, preparing the spiritual atmosphere for every service, outreach, and
                special program.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Members of this ministry are trained in both musical excellence and a lifestyle of
                holiness, carrying the message of Christ through songs and persistent intercession.
              </p>
            </div>
          </article>

          <article className="bg-white/80 rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="p-5 md:p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-gray-900">Evangelism & Outreach</h2>
              <p className="text-sm md:text-base text-[#8b6a2a] font-semibold">
                Taking the gospel beyond the church walls.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The evangelism ministry is committed to fulfilling the Great Commission through street
                evangelism, home visits, hospital and community outreaches, and open-air meetings.
                Through preaching, prayer, and practical acts of love, we share the gospel and invite
                people into a living relationship with Jesus Christ.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                This ministry also works hand in hand with other departments to follow up new believers
                and connect them into discipleship and church life.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
