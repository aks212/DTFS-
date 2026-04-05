import React from 'react';
import { Globe, Users, Award } from 'lucide-react';

const FooterSection = () => {
  const links = {
    Platform: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Whitepaper', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-16 md:py-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/images/dtfs-logo.png" alt="DTFS Logo" className="h-8 w-auto" />
              <span className="text-lg font-display font-bold">DTFS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Digital infrastructure for inclusive, transparent, and scalable global trade.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              {[
                { icon: Globe, text: 'Headquartered in Nigeria' },
                { icon: Users, text: '15+ Team' },
                { icon: Award, text: 'AfCFTA Aligned' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1">
                  <item.icon className="h-3 w-3 text-gold" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Nexus X Industries Ltd — Building systems for the future. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['LinkedIn', 'Twitter', 'YouTube'].map((name) => (
              <a key={name} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
