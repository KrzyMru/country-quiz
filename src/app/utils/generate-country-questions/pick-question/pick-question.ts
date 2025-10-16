import type { Settings } from "../../../contexts/settings/types";
import generateCountryAreaMaxQuestion from "../questions/country-area-max/generate-country-area-max-question";
import generateCountryAreaMinQuestion from "../questions/country-area-min/generate-country-area-min-question";
import generateCountryCapitalQuestion from "../questions/country-capital/generate-country-capital-question";
import generateCountryContinentQuestion from "../questions/country-continent/generate-country-continent-question";
import generateCountryFlagQuestion from "../questions/country-flag/generate-country-flag-question";
import generateCountryLandlockedQuestion from "../questions/country-landlocked/generate-country-landlocked-question";
import generateCountryPopulationMaxQuestion from "../questions/country-population-max/generate-country-population-max-question";
import generateCountryPopulationMinQuestion from "../questions/country-population-min/generate-country-population-min-question";

const pickQuestion = (settings: Settings) => {
    const questions = [];

    if(settings.questionFlag)
        questions.push(...Array.from({ length: 30 }, () => generateCountryFlagQuestion));
    if(settings.questionCapital)
        questions.push(...Array.from({ length: 30 }, () => generateCountryCapitalQuestion));
    if(settings.questionContinent)
        questions.push(...Array.from({ length: 15 }, () => generateCountryContinentQuestion));
    if(settings.questionLandlocked)
        questions.push(...Array.from({ length: 5 }, () => generateCountryLandlockedQuestion));
    if(settings.questionPopulationMax)
        questions.push(...Array.from({ length: 5 }, () => generateCountryPopulationMaxQuestion));
    if(settings.questionPopulationMin)
        questions.push(...Array.from({ length: 5 }, () => generateCountryPopulationMinQuestion));
    if(settings.questionAreaMax)
        questions.push(...Array.from({ length: 5 }, () => generateCountryAreaMaxQuestion));
    if(settings.questionAreaMin)
        questions.push(...Array.from({ length: 5 }, () => generateCountryAreaMinQuestion));
    if(questions.length === 0) // Backup if all disabled
        questions.push(generateCountryFlagQuestion);

    return questions[Math.floor(Math.random() * questions.length)];
}

export default pickQuestion;