// Update this page (the content is just a fallback if you fail to update the page)

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Globe, 
  Shield, 
  Zap, 
  MessageSquare, 
  FileText, 
  CreditCard,
  Users,
  TrendingUp,
  Star,
  Brain,
  Mic
} from 'lucide-react';
import MiniChatbot from '@/components/MiniChatbot';
import TradeTimeline from '@/components/TradeTimeline';
import PressMediaSection from '@/components/PressMediaSection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // Initialize refs for animations
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonsRef = useRef(null);

  // Initialize GSAP animations
  useEffect(() => {
    gsap.to(heroTitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heroTitleRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    });

    gsap.to(heroSubtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heroSubtitleRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    });

    gsap.to(heroButtonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heroButtonsRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    });
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Trade Assistant",
      description: "Voice-first onboarding in local languages with Llama AI",
      gradient: "from-emerald-green-500 to-emerald-green-600"
    },
    {
      icon: Shield,
      title: "Smart Contract Escrow",
      description: "Blockchain-secured payments with automatic release",
      gradient: "from-deep-indigo-500 to-deep-indigo-600"
    },
    {
      icon: CreditCard,
      title: "Stablecoin & Local Currency",
      description: "Support for USDC, USDT, and African currencies",
      gradient: "from-sand-gold-500 to-sand-gold-600"
    },
    {
      icon: FileText,
      title: "Trade Document Generator",
      description: "AI-powered export forms and compliance docs",
      gradient: "from-emerald-green-500 to-emerald-green-600"
    },
    {
      icon: Mic,
      title: "Multilingual Voice Interface",
      description: "Hausa, Yoruba, Igbo, English, French, Arabic support",
      gradient: "from-deep-indigo-500 to-deep-indigo-600"
    },
    {
      icon: Users,
      title: "Agent Dashboard & USSD",
      description: "Offline access via USSD codes for remote areas",
      gradient: "from-sand-gold-500 to-sand-gold-600"
    }
  ];

  const stats = [
    { number: "500K+", label: "SMEs to be onboarded", icon: Users },
    { number: "$500M", label: "Trade volume goal by 2026", icon: TrendingUp },
    { number: "1M+", label: "AI-generated documents", icon: FileText },
    { number: "100+", label: "Global diaspora buyers", icon: Globe }
  ];

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Cocoa Exporter, Ghana",
      content: "DTFS made it possible for me to export directly to European buyers. The AI helped me complete all paperwork in minutes!",
      rating: 5
    },
    {
      name: "Ibrahim Musa",
      role: "Textile Manufacturer, Nigeria",
      content: "The voice interface in Hausa was a game-changer. I can manage my exports without complex English forms.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Import Buyer, USA",
      content: "Finally found reliable African suppliers through DTFS. The escrow system gives me complete confidence.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-indigo-900 to-emerald-green-900 bg-opacity-50"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 
            ref={heroTitleRef}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Africa's First{' '}
            <span className="text-gradient">AI-Powered</span>
            <br />
            Digital Trade Operating System
          </h1>
          
          <p 
            ref={heroSubtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            DTFS connects African SMEs to the world with voice-first onboarding, 
            escrow-secured payments, and AI-powered deal matching.
          </p>
          
          <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="btn-primary">
              Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Trade Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating icons */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Powered by <span className="text-gradient">Advanced AI Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of African trade with our comprehensive suite of AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card card-hover">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 glow-effect`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Timeline Component */}
      <TradeTimeline />

      {/* Llama AI Spotlight */}
      <section className="py-20 bg-gradient-to-r from-deep-indigo-900 to-emerald-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold mb-8">Powered by Llama AI</h2>
            <p className="text-xl mb-12 opacity-90">
              DTFS leverages advanced AI to transform voice commands into trade documents, 
              match buyers with sellers intelligently, and provide multilingual support across Africa.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Mic className="h-8 w-8 mx-auto mb-4 text-emerald-green-400" />
                <h3 className="font-semibold mb-2">Voice Processing</h3>
                <p className="text-sm opacity-80">Natural language understanding in local dialects</p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 mx-auto mb-4 text-sand-gold-400" />
                <h3 className="font-semibold mb-2">Document Generation</h3>
                <p className="text-sm opacity-80">AI-powered export forms and compliance docs</p>
              </div>
              <div className="text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-4 text-emerald-green-400" />
                <h3 className="font-semibold mb-2">Smart Matching</h3>
                <p className="text-sm opacity-80">Semantic search for optimal trade partnerships</p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 mx-auto mb-4 text-sand-gold-400" />
                <h3 className="font-semibold mb-2">Multilingual Chat</h3>
                <p className="text-sm opacity-80">Real-time translation and cultural adaptation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact Goals</h2>
            <p className="text-xl text-muted-foreground">Building the future of African trade, one connection at a time</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-green-500/20 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-emerald-green-500" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-green-500 mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press/Media Section */}
      <PressMediaSection />

      {/* Testimonials */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">Real stories from African traders transforming their businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card card-hover">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-sand-gold-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-green-600 to-deep-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Help Us Build the Future of Trade in Africa</h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join thousands of African entrepreneurs already transforming their businesses with DTFS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button size="lg" className="bg-white text-emerald-green-600 hover:bg-white/90 font-semibold px-8">
              Join Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">DTFS</h3>
              <p className="text-muted-foreground text-sm">
                Connecting African trade to the world through AI-powered innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Nexus X Industries Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mini Chatbot */}
      <MiniChatbot />
    </div>
  );
};

export default Index;
