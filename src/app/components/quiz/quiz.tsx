import "./quiz.css";
import Question from "../question/question";
import { useEffect, useState } from "react";
import type { QuizProps } from "./types";
import CongratsMessage from "../../modals/congrats-message/congrats-message";
import { useTranslation } from "react-i18next";

const Quiz = (props: QuizProps) => {
    const { questions, onGameEnd, onPlayAgain, endlessMode } = { ...props }
    const [answers, setAnswers] = useState<Array<number|null>>(Array(questions.length).fill(null));
    const [currentQuestion, setcurrentQuestion] = useState<number>(endlessMode ? 1 : 0);
    const [points, setPoints] = useState<number>(0);
    const [gameEnd, setGameEnd] = useState<boolean>(false);
    const { t } = useTranslation();

    const readHighscore = () => {
        try {
            const stored = localStorage.getItem("highscore");
            if(stored) {
                const parsed = JSON.parse(stored);
                return parseInt(parsed);
            }
            return 0;
        } catch(e: unknown) {
            return 0;
        }
    }
    const [highscore, setHighscore] = useState<number>(readHighscore());
    const [lockQuestion, setLockQuestion] = useState<boolean>(false);

    const handleClickAnswer = (answer: number) => {
        if(answer === questions[currentQuestion].correctAnswer)
            setPoints(points + 1);
        setAnswers(prev => prev.map((val, i) => i === currentQuestion ? answer : val));
    }

    const handlePlayAgain = () => {
        setAnswers(Array(questions.length).fill(null));
        setcurrentQuestion(endlessMode ? 1 : 0);
        setPoints(0);
        setLockQuestion(false);
        setHighscore(readHighscore());
        setGameEnd(false);
        onPlayAgain();
    }

    const judgeAnswer = async () => {
        const answerIndex = answers.findIndex(answer => answer !== null)
        if(answerIndex !== -1) { // Any question was answered
            if(answers[answerIndex] === questions[answerIndex].correctAnswer) { // Answer was correct
                setLockQuestion(true);
                await new Promise(resolve => setTimeout(resolve, 1500)); // Show if the answer was correct for a moment
                setAnswers(Array(questions.length).fill(null));
                setcurrentQuestion(1);
                onPlayAgain();
                setLockQuestion(false);
            } 
            else { // Answer was incorrect
                setLockQuestion(true);
                if(points > highscore)
                    localStorage.setItem("highscore", points.toString());
                setGameEnd(true);
            }
        }
    }

    useEffect(() => {
        if(endlessMode)
            judgeAnswer();
        else if(!answers.includes(null))
            setGameEnd(true);
    }, [answers]);

    return (
        <div className="quiz__wrapper">
            <div className="header__container">
                <button
                    type="button"
                    title={t('quiz.endGame')}
                    onClick={() => {
                        if(points > highscore)
                            localStorage.setItem("highscore", points.toString());
                        onGameEnd();
                    }}
                    className="header__logo"
                >
                    <header>{t('quiz.header')}</header>
                </button>
                <span className="header__points">{`
                    ${endlessMode ? 
                        `${t('quiz.highscore')}: ${highscore}` :
                        `${t('quiz.points')}: ${points}/${questions.length}`
                    }
                `}</span>
            </div>
            <div className="quiz__container">
                {
                    endlessMode &&
                    <span className="quiz__score">{`${t('quiz.points')}: ${points}`}</span>
                }
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
                                    ${lockQuestion ? 'quiz__question--disabled' : ''}
                                `}
                                onClick={() => setcurrentQuestion(i)}
                                disabled={lockQuestion}
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
                maxPoints={endlessMode ? highscore : questions.length} 
                onPlayAgain={handlePlayAgain}
                endlessMode={endlessMode}
            />
        </div>
    )
}

export default Quiz;