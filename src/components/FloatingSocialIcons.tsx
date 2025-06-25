
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const FloatingSocialIcons = () => {
  useEffect(() => {
    // Social icons animation
    gsap.set('.social-icon', {
      opacity: 0,
      scale: 0
    });
    gsap.to('.social-icon', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      delay: 3,
      ease: 'back.out(1.7)'
    });
  }, []);

  return (
    <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3">
      <a href="#" className="social-icon group bg-blue-500/10 backdrop-blur-sm hover:bg-blue-500 p-3 rounded-full border border-blue-500/20 transition-all duration-300 hover:scale-110">
        <Facebook className="h-4 w-4 md:h-5 md:w-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </a>
      <a href="#" className="social-icon group bg-blue-500/10 backdrop-blur-sm hover:bg-blue-400 p-3 rounded-full border border-blue-500/20 transition-all duration-300 hover:scale-110">
        <Twitter className="h-4 w-4 md:h-5 md:w-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </a>
      <a href="#" className="social-icon group bg-blue-500/10 backdrop-blur-sm hover:bg-blue-600 p-3 rounded-full border border-blue-500/20 transition-all duration-300 hover:scale-110">
        <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </a>
      <a href="https://youtu.be/ddUETvq81ow" target="_blank" rel="noopener noreferrer" className="social-icon group bg-blue-500/10 backdrop-blur-sm hover:bg-red-500 p-3 rounded-full border border-blue-500/20 transition-all duration-300 hover:scale-110">
        <Youtube className="h-4 w-4 md:h-5 md:w-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </a>
      <a href="#" className="social-icon group bg-blue-500/10 backdrop-blur-sm hover:bg-pink-500 p-3 rounded-full border border-blue-500/20 transition-all duration-300 hover:scale-110">
        <Instagram className="h-4 w-4 md:h-5 md:w-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
