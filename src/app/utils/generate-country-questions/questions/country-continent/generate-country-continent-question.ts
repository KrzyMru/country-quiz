import i18n from 'i18next';
import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import continents from "../../../../constants/continents";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";
import languageMap from '../../../../constants/languageMap';
import type { LanguagesI18n } from '../../../../contexts/settings/types';

const generateCountryContinentQuestion = (countryData: CountryData[], options: number): QuestionData => {
    const chosenCountry = Math.floor(Math.random() * countryData.length);
    const otherContinents = continents.filter(c => !countryData[chosenCountry].continents.includes(c));
    const randomOtherContinents = fisherYatesShuffle(otherContinents).slice(0, options < 0 ? 0 : options-1);
    const randomAnswerIndex = Math.floor(Math.random() * (randomOtherContinents.length + 1));
    const finalAnswers = [
        ...randomOtherContinents.slice(0, randomAnswerIndex), 
        countryData[chosenCountry].continents[0], 
        ...randomOtherContinents.slice(randomAnswerIndex), 
    ];
    const language = i18n.language as LanguagesI18n;

    const question: QuestionData = {
        text: `${i18n.t('questions.continents.first')} ${
            language === 'en' ? 
            countryData[chosenCountry].name.common :
            countryData[chosenCountry].translations[languageMap[language]].common
        }${i18n.t('questions.continents.second')}`,
        answers: Array.from({ length: finalAnswers.length }, (_, i) => i18n.t(`questions.continents.names.${finalAnswers[i]}`)),
        correctAnswer: randomAnswerIndex,
        image: {
            png: countryData[chosenCountry].flags.png,
            alt: countryData[chosenCountry].flags.alt,
        }
    }

    return question;
}

export default generateCountryContinentQuestion;