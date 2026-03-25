import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, FileText, CreditCard, Shield, Zap, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TradeTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tl-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const traditionalSteps = [
    { icon: FileText, title: 'Manual Documentation', time: '2-4 weeks', description: 'Paper forms, manual verification' },
    { icon: Clock, title: 'Bank Processing', time: '1-2 weeks', description: 'Letters of credit, wire transfers' },
    { icon: Shield, title: 'Trust Issues', time: 'Ongoing', description: 'No escrow protection' },
    { icon: CreditCard, title: 'High FX Costs', time: '5-15% fees', description: 'Multiple currency conversions' },
  ];

  const dtfsSteps = [
    { icon: Zap, title: 'AI Voice Onboarding', time: '5 min', description: 'Multilingual AI assistance' },
    { icon: FileText, title: 'Auto Documentation', time: 'Instant', description: 'AI-generated trade docs' },
    { icon: Shield, title: 'Smart Contract Escrow', time: 'Real-time', description: 'Blockchain-secured payments' },
    { icon: Globe, title: 'Stablecoin Settlement', time: '<1% fees', description: 'Direct peer-to-peer transfer' },
  ];

  return (
    <section className="section-padding bg-background relative">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative" ref={containerRef}>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Comparison</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Traditional Trade vs <span className="text-gradient">DTFS</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From weeks of bureaucracy to minutes of AI-powered efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="tl-card rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-bold text-destructive mb-1">Traditional Trade</h3>
              <p className="text-sm text-muted-foreground">Complex, slow, expensive</p>
            </div>
            <div className="space-y-5">
              {traditionalSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-4 w-4 text-destructive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold">{step.title}</h4>
                      <span className="text-xs text-destructive font-medium whitespace-nowrap">{step.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-destructive/5 rounded-xl border border-destructive/10">
              <p className="text-center text-sm font-semibold text-destructive">4-8 weeks • 10-20% of trade value</p>
            </div>
          </div>

          {/* DTFS */}
          <div className="tl-card rounded-2xl border border-emerald/20 bg-emerald/[0.03] p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-bold text-emerald mb-1">DTFS Digital Trade</h3>
              <p className="text-sm text-muted-foreground">Fast, secure, affordable</p>
            </div>
            <div className="space-y-5">
              {dtfsSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-4 w-4 text-emerald" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold">{step.title}</h4>
                      <span className="text-xs text-emerald font-medium whitespace-nowrap">{step.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-emerald/5 rounded-xl border border-emerald/10">
              <p className="text-center text-sm font-semibold text-emerald">5-10 minutes • &lt;1% of trade value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeTimeline;
