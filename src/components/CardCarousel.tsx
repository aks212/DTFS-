import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Shield, Zap, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CardCarousel = () => {
  const features = [
    { icon: CreditCard, title: 'Multi-Currency Payments', description: 'Enable seamless transactions across stablecoins and local currencies with real-time FX visibility.', badge: 'Payment' },
    { icon: Shield, title: 'Secure Transaction Infrastructure', description: 'Smart contract–enabled escrow ensures transparency and trust across trade partners.', badge: 'Security' },
    { icon: Zap, title: 'Fast Settlement', description: 'Reduce settlement timelines from weeks to minutes through digital coordination.', badge: 'Speed' },
    { icon: Globe, title: 'Global Interoperability', description: 'Designed to support cross-border trade across multiple markets and systems.', badge: 'Global' },
    { icon: Users, title: 'SME-Centric Design', description: 'Built specifically for small and medium-sized enterprises navigating global trade.', badge: 'Business' },
    { icon: TrendingUp, title: 'Data & Insights', description: 'Actionable insights to improve trade performance and decision-making.', badge: 'Analytics' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
            Core Capabilities for <span className="text-gradient">Modern Trade Execution</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Infrastructure designed to simplify cross-border trade in emerging markets
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-3 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="group h-full bg-card/50 border-border hover:border-gold/20 transition-all duration-300 rounded-xl">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                          <feature.icon className="h-5 w-5 text-gold" />
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {feature.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-gold transition-colors duration-300">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center text-xs text-emerald">
                          <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
                          Available Now
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-secondary" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-secondary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
