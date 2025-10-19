import "./question.css";
import type { QuestionProps } from "./types";

const Question = (props: QuestionProps) => {
    const { question, onClick, userAnswer } = { ...props }

    const isCorrectAnswerChoosen = userAnswer !== null && userAnswer === question.correctAnswer;

    return (
        <div className="question__container">
            <span className="question__text">{question.text}</span>
            {
                question.image &&
                <img 
                    src={question.image.png}
                    alt={question.image.alt}
                    className="question__image"
                />
            }
            <ul className="question__answers">
                {
                    question.answers.map((answer, index) => {
                        const isThisAnswerCorrect = userAnswer !== null && question.correctAnswer === index;
                        const isThisAnswerChoosen = userAnswer !== null && question.answers[userAnswer] === answer;
                        return (
                            <li key={index}>
                                <button 
                                    type="button"
                                    title={answer}
                                    className={`
                                        question__answer ${userAnswer !== null ? 'question__answer--disabled' : ''}
                                        ${isCorrectAnswerChoosen && isThisAnswerChoosen ? 'question__answer--correct' : ''}
                                        ${!isCorrectAnswerChoosen && isThisAnswerChoosen ? 'question__answer--incorrect' : ''}
                                        ${!isCorrectAnswerChoosen && isThisAnswerCorrect ? 'question__answer--correct' : ''}
                                    `}
                                    onClick={() => onClick(index)}
                                    disabled={userAnswer !== null}
                                >
                                    <span className="answer__text">{answer}</span>
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