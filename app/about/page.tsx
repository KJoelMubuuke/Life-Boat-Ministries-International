import PastorCard from "@/components/PastorCard";

export default function AboutPage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex items-center justify-center px-4 py-10">
      <section className="max-w-5xl w-full px-6 md:px-10 py-10">
        {/* Intro Card */}
        <div className="bg-white/90 rounded-3xl shadow-md px-6 md:px-8 py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">About Us</h1>
          <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-3">
            Life Boat Ministries International is a Christ-centered community where people can belong, believe,
            and become all that God has called them to be.
          </p>
          <p className="text-gray-700 text-base md:text-xl leading-relaxed">
            We exist to preach Christ and see lives changed spiritually, socially, and economically through the
            transforming power of the gospel of Jesus Christ.
          </p>
        </div>

        {/* Core identity cards stacked vertically on all screen sizes, each as its own card */}
        <div className="flex flex-col gap-6 mt-4">
          {/* Vision Card */}
          <div className="bg-white/80 rounded-2xl shadow-md p-5 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Vision</h2>
            <p className="text-sm md:text-base font-semibold text-[#8b6a2a] mb-3">
              Preaching Christ, changing lives spiritually, socially, and economically.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              To preach the gospel of Jesus Christ to a hurting world, seeing lives transformed spiritually,
              socially, and economically by the power of God.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/80 rounded-2xl shadow-md p-5 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              To accomplish the Great Commission through evangelism and discipleship: training adults and
              children, strengthening ministries through biblical education, church planting, and foreign
              missions, and equipping people for sustainable living in every area of life.
            </p>
          </div>

          {/* Theme of the Year Card */}
          <div className="bg-white/80 rounded-2xl shadow-md p-5 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Theme of the Year 2026</h2>
            <p className="text-sm md:text-base font-semibold text-[#8b6a2a] mb-2">
              Renewal of the Mind
            </p>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Based on Romans 12:1–2, we are called to present our bodies as a living sacrifice, holy and
              acceptable to God, and to be transformed by the renewing of our minds so that we may prove what is
              the good, acceptable, and perfect will of God.
            </p>
          </div>
        </div>

        {/* Stewardship, focus areas, leadership, and church programs combined on a semi-transparent panel */}
        <div className="mt-8 bg-white/70 backdrop-blur-sm px-6 md:px-10 py-8 rounded-3xl text-gray-800">
          {/* Financial Pool */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Financial Pool</h2>
            <p className="text-sm md:text-base mb-2">
              We encourage a culture of faithful stewardship and generosity through:
            </p>
            <ul className="list-decimal list-inside text-sm md:text-base space-y-1">
              <li>Seeds</li>
              <li>Thanksgiving</li>
              <li>Offertory</li>
              <li>Donation</li>
              <li>Contributions</li>
              <li>Tithes</li>
            </ul>
          </section>

          {/* Areas to Observe */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Areas to Observe in 2026</h2>
            <p className="text-sm md:text-base mb-2">
              As a family of believers, we are intentionally focusing on key areas of growth and obedience this
              year, including our spiritual life, commitment to the local church, and practical support for the
              work of ministry.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              These focus areas help us live out our theme, "I Love My Church, I Support My Church," in a
              consistent and practical way throughout 2026.
            </p>
          </section>

          {/* Leadership / Pastor */}
          <section className="mb-6 flex flex-col items-center">
            <PastorCard />
          </section>

          {/* Church Programs */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Church Programs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-white/80">
                    <th className="border border-gray-300 px-3 py-2 text-left">Day</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Program</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white/60">
                    <td className="border border-gray-300 px-3 py-2">Tuesday</td>
                    <td className="border border-gray-300 px-3 py-2">Bible Studies</td>
                    <td className="border border-gray-300 px-3 py-2">4:00pm – 6:00pm</td>
                  </tr>
                  <tr className="bg-white/40">
                    <td className="border border-gray-300 px-3 py-2">Thursday</td>
                    <td className="border border-gray-300 px-3 py-2">Intercessory</td>
                    <td className="border border-gray-300 px-3 py-2">4:00pm – 6:00pm</td>
                  </tr>
                  <tr className="bg-white/60">
                    <td className="border border-gray-300 px-3 py-2">Friday</td>
                    <td className="border border-gray-300 px-3 py-2">Prayer &amp; Fasting</td>
                    <td className="border border-gray-300 px-3 py-2">10:00am – 1:00pm</td>
                  </tr>
                  <tr className="bg-white/40">
                    <td className="border border-gray-300 px-3 py-2" rowSpan={2}>Saturday</td>
                    <td className="border border-gray-300 px-3 py-2">Praise &amp; Worship</td>
                    <td className="border border-gray-300 px-3 py-2">&nbsp;</td>
                  </tr>
                  <tr className="bg-white/40">
                    <td className="border border-gray-300 px-3 py-2">Evangelism</td>
                    <td className="border border-gray-300 px-3 py-2">4:00pm – 6:00pm</td>
                  </tr>
                  <tr className="bg-white/60">
                    <td className="border border-gray-300 px-3 py-2">Sunday</td>
                    <td className="border border-gray-300 px-3 py-2">Sunday Service</td>
                    <td className="border border-gray-300 px-3 py-2">7:00am – 11:00am</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
