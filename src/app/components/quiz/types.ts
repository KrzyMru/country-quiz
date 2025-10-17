import type { QuestionData } from "../question/types";

interface QuizProps {
    questions: QuestionData[],
    onGameEnd: () => void,
}

export type { QuizProps }