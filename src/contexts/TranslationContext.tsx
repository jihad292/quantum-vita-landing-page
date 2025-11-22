import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

type Language = 'English' | 'Français' | 'العربية';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations: Record<string, any> = {
  'English': en,
  'Français': fr,
  'العربية': en // Arabic will use English for now until translations are added
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

  useEffect(() => {
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language === 'English' ? 'en' : language === 'Français' ? 'fr' : 'ar';
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
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
