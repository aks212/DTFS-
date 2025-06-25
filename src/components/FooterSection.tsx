
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="py-12 md:py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <div className="mb-4 md:mb-6">
              <img src="/lovable-uploads/4e8c8711-f992-40c7-a9a1-7878a364990b.png" alt="DTFS Logo" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Connecting African trade to the world through AI-powered innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Platform</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Company</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Whitepaper</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm md:text-base text-muted-foreground text-center md:text-left">
            © 2025 Nexus X Industries Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 md:space-x-8">
            <a href="#" className="text-sm md:text-base text-muted-foreground hover:text-blue-500 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-sm md:text-base text-muted-foreground hover:text-blue-500 transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-sm md:text-base text-muted-foreground hover:text-blue-500 transition-colors duration-300">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
