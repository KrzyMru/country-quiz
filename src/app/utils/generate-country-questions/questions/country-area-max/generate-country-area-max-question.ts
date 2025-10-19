import i18n from 'i18next';
import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import type { LanguagesI18n } from "../../../../contexts/settings/types";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";
import languageMap from '../../../../constants/languageMap';

const generateCountryAreaMaxQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = fisherYatesShuffle(countryData).slice(0, options < 1 ? 1 : options);
    const biggestArea = Math.max(...randomCountries.map(c => c.area));
    const chosenCountry = randomCountries.findIndex(c => c.area === biggestArea);
    const language = i18n.language as LanguagesI18n;

    const question: QuestionData = {
        text: i18n.t('questions.areaMax'),
        answers: Array.from({ length: randomCountries.length }, (_, i) => 
            language === 'en' ? 
            randomCountries[i].name.common :
            randomCountries[i].translations[languageMap[language]].common
        ),
        correctAnswer: chosenCountry
    }

    return question;
}

export default generateCountryAreaMaxQuestion;