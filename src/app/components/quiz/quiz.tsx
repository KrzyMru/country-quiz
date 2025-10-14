import "./quiz.css";
import Question from "../question/question";
import { useEffect, useState } from "react";
import type { QuestionData } from "../question/types";

const Quiz = () => {
    const [questions, setQuestions] = useState<QuestionData[]>([
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
    ]);
    const [answers, setAnswers] = useState<Array<number|null>>(Array(questions.length).fill(null));
    const [currentQuestion, setcurrentQuestion] = useState<number>(1);
    const [points, setPoints] = useState<number>(0);

    const handleClickAnswer = (answer: number) => {
        if(answer === questions[currentQuestion-1].correctAnswer)
            setPoints(points + 1);
        setAnswers(prev => prev.map((val, i) => i === currentQuestion-1 ? answer : val));
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
                                className={`quiz__question ${answers[i] ? 'quiz__question--solved' : ''} ${currentQuestion === i+1 ? 'quiz__question--active' : ''}`}
                                onClick={() => setcurrentQuestion(i+1)}
                            >
                                {i+1}
                            </button>
                        </li>
                    ))
                }
                </ul>
                <Question 
                    question={questions[currentQuestion-1]}
                    userAnswer={answers[currentQuestion-1]}
                    onClick={handleClickAnswer}
                />
            </div>
        </div>
    )
}

export default Quiz;