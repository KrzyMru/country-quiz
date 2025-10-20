import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import customLanguageDetector from './custom-language-detector';
import en from "./locales/en.json";
import pl from "./locales/pl.json";

const languageDetector = new LanguageDetector();
languageDetector.addDetector(customLanguageDetector);

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            pl: { translation: pl },
        },
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            order: ['localStorageSettings'],
            caches: ['localStorageSettings'],
        }
    })
    .then(() => {
        document.documentElement.setAttribute('lang', i18n.language);
    });

i18n.on('languageChanged', (lng) => {document.documentElement.setAttribute('lang', lng);});