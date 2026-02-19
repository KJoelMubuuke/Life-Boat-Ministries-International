import LeadershipCard from "@/components/LeadershipCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-10 pb-20">

      {/* Hero Section */}
      <section className="relative px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-2">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Life Boat Ministries International is a Christ-centered family of believers where people can belong, believe, and become all that God has called them to be.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">

        {/* Intro Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[2.5rem] -z-10 blur-xl"></div>
          <div className="bg-white rounded-[2rem] shadow-xl border border-border/50 px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-br-[100%] -z-10"></div>

            <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed text-gray-600">
              <p>
                We welcome people from every background and walk of life, creating a warm, loving environment where <span className="text-gray-900 font-semibold">Jesus Christ is at the center</span> of everything we do.
              </p>
              <p>
                At the heart of who we are is a deep compassion for the vulnerable. Through our <span className="text-primary font-medium">orphanage ministry</span>, we open our arms and doors to children who need safety, love, and a spiritual home. By providing food, shelter, education, and Christ-centered care, we are raising a generation of children who know they are seen, valued, and destined by God.
              </p>
              <p>
                As a local church with a global vision, we are passionate about prayer, worship, the Word of God, and discipleship. We believe in nurturing strong families, raising godly leaders, and equipping believers to influence their communities, workplaces, and nations for Christ.
              </p>
              <p className="font-serif text-2xl md:text-3xl text-gray-900 italic border-l-4 border-primary pl-6 py-2">
                "We exist to preach Christ and see lives changed spiritually, socially, and economically."
              </p>
            </div>
          </div>
        </div>

        {/* Core Identity Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              highlight: "Preaching Christ, changing lives spiritually, socially, and economically.",
              desc: "To preach the gospel of Jesus Christ to a hurting world, seeing lives transformed spiritually, socially, and economically by the power of God."
            },
            {
              title: "Our Mission",
              highlight: "To accomplish the Great Commission through evangelism and discipleship.",
              desc: "Training adults and children, strengthening ministries through biblical education, church planting, and foreign missions, and equipping people for sustainable living."
            },
            {
              title: "Theme 2026",
              highlight: "Renewal of the Mind",
              desc: "Based on Romans 12:1–2, we are called to present our bodies as a living sacrifice and to be transformed by the renewing of our minds to prove the perfect will of God."
            }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{card.title}</h2>
              <p className="text-lg font-semibold text-primary mb-4 leading-snug">
                {card.highlight}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Lower Panel */}
        <div className="bg-muted/30 rounded-[2.5rem] p-8 md:p-12 space-y-16">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg">💰</span>
                Financial Pool
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We encourage a culture of faithful stewardship and generosity through:
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Seeds", "Thanksgiving", "Offertory", "Donation", "Contributions", "Tithes"].map((item) => (
                  <li key={item} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-medium text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-lg">🌱</span>
                Areas to Observe
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-xl font-medium text-gray-900 mb-4">
                  "I Love My Church, I Support My Church"
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a family of believers, we are intentionally focusing on key areas of growth and obedience this year. These focus areas help us live out our theme consistently.
                </p>
              </div>
            </section>
          </div>

          <section className="flex justify-center">
            {/* Note: Ensure LeadershipCard is viewed/updated to match new design if needed, assuming it's okay for now or will be covered in 'Improve Components' if critical */}
            <LeadershipCard />
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Church Programs</h2>
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-900">
                      <th className="p-5 font-bold text-lg border-b border-gray-200">Day</th>
                      <th className="p-5 font-bold text-lg border-b border-gray-200">Program</th>
                      <th className="p-5 font-bold text-lg border-b border-gray-200">Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-lg">
                    {[
                      ["Tuesday", "Bible Studies", "4:00pm – 6:00pm"],
                      ["Thursday", "Deliverance Service", "4:00pm – 6:00pm"],
                      ["Friday", "Prayer & Fasting", "8:00am – 6:00pm"],
                      ["Saturday", "Praise & Worship Practice & Cleaning", "10:00am – 6:00pm"],
                      ["Last Friday", "Night of Encounter with God", "6:00pm – 6:00am"],
                      ["Sunday", "Sunday Service", "7:00am – 11:00am"],
                    ].map(([day, program, time], i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        <td className="p-5 font-medium text-gray-900">{day}</td>
                        <td className="p-5">{program}</td>
                        <td className="p-5">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
