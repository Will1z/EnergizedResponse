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
          <div className="space-y-8">
            <h1 className="text-balance">
              Your GTM Engine Needs More Than Tools
            </h1>
            <p className="text-xl text-text-secondary max-w-xl">
              It needs strategy, execution, and the right expertise working together.
            </p>
            <p className="text-lg text-text-secondary max-w-xl">
              We&apos;re Energized Response, a GTM and RevOps agency built for B2B SaaS companies ready to scale. 
              We combine AI-powered acceleration with proven methodologies to turn your go-to-market motion into 
              a predictable growth engine.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4" data-no-cursor-logos>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-base text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-base/20 transition-all hover:scale-[1.02] group"
              >
                {commonData.ctaPrimary}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#methodology"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-base text-base rounded-lg font-semibold hover:border-text-primary hover:shadow-md transition-all"
              >
                {commonData.ctaSecondary}
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
