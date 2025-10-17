import type { QuestionData } from "../question/types";

interface QuizProps {
    questions: QuestionData[],
    onGameEnd: () => void,
    onPlayAgain: () => void,
}

export type { QuizProps }