import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const MiniChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your DTFS AI assistant. Ask me anything about digital trade in Africa! 🌍", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const demoResponses = [
    "DTFS helps African SMEs export to global markets with AI-powered voice guidance in local languages. Our platform reduces trade costs by up to 90%! 🚀",
    "Our platform uses smart contracts for secure escrow payments and supports stablecoins and local currencies. 🔒",
    "The AI Trade Assistant generates export documents, matches buyers with sellers, and provides multilingual support. 📱",
    "DTFS aims to onboard 500,000+ SMEs and facilitate $500M in trade volume by 2026. 🌟",
    "Traditional trade takes 4-8 weeks. With DTFS, it's 5-10 minutes. Time is money! ⏰"
  ];

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), text: inputValue, isBot: false }]);
    setInputValue('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: demoResponses[Math.floor(Math.random() * demoResponses.length)], isBot: true }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gold hover:bg-gold-dark text-background shadow-[0_8px_30px_hsl(var(--gold)/0.3)] hover:shadow-[0_8px_40px_hsl(var(--gold)/0.4)] transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[28rem] animate-slide-up">
          <Card className="h-full flex flex-col glass-strong rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Bot className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <span className="text-sm font-display font-semibold">DTFS Assistant</span>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Sparkles className="h-2.5 w-2.5 text-gold" />
                    Llama AI
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-7 w-7 rounded-lg">
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.isBot ? 'bg-secondary text-foreground' : 'bg-gold text-background'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary p-3 rounded-xl">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about DTFS..."
                  className="flex-1 bg-secondary border-0 rounded-lg text-sm h-9"
                />
                <Button onClick={handleSend} size="icon" className="bg-gold hover:bg-gold-dark text-background rounded-lg h-9 w-9">
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default MiniChatbot;
