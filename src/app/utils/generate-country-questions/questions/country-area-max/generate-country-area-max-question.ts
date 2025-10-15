import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";

const generateCountryAreaMaxQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = fisherYatesShuffle(countryData).slice(0, options < 1 ? 1 : options);
    const biggestArea = Math.max(...randomCountries.map(c => c.area));
    const chosenCountry = randomCountries.findIndex(c => c.area === biggestArea);
    
    const question: QuestionData = {
        text: "Which of the following countries has the largest land area?",
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].name.common),
        correctAnswer: chosenCountry
    }

    return question;
}

export default generateCountryAreaMaxQuestion;