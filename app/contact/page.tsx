"use client";

import { FormEvent, useState } from "react";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send message.");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-10 pb-20">

      {/* Hero Section */}
      <section className="relative px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-2">
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            We’re glad you’re reaching out. Whether you have a question, a prayer request, or want to plan a visit, we’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-20 items-start">

          {/* Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/5 border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100%] -z-10"></div>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Send a Message</h2>
            <p className="text-gray-600 mb-8">Fill in the form below and our team will respond as soon as possible.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-muted/30 border border-border px-5 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-muted/30 border border-border px-5 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-widest" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="How can we serve you?"
                  className="w-full bg-muted/30 border border-border px-5 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-widest" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  placeholder="Share your message or prayer request here..."
                  className="w-full bg-muted/30 border border-border px-5 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  {errorMessage || "Something went wrong."}
                </div>
              )}
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-border/50">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
              <ContactInfo />
            </div>

            <div className="bg-secondary/5 rounded-[2.5rem] p-8 border border-secondary/10">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-6">Visit & Service Times</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-secondary shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Location</h4>
                    <p className="text-gray-600">Tororo District, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-secondary shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Service Times</h4>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li><span className="font-medium text-gray-900">Sunday Service:</span> 7:00am – 11:00am</li>
                      <li><span className="font-medium text-gray-900">Bible Studies:</span> Tue 4pm – 6pm</li>
                      <li><span className="font-medium text-gray-900">Deliverance:</span> Thu 4pm – 6pm</li>
                      <li><span className="font-medium text-gray-900">Prayer & Fasting:</span> Fri 10am – 1pm</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-secondary/10 text-sm text-muted-foreground">
                <p>You can also reach us directly via phone or email using the contact card above.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
