import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Amara Okafor', role: 'Cocoa Exporter, Ghana', content: 'DTFS made it possible for me to export directly to European buyers. The AI helped me complete all paperwork in minutes!', avatar: 'AO' },
    { name: 'Ibrahim Musa', role: 'Textile Manufacturer, Nigeria', content: 'The voice interface in Hausa was a game-changer. I can manage my exports without complex English forms.', avatar: 'IM' },
    { name: 'Sarah Chen', role: 'Import Buyer, USA', content: 'Finally found reliable African suppliers through DTFS. The escrow system gives me complete confidence.', avatar: 'SC' },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background relative">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            What Our Users Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from traders transforming their businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card/50 border-border hover:border-gold/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{t.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold font-display font-semibold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
