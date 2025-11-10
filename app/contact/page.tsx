"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Mail, Calendar } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
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
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="mb-6">Start a Conversation</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Ready to build your GTM engine? Let's talk about your challenges and how we can help.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-focus"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-focus"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-focus"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your GTM challenges *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-focus resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-base text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-base/20 transition-all hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-6">Other Ways to Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-accent-yellow transition-colors">
                    <Mail className="text-accent-yellow flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">Email Us</h4>
                      <a
                        href="mailto:ko@energizedresponse.com"
                        className="text-text-secondary hover:text-text-primary transition-colors"
                      >
                        ko@energizedresponse.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-accent-teal transition-colors">
                    <Calendar className="text-accent-teal flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">Book a Call</h4>
                      <p className="text-text-secondary mb-3">
                        Schedule a 30-minute strategy session to discuss your GTM challenges.
                      </p>
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-teal hover:underline font-medium"
                      >
                        View availability →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-3">What to Expect</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Free 30-minute strategy session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Custom GTM assessment and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>No pressure, no sales pitch</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
