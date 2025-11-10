"use client";

export default function MethodologySection() {
  return (
    <section id="methodology" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">The Energized Response Methodology</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-yellow transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 rounded-full bg-base flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-background">1</span>
              </div>
              <h3 className="text-xl font-semibold">AI-Accelerated Strategy Development</h3>
            </div>
            <p className="text-text-secondary">
              Leverage cutting-edge AI tools for rapid GTM creation while maintaining strategic human oversight for alignment and execution.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-teal transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 rounded-full bg-base flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-background">2</span>
              </div>
              <h3 className="text-xl font-semibold">Deep Marketplace Analysis</h3>
            </div>
            <p className="text-text-secondary">
              No cookie-cutter playbooks. Every strategy is tailored to your specific ICP, product positioning, and competitive landscape.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-pink transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 rounded-full bg-base flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-background">3</span>
              </div>
              <h3 className="text-xl font-semibold">Tactical Implementation Excellence</h3>
            </div>
            <p className="text-text-secondary">
              From high-level vision to granular execution—we identify and implement the small adjustments that drive meaningful progress.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-yellow transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 rounded-full bg-base flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-background">4</span>
              </div>
              <h3 className="text-xl font-semibold">Collaborative Expert Network</h3>
            </div>
            <p className="text-text-secondary">
              Access the right specialists for each project phase, fostering results-driven environments that deliver measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
