import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";

const generateCountryCapitalQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = [...countryData].sort(() => 0.5 - Math.random()).slice(0, options < 1 ? 1 : options);
    const chosenCountry = Math.floor(Math.random() * randomCountries.length);
    
    const question: QuestionData = {
        text: `What is the capital of ${randomCountries[chosenCountry].name.common}?`,
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].capital[0]),
        correctAnswer: chosenCountry
    }

    return question;
}

export default generateCountryCapitalQuestion;