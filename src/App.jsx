import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./App.css";
import { QUIZ_TOOLTIP, QUIZ_TYPE, TITLE } from "./constants";
import Button from "./utils/Button";
import { ReactQnA } from "./ReactQnA";
import { ReactQuiz } from "./ReactQuiz";
import { ArrowLeft } from "react-feather";
import { QuickQuiz } from "./QuickQuiz";

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
        <section className="btn-containor">
          <Tippy content={QUIZ_TOOLTIP.QnA}>
            <Button
              className="button react-quiz-btn"
              text="React QnA"
              onClick={() => setQuizType(QUIZ_TYPE.QnA)}
            />
          </Tippy>
          <Tippy content={QUIZ_TOOLTIP.Quiz}>
            <Button
              className="button react-quiz-btn"
              text="React Quiz"
              onClick={() => setQuizType(QUIZ_TYPE.Quiz)}
            />
          </Tippy>
          <Tippy content={QUIZ_TOOLTIP.QuickQuiz}>
            <Button
              className="button react-quiz-btn"
              text="Take a Quick Quiz"
              onClick={() => setQuizType(QUIZ_TYPE.QuickQuiz)}
            />
          </Tippy>
        </section>
      )}
      {quizType === QUIZ_TYPE.QnA && <ReactQnA />}
      {quizType === QUIZ_TYPE.Quiz && <ReactQuiz />}
      {quizType === QUIZ_TYPE.QuickQuiz && (
        <QuickQuiz setQuizType={setQuizType} />
      )}
    </>
  );
}

export default App;
