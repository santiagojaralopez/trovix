'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.clients': 'Clientes',

    // Hero
    'hero.title.part1': 'Tecnología que',
    'hero.title.part2': 'transforma',
    'hero.subtitle': 'En <strong>Trovix</strong> mejoramos y fortalecemos la competitividad,<br />con seguridad e innovación.',
    'hero.subtitle.mobile': 'En <strong>Trovix</strong> mejoramos y fortalecemos la competitividad, con seguridad e innovación.',
    'hero.cta.contact': 'Contáctenos',
    'hero.cta.services': 'Ver Servicios',
    'hero.sectors.institutions': 'instituciones',
    'hero.sectors.governments': 'gobiernos',
    'hero.sectors.businesses': 'comercios',
    'hero.sectors.companies': 'empresas',

    // Features
    'features.title': '¿Por qué elegir Trovix?',
    'features.subtitle': 'Combinamos innovación, seguridad y experiencia para entregar resultados excepcionales',
    'features.innovation.title': 'Innovación',
    'features.innovation.description': 'Creamos soluciones únicas que impulsan tu negocio.',
    'features.security.title': 'Seguridad',
    'features.security.description': 'Protegemos tu información con los más altos estándares.',
    'features.experience.title': 'Experiencia',
    'features.experience.description': 'Transformamos sectores con expertise comprobado.',
    'features.results.title': 'Resultados',
    'features.results.description': 'Convertimos la automatización en crecimiento real.',

    // Services
    'services.title.part1': 'Nuestro compromiso es la',
    'services.title.part2': 'excelencia tecnológica',
    'services.alex.subtitle': 'Chatbot Automatizado',
    'services.alex.description': 'Cree conversaciones automatizadas con inteligencia artificial en WhatsApp, y active chatbots de servicio al cliente que trabajen las 24/7. Diseñado para ser seguro, rentable e intuitivo.',
    'services.drex.subtitle': 'Software administrativo',
    'services.drex.description': 'Controle y optimice sus operaciones con trazabilidad completa de inventarios, seguimiento en tiempo real, asignación de procesos, tablero administrativo y funcionalidades integrales ERP. Diseñado para ser seguro, escalable y fácil de usar.',
    'services.prox.subtitle': 'Consultoría de gestión',
    'services.prox.description': 'Lidere con éxito proyectos de innovación y tecnología con un acompañamiento especializado en consultoría de gestión TIC. Diseñado para ser estratégico, adaptable y enfocado en resultados medibles.',
    'services.cta': 'Ver más',

    // Clients
    'clients.title.part1': 'Empresas que confían en',
    'clients.title.part2': 'nuestras soluciones',
    'clients.subtitle': 'Organizaciones líderes que han transformado sus operaciones con tecnología Trovix',

    // Footer
    'footer.tagline': 'Tecnología que transforma',
    'footer.copyright': '© 2025 Trovix. Todos los derechos reservados.',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.clients': 'Clients',

    // Hero
    'hero.title.part1': 'Technology that',
    'hero.title.part2': 'transforms',
    'hero.subtitle': 'At <strong>Trovix</strong> we improve and strengthen competitiveness,<br />with security and innovation.',
    'hero.subtitle.mobile': 'At <strong>Trovix</strong> we improve and strengthen competitiveness, with security and innovation.',
    'hero.cta.contact': 'Contact Us',
    'hero.cta.services': 'View Services',
    'hero.sectors.institutions': 'institutions',
    'hero.sectors.governments': 'governments',
    'hero.sectors.businesses': 'businesses',
    'hero.sectors.companies': 'companies',

    // Features
    'features.title': 'Why choose Trovix?',
    'features.subtitle': 'We combine innovation, security and experience to deliver exceptional results',
    'features.innovation.title': 'Innovation',
    'features.innovation.description': 'We create unique solutions that drive your business forward.',
    'features.security.title': 'Security',
    'features.security.description': 'We protect your information with the highest standards.',
    'features.experience.title': 'Experience',
    'features.experience.description': 'We transform sectors with proven expertise.',
    'features.results.title': 'Results',
    'features.results.description': 'We turn automation into real growth.',

    // Services
    'services.title.part1': 'Our commitment is',
    'services.title.part2': 'technological excellence',
    'services.alex.subtitle': 'Automated Chatbot',
    'services.alex.description': 'Create automated conversations with artificial intelligence on WhatsApp, and activate customer service chatbots that work 24/7. Designed to be secure, profitable and intuitive.',
    'services.drex.subtitle': 'Administrative Software',
    'services.drex.description': 'Control and optimize your operations with complete inventory traceability, real-time tracking, process allocation, administrative dashboard and comprehensive ERP functionalities. Designed to be secure, scalable and easy to use.',
    'services.prox.subtitle': 'Management Consulting',
    'services.prox.description': 'Successfully lead innovation and technology projects with specialized support in ICT management consulting. Designed to be strategic, adaptable and focused on measurable results.',
    'services.cta': 'Learn More',

    // Clients
    'clients.title.part1': 'Companies that trust',
    'clients.title.part2': 'our solutions',
    'clients.subtitle': 'Leading organizations that have transformed their operations with Trovix technology',

    // Footer
    'footer.tagline': 'Technology that transforms',
    'footer.copyright': '© 2025 Trovix. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('trovix-language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('trovix-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}