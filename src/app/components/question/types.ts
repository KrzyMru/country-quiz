interface QuestionData {
    text: string,
    correctAnswer: number,
    answers: string[],
}

interface QuestionProps {
    question: QuestionData,
    userAnswer: number|null,
    onClick: (answer: number) => void,
}

export type { QuestionData, QuestionProps }