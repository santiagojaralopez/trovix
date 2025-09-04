'use client';

import { Lightbulb, Shield, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getFeatures = (t: (key: string) => string) => [
  {
    icon: Lightbulb,
    title: t('features.innovation.title'),
    description: t('features.innovation.description'),
    gradient: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    hoverGradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    icon: Shield,
    title: t('features.security.title'),
    description: t('features.security.description'),
    gradient: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    hoverGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Users,
    title: t('features.experience.title'),
    description: t('features.experience.description'),
    gradient: 'from-purple-400 to-violet-500',
    bgGradient: 'from-purple-50 to-violet-50',
    hoverGradient: 'from-purple-500/10 to-violet-500/10',
  },
  {
    icon: TrendingUp,
    title: t('features.results.title'),
    description: t('features.results.description'),
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    hoverGradient: 'from-blue-500/10 to-cyan-500/10',
  },
];

export default function Features() {
  const { t } = useLanguage();
  const features = getFeatures(t);

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-cyan-200/20 to-teal-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/10 to-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#111344] via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('features.title')}
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Enhanced Features Grid - Single Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-gray-100/50 overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Animated Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                
                {/* Enhanced Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon Container with Glassmorphism */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl" />
                    <Icon className="w-8 h-8 lg:w-9 lg:h-9 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>

                  {/* Enhanced Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-[#111344] mb-3 group-hover:text-[#131b42] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Enhanced Description */}
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300 font-medium">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}