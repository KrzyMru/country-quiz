import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";

const generateCountryPopulationMinQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = fisherYatesShuffle(countryData).slice(0, options < 1 ? 1 : options);
    const smallestPopulation = Math.min(...randomCountries.map(c => c.population));
    const chosenCountry = randomCountries.findIndex(c => c.population === smallestPopulation);
    
    const question: QuestionData = {
        text: "Which of the following countries has the smallest population?",
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].name.common),
        correctAnswer: chosenCountry
    }

    return question;
}

export default generateCountryPopulationMinQuestion;