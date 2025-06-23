
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PressMediaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Trust Indicators animation
    gsap.fromTo('.trust-indicator',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
            <div className="trust-indicator flex items-center gap-2 px-3 py-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base">Backed by Y Combinator</span>
            </div>
            <div className="trust-indicator flex items-center gap-2 px-3 py-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base">500+ Beta Users</span>
            </div>
            <div className="trust-indicator flex items-center gap-2 px-3 py-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base">$2M Seed Funding</span>
            </div>
            <div className="trust-indicator flex items-center gap-2 px-3 py-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressMediaSection;
