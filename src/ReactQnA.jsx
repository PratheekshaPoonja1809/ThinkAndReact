import React, { useEffect, useState } from "react";
import { Questions } from "./questions";
import { Minus, Plus } from "react-feather";
import { CategoryList } from "./utils/CategoryList";

export function ReactQnA() {
  const [displayAns, setDisplayAns] = useState([]);
  const [questions, setQuestions] = useState(Questions);
  const [categorySelected, setCategorySelected] = useState("All");

  const expandDropdown = (index) => {
    if (displayAns.includes(index)) {
      let data = displayAns.filter((item) => item !== index);
      setDisplayAns(data);
    } else {
      setDisplayAns((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    setDisplayAns([]);
    let filteredData =
      categorySelected === "All"
        ? Questions
        : [...Questions].filter(
            (question) => question.category === categorySelected
          );
    setQuestions(filteredData);
  }, [categorySelected]);

  return (
    <>
      <CategoryList
        onClick={setCategorySelected}
        categoryValue={setCategorySelected}
      />
      <main className="quiz-section">
        {questions?.map((item, index) => (
          <section className="react-qna-section" key={index}>
            <div key={index} className="react-qna-sub-sec">
              <h3>{item.question}</h3>
              <span>
                {displayAns?.includes(index) ? (
                  <Minus onClick={() => expandDropdown(index)} />
                ) : (
                  <Plus onClick={() => expandDropdown(index)} />
                )}
              </span>
            </div>
            {displayAns?.includes(index) && (
              <p className="qna-answers">
                <em>Answer: {item.answer}</em>
              </p>
            )}
          </section>
        ))}
      </main>
    </>
  );
}
