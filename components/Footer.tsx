import Link from "next/link";
import commonData from "@/content/common.json";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Nicl</h3>
            <p className="text-text-secondary text-sm max-w-md">
              Expert GTM and RevOps agency helping B2B SaaS companies scale with AI-powered strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/why-us" className="text-text-secondary hover:text-text-primary transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-text-secondary hover:text-text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-text-secondary hover:text-text-primary transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-text-secondary hover:text-text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-text-secondary hover:text-text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href={`mailto:${commonData.contactEmail}`}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {commonData.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Nicl. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
