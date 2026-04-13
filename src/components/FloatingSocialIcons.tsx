import React from 'react';
import { Linkedin, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

const FloatingSocialIcons = () => {
  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtu.be/ddUETvq81ow', label: 'YouTube' },
  ];

  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={s.label}
          className="group w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-gold/30 hover:bg-gold/5 transition-all duration-200"
        >
          <s.icon className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors duration-200" />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
