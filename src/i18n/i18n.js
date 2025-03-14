import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ressources de traduction
const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      greeting: 'Hello, {{name}}!',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue',
      greeting: 'Bonjour, {{name}} !',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Langue par défaut
  fallbackLng: 'en', // Langue de secours
  interpolation: {
    escapeValue: false, // Ne pas échapper les valeurs HTML
  },
});

export default i18n;