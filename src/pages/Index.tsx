import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Shield, Zap, MessageSquare, FileText, CreditCard, Users, TrendingUp, Star, Brain, Mic, Sparkles, Target, Layers } from 'lucide-react';
import Header from '@/components/Header';
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
  const floatingIconsRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);

  // Initialize GSAP animations
  useEffect(() => {
    // Hero animations with improved timing
    const tl = gsap.timeline({
      delay: 0.5
    });
    tl.fromTo(heroTitleRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out'
    }).fromTo(heroSubtitleRef.current, {
      opacity: 0,
      y: 40
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8').fromTo(heroButtonsRef.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6');

    // Floating icons animation
    gsap.set('.floating-icon', {
      opacity: 0,
      scale: 0
    });
    gsap.to('.floating-icon', {
      opacity: 0.6,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      delay: 2,
      ease: 'back.out(1.7)'
    });

    // Continuous floating animation
    gsap.to('.floating-icon', {
      y: '-=20',
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Features cards animation
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

    // Stats counter animation
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
  const features = [{
    icon: Brain,
    title: "AI Trade Assistant",
    description: "Voice-first onboarding in local languages with Llama AI",
    gradient: "from-blue-500 to-blue-600",
    accent: "blue"
  }, {
    icon: Shield,
    title: "Smart Contract Escrow",
    description: "Blockchain-secured payments with automatic release",
    gradient: "from-blue-600 to-blue-700",
    accent: "blue"
  }, {
    icon: CreditCard,
    title: "Stablecoin & Local Currency",
    description: "Support for USDC, USDT, and African currencies",
    gradient: "from-blue-400 to-blue-500",
    accent: "blue"
  }, {
    icon: FileText,
    title: "Trade Document Generator",
    description: "AI-powered export forms and compliance docs",
    gradient: "from-blue-500 to-blue-600",
    accent: "blue"
  }, {
    icon: Mic,
    title: "Multilingual Voice Interface",
    description: "Hausa, Yoruba, Igbo, English, French, Arabic support",
    gradient: "from-blue-600 to-blue-700",
    accent: "blue"
  }, {
    icon: Users,
    title: "Agent Dashboard & USSD",
    description: "Offline access via USSD codes for remote areas",
    gradient: "from-blue-400 to-blue-500",
    accent: "blue"
  }];
  const stats = [{
    number: "500",
    suffix: "K+",
    label: "SMEs to be onboarded",
    icon: Users
  }, {
    number: "500",
    suffix: "M",
    label: "Trade volume goal by 2026",
    icon: TrendingUp,
    prefix: "$"
  }, {
    number: "1",
    suffix: "M+",
    label: "AI-generated documents",
    icon: FileText
  }, {
    number: "100",
    suffix: "+",
    label: "Global diaspora buyers",
    icon: Globe
  }];
  const testimonials = [{
    name: "Amara Okafor",
    role: "Cocoa Exporter, Ghana",
    content: "DTFS made it possible for me to export directly to European buyers. The AI helped me complete all paperwork in minutes!",
    rating: 5,
    avatar: "AO"
  }, {
    name: "Ibrahim Musa",
    role: "Textile Manufacturer, Nigeria",
    content: "The voice interface in Hausa was a game-changer. I can manage my exports without complex English forms.",
    rating: 5,
    avatar: "IM"
  }, {
    name: "Sarah Chen",
    role: "Import Buyer, USA",
    content: "Finally found reliable African suppliers through DTFS. The escrow system gives me complete confidence.",
    rating: 5,
    avatar: "SC"
  }];
  return <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section - Updated with proper spacing for fixed header */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Enhanced animated background with blue theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-background to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-africa-pattern opacity-5"></div>
        
        {/* Floating Trade Icons */}
        <div className="absolute inset-0 pointer-events-none" ref={floatingIconsRef}>
          <Globe className="floating-icon absolute top-1/4 left-1/4 h-8 w-8 text-blue-400" />
          <Shield className="floating-icon absolute top-1/3 right-1/4 h-6 w-6 text-blue-300" />
          <Zap className="floating-icon absolute bottom-1/3 left-1/3 h-7 w-7 text-blue-500" />
          <FileText className="floating-icon absolute bottom-1/4 right-1/3 h-6 w-6 text-blue-400" />
          <MessageSquare className="floating-icon absolute top-1/2 left-1/6 h-5 w-5 text-blue-300" />
          <Sparkles className="floating-icon absolute top-3/4 right-1/6 h-6 w-6 text-blue-500" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          {/* DTFS Logo - Enhanced styling */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              
              
            </div>
          </div>
          
          <Badge className="mb-8 bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
            <Sparkles className="h-4 w-4 mr-2" />
            Powered by Llama AI & Blockchain
          </Badge>
          
          <h1 ref={heroTitleRef} className="text-6xl md:text-8xl font-bold mb-8 leading-tight opacity-0">
            Africa's First{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent relative">
              AI-Powered
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-400/20 blur-xl rounded-lg"></div>
            </span>
            <br />
            Digital Trade Operating System
          </h1>
          
          <p ref={heroSubtitleRef} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed opacity-0">
            DTFS connects African SMEs to the world with voice-first onboarding, 
            escrow-secured payments, and AI-powered deal matching in local languages.
          </p>
          
          <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative overflow-hidden"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdzWfp9ds_YE7-8N4HNVQV5cc8ZRpaZJT7UWgdJ5NCbLjotHw/viewform?usp=pp_url', '_blank')}
            >
              <span className="relative z-10 flex items-center">
                Join Waitlist 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              onClick={() => window.open('https://youtu.be/ddUETvq81ow', '_blank')}
            >
              <div className="flex items-center">
                Watch Demo
                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section - Add id for navigation */}
      <section id="features" className="py-32 bg-gradient-to-b from-background to-muted/20" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Target className="h-4 w-4 mr-2" />
              Advanced Technology
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Powered by <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Advanced AI Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Experience the future of African trade with our comprehensive suite of AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => <Card key={index} className="feature-card group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <feature.icon className="h-8 w-8 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-foreground transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Trade Timeline Component - Add id for navigation */}
      <section id="how-it-works">
        <TradeTimeline />
      </section>

      {/* Enhanced Llama AI Spotlight */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-background to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-africa-pattern opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="w-24 h-24 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center relative group">
              <Brain className="h-12 w-12 text-blue-400" />
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <Badge className="mb-8 bg-white/10 text-white border-white/20">
              <Layers className="h-4 w-4 mr-2" />
              Llama AI Integration
            </Badge>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Powered by Llama AI</h2>
            <p className="text-xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed">
              DTFS leverages advanced AI to transform voice commands into trade documents, 
              match buyers with sellers intelligently, and provide multilingual support across Africa.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
              icon: Mic,
              title: "Voice Processing",
              desc: "Natural language understanding in local dialects",
              color: "blue"
            }, {
              icon: FileText,
              title: "Document Generation",
              desc: "AI-powered export forms and compliance docs",
              color: "blue"
            }, {
              icon: MessageSquare,
              title: "Smart Matching",
              desc: "Semantic search for optimal trade partnerships",
              color: "blue"
            }, {
              icon: Globe,
              title: "Multilingual Chat",
              desc: "Real-time translation and cultural adaptation",
              color: "blue"
            }].map((item, index) => <div key={index} className="group">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-8 w-8 text-blue-400`} />
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Stats */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/20" ref={statsRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
              <TrendingUp className="h-4 w-4 mr-2" />
              Our Impact
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Impact Goals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Building the future of African trade, one connection at a time</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => <Card key={index} className="stat-card text-center group bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <stat.icon className="h-10 w-10 text-blue-500" />
                  </div>
                  <div className="text-5xl font-bold text-blue-500 mb-3 font-mono">
                    {stat.prefix}
                    <span className="stat-number" data-value={stat.number}>0</span>
                    {stat.suffix}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Press/Media Section */}
      <PressMediaSection />

      {/* Enhanced Testimonials - Add id for navigation */}
      <section id="testimonials" className="py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Testimonials
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Real stories from African traders transforming their businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="testimonial-card group bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-blue-500 fill-current" />)}
                  </div>
                  <blockquote className="text-muted-foreground mb-8 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Add id for navigation */}
      <section id="contact" className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-africa-pattern opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Help Us Build the Future of Trade in Africa</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Join thousands of African entrepreneurs already transforming their businesses with DTFS
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-xl text-black focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 bg-white/95 backdrop-blur-sm" />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                Join Early Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer - Add id for navigation */}
      <footer id="about" className="py-16 bg-background border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <img src="/lovable-uploads/4e8c8711-f992-40c7-a9a1-7878a364990b.png" alt="DTFS Logo" className="h-12 w-auto" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Connecting African trade to the world through AI-powered innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Platform</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Whitepaper</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 Nexus X Industries Ltd. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors duration-300">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mini Chatbot */}
      <MiniChatbot />
    </div>;
};
export default Index;
