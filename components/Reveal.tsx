"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      setShouldAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 50 } : {}}
      animate={isVisible && shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
