import "./quiz.css";
import Question from "../question/question";
import { useEffect, useState } from "react";
import type { QuizProps } from "./types";
import CongratsMessage from "../../modals/congrats-message/congrats-message";
import { useTranslation } from "react-i18next";

const Quiz = (props: QuizProps) => {
    const { questions, onGameEnd, onPlayAgain } = { ...props }
    const [answers, setAnswers] = useState<Array<number|null>>(Array(questions.length).fill(null));
    const [currentQuestion, setcurrentQuestion] = useState<number>(0);
    const [points, setPoints] = useState<number>(0);
    const [gameEnd, setGameEnd] = useState<boolean>(false);
    const { t } = useTranslation();

    const handleClickAnswer = (answer: number) => {
        if(answer === questions[currentQuestion].correctAnswer)
            setPoints(points + 1);
        setAnswers(prev => prev.map((val, i) => i === currentQuestion ? answer : val));
    }

    const handlePlayAgain = () => {
        setAnswers(Array(questions.length).fill(null));
        setcurrentQuestion(0);
        setPoints(0);
        setGameEnd(false);
        onPlayAgain();
    }

    useEffect(() => {
        if(!answers.includes(null))
            setGameEnd(true);
    }, [answers]);

    return (
        <div className="quiz__wrapper">
            <div className="header__container">
                <button
                    type="button"
                    title={t('quiz.endGame')}
                    onClick={onGameEnd}
                    className="header__logo"
                >
                    <header>{t('quiz.header')}</header>
                </button>
                <span className="header__points">{`${points}/${questions.length} ${t('quiz.points')}`}</span>
            </div>
            <div className="quiz__container">
                <ul className="quiz__questions">
                {
                    Array.from({ length: questions.length }, (_, i) => (
                        <li key={i}>
                            <button
                                type="button"
                                title={`${i+1} ${t('quiz.question')}`}
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
                onClose={() => setGameEnd(false)} 
                points={points} 
                maxPoints={questions.length} 
                onPlayAgain={handlePlayAgain}
            />
        </div>
    )
}

export default Quiz;