'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Eye } from 'lucide-react';
import PixelBlast from '@/components/react-bits/backgrounds/pixel-blast';
import { useLanguage } from '@/contexts/LanguageContext';

const getSectors = (t: (key: string) => string) => [
  t('hero.sectors.institutions'),
  t('hero.sectors.governments'), 
  t('hero.sectors.businesses'),
  t('hero.sectors.companies')
];

export default function Hero() {
  const { t } = useLanguage();
  const sectors = getSectors(t);
  const [currentSector, setCurrentSector] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = sectors[currentSector];
    let index = 0;
    setDisplayText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentWord.length) {
        setDisplayText(currentWord.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setCurrentSector((prev) => (prev + 1) % sectors.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentSector]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 z-[1]" />
        <PixelBlast
          className="w-full h-full"
          variant="triangle"
          pixelSize={2}
          color="#C3C3D0"
          patternScale={1.75}
          patternDensity={1}
          enableRipples={true}
          rippleIntensityScale={0.8}
          rippleSpeed={0.4}
          edgeFade={0.25}
          transparent={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 h-full">
        <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content - Left side */}
            <div className="relative space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#111344] leading-tight">
                {t('hero.title.part1')}{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  {t('hero.title.part2')}
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="text-cyan-500 relative">
                    {displayText}
                    {isTyping && <span aria-hidden="true" className="animate-pulse">|</span>}
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 origin-left transition-transform duration-500 animate-pulse"></span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            {/* Mobile Subtitle */}
            <div className="lg:hidden max-w-2xl mx-auto lg:mx-0">
              <p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed font-semibold"
                dangerouslySetInnerHTML={{ __html: t('hero.subtitle.mobile') }}
              />
            </div>
            
            {/* Desktop Subtitle */}
            <div className="hidden lg:block max-w-2xl mx-auto lg:mx-0">
              <p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed font-semibold"
                dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#111344] hover:bg-gradient-to-r hover:from-[#111344] hover:to-[#131b42] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 group relative overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                {t('hero.cta.contact')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#111344] text-[#111344] hover:bg-gradient-to-r hover:from-[#111344] hover:to-[#131b42] hover:text-white hover:border-transparent px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
              >
                {/* Animated fill effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#111344] to-[#131b42] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                <Eye className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 relative z-10" />
                <span className="relative z-10">
                  {t('hero.cta.services')}
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </div>
            </div>

            {/* Right side - Tech Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main illustration container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                  {/* Dashboard mockup */}
                  <div className="space-y-3">
                    {/* Header bar */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="flex-1 bg-gray-100 h-4 rounded-full ml-3"></div>
                    </div>
                    
                    {/* Dashboard content */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center border border-gray-200">
                        <div className="text-gray-600 font-semibold text-xs">ALE•X</div>
                      </div>
                      <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center border border-gray-200">
                        <div className="text-gray-600 font-semibold text-xs">DRE•X</div>
                      </div>
                    </div>
                    
                    {/* Chart representation */}
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <div className="flex justify-between items-center mb-2">
                        <div className="w-12 h-2 bg-gray-300 rounded"></div>
                        <div className="w-6 h-2 bg-gray-400 rounded"></div>
                      </div>
                      <div className="flex items-end space-x-1 h-8">
                        <div className="bg-gray-300 w-3 h-4 rounded-t"></div>
                        <div className="bg-gray-400 w-3 h-6 rounded-t"></div>
                        <div className="bg-gray-500 w-3 h-7 rounded-t"></div>
                        <div className="bg-gray-400 w-3 h-5 rounded-t"></div>
                        <div className="bg-gray-300 w-3 h-6 rounded-t"></div>
                      </div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="flex space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-lg p-2 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-1.5 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg p-2 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-1.5 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle floating elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-200 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gray-300 rounded-full opacity-40"></div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute -z-10 top-6 left-6 w-20 h-20 bg-gray-200/20 rounded-full blur-xl"></div>
                <div className="absolute -z-10 bottom-6 right-6 w-16 h-16 bg-gray-300/15 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}