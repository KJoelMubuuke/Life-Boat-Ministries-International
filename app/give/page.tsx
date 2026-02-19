export default function GivePage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-10 pb-20">

      {/* Hero Section */}
      <section className="relative px-4 mb-20 pt-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-2">
            Partner With Us
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
            Generosity <span className="text-primary">Changes Lives</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Your giving supports the spread of the Gospel, the Children Rehabilitation Centre, and our community outreach programs. Thank you for partnering with what God is doing through Life Boat Ministries.
          </p>
        </div>
      </section>

      <section className="px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* Ways to Give Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/5 border border-border/50 relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[4rem] -z-10 transition-transform group-hover:scale-110 duration-700"></div>

          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
            Ways to Give
          </h2>

          <div className="space-y-8">
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:bg-muted/50 transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-2">In Person</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                You can give during any of our services using the offering envelopes provided by our ushers.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:bg-muted/50 transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-2">Mobile Money & Bank Transfer</h3>
              <p className="text-base text-muted-foreground mb-3">
                For direct bank transfers or mobile money, please contact the pastor directly to ensure details are correct.
              </p>
            </div>

            <div className="pt-4 border-t border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Your Giving Supports:</h3>
              <ul className="grid grid-cols-1 gap-3 text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                  Children Rehabilitation Centre
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                  Church Construction & Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                  Evangelism & Missions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Pastor Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/5 border border-border/50 relative overflow-hidden group hover:border-secondary/20 transition-all duration-300">
          <div className="absolute top-0 left-0 w-40 h-40 bg-secondary/5 rounded-br-[4rem] -z-10 transition-transform group-hover:scale-110 duration-700"></div>

          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            Contact for Giving
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you would like to give a specific gift, tithe, or support a particular project, please reach out to our senior pastor for the most direct and secure method.
            </p>

            <div className="flex items-center gap-5 bg-muted/40 p-5 rounded-2xl border border-border/50 hover:bg-muted/60 transition-colors">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-primary/10">
                <img src="/church/pastor.png" alt="Apostle Kaikede" className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-bold text-xl text-foreground mb-1">Apostle Kaikede Olowo John Stephen</p>
                <div className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Senior Pastor
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Phone / WhatsApp</span>
                <a href="tel:+256776875248" className="text-xl font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  +256 776 875 248
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div>
                <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:kaikedeolo@gmail.com" className="text-xl font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  kaikedeolo@gmail.com
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-blue-50 text-blue-900 p-5 rounded-2xl text-base border border-blue-100 flex items-start gap-4 leading-relaxed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="font-semibold block mb-1">Note on Giving:</span>
                Please indicate the purpose of your gift (Tithe, Offering, Building Fund, etc.) when contacting us.
              </div>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
