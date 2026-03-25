import React from 'react';
import { Target, Rocket, Globe, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">About DTFS</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Democratizing Global Trade<br />
            <span className="text-muted-foreground">for African Entrepreneurs</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DTFS is more than a platform — it's the infrastructure layer enabling every African SME 
            to participate in global commerce with confidence and speed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start max-w-6xl mx-auto mb-24">
          <div>
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              To break down barriers in global trade by providing African SMEs with cutting-edge AI, 
              secure payment systems, and multilingual support that makes international commerce accessible to everyone.
            </p>
            <ul className="space-y-4">
              {[
                'Bridge the digital divide in African trade',
                'Enable voice-first interactions in local languages',
                'Provide secure, blockchain-based payment solutions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-6">
              <Rocket className="h-6 w-6 text-emerald" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A future where every African entrepreneur can participate in global trade seamlessly, 
              supported by AI that understands their language, culture, and business needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-border bg-card">
                <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-1">500K+</div>
                <div className="text-xs text-muted-foreground">SMEs to empower</div>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card">
                <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-1">$500M</div>
                <div className="text-xs text-muted-foreground">Trade volume goal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {[
            { title: 'Inclusivity', desc: 'Trade accessible for everyone, regardless of language or location' },
            { title: 'Trust', desc: 'Secure, transparent systems that protect all parties involved' },
            { title: 'Innovation', desc: 'Cutting-edge AI solving real-world trade challenges' },
            { title: 'Excellence', desc: 'World-class solutions with obsessive attention to detail' },
          ].map((value, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card/50 hover:border-gold/20 transition-all duration-300 group">
              <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-gold transition-colors duration-300">{value.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-4">Built by African Tech Leaders</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Deep understanding of African markets combined with world-class technical expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {[
              { icon: Globe, text: 'Based in Kano, Nigeria' },
              { icon: Users, text: '15+ Team Members' },
              { icon: Award, text: 'AfCFTA Backed' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-gold" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
