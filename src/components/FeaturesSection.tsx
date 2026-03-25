import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Shield, CreditCard, FileText, Mic, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.feature-card', { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out'
        });
      }
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const features = [
    { icon: Brain, title: 'AI Trade Assistant', description: 'Voice-first onboarding in local languages with Llama AI for seamless trade setup.' },
    { icon: Shield, title: 'Smart Contract Escrow', description: 'Blockchain-secured payments with automatic release upon delivery confirmation.' },
    { icon: CreditCard, title: 'Stablecoin & Local Currency', description: 'Support for USDC, USDT, and African currencies with real-time conversion.' },
    { icon: FileText, title: 'Trade Document Generator', description: 'AI-powered export forms, invoices, and compliance documentation.' },
    { icon: Mic, title: 'Multilingual Voice Interface', description: 'Hausa, Yoruba, Igbo, English, French, and Arabic support built in.' },
    { icon: Users, title: 'Agent Dashboard & USSD', description: 'Offline access via USSD codes ensuring reach in remote areas.' },
  ];

  return (
    <section id="features" className="section-padding bg-background relative" ref={featuresRef}>
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Platform</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Everything You Need<br />
            <span className="text-muted-foreground">to Trade Globally</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive suite of AI-powered tools built for African trade
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card group bg-card/50 border-border hover:border-gold/20 transition-all duration-300 rounded-2xl">
              <CardHeader className="p-6 pb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors duration-300">
                  <feature.icon className="h-5 w-5 text-gold" />
                </div>
                <CardTitle className="text-lg font-display group-hover:text-foreground transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
