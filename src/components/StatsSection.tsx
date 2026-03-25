import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, FileText, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.fromTo('.stat-number', { innerText: 0 }, {
          innerText: (i: number, el: Element) => el.getAttribute('data-value'),
          duration: 2, ease: 'power2.out', snap: { innerText: 1 }, stagger: 0.2
        });
      }
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const stats = [
    { number: '500', suffix: 'K+', label: 'SMEs to be onboarded', icon: Users },
    { number: '500', suffix: 'M', label: 'Trade volume goal by 2026', icon: TrendingUp, prefix: '$' },
    { number: '1', suffix: 'M+', label: 'AI-generated documents', icon: FileText },
    { number: '100', suffix: '+', label: 'Global diaspora buyers', icon: Globe },
  ];

  return (
    <section className="section-padding bg-background" ref={statsRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Impact</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Our Impact Goals
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future of African trade, one connection at a time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <Card key={i} className="text-center bg-card/50 border-border hover:border-gold/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">
                  {stat.prefix}<span className="stat-number" data-value={stat.number}>0</span>{stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
