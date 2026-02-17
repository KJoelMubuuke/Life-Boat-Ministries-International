import Hero from "@/components/HeroSection";
import PastorCard from "@/components/PastorCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <Hero />

      {/* Who We Are section on a white page (not a card) */}
      <section className="w-full bg-white text-gray-900 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Who We Are</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Life Boat Ministries International is a Christ-centered church family committed to sharing the hope of Jesus with our community and the nations. We exist to help people encounter God&apos;s love, grow as disciples, and live out their God-given purpose.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Together, we gather to worship, pray, and study God&apos;s Word, and we go out to serve the hurting, encourage the broken, and lift high the name of Jesus in every area of life.
          </p>
        </div>
      </section>

      {/* Leadership section with pastor image */}
      <section className="w-full bg-white text-gray-900 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Leadership</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
            Under the guidance of Apostle Kaikede Olowo John Stephen, Life Boat Ministries International is led with a passion for God&apos;s presence, sound teaching of the Word, and a heart for people. Our pastor carries a prophetic and apostolic mandate to raise, equip, and send believers into every sphere of life, demonstrating the love and power of Jesus Christ.
          </p>
          <div className="flex justify-start">
            <PastorCard />
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="w-full bg-white text-gray-900 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Our Services</h2>
          <p className="text-base md:text-lg leading-relaxed mb-3 max-w-3xl">
            We gather regularly according to the church program below to worship Jesus, grow in the Word, and build a
            strong family of faith. You are warmly invited to join any of our services.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-3xl text-gray-700">
            These services follow the same schedule as listed on our About page, so you can plan your visit with
            confidence.
          </p>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            <div className="bg-[#f5f0e8] rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-xl font-semibold mb-1">Bible Studies</h3>
              <p className="text-sm md:text-base text-gray-700 mb-1">Day: Tuesday</p>
              <p className="text-sm md:text-base text-gray-700 mb-1">Time: 4:00pm – 6:00pm</p>
              <p className="text-sm md:text-base text-gray-700">
                An interactive time in the Word where we learn, ask questions, and grow together in understanding the
                Scriptures.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-xl font-semibold mb-1">Deliverance Service</h3>
              <p className="text-sm md:text-base text-gray-700 mb-1">Day: Thursday</p>
              <p className="text-sm md:text-base text-gray-700 mb-1">Time: 4:00pm – 6:00pm</p>
              <p className="text-sm md:text-base text-gray-700">
                A time of worship, teaching, and prayer focused on freedom, healing, and restoration through the power
                of Jesus Christ.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-xl font-semibold mb-1">Prayer &amp; Fasting</h3>
              <p className="text-sm md:text-base text-gray-700 mb-1">Day: Friday</p>
              <p className="text-sm md:text-base text-gray-700 mb-1">Time: 8:00am – 6:00pm</p>
              <p className="text-sm md:text-base text-gray-700">
                A dedicated day to seek God in prayer and fasting for personal, family, church, and national
                breakthroughs.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-xl font-semibold mb-1">Praise &amp; Worship Practice &amp; Cleaning</h3>
              <p className="text-sm md:text-base text-gray-700 mb-1">Day: Saturday</p>
              <p className="text-sm md:text-base text-gray-700 mb-1">Time: 10:00am – 6:00pm</p>
              <p className="text-sm md:text-base text-gray-700">
                A time for the worship team and church family to rehearse, prepare, and care for the house of God
                together.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-xl font-semibold mb-1">Night of Encounter with God</h3>
              <p className="text-sm md:text-base text-gray-700 mb-1">Day: Last Friday of every month</p>
              <p className="text-sm md:text-base text-gray-700 mb-1">Time: 6:00pm – 6:00am</p>
              <p className="text-sm md:text-base text-gray-700">
                An all-night meeting of intense worship, prayer, and the Word where we seek a fresh encounter with the
                presence and power of God.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="text-xl font-semibold mb-1">Sunday Service</h3>
              <p className="text-sm md:text-base text-gray-700 mb-1">Day: Sunday</p>
              <p className="text-sm md:text-base text-gray-700 mb-1">Time: 7:00am – 11:00am</p>
              <p className="text-sm md:text-base text-gray-700">
                Our main weekly gathering with praise, worship, testimonies, the preaching of God&apos;s Word, and a warm
                family atmosphere for all ages.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-2">What to Expect</h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                <li>Christ-centered worship and teaching from the Bible</li>
                <li>A loving, family atmosphere where everyone is welcome</li>
                <li>Opportunity for personal prayer and ministry</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Come As You Are</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                There is no special dress code. Come as you are, and come expecting God to meet you, heal you, and speak
                to you through His Word and presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
