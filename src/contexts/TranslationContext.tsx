import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../translations/en.json';
import fr from '../translations/fr.json';
import ar from '../translations/ar.json';

type Language = 'English' | 'Français' | 'العربية';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations: Record<string, any> = {
  'English': en,
  'Français': fr,
  'العربية': ar
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'English';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language] || translations['English'];
  const isRTL = language === 'العربية';

  useEffect(() => {
    // Update HTML lang and dir attributes for accessibility and RTL support
    const htmlElement = document.documentElement;
    htmlElement.lang = language === 'English' ? 'en' : language === 'Français' ? 'fr' : 'ar';
    htmlElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Add RTL class to body for additional styling control
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language, isRTL]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
