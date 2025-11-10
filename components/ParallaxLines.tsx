"use client";

import { useEffect, useState } from "react";

export default function ParallaxLines() {
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReduced(true);
    }
  }, []);

  if (isReduced) {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="grad-static" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FFD600", stopOpacity: 0.4 }} />
              <stop offset="50%" style={{ stopColor: "#00FFC2", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#FF0054", stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <path d="M0,150 Q250,100 500,150 T1000,150" stroke="url(#grad-static)" strokeWidth="3" fill="none" />
          <path d="M0,250 Q250,200 500,250 T1000,250" stroke="url(#grad-static)" strokeWidth="3" fill="none" />
          <path d="M0,350 Q250,300 500,350 T1000,350" stroke="url(#grad-static)" strokeWidth="3" fill="none" />
        </svg>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes flowLine1 {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -300;
          }
        }
        
        @keyframes flowLine2 {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -400;
          }
        }
        
        @keyframes flowLine3 {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -500;
          }
        }
        
        @keyframes moveDot1 {
          from {
            cx: -50px;
          }
          to {
            cx: 1050px;
          }
        }
        
        @keyframes moveDot2 {
          from {
            cx: -50px;
          }
          to {
            cx: 1050px;
          }
        }
        
        @keyframes moveDot3 {
          from {
            cx: -50px;
          }
          to {
            cx: 1050px;
          }
        }
        
        @keyframes pulse1 {
          0%, 100% { r: 6px; opacity: 0.7; }
          25% { r: 7.8px; opacity: 0.9; }
          50% { r: 6px; opacity: 0.7; }
          75% { r: 4.8px; opacity: 0.7; }
        }
        
        @keyframes pulse2 {
          0%, 100% { r: 6px; opacity: 0.7; }
          25% { r: 4.8px; opacity: 0.7; }
          50% { r: 6px; opacity: 0.7; }
          75% { r: 7.8px; opacity: 0.9; }
        }
        
        @keyframes pulse3 {
          0%, 100% { r: 6px; opacity: 0.7; }
          25% { r: 7.2px; opacity: 0.9; }
          50% { r: 6px; opacity: 0.7; }
          75% { r: 5.4px; opacity: 0.7; }
        }
        
        .line1 {
          animation: flowLine1 8s linear infinite;
        }
        
        .line2 {
          animation: flowLine2 10s linear infinite;
        }
        
        .line3 {
          animation: flowLine3 12s linear infinite;
        }
        
        .dot1 {
          animation: moveDot1 6s linear infinite, pulse1 6s linear infinite;
        }
        
        .dot2 {
          animation: moveDot2 8s linear infinite 1s, pulse2 8s linear infinite 1s;
        }
        
        .dot3 {
          animation: moveDot3 10s linear infinite 2s, pulse3 10s linear infinite 2s;
        }
        
        .small-dot1 {
          animation: moveDot1 7s linear infinite 0.5s;
        }
        
        .small-dot2 {
          animation: moveDot2 9s linear infinite 1.5s;
        }
        
        .small-dot3 {
          animation: moveDot3 11s linear infinite 2.5s;
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="grad-flow-pure" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD600" stopOpacity="0.6">
                <animate attributeName="offset" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#00FFC2" stopOpacity="0.7">
                <animate attributeName="offset" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#FF0054" stopOpacity="0.6">
                <animate attributeName="offset" values="1;0;1" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Line 1 */}
          <path
            className="line1"
            d="M-200,150 Q50,100 300,150 Q550,200 800,150 Q1050,100 1200,150"
            stroke="url(#grad-flow-pure)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="20 10"
          />
          
          {/* Line 2 */}
          <path
            className="line2"
            d="M-200,250 Q50,200 300,250 Q550,300 800,250 Q1050,200 1200,250"
            stroke="url(#grad-flow-pure)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="25 15"
          />
          
          {/* Line 3 */}
          <path
            className="line3"
            d="M-200,350 Q50,300 300,350 Q550,400 800,350 Q1050,300 1200,350"
            stroke="url(#grad-flow-pure)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="30 20"
          />
          
          {/* Energy dot 1 */}
          <circle
            className="dot1"
            cy="150"
            fill="#FFD600"
          />
          
          {/* Energy dot 2 */}
          <circle
            className="dot2"
            cy="250"
            fill="#00FFC2"
          />
          
          {/* Energy dot 3 */}
          <circle
            className="dot3"
            cy="350"
            fill="#FF0054"
          />
          
          {/* Small dot 1 */}
          <circle
            className="small-dot1"
            cy="180"
            r="6"
            fill="#FFD600"
            opacity="0.6"
          />
          
          {/* Small dot 2 */}
          <circle
            className="small-dot2"
            cy="280"
            r="6"
            fill="#00FFC2"
            opacity="0.6"
          />
          
          {/* Small dot 3 */}
          <circle
            className="small-dot3"
            cy="320"
            r="6"
            fill="#FF0054"
            opacity="0.6"
          />
        </svg>
      </div>
    </>
  );
}
