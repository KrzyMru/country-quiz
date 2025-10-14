import Question from "../question/question";

const Quiz = () => {
    return (
        <div>
            <ul>
            {
                Array.from({ length: 10 }, (_, i) => (
                    <span>{i}</span>
                ))
            }
            </ul>
            <Question />
        </div>
    )
}

export default Quiz;