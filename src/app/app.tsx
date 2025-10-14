import "./app.css";
import { useEffect, useState } from "react";
import Quiz from "./components/quiz/quiz";
import type { CountryData } from "./api/types";
import getCountryData from "./api/get-country-data";
import GenerateCountryQuestions from "./utils/generate-country-questions/generate-country-questions";

const App = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadCountryData = async () => {
      try {
        setLoading(true);
        const response = await getCountryData();
        setCountryData(response);
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
        loading ?
        <div className="loading"></div>
        :
        error ?
        <div className="error">
          <p>There was an error when loading country data.</p>
          <p>Please try again later.</p>
        </div>
        :
        <Quiz questions={GenerateCountryQuestions(countryData, 10)} />
      }
    </main>
  )
}

export default App;
