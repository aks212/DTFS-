
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Shield, CreditCard, FileText, Mic, Users, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.feature-card', {
          opacity: 0,
          y: 60,
          rotateX: 15
        }, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Trade Assistant",
      description: "Voice-first onboarding in local languages with Llama AI",
      gradient: "from-blue-500 to-blue-600",
      accent: "blue"
    },
    {
      icon: Shield,
      title: "Smart Contract Escrow",
      description: "Blockchain-secured payments with automatic release",
      gradient: "from-blue-600 to-blue-700",
      accent: "blue"
    },
    {
      icon: CreditCard,
      title: "Stablecoin & Local Currency",
      description: "Support for USDC, USDT, and African currencies",
      gradient: "from-blue-400 to-blue-500",
      accent: "blue"
    },
    {
      icon: FileText,
      title: "Trade Document Generator",
      description: "AI-powered export forms and compliance docs",
      gradient: "from-blue-500 to-blue-600",
      accent: "blue"
    },
    {
      icon: Mic,
      title: "Multilingual Voice Interface",
      description: "Hausa, Yoruba, Igbo, English, French, Arabic support",
      gradient: "from-blue-600 to-blue-700",
      accent: "blue"
    },
    {
      icon: Users,
      title: "Agent Dashboard & USSD",
      description: "Offline access via USSD codes for remote areas",
      gradient: "from-blue-400 to-blue-500",
      accent: "blue"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20" ref={featuresRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <Badge className="mb-4 md:mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs md:text-sm">
            <Target className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Advanced Technology
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Powered by <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Advanced AI Technology</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the future of African trade with our comprehensive suite of AI-powered tools
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardHeader className="relative p-4 md:p-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>
                <CardTitle className="text-lg md:text-xl group-hover:text-foreground transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative p-4 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
