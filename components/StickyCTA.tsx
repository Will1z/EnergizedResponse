"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Show after 30% scroll
      const shouldShow = scrollPercentage > 30;
      
      // Hide near footer (last 10%)
      const nearFooter = scrollPercentage > 90;
      
      setIsVisible(shouldShow && !nearFooter);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 left-0 right-0 z-40 flex justify-center"
          data-no-cursor-logos
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-base text-background rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all group"
          >
            <span className="font-medium">Start a Conversation</span>
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
