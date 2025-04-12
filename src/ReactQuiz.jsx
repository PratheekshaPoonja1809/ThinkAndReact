import React, { useState } from "react";
import { Questions } from "./questions";
import { OptionList } from "./OptionList";
import { CategoryList } from "./utils/CategoryList";

export const ReactQuiz = () => {
    const [questionList, setQuestionList] = useState(Questions);
    const [count, setCount] = useState(0);
    const [submit, setSubmit] = useState(false);
  
    const submitClk = () => {
      setSubmit(!submit);
      if (submit) setCount(0);
    };
  
    return (
      <>
        <main className="quiz-cntr">
           <CategoryList/>
          <section>
            <button className="submit-btn" onClick={submitClk}>
              {!submit ? 'Submit' : 'Restart'}
            </button>
            {submit && (
              <h3>
                Total Score Obtained: {count}/{questionList.length}
              </h3>
            )}
          </section>
          {!submit &&
            questionList?.map((list, index) => {
              return (
                <section key={index} className="full-width">
                  <h3>{list.question}</h3>
                  <OptionList options={list} setScore={setCount} />
                </section>
              );
            })}
        </main>
      </>
    );
  };