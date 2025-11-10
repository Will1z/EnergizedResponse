"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  "outreach",
  "salesloft",
  "apollo",
  "clay",
  "zoominfo",
  "seamless",
  "clearbit",
  "lusha",
  "hubspot",
  "salesforce",
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
          Trusted Outbound Tools
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate the array for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={`${client}-${index}`}
            className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
              src={`/logos/${client}.svg`}
              alt={client}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
