"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: 50, y: 20, label: "Strategy", description: "Market positioning and ICP definition" },
  { id: 2, x: 80, y: 35, label: "AI Acceleration", description: "Automated workflows and intelligent insights" },
  { id: 3, x: 80, y: 65, label: "Market Analysis", description: "Competitive intelligence and opportunity mapping" },
  { id: 4, x: 50, y: 85, label: "Implementation", description: "Tool stack setup and process design" },
  { id: 5, x: 20, y: 65, label: "Enablement", description: "Team training and playbook development" },
  { id: 6, x: 20, y: 35, label: "Precision", description: "On-demand specialists for every challenge" },
];

const connections = [
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
  [1, 4], [2, 5], [3, 6],
];

export default function GTMEngine() {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasBeenVisible) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        setHasBeenVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenVisible]);

  return (
    <section ref={sectionRef} className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-0">
          <h2 className="mb-1">The GTM Engine</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-0">
            Our signature framework connects six critical nodes to power your growth.
          </p>
        </div>

        {/* Desktop: Lines and Labels (no circles) */}
        <div className="hidden md:block relative w-full max-w-4xl mx-auto aspect-square -mt-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Connections - continuous cycle */}
            {connections.map(([from, to], index) => {
              const fromNode = nodes[from - 1];
              const toNode = nodes[to - 1];
              
              // Check if this is an outer line (hexagon perimeter) or inner line (cross connections)
              const isOuterLine = index < 6; // First 6 connections are the outer hexagon
              
              // Calculate shortened line coordinates
              // Outer lines: 15% shorter on each end
              // Inner lines: 10% shorter on each end
              const dx = toNode.x - fromNode.x;
              const dy = toNode.y - fromNode.y;
              const shortenPercent = isOuterLine ? 0.15 : 0.10;
              
              const x1 = fromNode.x + (dx * shortenPercent);
              const y1 = fromNode.y + (dy * shortenPercent);
              const x2 = toNode.x - (dx * shortenPercent);
              const y2 = toNode.y - (dy * shortenPercent);

              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#FFD600"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={hasBeenVisible ? { 
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 0.7, 0.7, 0],
                  } : {}}
                  transition={{ 
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                    times: [0, 0.25, 0.55, 1]
                  }}
                />
              );
            })}

            {/* Labels - floating and cycling (no circles) */}
            {nodes.map((node, index) => (
              <motion.text
                key={node.id}
                x={node.x}
                y={node.y}
                textAnchor="middle"
                fontSize="3"
                fontWeight="600"
                fill="#111111"
                style={{ userSelect: 'none', pointerEvents: 'none' }}
                initial={{ opacity: 0 }}
                animate={hasBeenVisible ? { 
                  opacity: [0, 1, 0.95, 1, 0.95, 1, 0],
                  x: [0, 0, 0.5, -0.3, 0.4, -0.2, 0],
                  y: [0, 0, -0.3, 0.4, -0.2, 0.3, 0],
                } : {}}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                  times: [0, 0.15, 0.3, 0.5, 0.65, 0.8, 1]
                }}
              >
                {node.label}
              </motion.text>
            ))}
          </svg>
        </div>

        {/* Mobile & Tablet: Card Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="p-6 border border-border rounded-lg bg-background hover:border-accent-yellow transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent-yellow" />
                <h4 className="font-semibold text-lg">{node.label}</h4>
              </div>
              <p className="text-sm text-text-secondary">{node.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
