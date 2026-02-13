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
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main className="min-h-[70vh] bg-[#f5f0e8] flex justify-center px-4 py-10">
      <section className="max-w-5xl w-full">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-6 md:px-10 py-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-3 text-center md:text-left">
            Contact Us
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left">
            We’re glad you’re reaching out. Whether you have a question, a prayer request, or want to
            plan a visit, we’d love to hear from you and stand with you in faith.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] items-start">
          {/* Contact form */}
          <div className="bg-white/85 rounded-2xl shadow-md px-6 md:px-8 py-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 font-serif">Send Us a Message</h2>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Fill in the form below and our team will respond as soon as possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d79a1e]/70 focus:border-[#d79a1e] bg-white/80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  name="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d79a1e]/70 focus:border-[#d79a1e] bg-white/80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we serve you?"
                  name="subject"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d79a1e]/70 focus:border-[#d79a1e] bg-white/80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1" htmlFor="message">
                  Message / Prayer Request
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share your message or prayer request here..."
                  name="message"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d79a1e]/70 focus:border-[#d79a1e] bg-white/80"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto bg-[#d79a1e] hover:bg-[#b88419] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-8 py-2.5 rounded-md transition-colors duration-200 mt-2"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="mt-3 text-sm text-green-700">
                  Thank you for reaching out. Your message has been received.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-700">
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}
            </form>
          </div>

          {/* Contact details & quick info */}
          <div className="flex flex-col items-center md:items-stretch gap-5">
            <ContactInfo />

            <div className="bg-white/80 rounded-2xl shadow-md px-5 py-4 text-sm md:text-base text-gray-800 w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">Visit & Service Times</h3>
              <p className="mb-1">
                <span className="font-semibold">Location:</span> Life Boat Ministries International, Kampala, Uganda
              </p>
              <p className="mb-1">
                <span className="font-semibold">Sunday Service:</span> 7:00am – 11:00am
              </p>
              <p className="mb-1">
                <span className="font-semibold">Bible Study:</span> Tuesday 4:00pm – 6:00pm
              </p>
              <p className="mb-1">
                <span className="font-semibold">Intercessory:</span> Thursday 4:00pm – 6:00pm
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                You can also reach us directly on phone or email using the contact card above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
