import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend) // Loads external translation.json files
    .use(LanguageDetector) // Detects current browser language
    .use(initReactI18next) // Connects to the i18n singleton for React. Alternative: I18nextProvider
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;
