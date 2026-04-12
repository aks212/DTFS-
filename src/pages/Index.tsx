import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CardShowcaseSection from '@/components/CardShowcaseSection';
import CardCarousel from '@/components/CardCarousel';
import TradeTimeline from '@/components/TradeTimeline';
import LlamaAISection from '@/components/LlamaAISection';
import StatsSection from '@/components/StatsSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';
import MiniChatbot from '@/components/MiniChatbot';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <FloatingSocialIcons />
      <HeroSection />

      <ScrollReveal variant="fade-up">
        <TrustBar />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={0.1}>
        <CardCarousel />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <FeaturesSection />
      </ScrollReveal>

      <ScrollReveal variant="scale" delay={0.1}>
        <PricingSection />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <CardShowcaseSection />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <section id="how-it-works">
          <TradeTimeline />
        </section>
      </ScrollReveal>

      <ScrollReveal variant="fade-left">
        <LlamaAISection />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <StatsSection />
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <TeamSection />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={0.1}>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal variant="scale">
        <CTASection />
      </ScrollReveal>

      <ScrollReveal variant="fade">
        <FooterSection />
      </ScrollReveal>

      <MiniChatbot />
    </div>
  );
};

export default Index;
