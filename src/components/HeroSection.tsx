
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Shield, Zap, MessageSquare, FileText, Sparkles, Download } from 'lucide-react';

const HeroSection = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const floatingIconsRef = useRef(null);

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
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/6774244/6774244-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-background to-blue-800"></div>
        </video>
      </div>
      
      {/* Enhanced overlay with blue theme and shipping pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-background/85 to-blue-800/80"></div>
        <div className="absolute inset-0 bg-africa-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40"></div>
      </div>
      
      {/* Floating Trade Icons */}
      <div className="absolute inset-0 pointer-events-none" ref={floatingIconsRef}>
        <Globe className="floating-icon absolute top-1/4 left-1/4 h-6 md:h-8 w-6 md:w-8 text-blue-400" />
        <Shield className="floating-icon absolute top-1/3 right-1/4 h-5 md:h-6 w-5 md:w-6 text-blue-300" />
        <Zap className="floating-icon absolute bottom-1/3 left-1/3 h-6 md:h-7 w-6 md:w-7 text-blue-500" />
        <FileText className="floating-icon absolute bottom-1/4 right-1/3 h-5 md:h-6 w-5 md:w-6 text-blue-400" />
        <MessageSquare className="floating-icon absolute top-1/2 left-1/6 h-4 md:h-5 w-4 md:w-5 text-blue-300" />
        <Sparkles className="floating-icon absolute top-3/4 right-1/6 h-5 md:h-6 w-5 md:w-6 text-blue-500" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative group"></div>
        </div>
        
        <Badge className="mb-6 md:mb-8 bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 text-xs md:text-sm backdrop-blur-sm">
          <Sparkles className="h-3 w-3 md:h-4 md:w-4 mr-2" />
          Powered by Llama AI & Blockchain
        </Badge>
        
        <h1 ref={heroTitleRef} className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight opacity-0 text-white drop-shadow-2xl">
          Africa's First{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent relative">
            AI-Powered
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-400/20 blur-xl rounded-lg"></div>
          </span>
          <br />
          Digital Trade Operating System
        </h1>
        
        <p ref={heroSubtitleRef} className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-5xl mx-auto leading-relaxed opacity-0 drop-shadow-lg">
          DTFS connects African SMEs to the world with voice-first onboarding, 
          escrow-secured payments, and AI-powered deal matching in local languages.
        </p>
        
        <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center opacity-0">
          <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative overflow-hidden backdrop-blur-sm" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdzWfp9ds_YE7-8N4HNVQV5cc8ZRpaZJT7UWgdJ5NCbLjotHw/viewform?usp=pp_url', '_blank')}>
            <span className="relative z-10 flex items-center justify-center">
              Join Waitlist 
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-blue-400/50 text-white hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 group" onClick={() => window.open('https://youtu.be/ddUETvq81ow', '_blank')}>
            <div className="flex items-center justify-center">
              Watch Demo
              <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-green-400/50 text-white hover:bg-green-500 hover:text-white hover:border-green-500 font-semibold py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 group">
            <div className="flex items-center justify-center">
              <Download className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:animate-pulse" />
              Install App
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
