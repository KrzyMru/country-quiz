import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";

const generateCountryFlagQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = [...countryData].sort(() => 0.5 - Math.random()).slice(0, options < 1 ? 1 : options);
    const chosenCountry = Math.floor(Math.random() * randomCountries.length);
    
    const question: QuestionData = {
        text: "Which country does this flag belong to?",
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].name.common),
        correctAnswer: chosenCountry,
        image: {
            png: randomCountries[chosenCountry].flags.png,
            alt: randomCountries[chosenCountry].flags.alt,
        }
    }

    return question;
}

export default generateCountryFlagQuestion;