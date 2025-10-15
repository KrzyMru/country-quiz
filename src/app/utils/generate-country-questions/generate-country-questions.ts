import type { CountryData } from "../../api/types";
import type { QuestionData } from "../../components/question/types";
import GenerateCountryCapitalQuestion from "./questions/country-capital/generate-country-capital-question";
import GenerateCountryContinentQuestion from "./questions/country-continent/generate-country-continent-question";
import GenerateCountryFlagQuestion from "./questions/country-flag/generate-country-flag-question";

const GenerateCountryQuestions = (countryData: CountryData[], numberOfQuestions: number): QuestionData[] => {
    const questionTypes = Array.from({ length: numberOfQuestions < 1 ? 1 : numberOfQuestions }, () => Math.floor(Math.random() * 8) + 1);   // 1 - 8
    const answerNumbers = [2, 4, 6, 8];
    const questions = questionTypes.map(type => {
        switch (type) {
            case 1: return GenerateCountryFlagQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 2: return GenerateCountryCapitalQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 3: return GenerateCountryContinentQuestion(countryData, answerNumbers[Math.floor(Math.random() * (answerNumbers.length-1))]); // 7 possibilities
            case 4: 
            case 5: 
            case 6: 
            case 7: 
            case 8: 
            default: return GenerateCountryFlagQuestion(countryData, 4);
        }
    })
    return questions;

}

export default GenerateCountryQuestions;