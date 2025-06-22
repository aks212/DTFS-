
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Newspaper, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PressMediaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const badges = container.querySelectorAll('.press-badge');
    const awards = container.querySelectorAll('.award-item');

    gsap.fromTo(badges,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    gsap.fromTo(awards,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom 30%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const pressFeatures = [
    { 
      outlet: "TechCrunch", 
      title: "DTFS: Revolutionizing African Trade", 
      type: "Featured Article",
      logo: "photo-1486312338219-ce68d2c6f44d"
    },
    { 
      outlet: "African Business", 
      title: "The Future of Digital Trade", 
      type: "Cover Story",
      logo: "photo-1461749280684-dccba630e2f6"
    },
    { 
      outlet: "Forbes Africa", 
      title: "AI-Powered Export Revolution", 
      type: "Innovation Spotlight",
      logo: "photo-1488590528505-98d2b5aba04b"
    },
    { 
      outlet: "Reuters", 
      title: "Blockchain Meets African Trade", 
      type: "Breaking News",
      logo: "photo-1518770660439-4636190af475"
    },
  ];

  const awards = [
    {
      icon: Award,
      title: "Best Fintech Innovation 2024",
      organization: "African Fintech Awards",
      description: "Recognized for revolutionary AI-powered trade platform"
    },
    {
      icon: Users,
      title: "Social Impact Award",
      organization: "Tech4Good Africa",
      description: "Empowering African SMEs through digital transformation"
    },
    {
      icon: Newspaper,
      title: "Startup of the Year",
      organization: "Africa Tech Summit",
      description: "Leading the digital trade revolution across Africa"
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Recognized by <span className="text-gradient">Leading Media</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DTFS has been featured in major publications and recognized by industry leaders worldwide
          </p>
        </div>

        {/* Press Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pressFeatures.map((feature, index) => (
            <Card key={index} className="press-badge card-hover cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${feature.logo}?auto=format&fit=crop&w=64&h=64`}
                    alt={feature.outlet}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.outlet}</h3>
                <p className="text-sm text-muted-foreground mb-3">{feature.title}</p>
                <Badge variant="secondary" className="text-xs">
                  {feature.type}
                </Badge>
                <ExternalLink className="h-4 w-4 mt-2 mx-auto text-muted-foreground group-hover:text-emerald-green-500 transition-colors" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Awards & Recognition</h3>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <Card key={index} className="award-item">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-green-500/20 rounded-full flex items-center justify-center">
                      <award.icon className="h-6 w-6 text-emerald-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-lg">{award.title}</h4>
                        <Badge variant="outline" className="text-emerald-green-500 border-emerald-green-200">
                          2024
                        </Badge>
                      </div>
                      <p className="text-emerald-green-600 font-medium mb-2">{award.organization}</p>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Backed by Y Combinator</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">500+ Beta Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">$2M Seed Funding</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressMediaSection;
