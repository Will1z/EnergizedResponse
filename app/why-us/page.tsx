import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="mb-8">Why Energized Response Works</h1>
          <p className="text-xl text-text-secondary mb-12">
            We're not your typical consulting firm. We're operators who've been in the trenches, 
            building and scaling GTM motions for B2B SaaS companies.
          </p>
        </Reveal>

        <div className="space-y-12">
          <Reveal delay={0.1}>
            <div>
              <h3 className="mb-4">We Speak Your Language</h3>
              <p className="text-text-secondary">
                No corporate jargon. No one-size-fits-all frameworks. We understand the unique challenges 
                of B2B SaaS because we've lived them. From navigating product-market fit to scaling to 
                enterprise, we've been there.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="mb-4">Speed Meets Precision</h3>
              <p className="text-text-secondary">
                Our AI-accelerated approach means you get insights and execution faster than traditional 
                consulting. We compress months of work into weeks without sacrificing quality.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <h3 className="mb-4">Battle-Tested Methodology</h3>
              <p className="text-text-secondary">
                The GTM Engine isn't theory - it's a proven framework refined through 40+ engagements. 
                We know what works because we've tested it in the real world.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div>
              <h3 className="mb-4">Your Success Is Our Success</h3>
              <p className="text-text-secondary">
                We don't just deliver reports and disappear. We partner with you for the long haul, 
                ensuring implementation success and continuous optimization.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Core Areas of Excellence */}
        <Reveal delay={0.5}>
          <div id="services" className="mt-20 mb-16">
            <h2 className="mb-6 text-center">Core Areas of Excellence</h2>
            <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
              Tailored strategies that fit your ICP, product, and marketplace conditions - not generic playbooks
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-lg hover:border-accent-yellow transition-colors">
                <h3 className="mb-4">Marketing Strategy & Execution</h3>
                <p className="text-text-secondary">
                  Modern GTM strategies with robust tech stacks and trustworthy data, optimized for your specific market conditions.
                </p>
              </div>

              <div className="p-8 border border-border rounded-lg hover:border-accent-teal transition-colors">
                <h3 className="mb-4">Sales & Revenue Operations</h3>
                <p className="text-text-secondary">
                  Deep alignment between sales and marketing teams, with pipeline optimization and lead qualification refinement.
                </p>
              </div>

              <div className="p-8 border border-border rounded-lg hover:border-accent-pink transition-colors">
                <h3 className="mb-4">Sales Enablement</h3>
                <p className="text-text-secondary">
                  Building high-performing teams through proven enablement frameworks and collaborative environments.
                </p>
              </div>

              <div className="p-8 border border-border rounded-lg hover:border-accent-yellow transition-colors">
                <h3 className="mb-4">Community Growth & Partnerships</h3>
                <p className="text-text-secondary">
                  Strategic relationship building and community development that drives sustainable revenue growth.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
            <h3 className="mb-4">Ready to Experience the Difference?</h3>
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
