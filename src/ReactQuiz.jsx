import React, { useEffect, useState } from "react";
import { Questions } from "./questions";
import { OptionList } from "./OptionList";
import { CategoryList } from "./utils/CategoryList";
import Button from "./utils/Button";

export const ReactQuiz = () => {
  const [categorySelected, setCategorySelected] = useState("All");
  const [resetSelection, setResetSelection] = useState(false);
  const [questions, setQuestions] = useState(Questions);

  useEffect(() => {
    let filteredData =
      categorySelected === "All"
        ? Questions
        : [...Questions].filter(
            (question) => question.category === categorySelected
          );
    setQuestions(filteredData);
    setResetSelection(!resetSelection);
  }, [categorySelected]);

  return (
    <>
      <main className="quiz-cntr">
        <CategoryList
          onClick={setCategorySelected}
          categoryValue={setCategorySelected}
        />
        <Button text="Reset" onClick={() => setResetSelection(!resetSelection)} />
        {questions?.map((list, index) => {
          return (
            <section key={index} className="full-width">
              <h3>{list.question}</h3>
              <OptionList
                options={list}
                resetSelection={resetSelection}
                multiSelection={true}
              />
            </section>
          );
        })}
      </main>
    </>
  );
};