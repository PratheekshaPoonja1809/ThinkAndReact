import { useState } from "react";
import "./App.css";
import { QUIZ_TYPE, TITLE } from "./constants";
import Button from "./utils/Button";
import { ReactQnA } from "./ReactQnA";
import { ReactQuiz } from "./ReactQuiz";

function App() {
  const [quizType, setQuizType] = useState("");
  return (
    <div>
      <header>
        <h1>{quizType ? quizType:TITLE}</h1>
      </header>
      {!quizType && (
        <>
          <Button text="React QnA" onClick={() => setQuizType(QUIZ_TYPE.QnA)} />
          <Button text="React Quiz" onClick={() => setQuizType(QUIZ_TYPE.Quiz)} />
        </>
      )}
      {quizType === QUIZ_TYPE.QnA && <ReactQnA />}
      {quizType === QUIZ_TYPE.Quiz && <ReactQuiz />}
    </div>
  );
}

export default App;
