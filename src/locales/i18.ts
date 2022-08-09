import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import TRANSLATIONS_DE from './translations/de/translation.json';
import TRANSLATIONS_ES from './translations/es/translation.json';
import TRANSLATIONS_FR from './translations/fr/translation.json';
import TRANSLATIONS_GB from './translations/gb/translation.json';
import TRANSLATIONS_HR from './translations/hr/translation.json';
import TRANSLATIONS_IT from './translations/it/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    lng: i18n.options.lng,
    resources: {
      hr: {
        translation: TRANSLATIONS_HR,
      },
      it: {
        translation: TRANSLATIONS_IT,
      },
      gb: {
        translation: TRANSLATIONS_GB,
      },
      es: {
        translation: TRANSLATIONS_ES,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
    },
  });

i18n.init({
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
