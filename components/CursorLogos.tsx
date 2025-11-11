"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toolNames = [
  "serperdev",
  "Apify",
  "Notion",
  "BuiltWith",
  "Ocean",
  "OpenAI",
  "Outreach",
  "SalesLoft",
  "Apollo",
  "Clay",
  "ZoomInfo",
  "Clearbit",
  "Lusha",
  "HubSpot",
  "Salesforce",
  "Swan",
];

interface Logo {
  id: number;
  name: string;
  x: number;
  y: number;
}

export default function CursorLogos() {
  const [logoList, setLogoList] = useState<Logo[]>([]);
  const counter = useRef(0);
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Throttle: only spawn every 150ms
      if (now - lastSpawnTime.current < 150) return;
      
      counter.current++;
      if (counter.current % 2 !== 0) return;

      // Check if cursor is over text, buttons, links, inputs, or interactive elements
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      
      if (
        target.closest("nav") ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("form") ||
        target.closest("[data-no-cursor-logos]") ||
        tagName === "h1" ||
        tagName === "h2" ||
        tagName === "h3" ||
        tagName === "h4" ||
        tagName === "h5" ||
        tagName === "h6" ||
        tagName === "p" ||
        tagName === "span" ||
        tagName === "label" ||
        tagName === "li"
      ) {
        return;
      }

      lastSpawnTime.current = now;

      const newLogo: Logo = {
        id: now,
        name: toolNames[Math.floor(Math.random() * toolNames.length)],
        x: e.clientX + (Math.random() * 40 - 20),
        y: e.clientY + (Math.random() * 40 - 20),
      };

      setLogoList((prev) => [...prev.slice(-9), newLogo]);

      // Auto-remove after 800ms
      setTimeout(() => {
        setLogoList((prev) => prev.filter((logo) => logo.id !== newLogo.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[9999]">
      <AnimatePresence>
        {logoList.map((logo) => (
          <motion.div
            key={logo.id}
            className="absolute text-[10px] font-medium text-gray-400"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ 
              top: logo.y - 8, 
              left: logo.x - 20,
            }}
          >
            {logo.name}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
