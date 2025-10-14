import "./question.css";

const Question = () => {
    return (
        <div className="question__container">
            <span className="question__text">Which country does this flag ' ' belong to?</span>
            <div className="question__answers">
                <button className="question__answer">
                    Sweden
                </button>
                <button className="question__answer">
                    Vietnam
                </button>
                <button className="question__answer">
                    Finland
                </button>
                <button className="question__answer">
                    Austria
                </button>
            </div>
        </div>
    )
}

export default Question;