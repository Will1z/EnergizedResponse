"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    arr: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-base text-white">
      {/* Hero */}
      <div className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-wide">
            Ready to Resolve Your Revenue<br />
            Uncertainty?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide max-w-3xl mx-auto">
            Let&apos;s explore how AI-accelerated strategies and proven expertise can drive your next growth phase.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 pb-24 md:pb-32 -mt-20">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="h-12 rounded-md bg-[#151515] border border-[#2A2A2A] text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                placeholder="First Name"
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                className="h-12 rounded-md bg-[#151515] border border-[#2A2A2A] text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                placeholder="Last Name"
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              className="h-12 w-full rounded-md bg-[#151515] border border-[#2A2A2A] text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
              placeholder="Email Address"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="h-12 w-full rounded-md bg-[#151515] border border-[#2A2A2A] text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
              placeholder="ARR or CY '24 (e.g., $15M, $25M)"
              type="text"
              name="arr"
              value={formData.arr}
              onChange={handleChange}
            />

            <textarea
              className="min-h-[160px] w-full rounded-md bg-[#151515] border border-[#2A2A2A] text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-yellow resize-none"
              placeholder="What is your primary revenue concern or growth challenge?"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full h-12 rounded-md font-semibold bg-accent-yellow text-black hover:brightness-95 active:brightness-90 transition"
            >
              Start the Conversation
            </button>
          </form>

          {/* Scroll indicator */}
          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#2A2A2A]" />
        </div>
      </div>
    </section>
  );
}
