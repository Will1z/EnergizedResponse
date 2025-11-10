import Reveal from "@/components/Reveal";
import { Target, Zap, Wrench, GraduationCap, Users, BarChart } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "GTM Strategy & Planning",
    description: "Define your ICP, positioning, and go-to-market motion. We help you identify the right markets and craft messaging that resonates.",
    deliverables: ["ICP definition", "Market segmentation", "Positioning framework", "GTM roadmap"],
  },
  {
    icon: Zap,
    title: "AI-Powered Acceleration",
    description: "Leverage cutting-edge AI tools to automate workflows, surface insights, and execute faster than ever before.",
    deliverables: ["AI workflow automation", "Predictive analytics", "Lead scoring models", "Content generation"],
  },
  {
    icon: BarChart,
    title: "Market & Competitive Analysis",
    description: "Understand your competitive landscape and identify untapped opportunities with data-driven intelligence.",
    deliverables: ["Competitive analysis", "Market sizing", "Opportunity mapping", "Win/loss analysis"],
  },
  {
    icon: Wrench,
    title: "RevOps Implementation",
    description: "Build and optimize your revenue operations infrastructure. From tool selection to process design, we set you up for scale.",
    deliverables: ["Tech stack audit", "CRM configuration", "Process documentation", "Integration setup"],
  },
  {
    icon: GraduationCap,
    title: "Team Enablement",
    description: "Equip your team with the skills, playbooks, and training they need to execute your GTM strategy effectively.",
    deliverables: ["Sales playbooks", "Training programs", "Onboarding materials", "Best practice guides"],
  },
  {
    icon: Users,
    title: "Expert Network Access",
    description: "Tap into our network of specialists for on-demand expertise in data engineering, automation, and specialized GTM functions.",
    deliverables: ["Specialist matching", "Project-based support", "Advisory sessions", "Technical implementation"],
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              End-to-end GTM and RevOps services designed to help B2B SaaS companies scale predictably.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <div className="p-8 border border-border rounded-lg hover:border-accent-yellow transition-all hover:shadow-lg group h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-base flex items-center justify-center mb-4 group-hover:ring-2 group-hover:ring-accent-yellow transition-all">
                  <service.icon className="text-background" size={24} />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow">{service.description}</p>
                <div>
                  <p className="text-sm font-semibold mb-2">Key Deliverables:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
