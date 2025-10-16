import "./app.css";
import { useContext, useState } from "react";
import Quiz from "./components/quiz/quiz";
import getCountryData from "./api/get-country-data";
import GenerateCountryQuestions from "./utils/generate-country-questions/generate-country-questions";
import type { QuestionData } from "./components/question/types";
import { SettingsContext, SettingsProvider } from "./contexts/settings/settings-context";

const App = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

const AppContent = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { settings } = useContext(SettingsContext);

  const loadQuestions = async () => {
    try {
      setLoading(true);
      const [countryData] = await Promise.all([
        getCountryData(),
        new Promise(resolve => setTimeout(resolve, 1000))
      ]); // Small delay to show loading
      setQuestions(GenerateCountryQuestions(countryData, settings));
    } catch(e: unknown) { 
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      {
        loading ?
        <div className="loading"></div>
        :
        error ?
        <div className="error">
          <p>There was an error when loading country data.</p>
          <p>Please try again later.</p>
        </div>
        :
        questions.length === 0 ?
        <div className="menu__container">
          <header className="menu__header">Country Quiz</header>
          <button
            type="button"
            title="Start"
            onClick={loadQuestions}
            className="menu__button"
          >
            Start
          </button>
          <button
            type="button"
            title="Settings"
            className="menu__button"
          >
            Settings
          </button>
        </div>
        :
        <Quiz questions={questions} />
      }
    </main>
  )
}

export default App;
