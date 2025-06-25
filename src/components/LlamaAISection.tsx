
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Brain, Mic, FileText, MessageSquare, Globe, Layers } from 'lucide-react';

const LlamaAISection = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-blue-900 via-background to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-africa-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 text-center relative">
        <div className="max-w-5xl mx-auto">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center relative group">
            <Brain className="h-8 w-8 md:h-12 md:w-12 text-blue-400" />
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <Badge className="mb-6 md:mb-8 bg-white/10 text-white border-white/20 text-xs md:text-sm">
            <Layers className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Llama AI Integration
          </Badge>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">Powered by Llama AI</h2>
          <p className="text-lg md:text-xl mb-12 md:mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed">
            DTFS leverages advanced AI to transform voice commands into trade documents, 
            match buyers with sellers intelligently, and provide multilingual support across Africa.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Mic,
                title: "Voice Processing",
                desc: "Natural language understanding in local dialects",
                color: "blue"
              },
              {
                icon: FileText,
                title: "Document Generation",
                desc: "AI-powered export forms and compliance docs",
                color: "blue"
              },
              {
                icon: MessageSquare,
                title: "Smart Matching",
                desc: "Semantic search for optimal trade partnerships",
                color: "blue"
              },
              {
                icon: Globe,
                title: "Multilingual Chat",
                desc: "Real-time translation and cultural adaptation",
                color: "blue"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-6 w-6 md:h-8 md:w-8 text-blue-400`} />
                </div>
                <h3 className="font-semibold mb-2 md:mb-3 text-base md:text-lg">{item.title}</h3>
                <p className="text-xs md:text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LlamaAISection;
