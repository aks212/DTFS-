import React from 'react';

const TrustBar = () => {
  const partners = [
    'Afreximbank', 'PAPSS', 'AfCFTA', 'Visa', 'AI Infrastructure', 'Blockchain Networks',
    'Afreximbank', 'PAPSS', 'AfCFTA', 'Visa', 'AI Infrastructure', 'Blockchain Networks',
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border/50 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Aligned with and built for global trade ecosystems
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <span className="text-lg md:text-xl font-display font-semibold text-muted-foreground/40 whitespace-nowrap hover:text-muted-foreground/70 transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
