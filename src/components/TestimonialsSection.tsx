
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Cocoa Exporter, Ghana",
      content: "DTFS made it possible for me to export directly to European buyers. The AI helped me complete all paperwork in minutes!",
      rating: 5,
      avatar: "AO"
    },
    {
      name: "Ibrahim Musa",
      role: "Textile Manufacturer, Nigeria",
      content: "The voice interface in Hausa was a game-changer. I can manage my exports without complex English forms.",
      rating: 5,
      avatar: "IM"
    },
    {
      name: "Sarah Chen",
      role: "Import Buyer, USA",
      content: "Finally found reliable African suppliers through DTFS. The escrow system gives me complete confidence.",
      rating: 5,
      avatar: "SC"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <Badge className="mb-4 md:mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs md:text-sm">
            <Star className="h-3 w-3 md:h-4 md:w-4 mr-2 fill-current" />
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">What Our Users Say</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Real stories from African traders transforming their businesses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card group bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-blue-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 md:mb-8 italic text-base md:text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-base md:text-lg">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
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
