import Reveal from "./Reveal";

export default function CoreAreas() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-6">Core Areas of Excellence</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Tailored strategies that fit your ICP, product, and marketplace conditions - not generic playbooks
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-yellow transition-colors h-full flex flex-col">
              <h3 className="mb-4">Marketing Strategy & Execution</h3>
              <p className="text-text-secondary flex-grow">
                Modern GTM strategies with robust tech stacks and trustworthy data, optimized for your specific market conditions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-teal transition-colors h-full flex flex-col">
              <h3 className="mb-4">Sales & Revenue Operations</h3>
              <p className="text-text-secondary flex-grow">
                Deep alignment between sales and marketing teams, with pipeline optimization and lead qualification refinement.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-pink transition-colors h-full flex flex-col">
              <h3 className="mb-4">Sales Enablement</h3>
              <p className="text-text-secondary flex-grow">
                Building high-performing teams through proven enablement frameworks and collaborative environments.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-8 border border-border rounded-lg bg-background hover:border-accent-yellow transition-colors h-full flex flex-col">
              <h3 className="mb-4">Community Growth & Partnerships</h3>
              <p className="text-text-secondary flex-grow">
                Strategic relationship building and community development that drives sustainable revenue growth.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
