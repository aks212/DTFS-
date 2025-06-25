
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Rocket, Shield, Brain, Award, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <Badge className="mb-4 md:mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs md:text-sm">
            <Heart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            About DTFS
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Empowering <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">African Trade</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            DTFS is more than a platform—it's a movement to democratize global trade for African entrepreneurs and connect them with opportunities worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto mb-16 md:mb-24">
          {/* Mission */}
          <div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
              <Target className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              To break down barriers in global trade by providing African SMEs with cutting-edge AI technology, 
              secure payment systems, and multilingual support that makes international commerce accessible to everyone.
            </p>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                Bridge the digital divide in African trade
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                Enable voice-first interactions in local languages
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                Provide secure, blockchain-based payment solutions
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
              <Rocket className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A future where every African entrepreneur can participate in global trade seamlessly, 
              supported by AI that understands their language, culture, and business needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-500/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">500K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">SMEs to empower</div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">$500M</div>
                <div className="text-xs md:text-sm text-muted-foreground">Trade volume goal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Heart,
                title: "Inclusivity",
                description: "Making trade accessible for everyone, regardless of language or location",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Shield,
                title: "Trust",
                description: "Building secure, transparent systems that protect all parties",
                color: "from-blue-600 to-blue-700"
              },
              {
                icon: Brain,
                title: "Innovation",
                description: "Leveraging cutting-edge AI to solve real-world problems",
                color: "from-blue-400 to-blue-500"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering world-class solutions with attention to detail",
                color: "from-blue-500 to-blue-600"
              }
            ].map((value, index) => (
              <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team/Company Info */}
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Built by African Tech Leaders</h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            Our team combines deep understanding of African markets with world-class technical expertise. 
            We're passionate about creating solutions that truly serve our communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
              <span>Based in Kano, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
              <span>15+ Team Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
              <span>AFCTA Backed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
