import Reveal from "./Reveal";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function MeetKevin() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-center">Meet Kevin</h2>
          <p className="text-xl text-text-secondary mb-12 text-center">
            Colorado Resilience Meets Silicon Valley Speed
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center flex-shrink-0 w-full md:w-auto">
              <div className="w-64 h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                <Image 
                  src="/kevin-photo.jpg" 
                  alt="Kevin - Founder of Energized Response"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/koworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Kevin&apos;s LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 flex-1">
              <p className="text-text-secondary leading-relaxed">
                As a seasoned marketing and sales leader with nearly two decades in B2B SaaS, I&apos;ve been privileged to drive growth across companies from startups to Fortune 1000s. My journey combines relentless curiosity, mentorship from top-tier leaders, and extensive hands-on expertise.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Today, I&apos;m focused on solving the toughest revenue problems for B2B SaaS companies in the $10-$50M ARR range. My approach remains rooted in understanding the human side of business: genuine connections, transparent communication, and relentless focus on delivering value.
              </p>

              <p className="text-text-secondary leading-relaxed">
                A significant part of my mission involves building and scaling teams, nurturing individual talents, and creating environments where people grow and excel. I take pride in supporting careers long after our work paths diverge.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
