import type { CountryData } from "../../api/types";
import type { QuestionData } from "../../components/question/types";

const GenerateCountryNameQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = [...countryData].sort(() => 0.5 - Math.random()).slice(0, options < 1 ? 1 : options);
    const chosenCountryIndex = Math.floor(Math.random() * randomCountries.length);
    
    const question: QuestionData = {
        text: `Which country does this flag '${randomCountries[chosenCountryIndex].flag}' belong to?`,
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].name.common),
        correctAnswer: chosenCountryIndex+15
    }

    return question;
}

export default GenerateCountryNameQuestion;