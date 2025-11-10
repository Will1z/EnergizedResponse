import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorLogos from "@/components/CursorLogos";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Energized Response | GTM Strategy Agency for B2B SaaS",
  description: "Energized Response helps B2B SaaS companies ($5M-$50M ARR) scale faster with AI-driven GTM strategy and revenue acceleration systems.",
  keywords: "GTM strategy, B2B SaaS growth, AI-driven marketing, revenue acceleration, go-to-market strategy, RevOps",
  openGraph: {
    title: "Energized Response | GTM Strategy Agency for B2B SaaS",
    description: "Energized Response helps B2B SaaS companies ($5M-$50M ARR) scale faster with AI-driven GTM strategy and revenue acceleration systems.",
    type: "website",
    url: "https://www.energizedresponse.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Energized Response",
    "url": "https://www.energizedresponse.com",
    "logo": "https://www.energizedresponse.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/energizedresponse"
    ],
    "description": "A GTM strategy and revenue acceleration agency helping B2B SaaS companies ($5M-$50M ARR) scale with AI-driven systems.",
    "founder": {
      "@type": "Person",
      "name": "Kevin Olurinde"
    },
    "knowsAbout": [
      "go-to-market strategy",
      "B2B SaaS growth",
      "AI-driven marketing",
      "revenue acceleration"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Energized Response do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Energized Response is a GTM strategy agency that helps B2B SaaS companies ($5M-$50M ARR) scale revenue faster using AI-driven frameworks and proven execution."
        }
      },
      {
        "@type": "Question",
        "name": "Who does Energized Response work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with B2B SaaS companies in growth stages between $5M and $50M ARR who want to accelerate their GTM execution and improve revenue predictability."
        }
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <CursorLogos />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
