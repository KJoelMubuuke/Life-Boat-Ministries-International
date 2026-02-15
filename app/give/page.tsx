export default function GivePage() {
  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex justify-center px-4 py-10">
      <section className="max-w-5xl w-full">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-6 md:px-10 py-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Give</h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3">
            Your generosity helps us continue sharing the Gospel and serving our community through the ministries of
            Life Boat Ministries International.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Every seed you sow supports the Children Rehabilitation Centre, evangelism, church development, and the
            ongoing work of ministry. Thank you for partnering with us in what God is doing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Ways to give */}
          <div className="bg-white/85 rounded-2xl shadow-md px-6 md:px-8 py-6 text-gray-800 text-sm md:text-base space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900 font-serif mb-1">Ways to Give</h2>
            <p>
              You can give during our services, by direct contact with the pastor, or by reaching out to arrange
              bank or mobile money giving. Online giving options will be added here soon.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Sunday services and midweek programs</li>
              <li>Special offerings for the Children Rehabilitation Centre</li>
              <li>Support towards church construction and mission work</li>
            </ul>
          </div>

          {/* Pastor giving contact */}
          <div className="bg-white/85 rounded-2xl shadow-md px-6 md:px-8 py-6 text-gray-800 text-sm md:text-base space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900 font-serif mb-1">Pastor&apos;s Giving Details</h2>
            <p className="text-gray-700 mb-2">
              For any giving related questions or to confirm details before sending a gift, you can contact the
              pastor directly using the details below.
            </p>
            <p className="font-semibold text-gray-900">Apostle Kaikede Olowo John Stephen</p>
            <p>
              <span className="font-semibold">Phone (WhatsApp):</span>{" "}
              <a href="tel:+256776875248" className="text-blue-700 underline">
                +256 776 875 248
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:kaikedeolo@gmail.com" className="text-blue-700 underline">
                kaikedeolo@gmail.com
              </a>
            </p>
            <p className="text-xs md:text-sm text-gray-600 mt-2">
              Please indicate if your gift is for tithes, offerings, the Children Rehabilitation Centre, church
              construction, or missions so it can be directed accordingly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
