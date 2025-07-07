import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Shield, Zap, Globe, Star, CheckCircle } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const CardShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(cardRef.current, {
          opacity: 0,
          scale: 0.8,
          rotateY: 15
        }, {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: 'power2.out'
        });
        gsap.fromTo('.card-feature', {
          opacity: 0,
          y: 40
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: 'power2.out'
        });
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const cardFeatures = [{
    icon: CreditCard,
    title: "Multi-Currency Support",
    description: "Accept payments in USDC, USDT, and local African currencies"
  }, {
    icon: Shield,
    title: "Blockchain Security",
    description: "Protected by smart contract escrow and advanced encryption"
  }, {
    icon: Zap,
    title: "Instant Settlements",
    description: "Real-time transaction processing and immediate fund availability"
  }, {
    icon: Globe,
    title: "Global Acceptance",
    description: "Use anywhere Visa is accepted worldwide"
  }];
  return <section ref={sectionRef} className="py-16 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <Badge className="mb-4 md:mb-6 bg-sand-gold-500/20 text-sand-gold-400 border-sand-gold-500/30 text-xs md:text-sm">
            <Star className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Premium Banking
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Your <span className="bg-gradient-to-r from-sand-gold-400 to-sand-gold-600 bg-clip-text text-transparent">DTFS Visa Card</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience seamless African trade finance with our premium Visa debit/credit card powered by blockchain technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Card Display */}
          <div className="relative" ref={cardRef}>
            <div className="relative group">
              <img src="/lovable-uploads/f34a27cb-bb8a-4f9b-b9dc-6dba44563020.png" alt="DTFS Visa Card" className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl group-hover:shadow-sand-gold-500/20 transition-all duration-500 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-sand-gold-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating badges */}
            
            
          </div>

          {/* Features List */}
          <div className="space-y-6 md:space-y-8">
            {cardFeatures.map((feature, index) => <Card key={index} className="card-feature group bg-card/50 backdrop-blur-sm border-border/50 hover:border-sand-gold-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-sand-gold-400 to-sand-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-sand-gold-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
            
            <div className="mt-8 p-6 bg-gradient-to-r from-sand-gold-500/10 to-sand-gold-600/10 rounded-xl border border-sand-gold-500/20">
              <h4 className="text-lg font-semibold mb-2 text-sand-gold-400">Partnership with Afreximbank & PAPSS</h4>
              <p className="text-sm text-muted-foreground">
                Backed by the African Export-Import Bank and powered by the Pan-African Payment and Settlement System for seamless cross-border transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CardShowcaseSection;