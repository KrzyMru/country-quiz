import type { CountryData } from "../../../../api/types";
import type { QuestionData } from "../../../../components/question/types";

const generateCountryLandlockedQuestion = (countryData: CountryData[]): QuestionData => {
    const chosenCountry = Math.floor(Math.random() * countryData.length);
    
    const question: QuestionData = {
        text: `Is ${countryData[chosenCountry].name.common} landlocked?`,
        answers: ["Yes", "No"],
        correctAnswer: countryData[chosenCountry].landlocked ? 0 : 1
    }

    return question;
}

export default generateCountryLandlockedQuestion;