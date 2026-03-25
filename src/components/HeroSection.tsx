import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Download } from 'lucide-react';
import VideoModal from './VideoModal';
import FormModal from './FormModal';

const HeroSection = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const metricsRef = useRef(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(heroTitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo(heroSubtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .fromTo(heroButtonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .fromTo(metricsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://videos.pexels.com/video-files/6774244/6774244-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-background/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,hsl(var(--gold)/0.08),transparent_70%)]"></div>

        {/* Card background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            src="/lovable-uploads/f34a27cb-bb8a-4f9b-b9dc-6dba44563020.png"
            alt=""
            className="w-[900px] md:w-[1200px] lg:w-[1500px] h-auto opacity-[0.06] transform rotate-12 scale-125"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border/80 bg-secondary/50 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Now accepting early access applications</span>
          </div>

          <h1
            ref={heroTitleRef}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-bold mb-6 md:mb-8 leading-[1.05] opacity-0 tracking-tight"
          >
            <span className="text-foreground">The Operating System</span>
            <br />
            <span className="text-foreground">for </span>
            <span className="text-gradient">African Trade</span>
          </h1>

          <p
            ref={heroSubtitleRef}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed opacity-0"
          >
            AI-powered voice onboarding, escrow-secured payments, and intelligent 
            deal matching — all in your local language.
          </p>

          <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center opacity-0">
            <Button
              size="lg"
              className="w-full sm:w-auto btn-primary text-base px-8 py-6 group"
              onClick={() => setIsFormModalOpen(true)}
            >
              <span className="flex items-center">
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto btn-secondary text-base px-8 py-6 group"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              Watch Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto btn-secondary text-base px-8 py-6 group"
            >
              <Download className="mr-2 h-4 w-4" />
              Install App
            </Button>
          </div>

          {/* Trust Metrics */}
          <div ref={metricsRef} className="mt-16 md:mt-24 opacity-0">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: '$500M+', label: 'Trade Volume Target' },
                { value: '500K+', label: 'SMEs to Onboard' },
                { value: '6+', label: 'Languages Supported' },
                { value: '<1%', label: 'Transaction Fees' },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <FormModal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} />
    </>
  );
};

export default HeroSection;
