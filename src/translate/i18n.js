import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from './languages';


i18n
    .use(LanguageDetector)
    .init({
        debug: false,
        interpolation: {
            escapeValue: false, // Permitir tags HTML nas mensagens
        },
        defaultNS: ['translations'], //default ns
        fallbackLng: 'en', //default language
        ns: ['translations'],
        resources: messages
    });


export { i18n };

