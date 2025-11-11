import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Briefcase, MapPin, Users, Clock, ArrowLeft } from "lucide-react";

export default function Careers() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Hero Section */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Human-Centric, AI Powered GTM for Scaling B2B Companies
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We balance high-level opportunities with granular details for B2B companies, leveraging AI-human collaboration to drive measurable impact in the $5-$50M revenue sweet spot.
            </p>
          </div>
        </Reveal>

        {/* Why Work With Us */}
        <Reveal delay={0.1}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 border border-border rounded-lg hover:border-accent-yellow transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-accent-yellow" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
                <p className="text-text-secondary">
                  We&apos;re passionate about continuous learning and helping both our clients and team members reach their full potential.
                </p>
              </div>

              <div className="text-center p-8 border border-border rounded-lg hover:border-accent-teal transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent-teal/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-accent-teal" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Results Driven</h3>
                <p className="text-text-secondary">
                  We measure success by the measurable growth we create for our clients. Every strategy is backed by data and results.
                </p>
              </div>

              <div className="text-center p-8 border border-border rounded-lg hover:border-accent-pink transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent-pink/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-accent-pink" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-text-secondary">
                  Flexible remote work and a focus on output over hours. We believe great work happens when people are energized.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mission Statement */}
        <Reveal delay={0.2}>
          <div className="bg-gray-50 rounded-lg p-12 mb-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Building towards Autonomous GTM</h2>
            <p className="text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We believe AI is meant to augment systems and processes when a human is at the center of the machine. Our approach combines groundbreaking AI tools to accelerate GTM creation while ensuring human expertise drives strategic alignment and execution excellence. Join us as we pioneer the future where intelligent automation amplifies human insight to create unprecedented growth outcomes.
            </p>
          </div>
        </Reveal>

        {/* Open Positions */}
        <Reveal delay={0.3}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-text-secondary">0 open positions available</p>
          </div>

          <div className="border border-border rounded-lg p-12 text-center bg-background">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-gray-400" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">No open positions at the moment</h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@energizedresponse.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-yellow text-base rounded-lg font-semibold hover:brightness-95 transition"
            >
              Submit General Application
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
