import type { CountryData } from "../../api/types";
import type { QuestionData } from "../../components/question/types";
import type { Settings } from "../../contexts/settings/types";
import pickOptions from "./pick-options/pick-options";
import pickQuestion from "./pick-question/pick-question";

const generateCountryQuestions = (countryData: CountryData[], settings: Settings): QuestionData[] => {
    const questions = Array.from({ length: settings.numberQuestions }, () => {
       const question = pickQuestion(settings);
       const options = pickOptions(settings);
       return question(countryData, options);
    });

    return questions;
}

export default generateCountryQuestions;