'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Offset for floating navbar
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button onClick={() => scrollToSection('home')} className="focus:outline-none">
                <img 
                  src="https://trovix-tech.s3.sa-east-1.amazonaws.com/trovixLogo.png" 
                  alt="Trovix" 
                  className="h-7 w-auto hover:opacity-80 transition-opacity"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#111344] hover:text-[#131b42] transition-colors font-medium focus:outline-none"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-[#111344] hover:text-[#131b42] transition-colors font-medium focus:outline-none"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="text-[#111344] hover:text-[#131b42] transition-colors font-medium focus:outline-none"
              >
                {t('nav.clients')}
              </button>
              <LanguageSelector />
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#111344] hover:text-[#131b42] transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <button onClick={() => scrollToSection('home')} className="focus:outline-none">
              <img 
                src="https://trovix-tech.s3.sa-east-1.amazonaws.com/trovixLogo.png" 
                alt="Trovix" 
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#111344] hover:text-[#131b42] transition-colors p-2"
            >
              <X size={24} />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center justify-between text-[#111344] hover:text-[#131b42] transition-colors font-medium text-lg py-3 border-b border-gray-100 group"
              >
                {t('nav.about')}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-between text-[#111344] hover:text-[#131b42] transition-colors font-medium text-lg py-3 border-b border-gray-100 group"
              >
                {t('nav.services')}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="flex items-center justify-between text-[#111344] hover:text-[#131b42] transition-colors font-medium text-lg py-3 border-b border-gray-100 group"
              >
                {t('nav.clients')}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <LanguageSelector />
            </div>
          </nav>

        </div>
      </div>
    </>
  );
}