import React, { useEffect, useState } from "react";
import { Questions } from "./questions";
import { Minus, Plus } from "react-feather";

export function ReactQnA() {
  const [categoryList, setCategoryList] = useState([]);
  const [displayAns, setDisplayAns] = useState([]);

  const expandDropdown = (index) => {
    if (displayAns.includes(index)) {
      let data = displayAns.filter((item) => item !== index);
      setDisplayAns(data);
    } else {
      setDisplayAns((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    const defaultVal = ['All'];
    [...Questions].forEach((item) => {
      defaultVal.includes(item.category) ? '' : defaultVal.push(item.category);
    });
    setCategoryList(defaultVal);
  }, []);

  return (
      <main className="quiz-section">
        <section>
          {categoryList.map((category,index)=> <pre key={index} className="category-list">{category}</pre>)}
        </section>
        {Questions.map((item, index) => (
          <div className="react-qna-section">
            <section key={index} className="react-qna-sub-sec">
              <h3>{item.question}</h3>
              <span>
                {displayAns?.includes(index) ? (
                  <Minus onClick={() => expandDropdown(index)} />
                ) : (
                  <Plus onClick={() => expandDropdown(index)} />
                )}
              </span>
            </section>
            {displayAns?.includes(index) && <p className="qna-answers"><em>Answer: {item.answer}</em></p>}
          </div>
        ))}
      </main>
  );
}
