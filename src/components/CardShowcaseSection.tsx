import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Shield, Zap, Globe, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CardShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(cardRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.card-feature', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2, ease: 'power2.out' });
      }
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const cardFeatures = [
    { icon: CreditCard, title: 'Multi-Currency Support', description: 'Accept payments in USDC, USDT, and local African currencies' },
    { icon: Shield, title: 'Blockchain Security', description: 'Protected by smart contract escrow and advanced encryption' },
    { icon: Zap, title: 'Instant Settlements', description: 'Real-time transaction processing and immediate fund availability' },
    { icon: Globe, title: 'Global Acceptance', description: 'Use anywhere Visa is accepted worldwide' },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background relative">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            <Star className="h-3 w-3 inline mr-1.5 fill-current" />
            Premium Banking
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Your <span className="text-gradient">DTFS Visa Card</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seamless African trade finance powered by blockchain technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="relative" ref={cardRef}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src="/lovable-uploads/f34a27cb-bb8a-4f9b-b9dc-6dba44563020.png"
                alt="DTFS Visa Card"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl group-hover:shadow-[0_40px_100px_-20px_hsl(var(--gold)/0.15)] transition-all duration-500 transform group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="space-y-4">
            {cardFeatures.map((feature, index) => (
              <Card key={index} className="card-feature group bg-card/50 border-border hover:border-gold/20 transition-all duration-300 rounded-xl">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                      <feature.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-semibold mb-1 group-hover:text-gold transition-colors duration-300">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="mt-6 p-5 rounded-xl border border-gold/20 bg-gold/5">
              <h4 className="text-sm font-display font-semibold mb-1 text-gold">Partnership with Afreximbank & PAPSS</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Backed by the African Export-Import Bank and powered by the Pan-African Payment and Settlement System.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardShowcaseSection;
