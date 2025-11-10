import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParallaxLines from "./ParallaxLines";
import commonData from "@/content/common.json";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background parallax lines */}
      <ParallaxLines />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              GTM Strategy Agency for B2B SaaS Companies That Need More Than Tools
            </h1>
            
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto lg:mx-0">
              We help B2B SaaS companies ($5M-$50M ARR) build scalable, repeatable GTM systems that turn growth uncertainty into predictable revenue.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Our AI-driven GTM frameworks combine strategy, data, and human expertise to accelerate growth faster than traditional agencies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-no-cursor-logos>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-yellow text-base rounded-md font-semibold hover:brightness-95 transition"
              >
                Start a Conversation
              </Link>
              <Link
                href="/#methodology"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-base rounded-md font-semibold hover:bg-base hover:text-background transition"
              >
                See How We Work
              </Link>
            </div>
          </div>

          {/* Right: Abstract visual placeholder */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent-yellow/20 via-accent-teal/20 to-accent-pink/20 blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
