
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-africa-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">Help Us Build the Future of Trade in Africa</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 opacity-90 leading-relaxed">
            Join thousands of African entrepreneurs already transforming their businesses with DTFS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 w-full sm:w-auto px-4 md:px-6 py-3 md:py-4 rounded-xl text-black focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 bg-white/95 backdrop-blur-sm text-sm md:text-base" />
            <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 hover:scale-105">
              Join Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
