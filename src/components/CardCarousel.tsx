import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Shield, Zap, Globe, Star, CheckCircle, Users, TrendingUp } from 'lucide-react';

const CardCarousel = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Multi-Currency Support",
      description: "Accept payments in USDC, USDT, and local African currencies with real-time conversion rates.",
      badge: "Payment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Protected by smart contract escrow and advanced encryption for maximum transaction safety.",
      badge: "Security",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Real-time transaction processing with immediate fund availability across all supported currencies.",
      badge: "Speed",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Acceptance",
      description: "Use anywhere Visa is accepted worldwide with seamless international transaction support.",
      badge: "Global",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "SME Focused",
      description: "Designed specifically for African small and medium enterprises with tailored business solutions.",
      badge: "Business",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Analytics",
      description: "Get insights into your spending patterns and business growth with advanced AI analytics.",
      badge: "Analytics",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 md:mb-6 bg-sand-gold-500/20 text-sand-gold-400 border-sand-gold-500/30 text-xs md:text-sm">
            <Star className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Card Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Powerful Features for <span className="bg-gradient-to-r from-sand-gold-400 to-sand-gold-600 bg-clip-text text-transparent">Modern Trade</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of African trade finance with cutting-edge features designed for your success
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-sand-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sand-gold-500/10">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs bg-muted/50">
                          {feature.badge}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-sand-gold-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {feature.description}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <div className="flex items-center text-xs text-emerald-500">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Available Now
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur-sm border-sand-gold-500/30 hover:bg-sand-gold-500/10 hover:border-sand-gold-500" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur-sm border-sand-gold-500/30 hover:bg-sand-gold-500/10 hover:border-sand-gold-500" />
          </Carousel>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-sand-gold-400/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-transparent rounded-full blur-xl"></div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Swipe to explore all features • More coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;