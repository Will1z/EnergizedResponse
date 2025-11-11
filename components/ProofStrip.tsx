"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  { id: "Outreach.png", name: "Outreach", showName: true },
  { id: "Apollo.png", name: "Apollo", showName: true },
  { id: "Clay.jpeg", name: "Clay", showName: true },
  { id: "Zoominfo.png", name: "ZoomInfo", showName: true },
  { id: "Clearbit.jpeg", name: "Clearbit", showName: true },
  { id: "HubSpot.png", name: "HubSpot", showName: true },
  { id: "Ocean.png", name: "Ocean", showName: true },
  { id: "builtwith.png", name: "BuiltWith", showName: false },
  { id: "notion.png", name: "Notion", showName: true },
  { id: "Claude.png", name: "Claude", showName: true },
  { id: "Openai.png", name: "OpenAI", showName: true },
  { id: "Apify.jpeg", name: "Apify", showName: true },
  { id: "Serper.jpeg", name: "Serper", showName: true },
];

export default function ProofStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animationId = requestAnimationFrame(animate);
    }

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        animationId = requestAnimationFrame(animate);
      }
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 border-y border-border bg-background overflow-hidden">
      <div className="mb-6 text-center">
        <p className="text-sm text-text-secondary uppercase tracking-wider">
          Trusted Tools & Platforms
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate the array for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 flex items-center gap-3 px-4 py-2 border border-border rounded-lg grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
              src={`/logos/${client.id}`}
              alt={client.name}
              width={32}
              height={32}
              className="object-contain"
            />
            {client.showName && (
              <span className="text-sm font-medium whitespace-nowrap">{client.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
