import i18n from 'i18next';
import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";
import languageMap from '../../../../constants/languageMap';
import type { LanguagesI18n } from '../../../../contexts/settings/types';

const generateCountryPopulationMaxQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = fisherYatesShuffle(countryData).slice(0, options < 1 ? 1 : options);
    const biggestPopulation = Math.max(...randomCountries.map(c => c.population));
    const chosenCountry = randomCountries.findIndex(c => c.population === biggestPopulation);
    const language = i18n.language as LanguagesI18n;

    const question: QuestionData = {
        text: i18n.t('questions.populationMax'),
        answers: Array.from({ length: randomCountries.length }, (_, i) => 
            language === 'en' ? 
            randomCountries[i].name.common :
            randomCountries[i].translations[languageMap[language]].common
        ),
        correctAnswer: chosenCountry
    }

    return question;
}

export default generateCountryPopulationMaxQuestion;