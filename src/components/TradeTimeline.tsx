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
    { icon: FileText, title: 'Manual Documentation', time: '2-4 weeks', description: 'Paper-based forms, manual verification processes' },
    { icon: Clock, title: 'Bank Processing', time: '1-2 weeks', description: 'Letters of credit, fragmented coordination' },
    { icon: Shield, title: 'Limited Trust Mechanisms', time: 'Ongoing', description: 'No standardised escrow protection' },
    { icon: CreditCard, title: 'High Transaction Costs', time: '5-15% fees', description: 'Multiple intermediaries, currency conversions' },
  ];

  const dtfsSteps = [
    { icon: Zap, title: 'Digital Onboarding', time: '5 min', description: 'Guided multilingual workflow setup' },
    { icon: FileText, title: 'Automated Documentation', time: 'Instant', description: 'Digitised trade document generation' },
    { icon: Shield, title: 'Escrow-Secured Payments', time: 'Real-time', description: 'Smart contract–enabled transaction security' },
    { icon: Globe, title: 'Direct Settlement', time: '<1% fees', description: 'Streamlined cross-border payments' },
  ];

  return (
    <section className="section-padding bg-background relative">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative" ref={containerRef}>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Comparison</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            From Fragmented Processes to <span className="text-gradient">Coordinated Execution</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Reducing trade complexity through digital workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="tl-card rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-bold text-destructive mb-1">Traditional Trade</h3>
              <p className="text-sm text-muted-foreground">Weeks of manual coordination and high costs</p>
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
              <p className="text-sm text-muted-foreground">Digitised workflows, improved accuracy, reduced costs</p>
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
