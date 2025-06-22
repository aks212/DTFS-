
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const MiniChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your DTFS AI assistant powered by Llama AI. Ask me anything about digital trade in Africa! 🌍",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const demoResponses = [
    "DTFS helps African SMEs export to global markets with AI-powered voice guidance in local languages like Hausa, Yoruba, and Igbo. Our platform reduces trade barriers and costs by up to 90%! 🚀",
    "Our platform uses smart contracts for secure escrow payments and supports both stablecoins (USDC, USDT) and local currencies. Every transaction is protected by blockchain technology. 🔒",
    "The AI Trade Assistant can generate export documents, match buyers with sellers, and provide multilingual support. It's like having a trade expert in your pocket! 📱",
    "DTFS aims to onboard 500,000+ SMEs and facilitate $500M in trade volume by 2026. We're building the largest digital trade network in Africa! 🌟",
    "We use advanced Llama AI for voice-to-text processing, trade document generation, and intelligent buyer-seller matching with semantic embeddings. 🧠",
    "The platform works offline via USSD codes, ensuring accessibility even in remote areas. No internet? No problem! We've got you covered. 📶",
    "Our multilingual voice interface supports Hausa, Yoruba, Igbo, English, French, and Arabic. Trade in your native language! 🗣️",
    "With DTFS, traditional trade processes that take 4-8 weeks are completed in just 5-10 minutes. Time is money! ⏰"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      const botMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "How does DTFS work?",
    "What languages are supported?",
    "How secure are payments?",
    "Can it work offline?"
  ];

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-emerald-green-500 to-emerald-green-600 hover:from-emerald-green-600 hover:to-emerald-green-700 shadow-2xl hover:shadow-emerald-green-500/25 transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-green-400 to-emerald-green-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <MessageCircle className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </Button>
      </div>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] animate-slide-up">
          <Card className="h-full flex flex-col bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/20 rounded-2xl overflow-hidden">
            {/* Enhanced Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-green-500 to-emerald-green-600 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-semibold">DTFS AI Assistant</span>
                  <Badge className="ml-2 bg-white/20 text-white border-white/30 text-xs">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Llama AI
                  </Badge>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-b border-border/50 bg-muted/20">
                <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue(question);
                        handleSendMessage();
                      }}
                      className="text-xs h-7 bg-background/50 hover:bg-emerald-green-500/10 hover:border-emerald-green-500/30"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background/50 to-muted/20">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      message.isBot
                        ? 'bg-muted/80 text-foreground border border-border/30'
                        : 'bg-gradient-to-r from-emerald-green-500 to-emerald-green-600 text-white shadow-lg'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted/80 p-4 rounded-2xl border border-border/30">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-emerald-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-emerald-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-emerald-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input */}
            <div className="p-4 border-t border-border/50 bg-background/50">
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about DTFS features..."
                  className="flex-1 bg-background/80 border-border/50 focus:border-emerald-green-500/50 focus:ring-emerald-green-500/20 rounded-xl"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-emerald-green-500 to-emerald-green-600 hover:from-emerald-green-600 hover:to-emerald-green-700 rounded-xl"
                >
                  <Send className="h-4 w-4" />
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
