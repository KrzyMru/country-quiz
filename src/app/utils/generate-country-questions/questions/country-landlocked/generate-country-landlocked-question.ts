import i18n from 'i18next';
import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import type { LanguagesI18n } from '../../../../contexts/settings/types';
import languageMap from '../../../../constants/languageMap';

const generateCountryLandlockedQuestion = (countryData: CountryData[]): QuestionData => {
    const chosenCountry = Math.floor(Math.random() * countryData.length);
    const language = i18n.language as LanguagesI18n;

    const question: QuestionData = {
        text: `${i18n.t('questions.landlocked.first')} ${
            language === 'en' ? 
            countryData[chosenCountry].name.common :
            countryData[chosenCountry].translations[languageMap[language]].common
        } ${i18n.t('questions.landlocked.second')}`,
        answers: [i18n.t('questions.landlocked.yes'), i18n.t('questions.landlocked.no')],
        correctAnswer: countryData[chosenCountry].landlocked ? 0 : 1,
        image: {
            png: countryData[chosenCountry].flags.png,
            alt: countryData[chosenCountry].flags.alt,
        }
    }

    return question;
}

export default generateCountryLandlockedQuestion;