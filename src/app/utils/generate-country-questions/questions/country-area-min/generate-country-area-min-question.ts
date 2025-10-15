import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";

const GenerateCountryAreaMinQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = [...countryData].sort(() => 0.5 - Math.random()).slice(0, options < 1 ? 1 : options);
    const smallestArea = Math.min(...randomCountries.map(c => c.area));
    const chosenCountry = randomCountries.findIndex(c => c.area === smallestArea);
    
    const question: QuestionData = {
        text: "Which of the following countries has the smallest land area?",
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].name.common),
        correctAnswer: chosenCountry
    }

    return question;
}

export default GenerateCountryAreaMinQuestion;