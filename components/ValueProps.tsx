import Reveal from "./Reveal";
import { Zap, Brain, Users, Target } from "lucide-react";

const valueProps = [
  {
    icon: Target,
    title: "Built for B2B SaaS Scale",
    description: "We don't do generic consulting. Every engagement is designed around the unique challenges of scaling B2B SaaS, from product-market fit to enterprise expansion.",
  },
  {
    icon: Zap,
    title: "AI-Accelerated Execution",
    description: "We leverage cutting-edge AI tools to compress timelines, surface insights faster, and execute with precision. What used to take months now takes weeks.",
  },
  {
    icon: Users,
    title: "Expert Network Access",
    description: "Tap into our network of GTM specialists, data engineers, and RevOps leaders. You get the right expertise exactly when you need it.",
  },
  {
    icon: Brain,
    title: "Proven Methodology",
    description: "Our GTM Engine framework has helped 40+ B2B SaaS companies scale from seed to Series B and beyond. It's battle-tested and continuously refined.",
  },
];

export default function ValueProps() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Energized Response Works</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              We combine strategy, technology, and expertise to build GTM engines that scale.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProps.map((prop, index) => {
            const hoverColors = ['hover:border-accent-yellow', 'hover:border-accent-teal', 'hover:border-accent-pink', 'hover:border-accent-yellow'];
            const ringColors = ['group-hover:ring-accent-yellow', 'group-hover:ring-accent-teal', 'group-hover:ring-accent-pink', 'group-hover:ring-accent-yellow'];
            
            return (
              <Reveal key={prop.title} delay={index * 0.1}>
                <div className={`p-8 border border-border rounded-lg ${hoverColors[index]} transition-all hover:shadow-lg group`}>
                  <div className={`w-12 h-12 rounded-lg bg-base flex items-center justify-center mb-4 group-hover:ring-2 ${ringColors[index]} transition-all`}>
                    <prop.icon className="text-background" size={24} />
                  </div>
                  <h3 className="mb-3">{prop.title}</h3>
                  <p className="text-text-secondary">{prop.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
