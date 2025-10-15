import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";
import continents from "../../../../constants/continents";
import fisherYatesShuffle from "../../../fisher-yates-shuffle/fisher-yates-shuffle";

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

    const question: QuestionData = {
        text: `Which continent is ${countryData[chosenCountry].name.common} a part of?`,
        answers: Array.from({ length: finalAnswers.length }, (_, i) => finalAnswers[i]),
        correctAnswer: randomAnswerIndex
    }

    return question;
}

export default generateCountryContinentQuestion;