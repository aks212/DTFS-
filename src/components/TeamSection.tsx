import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Adeola Johnson',
    role: 'Chief Executive Officer',
    bio: 'Former trade policy advisor with 15+ years in cross-border commerce and digital infrastructure.',
    initials: 'AJ',
  },
  {
    name: 'Samuel Okonkwo',
    role: 'Chief Technology Officer',
    bio: 'Fintech architect with experience building scalable payment and compliance systems across emerging markets.',
    initials: 'SO',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Head of Trade Operations',
    bio: 'International trade specialist with deep expertise in documentation, logistics, and regulatory compliance.',
    initials: 'FA',
  },
  {
    name: 'David Chen',
    role: 'Head of Product',
    bio: 'Product leader focused on building inclusive digital tools for underserved markets and SME ecosystems.',
    initials: 'DC',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Leadership</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Built by Operators,<br />
            <span className="text-muted-foreground">Not Just Developers</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team combines deep expertise in international trade, technology, and policy—bringing
            local insight with global scalability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                <span className="text-xl font-display font-bold text-primary">{member.initials}</span>
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
