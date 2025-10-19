import i18n from 'i18next';
import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";
import type { LanguagesI18n } from '../../../../contexts/settings/types';
import languageMap from '../../../../constants/languageMap';

const generateCountryCapitalQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const randomCountries = fisherYatesShuffle(countryData).slice(0, options < 1 ? 1 : options);
    const chosenCountry = Math.floor(Math.random() * randomCountries.length);
    const language = i18n.language as LanguagesI18n;

    const question: QuestionData = {
        text: `${i18n.t('questions.capitals')} ${
            language === 'en' ? 
            randomCountries[chosenCountry].name.common :
            randomCountries[chosenCountry].translations[languageMap[language]].common
        }?`,
        answers: Array.from({ length: randomCountries.length }, (_, i) => randomCountries[i].capital[0]), // No translation here unfortunately
        correctAnswer: chosenCountry,
        image: {
            png: randomCountries[chosenCountry].flags.png,
            alt: randomCountries[chosenCountry].flags.alt,
        }
    }

    return question;
}

export default generateCountryCapitalQuestion;