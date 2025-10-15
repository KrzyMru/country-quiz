import type { CountryData } from "../../api/types";
import type { QuestionData } from "../../components/question/types";
import GenerateCountryAreaMaxQuestion from "./questions/country-area-max/generate-country-area-max-question";
import GenerateCountryAreaMinQuestion from "./questions/country-area-min/generate-country-area-min-question";
import GenerateCountryCapitalQuestion from "./questions/country-capital/generate-country-capital-question";
import GenerateCountryContinentQuestion from "./questions/country-continent/generate-country-continent-question";
import GenerateCountryFlagQuestion from "./questions/country-flag/generate-country-flag-question";
import GenerateCountryLandlockedQuestion from "./questions/country-landlocked/generate-country-landlocked-question";
import GenerateCountryPopulationMaxQuestion from "./questions/country-population-max/generate-country-population-max-question";

const GenerateCountryQuestions = (countryData: CountryData[], numberOfQuestions: number): QuestionData[] => {
    const questionTypes = Array.from({ length: numberOfQuestions < 1 ? 1 : numberOfQuestions }, () => Math.floor(Math.random() * 8) + 1);   // 1 - 8
    const answerNumbers = [2, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 8];
    const questions = questionTypes.map(type => {
        switch (type) {
            case 1: return GenerateCountryFlagQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 2: return GenerateCountryFlagQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 3: return GenerateCountryFlagQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 4: return GenerateCountryCapitalQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 5: return GenerateCountryCapitalQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 6: return GenerateCountryCapitalQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 7: return GenerateCountryPopulationMaxQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 8: return GenerateCountryPopulationMaxQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 9: return GenerateCountryAreaMaxQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 10: return GenerateCountryAreaMinQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 11: return GenerateCountryContinentQuestion(countryData, answerNumbers[Math.floor(Math.random() * (answerNumbers.length-1))]); // 7 possibilities
            case 12: return GenerateCountryLandlockedQuestion(countryData);
            default: return GenerateCountryFlagQuestion(countryData, 4);
        }
    })
    return questions;

}

export default GenerateCountryQuestions;