import type { QuestionData } from "../question/types";

interface QuizProps {
    questions: QuestionData[],
    onGameEnd: () => void,
    onPlayAgain: () => void,
    endlessMode: boolean,
}

export type { QuizProps }