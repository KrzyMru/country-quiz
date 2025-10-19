import i18n from 'i18next';
import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";
import type { LanguagesI18n } from '../../../../contexts/settings/types';
import languageMap from '../../../../constants/languageMap';

const generateCountryPopulationMinQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = fisherYatesShuffle(countryData).slice(0, options < 1 ? 1 : options);
    const smallestPopulation = Math.min(...randomCountries.map(c => c.population));
    const chosenCountry = randomCountries.findIndex(c => c.population === smallestPopulation);
    const language = i18n.language as LanguagesI18n;

    const question: QuestionData = {
        text: i18n.t('questions.populationMin'),
        answers: Array.from({ length: randomCountries.length }, (_, i) => 
            language === 'en' ? 
            randomCountries[i].name.common :
            randomCountries[i].translations[languageMap[language]].common
        ),
        correctAnswer: chosenCountry
    }

    return question;
}

export default generateCountryPopulationMinQuestion;