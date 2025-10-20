import "./app.css";
import { useContext, useEffect, useRef, useState } from "react";
import Quiz from "./components/quiz/quiz";
import GenerateCountryQuestions from "./utils/generate-country-questions/generate-country-questions";
import type { QuestionData } from "./components/question/types";
import { SettingsContext, SettingsProvider } from "./contexts/settings/settings-context";
import SettingsModal from "./modals/settings/settings-modal";
import getCountryDataIndependent from "./api/get-country-data-independent";
import getCountryDataAll from "./api/get-country-data-all";
import getCountryDataTerritory from "./api/get-country-data-territory";
import { useTranslation } from "react-i18next";
import type { CountryData } from "./api/types";

const App = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

const AppContent = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [endlessMode, setEndlessMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const { settings } = useContext(SettingsContext);
  const prevCountryType = useRef(settings.countryType);
  const { t } = useTranslation();

  const loadCountryData = async () => {
    const [countryData] = await Promise.all([
      settings.countryType === 'territory' ? getCountryDataTerritory() :
      settings.countryType === 'all' ? getCountryDataAll() :
      getCountryDataIndependent(),
      new Promise(resolve => setTimeout(resolve, 1000))
    ]); // Small delay to show loading
    return countryData;
  }

  const startGame = async () => {
    try {
      setLoading(true);
      const finalSettings = endlessMode ? { ...settings, numberQuestions: 3 } : settings;
      const countryTypeChanged = prevCountryType.current !== finalSettings.countryType;
      if(countryData.length === 0 || countryTypeChanged) {
        prevCountryType.current = finalSettings.countryType;
        const newCountryData = await loadCountryData();
        setCountryData(newCountryData);
        setQuestions(GenerateCountryQuestions(newCountryData, finalSettings));
      }
      else
        setQuestions(GenerateCountryQuestions(countryData, finalSettings));
    } catch(e: unknown) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const endGame = () => {
    setQuestions([]);
    if(endlessMode)
      setEndlessMode(false);
  }

  useEffect(() => {
    if(endlessMode)
      startGame();
  }, [endlessMode]);

  return (
    <main className="page">
      {
        loading ?
        <div className="loading"></div>
        :
        error ?
        <div className="error">
          <p>{t('menu.error.first')}</p>
          <p>{t('menu.error.second')}</p>
        </div>
        :
        questions.length === 0 ?
        <div className="menu__container">
          <header className="menu__header">{t('menu.header')}</header>
          <button
            type="button"
            title={t('menu.start')}
            onClick={startGame}
            className="menu__button"
          >
            {t('menu.start')}
          </button>
          <button
            type="button"
            title={t('menu.endless')}
            onClick={() => setEndlessMode(true)}
            className="menu__button"
          >
            {t('menu.endless')}
          </button>
          <button
            type="button"
            title={t('menu.settings')}
            onClick={() => setOpenSettings(true)}
            className="menu__button"
          >
            {t('menu.settings')}
          </button>
        </div>
        :
        <Quiz 
          questions={questions} 
          onGameEnd={endGame}
          onPlayAgain={startGame}
          endlessMode={endlessMode}
        />
      }
      <SettingsModal 
        isOpen={openSettings}
        onClose={() => setOpenSettings(false)}
      />
    </main>
  )
}

export default App;
