import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";

const GenerateCountryPopulationMaxQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = [...countryData].sort(() => 0.5 - Math.random()).slice(0, options < 1 ? 1 : options);
    const biggestPopulation = Math.max(...randomCountries.map(c => c.population));
    const chosenCountry = randomCountries.findIndex(c => c.population === biggestPopulation);
    
    const question: QuestionData = {
        text: "Which of the following countries has the largest population?",
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].name.common),
        correctAnswer: chosenCountry
    }

    return question;
}

export default GenerateCountryPopulationMaxQuestion;