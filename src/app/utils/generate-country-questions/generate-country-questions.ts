import type { CountryData } from "../../api/types";
import type { QuestionData } from "../../components/question/types";
import generateCountryAreaMaxQuestion from "./questions/country-area-max/generate-country-area-max-question";
import generateCountryAreaMinQuestion from "./questions/country-area-min/generate-country-area-min-question";
import generateCountryCapitalQuestion from "./questions/country-capital/generate-country-capital-question";
import generateCountryContinentQuestion from "./questions/country-continent/generate-country-continent-question";
import generateCountryFlagQuestion from "./questions/country-flag/generate-country-flag-question";
import generateCountryLandlockedQuestion from "./questions/country-landlocked/generate-country-landlocked-question";
import generateCountryPopulationMaxQuestion from "./questions/country-population-max/generate-country-population-max-question";
import generateCountryPopulationMinQuestion from "./questions/country-population-min/generate-country-population-min-question";

const generateCountryQuestions = (countryData: CountryData[], numberOfQuestions: number): QuestionData[] => {
    const questionTypes = Array.from({ length: numberOfQuestions < 1 ? 1 : numberOfQuestions }, () => Math.floor(Math.random() * 12) + 1);   // 1 - 12
    const answerNumbers = [2, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 8];
    const questions = questionTypes.map(type => {
        switch (type) {
            case 1: return generateCountryFlagQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 2: return generateCountryFlagQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 3: return generateCountryFlagQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 4: return generateCountryCapitalQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 5: return generateCountryCapitalQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 6: return generateCountryCapitalQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 7: return generateCountryPopulationMaxQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 8: return generateCountryPopulationMinQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 9: return generateCountryAreaMaxQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 10: return generateCountryAreaMinQuestion(countryData, answerNumbers[Math.floor(Math.random() * answerNumbers.length)]);
            case 11: return generateCountryContinentQuestion(countryData, answerNumbers[Math.floor(Math.random() * (answerNumbers.length-1))]); // 7 possibilities
            case 12: return generateCountryLandlockedQuestion(countryData);
            default: return generateCountryFlagQuestion(countryData, 4);
        }
    })
    return questions;

}

export default generateCountryQuestions;