
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import TradeTimeline from '@/components/TradeTimeline';
import LlamaAISection from '@/components/LlamaAISection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';
import MiniChatbot from '@/components/MiniChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <FloatingSocialIcons />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <section id="how-it-works">
        <TradeTimeline />
      </section>
      <LlamaAISection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
      <MiniChatbot />
    </div>
  );
};

export default Index;
