import React from 'react';
import { Brain, Mic, FileText, MessageSquare, Globe, Layers } from 'lucide-react';

const LlamaAISection = () => {
  const items = [
    { icon: FileText, title: 'Document Automation', desc: 'Automated generation of trade documents and compliance forms' },
    { icon: MessageSquare, title: 'Trade Matching', desc: 'Intelligent recommendations connecting buyers and sellers' },
    { icon: Mic, title: 'Multilingual Support', desc: 'Voice and text interfaces across multiple languages' },
    { icon: Globe, title: 'Workflow Optimisation', desc: 'Continuous improvement of trade process efficiency' },
  ];

  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-card"></div>
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,hsl(var(--gold)/0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 md:px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gold/10 flex items-center justify-center">
            <Brain className="h-7 w-7 text-gold" />
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            <Layers className="h-3 w-3 inline mr-1.5" />
            AI Engine
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Intelligent <span className="text-gradient">Trade Enablement</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            AI-powered tools support documentation, onboarding, and decision-making—enabling SMEs to navigate complex trade processes with ease.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-border bg-background/50 hover:border-gold/20 transition-all duration-300">
                <div className="w-10 h-10 mx-auto mb-4 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LlamaAISection;
