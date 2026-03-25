import React from 'react';
import { Brain, Mic, FileText, MessageSquare, Globe, Layers } from 'lucide-react';

const LlamaAISection = () => {
  const items = [
    { icon: Mic, title: 'Voice Processing', desc: 'Natural language understanding in local dialects' },
    { icon: FileText, title: 'Document Generation', desc: 'AI-powered export forms and compliance docs' },
    { icon: MessageSquare, title: 'Smart Matching', desc: 'Semantic search for optimal trade partnerships' },
    { icon: Globe, title: 'Multilingual Chat', desc: 'Real-time translation and cultural adaptation' },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
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
            Powered by <span className="text-gradient">Llama AI</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            Advanced AI transforms voice commands into trade documents, matches buyers with sellers, 
            and provides multilingual support across Africa.
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
