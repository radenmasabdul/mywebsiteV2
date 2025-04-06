import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import id from "./locales/id.json";

i18n
  .use(LanguageDetector) // deteksi bahasa dari browser
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    fallbackLng: "en", // jika deteksi gagal, pakai bahasa Inggris
    interpolation: {
      escapeValue: false, // React sudah handle XSS
    },
  });

export default i18n;
