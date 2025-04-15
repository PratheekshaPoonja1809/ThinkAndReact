import React, { useEffect, useState } from "react";
import { Questions } from "./questions";
import { OptionList } from "./OptionList";
import Button from "./utils/Button";
import { getRandomTenQuestions } from "./helper/getRandomTenQuestions";

export const QuickQuiz = ({ setQuizType }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const totalItems = Questions.length;

  const nextSlide = () => {
    if (currentIndex >= 9) return;
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const submitTest = () => {
    alert(`You got ${totalScore} questions right`);
    setQuizType("");
  };

  useEffect(() => {
    let questionList = getRandomTenQuestions(Questions);
    setQuestions(questionList);
  }, []);

  return (
    <>
      {questions.length != 0 && (
        <>
          <div className="carousel-container flex-center">
            <div className="carousel-content">
              <h3>
                {currentIndex + 1}. {questions[currentIndex].question}
              </h3>
              <OptionList
                options={questions[currentIndex]}
                multiSelection={false}
                setScore={setTotalScore}
              />
            </div>
          </div>
          <Button text="Submit" onClick={submitTest} />
          {currentIndex < 9 && (
            <Button
              text="Next"
              onClick={nextSlide}
              style={
                currentIndex >= 9
                  ? { opacity: 0.5, cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            />
          )}
        </>
      )}
    </>
  );
};
