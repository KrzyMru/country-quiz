import "./app.css";
import { useEffect, useState } from "react";
import Quiz from "./components/quiz/quiz";
import getCountryData from "./api/get-country-data";
import GenerateCountryQuestions from "./utils/generate-country-questions/generate-country-questions";
import type { QuestionData } from "./components/question/types";

const App = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadCountryData = async () => {
      try {
        setLoading(true);
        const response = await getCountryData();
        setQuestions(GenerateCountryQuestions(response, 10));
      } catch(e: unknown) { 
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadCountryData();
  }, []);

  return (
    <main className="page">
      {
        loading || (!error && questions.length === 0) ?
        <div className="loading"></div>
        :
        error ?
        <div className="error">
          <p>There was an error when loading country data.</p>
          <p>Please try again later.</p>
        </div>
        :
        <Quiz questions={questions} />
      }
    </main>
  )
}

export default App;
