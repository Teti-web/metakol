import React, { useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
import { useCookies } from 'react-cookie';


i18n
.use(HttpBackend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  fallbackLng: 'en', 
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },

    react: {
      useSuspense: false, 
    },
});

  export default i18n;