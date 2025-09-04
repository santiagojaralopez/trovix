'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111344] py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src="https://trovix-tech.s3.sa-east-1.amazonaws.com/trovixLogo.png" 
              alt="Trovix" 
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
            />
          </div>

          {/* Tagline */}
          <p className="text-gray-300 font-medium text-lg">
            {t('footer.tagline')}
          </p>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-600/30">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}