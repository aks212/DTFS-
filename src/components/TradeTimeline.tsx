
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, FileText, CreditCard, Shield, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const TradeTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const traditionalRef = useRef<HTMLDivElement>(null);
  const dtfsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const traditional = traditionalRef.current;
    const dtfs = dtfsRef.current;

    if (!container || !traditional || !dtfs) return;

    // Timeline animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      }
    });

    // Traditional trade steps animation
    const traditionalSteps = traditional.querySelectorAll('.timeline-step');
    tl.fromTo(traditionalSteps, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, stagger: 0.2, duration: 0.8 }
    );

    // DTFS steps animation (with delay)
    const dtfsSteps = dtfs.querySelectorAll('.timeline-step');
    tl.fromTo(dtfsSteps,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, stagger: 0.2, duration: 0.8 },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const traditionalSteps = [
    { icon: FileText, title: "Manual Documentation", time: "2-4 weeks", description: "Paper forms, manual verification" },
    { icon: Clock, title: "Bank Processing", time: "1-2 weeks", description: "Letters of credit, wire transfers" },
    { icon: Shield, title: "Trust Issues", time: "Ongoing", description: "No escrow protection" },
    { icon: CreditCard, title: "High FX Costs", time: "5-15% fees", description: "Multiple currency conversions" },
  ];

  const dtfsSteps = [
    { icon: Zap, title: "AI Voice Onboarding", time: "5 minutes", description: "Multilingual AI assistance" },
    { icon: FileText, title: "Auto Documentation", time: "Instant", description: "AI-generated trade docs" },
    { icon: Shield, title: "Smart Contract Escrow", time: "Real-time", description: "Blockchain-secured payments" },
    { icon: Globe, title: "Stablecoin Settlement", time: "< 1% fees", description: "Direct peer-to-peer transfer" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Traditional Trade vs <span className="text-gradient">DTFS Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how DTFS transforms the trade process from weeks of bureaucracy to minutes of AI-powered efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Traditional Trade */}
          <div ref={traditionalRef}>
            <Card className="h-full bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-200/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">Traditional Trade</h3>
                  <p className="text-muted-foreground">Complex, slow, expensive</p>
                </div>

                <div className="space-y-6">
                  {traditionalSteps.map((step, index) => (
                    <div key={index} className="timeline-step flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <span className="text-sm text-red-400 font-medium">{step.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-200/20">
                  <p className="text-center font-semibold text-red-400">
                    Total Time: 4-8 weeks | Total Cost: 10-20% of trade value
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DTFS Trade */}
          <div ref={dtfsRef}>
            <Card className="h-full bg-gradient-to-br from-emerald-green-500/10 to-emerald-green-600/10 border-emerald-green-200/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-emerald-green-400 mb-2">DTFS Digital Trade</h3>
                  <p className="text-muted-foreground">Fast, secure, affordable</p>
                </div>

                <div className="space-y-6">
                  {dtfsSteps.map((step, index) => (
                    <div key={index} className="timeline-step flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-green-500/20 rounded-full flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-emerald-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <span className="text-sm text-emerald-green-400 font-medium">{step.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-emerald-green-500/10 rounded-lg border border-emerald-green-200/20">
                  <p className="text-center font-semibold text-emerald-green-400">
                    Total Time: 5-10 minutes | Total Cost: <1% of trade value
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeTimeline;
