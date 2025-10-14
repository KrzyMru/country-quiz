import type { CountryData } from "../../api/types";

const GenerateCountryQuestions = (countryData: CountryData[], numberOfQuestions: number) => {
    return [
        {
            text: "Which country does this flag '3' belong to?",
            correctAnswer: 3,
            answers: ["Sweden", "Vietnam", "Finland", "Austria"]
        }, 
        {
            text: "Which country does this flag '1' belong to?",
            correctAnswer: 1,
            answers: ["Sweden", "Vietnam", "Finland", "Austria"]
        }
    ]
}

export default GenerateCountryQuestions;