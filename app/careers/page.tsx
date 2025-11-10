import Reveal from "@/components/Reveal";
import { ExternalLink } from "lucide-react";

export default function Careers() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="mb-8">Join Our Team</h1>
          <p className="text-xl text-text-secondary mb-12">
            We&apos;re always looking for talented GTM operators, RevOps specialists, and AI enthusiasts 
            to join our growing network.
          </p>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <div className="p-8 border border-border rounded-lg">
              <h3 className="mb-4">Why Work With Us</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow mt-1">•</span>
                  <span>Work on cutting-edge GTM challenges with leading B2B SaaS companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow mt-1">•</span>
                  <span>Flexible, remote-first culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow mt-1">•</span>
                  <span>Competitive compensation and project-based opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-yellow mt-1">•</span>
                  <span>Learn from and collaborate with top GTM operators</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 border border-border rounded-lg">
              <h3 className="mb-4">Open Roles</h3>
              <p className="text-text-secondary mb-6">
                We&apos;re currently building our expert network. If you have deep expertise in any of 
                these areas, we&apos;d love to hear from you:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• GTM Strategy & Planning</li>
                <li>• RevOps & Systems Architecture</li>
                <li>• Sales Enablement</li>
                <li>• Data Engineering & Analytics</li>
                <li>• AI/ML for GTM Applications</li>
                <li>• Outbound Sales & Prospecting</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-8 bg-gray-50 rounded-lg text-center">
              <h3 className="mb-4">Interested in Joining?</h3>
              <p className="text-text-secondary mb-6">
                Send your background and areas of expertise to our team.
              </p>
              <a
                href="mailto:careers@energizedresponse.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-base text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-base/20 transition-all hover:scale-[1.02]"
              >
                careers@energizedresponse.com
                <ExternalLink size={20} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
