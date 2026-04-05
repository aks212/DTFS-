import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import FormModal from './FormModal';

const CTASection = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-card"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--gold)/0.06),transparent_70%)]"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Get Started</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Build the Future of<br />Trade with DTFS
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
              Join early adopters shaping the next generation of digital trade infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
              <Button
                size="lg"
                className="w-full sm:w-auto btn-primary text-base px-10 py-6 group"
                onClick={() => setIsFormModalOpen(true)}
              >
                <span className="flex items-center">
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {['No credit card required', 'Free for early members', 'Cancel anytime'].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FormModal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} />
    </>
  );
};

export default CTASection;
