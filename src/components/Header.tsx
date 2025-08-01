
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import VideoModal from './VideoModal';
import FormModal from './FormModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <img 
                  src="/lovable-uploads/4e8c8711-f992-40c7-a9a1-7878a364990b.png" 
                  alt="DTFS Logo" 
                  className="h-8 sm:h-10 md:h-12 w-auto filter brightness-110 contrast-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden xs:block">
                <h1 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  DTFS
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Trade Smart • Trade Secure • Trade Global</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm font-medium text-foreground/80 hover:text-blue-500 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch Demo
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                onClick={() => setIsFormModalOpen(true)}
              >
                <span className="flex items-center">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl">
              <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  {navItems.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="text-base sm:text-lg font-medium text-foreground/80 hover:text-blue-500 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                    <Button 
                      variant="outline" 
                      className="w-full bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={() => {
                        setIsVideoModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      Watch Demo
                    </Button>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                      onClick={() => {
                        setIsFormModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <FormModal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} />
    </>
  );
};

export default Header;
