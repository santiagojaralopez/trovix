'use client';

import { MessageCircle, Cloud, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getServices = (t: (key: string) => string) => [
  {
    name: "ALE•X",
    logo: "https://trovix-tech.s3.sa-east-1.amazonaws.com/alex.png",
    icon: MessageCircle,
    subtitle: t('services.alex.subtitle'),
    description: t('services.alex.description'),
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-purple-600"
  },
  {
    name: "DRE•X",
    logo: "https://trovix-tech.s3.sa-east-1.amazonaws.com/drex.png",
    icon: Cloud,
    subtitle: t('services.drex.subtitle'),
    description: t('services.drex.description'),
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-cyan-600 to-teal-600"
  },
  {
    name: "PRO•X",
    logo: null,
    icon: Users,
    subtitle: t('services.prox.subtitle'),
    description: t('services.prox.description'),
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-purple-600 to-indigo-600"
  }
];

export default function Services() {
  const { t } = useLanguage();
  const services = getServices(t);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-cyan-100/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111344] mb-6 leading-tight">
            {t('services.title.part1')}
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {t('services.title.part2')}
            </span>
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.name}
                className={`group relative rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col min-w-[320px] ${
                  index === 2 ? 'lg:col-span-2 lg:max-w-lg lg:mx-auto' : ''
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Logo Section - Top with light background and icon */}
                <div className="bg-white p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
                  {/* Background icon - subtle */}
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <IconComponent size={80} className="text-gray-400" />
                  </div>
                  
                  {service.logo ? (
                    <img 
                      src={service.logo} 
                      alt={`${service.name} Logo`}
                      className="w-32 h-32 lg:w-40 lg:h-40 object-contain group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-500 relative z-10"
                    />
                  ) : (
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 relative z-10">
                      <div className="text-6xl font-bold text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                        {service.name.split('•')[0]}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section - Bottom with dark background and gradient hover */}
                <div className={`bg-[#111344] group-hover:bg-gradient-to-br group-hover:from-[#1a1f5c] group-hover:to-[#2d3561] p-8 lg:p-12 text-white transition-all duration-500 flex-1 flex flex-col justify-between`}>
                  <div className="space-y-6">
                    {/* Title and Subtitle */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                        {service.name}
                      </h3>
                      <p className="text-base font-medium text-blue-200 group-hover:text-blue-100 opacity-90 mb-4">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed text-base lg:text-lg flex-1">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <div className="mt-6">
                    {/* CTA Button */}
                    <button className="group/btn bg-white hover:bg-blue-50 text-[#111344] hover:text-[#0f1240] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2 relative overflow-hidden">
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                      <span className="relative z-10">{t('services.cta')}</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                    </button>
                  </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}