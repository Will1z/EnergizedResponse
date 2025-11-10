"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface MetricsProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function Metrics({ value, label, suffix = "", prefix = "" }: MetricsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      motionValue.set(value);
    } else if (isInView) {
      setDisplayValue(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-8 border border-border rounded-lg bg-background hover:border-accent-yellow transition-colors"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-5xl font-bold mb-2">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-text-secondary">{label}</div>
    </motion.div>
  );
}
