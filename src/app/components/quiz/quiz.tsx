import "./quiz.css";
import Question from "../question/question";
import { useState } from "react";
import type { QuizProps } from "./types";

const Quiz = (props: QuizProps) => {
    const { questions } = { ...props }
    const [answers, setAnswers] = useState<Array<number|null>>(Array(questions.length).fill(null));
    const [currentQuestion, setcurrentQuestion] = useState<number>(0);
    const [points, setPoints] = useState<number>(0);

    const handleClickAnswer = (answer: number) => {
        if(answer === questions[currentQuestion].correctAnswer)
            setPoints(points + 1);
        setAnswers(prev => prev.map((val, i) => i === currentQuestion ? answer : val));
    }

    return (
        <div className="quiz__wrapper">
            <div className="header__container">
                <header className="header__logo">Country Quiz</header>
                <span className="header__points">{`${points}/${questions.length} Points`}</span>
            </div>
            <div className="quiz__container">
                <ul className="quiz__questions">
                {
                    Array.from({ length: questions.length }, (_, i) => (
                        <li key={i}>
                            <button
                                type="button"
                                title={`${i+1} question`}
                                className={`
                                    quiz__question 
                                    ${answers[i] !== null ? 
                                        answers[i] === questions[i].correctAnswer ? 'quiz__question--correct' : 'quiz__question--incorrect' 
                                        : ''} 
                                    ${currentQuestion === i ? 'quiz__question--active' : ''}
                                `}
                                onClick={() => setcurrentQuestion(i)}
                            >
                                {i+1}
                            </button>
                        </li>
                    ))
                }
                </ul>
                <Question 
                    question={questions[currentQuestion]}
                    userAnswer={answers[currentQuestion]}
                    onClick={handleClickAnswer}
                />
            </div>
        </div>
    )
}

export default Quiz;