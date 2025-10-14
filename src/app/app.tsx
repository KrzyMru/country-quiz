import "./app.css";
import Quiz from "./components/quiz/quiz";

const App = () => {
  return (
    <main className="page">
      <div className="header__container">
        <header className="header__logo">Country Quiz</header>
        <span className="header__points">4/10 Points</span>
      </div>
      <Quiz />
    </main>
  )
}

export default App;
