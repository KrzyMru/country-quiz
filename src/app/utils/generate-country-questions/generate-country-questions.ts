import type { CountryData } from "../../api/types";
import type { QuestionData } from "../../components/question/types";
import GenerateCountryNameQuestion from "./generate-country-name-question";

const GenerateCountryQuestions = (countryData: CountryData[], numberOfQuestions: number): QuestionData[] => {
    const questionTypes = Array.from({ length: numberOfQuestions < 1 ? 1 : numberOfQuestions }, () => Math.floor(Math.random() * 8) + 1);   // 1 - 8
    const answerNumbers = [2, 4, 6, 8];
    const questions = questionTypes.map(type => {
        switch (type) {
            case 1: return GenerateCountryNameQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 2: 
            case 3: 
            case 4: 
            case 5: 
            case 6: 
            case 7: 
            case 8: 
            default: return GenerateCountryNameQuestion(countryData, 4);
        }
    })
    return questions;

}

export default GenerateCountryQuestions;