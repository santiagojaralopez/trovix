'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Clients() {
  const { t } = useLanguage();

  const clients = [
    { 
      name: 'Parzik', 
      logo: 'https://parzik.s3.sa-east-1.amazonaws.com/parzikLogoBlackHorizontal.png' 
    },
    { 
      name: 'The Printing Center', 
      logo: 'https://the-printing-center.s3.sa-east-1.amazonaws.com/thePrintingCenterLogo.png' 
    },
    { 
      name: 'Luxor Barber', 
      logo: 'https://luxor-barber.s3.sa-east-1.amazonaws.com/luxorLogo.png' 
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-50 rounded-full blur-2xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111344] mb-6 leading-tight">
            {t('clients.title.part1')}
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {t('clients.title.part2')}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            {t('clients.subtitle')}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8 h-24 w-48 flex items-center justify-center relative overflow-hidden">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-12 object-contain transition-all duration-300 group-hover:scale-110 relative z-10"
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}