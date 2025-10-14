import "./question.css";
import type { QuestionProps } from "./types";

const Question = (props: QuestionProps) => {
    const { question, onClick, userAnswer } = { ...props }

    const isCorrectAnswerChoosen = userAnswer && userAnswer === question.correctAnswer;

    return (
        <div className="question__container">
            <span className="question__text">{question.text}</span>
            <ul className="question__answers">
                {
                    question.answers.map((answer, index) => {
                        const isThisAnswerCorrect = userAnswer && question.correctAnswer === index+1;
                        const isThisAnswerChoosen = userAnswer && question.answers[userAnswer-1] === answer;
                        return (
                            <li key={index}>
                                <button 
                                    type="button"
                                    title={answer}
                                    className={`
                                        question__answer ${userAnswer !== null ? 'question__answer--disabled' : ''}
                                        ${isThisAnswerChoosen ? 'question__answer--chosen' : ''} 
                                        ${isCorrectAnswerChoosen && isThisAnswerChoosen ? 'question__answer--correct' : ''}
                                        ${!isCorrectAnswerChoosen && isThisAnswerChoosen ? 'question__answer--incorrect' : ''}
                                        ${!isCorrectAnswerChoosen && isThisAnswerCorrect ? 'question__answer--correct' : ''}
                                    `}
                                    onClick={() => onClick(index + 1)}
                                    disabled={userAnswer !== null}
                                >
                                    {answer}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Question;