import type { CountryData } from "../../api/types";
import type { QuestionData } from "../../components/question/types";
import type { Settings } from "../../contexts/settings/types";
import pickQuestion from "./pick-question/pick-question";

const generateCountryQuestions = (countryData: CountryData[], settings: Settings): QuestionData[] => {
    const answerNumbers = [2, 2, 4, 4, 4, 4, 4, 4, 6, 6];
    const questionNumber = settings.numberOfQuestions < 1 ? 1 : settings.numberOfQuestions;
    
    const questions = Array.from({ length: questionNumber }, () => {
       const question = pickQuestion(settings);
       const options = answerNumbers[Math.floor(Math.random() * answerNumbers.length)];
       return question(countryData, options);
    });

    return questions;
}

export default generateCountryQuestions;