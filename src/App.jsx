import { useState } from "react";
import "./App.css";
import { QUIZ_TYPE, TITLE } from "./constants";
import Button from "./utils/Button";
import { ReactQnA } from "./ReactQnA";
import { ReactQuiz } from "./ReactQuiz";
import { ArrowLeft } from "react-feather";

function App() {
  const [quizType, setQuizType] = useState("");

  return (
    <>
      <header className="flex-center">
        {quizType && (
          <ArrowLeft
            width="30px"
            height="35px"
            className="back-btn"
            onClick={() => setQuizType("")}
          />
        )}
        <h1 style={{ flex: 1 }}>{quizType ? quizType : TITLE}</h1>
      </header>
      {!quizType && (
        <>
          <Button
            className="button react-quiz-btn"
            text="React QnA"
            onClick={() => setQuizType(QUIZ_TYPE.QnA)}
          />
          <Button
            className="button react-quiz-btn"
            text="React Quiz"
            onClick={() => setQuizType(QUIZ_TYPE.Quiz)}
          />
        </>
      )}
      {quizType === QUIZ_TYPE.QnA && <ReactQnA />}
      {quizType === QUIZ_TYPE.Quiz && <ReactQuiz />}
    </>
  );
}

export default App;
