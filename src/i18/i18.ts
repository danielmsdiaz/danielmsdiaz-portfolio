import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traduções
import global_en from "../translations/en/global.json";
import global_pt from "../translations/pt-br/global.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { global: global_en },
    pt: { global: global_pt },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
