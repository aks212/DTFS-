
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
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
        gsap.fromTo('.stat-number', {
          innerText: 0
        }, {
          innerText: (i, el) => el.getAttribute('data-value'),
          duration: 2,
          ease: 'power2.out',
          snap: {
            innerText: 1
          },
          stagger: 0.2
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    {
      number: "500",
      suffix: "K+",
      label: "SMEs to be onboarded",
      icon: Users
    },
    {
      number: "500",
      suffix: "M",
      label: "Trade volume goal by 2026",
      icon: TrendingUp,
      prefix: "$"
    },
    {
      number: "1",
      suffix: "M+",
      label: "AI-generated documents",
      icon: FileText
    },
    {
      number: "100",
      suffix: "+",
      label: "Global diaspora buyers",
      icon: Globe
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20" ref={statsRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <Badge className="mb-4 md:mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs md:text-sm">
            <TrendingUp className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">Our Impact Goals</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Building the future of African trade, one connection at a time</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="stat-card text-center group bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-500">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-blue-500" />
                </div>
                <div className="text-3xl md:text-5xl font-bold text-blue-500 mb-2 md:mb-3 font-mono">
                  {stat.prefix}
                  <span className="stat-number" data-value={stat.number}>0</span>
                  {stat.suffix}
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
