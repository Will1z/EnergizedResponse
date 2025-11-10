import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="mb-8 text-center">Meet Kevin</h1>
          <p className="text-xl text-text-secondary mb-12 text-center">
            Colorado Resilience Meets Silicon Valley Speed
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <div className="w-64 h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/kevin-photo.jpg" 
                  alt="Kevin - Founder of Energized Response"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/koworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Kevin's LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 flex-1">
              <p className="text-text-secondary leading-relaxed">
                As a seasoned marketing and sales leader with nearly two decades in B2B SaaS, I've been privileged to drive growth across companies from startups to Fortune 1000s. My journey combines relentless curiosity, mentorship from top-tier leaders, and extensive hands-on expertise.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Today, I'm focused on solving the toughest revenue problems for B2B SaaS companies in the $10-$50M ARR range. My approach remains rooted in understanding the human side of business: genuine connections, transparent communication, and relentless focus on delivering value.
              </p>

              <p className="text-text-secondary leading-relaxed">
                A significant part of my mission involves building and scaling teams, nurturing individual talents, and creating environments where people grow and excel. I take pride in supporting careers long after our work paths diverge.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="border-t border-border pt-12">
            <h3 className="mb-6">Experience Highlights</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 flex-shrink-0" />
                <p className="text-text-secondary">
                  Led RevOps for 3 B2B SaaS companies from Series A to Series C
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 flex-shrink-0" />
                <p className="text-text-secondary">
                  Built and scaled outbound motions generating $50M+ in pipeline
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 flex-shrink-0" />
                <p className="text-text-secondary">
                  Implemented AI-powered GTM strategies for 40+ SaaS companies
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 flex-shrink-0" />
                <p className="text-text-secondary">
                  Speaker at SaaStr, Pavilion, and RevOps Co-op events
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
            <h3 className="mb-4">Let's Talk About Your GTM Challenges</h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-base text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-base/20 transition-all hover:scale-[1.02] group"
            >
              Start a Conversation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
