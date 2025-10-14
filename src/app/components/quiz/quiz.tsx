import "./quiz.css";
import Question from "../question/question";

const Quiz = () => {
    return (
        <div className="quiz__container">
            <ul className="quiz__questions">
            {
                Array.from({ length: 10 }, (_, i) => (
                    <li key={i}>
                        <span className="quiz__question">{i+1}</span>
                    </li>
                ))
            }
            </ul>
            <Question />
        </div>
    )
}

export default Quiz;