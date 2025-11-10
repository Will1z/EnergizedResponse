import Reveal from "@/components/Reveal";
import { CheckCircle } from "lucide-react";

const phases = [
  {
    phase: "Phase 1: Discovery & Strategy",
    duration: "Week 1-2",
    activities: [
      "Deep dive into your business, market, and current GTM motion",
      "ICP definition and market segmentation",
      "Competitive analysis and positioning",
      "GTM roadmap and success metrics",
    ],
  },
  {
    phase: "Phase 2: Design & Planning",
    duration: "Week 3-4",
    activities: [
      "Process design and workflow mapping",
      "Tech stack audit and recommendations",
      "Playbook development",
      "Implementation timeline and resource planning",
    ],
  },
  {
    phase: "Phase 3: Implementation",
    duration: "Week 5-8",
    activities: [
      "Tool configuration and integration",
      "Process automation setup",
      "Team training and enablement",
      "Pilot program launch",
    ],
  },
  {
    phase: "Phase 4: Optimization",
    duration: "Ongoing",
    activities: [
      "Performance monitoring and reporting",
      "Continuous process refinement",
      "A/B testing and experimentation",
      "Quarterly strategy reviews",
    ],
  },
];

export default function Methodology() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="mb-8">Our Methodology</h1>
          <p className="text-xl text-text-secondary mb-12">
            The GTM Engine framework is a proven, four-phase approach that takes you from strategy 
            to execution in weeks, not months.
          </p>
        </Reveal>

        <div className="space-y-12">
          {phases.map((item, index) => (
            <Reveal key={item.phase} delay={index * 0.1}>
              <div className="border-l-4 border-accent-yellow pl-8 py-4">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="mb-0">{item.phase}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-full">
                    {item.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {item.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-3">
                      <CheckCircle className="text-accent-yellow flex-shrink-0 mt-1" size={20} />
                      <span className="text-text-secondary">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h3 className="mb-4">Why This Works</h3>
            <p className="text-text-secondary mb-4">
              Our methodology is designed for speed and impact. We don't believe in lengthy discovery 
              phases that delay results. Instead, we move quickly from insight to action, validating 
              assumptions along the way.
            </p>
            <p className="text-text-secondary">
              By combining AI-powered tools with hands-on expertise, we compress traditional timelines 
              while maintaining quality and ensuring your team is equipped for long-term success.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
