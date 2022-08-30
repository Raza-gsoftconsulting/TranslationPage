import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ten from "./en/TranslationPage.json";
import tfr from "./fr/TranslationPage.json";
import tde from "./de/TranslationPage.json";
import tar from "./ar/TranslationPage.json";
import tur from "./ur/TranslationPage.json";
import tchi from "./chi/TranslationPage.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: ten,
    },
    fr: {
      translation: tfr,
    },
    de: {
      translation: tde,
    },
    ar: {
      translation: tar,
    },
    ur: {
      translation: tur,
    },
    chi: {
      translation: tchi,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const changeLanguage = (lang) => {
  return () => {
    i18n.changeLanguage(lang);
  };
};

const App1 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <br></br>
      <button className="btn" onClick={changeLanguage("en")}>
        English
      </button>
      <button className="btn" onClick={changeLanguage("fr")}>
        French
      </button>
      <button className="btn" onClick={changeLanguage("de")}>
        Dutch
      </button>
      <button className="btn" onClick={changeLanguage("ar")}>
        Arabic
      </button>
      <button className="btn" onClick={changeLanguage("ur")}>
        Urdu
      </button>
      <button className="btn" onClick={changeLanguage("chi")}>
        Chinese
      </button>
      <br></br>
      <p className="para">{t("welcome to react")}</p> <br></br>
      <p className="para">{t("welcome to")}</p> <br></br>
      <p className="para">{t("welcome")}</p> <br></br>
    </div>
  );
};
export default App1;
