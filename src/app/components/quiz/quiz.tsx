import "./quiz.css";
import Question from "../question/question";
import { useEffect, useState } from "react";
import type { QuizProps } from "./types";
import CongratsMessage from "../../modals/congrats-message/congrats-message";

const Quiz = (props: QuizProps) => {
    const { questions, onGameEnd } = { ...props }
    const [answers, setAnswers] = useState<Array<number|null>>(Array(questions.length).fill(null));
    const [currentQuestion, setcurrentQuestion] = useState<number>(0);
    const [points, setPoints] = useState<number>(0);
    const [gameEnd, setGameEnd] = useState<boolean>(false);

    const handleClickAnswer = (answer: number) => {
        if(answer === questions[currentQuestion].correctAnswer)
            setPoints(points + 1);
        setAnswers(prev => prev.map((val, i) => i === currentQuestion ? answer : val));
    }

    const handleEndGame = () => {
        setGameEnd(false);
        onGameEnd();
    }

    useEffect(() => {
        if(!answers.includes(null))
            setGameEnd(true);
    }, [answers]);

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
            <CongratsMessage 
                isOpen={gameEnd} 
                onClose={handleEndGame} 
                points={points} 
                maxPoints={questions.length} 
            />
        </div>
    )
}

export default Quiz;