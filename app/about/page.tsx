import LeadershipCard from "@/components/LeadershipCard";

export default function AboutPage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10">
      <section className="max-w-6xl w-full px-4 sm:px-6 md:px-10 py-10">
        {/* Intro Card */}
        <div className="bg-white/90 rounded-3xl shadow-md px-5 sm:px-6 md:px-10 py-8 mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-serif">
            About Us
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Who We Are</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-8 mb-4">
            Life Boat Ministries International is a Christ-centered family of believers where people can belong,
            believe, and become all that God has called them to be. We welcome people from every background and
            walk of life, creating a warm, loving environment where Jesus Christ is at the center of everything we do.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-8 mb-4">
            At the heart of who we are is a deep compassion for the vulnerable. Through our orphanage ministry, we
            open our arms and doors to children who need safety, love, and a spiritual home. By providing food,
            shelter, education, and Christ-centered care, we are raising a generation of children who know they are
            seen, valued, and destined by God.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-8 mb-4">
            As a local church with a global vision, we are passionate about prayer, worship, the Word of God, and
            discipleship. We believe in nurturing strong families, raising godly leaders, and equipping believers to
            influence their communities, workplaces, and nations for Christ.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-8">
            We exist to preach Christ and see lives changed spiritually, socially, and economically through the
            transforming power of the gospel of Jesus Christ, so that every person can experience the love, hope, and
            restoration that is found in Him.
          </p>
        </div>

        {/* Core identity cards */}
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="bg-white/80 rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Our Vision:</h2>
            <p className="text-base sm:text-lg font-semibold text-[#8b6a2a] mb-3">
              Preaching Christ, changing lives spiritually, socially, and economically.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To preach the gospel of Jesus Christ to a hurting world, seeing lives transformed spiritually,
              socially, and economically by the power of God.
            </p>
          </div>

          <div className="bg-white/80 rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Our Mission:</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To accomplish the Great Commission through evangelism and discipleship: training adults and
              children, strengthening ministries through biblical education, church planting, and foreign
              missions, and equipping people for sustainable living in every area of life.
            </p>
          </div>

          <div className="bg-white/80 rounded-2xl shadow-md p-6 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Theme of the Year: 2026</h2>
            <p className="text-base sm:text-lg font-semibold text-[#8b6a2a] mb-2">
              Renewal of the Mind
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Based on Romans 12:1–2, we are called to present our bodies as a living sacrifice, holy and
              acceptable to God, and to be transformed by the renewing of our minds so that we may prove what is
              the good, acceptable, and perfect will of God.
            </p>
          </div>
        </div>

        {/* Lower Panel */}
        <div className="mt-10 bg-white/70 backdrop-blur-sm px-5 sm:px-6 md:px-10 py-8 rounded-3xl text-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Financial Pool</h2>
              <p className="text-base sm:text-lg mb-3">
                We encourage a culture of faithful stewardship and generosity through:
              </p>
              <ul className="list-decimal list-inside text-base sm:text-lg space-y-1">
                <li>Seeds</li>
                <li>Thanksgiving</li>
                <li>Offertory</li>
                <li>Donation</li>
                <li>Contributions</li>
                <li>Tithes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Areas to Observe in 2026</h2>
              <p className="text-base sm:text-lg mb-2">
                As a family of believers, we are intentionally focusing on key areas of growth and obedience this year.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                These focus areas help us live out our theme, "I Love My Church, I Support My Church," consistently.
              </p>
            </section>
          </div>

          <section className="mt-10 flex justify-center">
            <LeadershipCard />
          </section>

          <section className="mt-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Church Programs</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-base sm:text-lg border-collapse">
                <thead className="bg-white/80">
                  <tr>
                    <th className="border px-3 py-2 text-left">Day</th>
                    <th className="border px-3 py-2 text-left">Program</th>
                    <th className="border px-3 py-2 text-left">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tuesday", "Bible Studies", "4:00pm – 6:00pm"],
                    ["Thursday", "Deliverance service", "4:00pm – 6:00pm"],
                    ["Friday", "Prayer & Fasting", "8:00am – 6:00pm"],
                    
                    ["Saturday", "Praise & Worship Practice & Cleaning", "10:00am – 6:00pm"],
                    ["Last Friday of every month", "NIGHT OF ENCOUNTER WITH GOD", "6:00pm – 6:00am"],
                    ["Sunday", "Sunday Service", "7:00am – 11:00am"],
                  ].map(([day, program, time], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/60" : "bg-white/40"}>
                      <td className="border px-3 py-2">{day}</td>
                      <td className="border px-3 py-2">{program}</td>
                      <td className="border px-3 py-2">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
