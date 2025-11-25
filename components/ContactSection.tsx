"use client";

import { useState } from "react";

export default function ContactSection() {
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
    <section className="py-20 bg-base">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-background text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Resolve Your Revenue Uncertainty?
          </h2>
          <p className="text-background/90 text-lg leading-relaxed">
            Let's explore how AI-accelerated strategies and proven expertise can drive your next growth phase.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-background/10 border border-background/30 rounded text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-background/10 border border-background/30 rounded text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-background/10 border border-background/30 rounded text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
          />

          <input
            type="text"
            name="arr"
            placeholder="ARR (or CY '24 (e.g., $15M, $25M, etc.)"
            value={formData.arr}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-background/10 border border-background/30 rounded text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
          />

          <textarea
            name="message"
            placeholder="What's your primary revenue concern or growth challenge?"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-background/10 border border-background/30 rounded text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent resize-none"
          />

          <button
            type="submit"
            className="w-full px-8 py-4 bg-accent-yellow text-base rounded font-semibold text-lg hover:shadow-xl hover:shadow-accent-yellow/30 transition-all hover:scale-[1.02]"
          >
            Start the Conversation
          </button>
        </form>

        <div className="my-8 border-t border-background/20"></div>

        <div className="text-center">
          <p className="text-background/80">
            Or reach out directly:{" "}
            <a
              href="mailto:ko@energizedresponse.com"
              className="text-accent-teal hover:text-accent-yellow transition-colors"
            >
              ko@energizedresponse.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
