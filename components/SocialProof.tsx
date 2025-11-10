import Metrics from "./Metrics";
import Reveal from "./Reveal";
import commonData from "@/content/common.json";

const testimonials = [
  {
    quote: "Energized Response transformed our outbound motion in 6 weeks. Pipeline quality is up 3x and our team actually enjoys prospecting now.",
    author: "Sarah Chen",
    role: "VP Sales at CloudScale",
  },
  {
    quote: "The GTM Engine framework gave us clarity we'd been missing for months. We went from scattered tactics to a cohesive growth strategy.",
    author: "Marcus Rodriguez",
    role: "CEO at DataFlow",
  },
  {
    quote: "Their AI-powered approach cut our lead research time by 80%. We're now reaching the right people with the right message every time.",
    author: "Emily Watson",
    role: "Head of RevOps at SalesHub",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Metrics
            value={commonData.socialProof.metric1.value}
            suffix={commonData.socialProof.metric1.suffix}
            label={commonData.socialProof.metric1.label}
          />
          <Metrics
            value={commonData.socialProof.metric2.value}
            suffix={commonData.socialProof.metric2.suffix}
            label={commonData.socialProof.metric2.label}
          />
        </div>

        {/* Testimonials */}
        <Reveal>
          <div className="mt-16">
            <h2 className="text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="p-8 border border-border rounded-lg bg-background hover:border-base transition-colors h-full flex flex-col">
                    <p className="text-text-secondary mb-6 italic flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-text-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
