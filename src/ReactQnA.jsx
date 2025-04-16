import React, { useEffect, useState } from "react";
import { Questions } from "./questions";
import { Maximize, Minimize, Minus, Plus } from "react-feather";
import Zoom from "./assets/zoom.jpg";
import { CategoryList } from "./utils/CategoryList";
import Tippy from "@tippyjs/react";
import { ZOOM_LEVEL } from "./constants";

export function ReactQnA() {
  const [displayAns, setDisplayAns] = useState([]);
  const [questions, setQuestions] = useState(Questions);
  const [categorySelected, setCategorySelected] = useState("All");
  const [zoomNumber, setZoomNumber] = useState(ZOOM_LEVEL[1]);

  const expandDropdown = (index) => {
    if (displayAns.includes(index)) {
      let data = displayAns.filter((item) => item !== index);
      setDisplayAns(data);
    } else {
      setDisplayAns((prev) => [...prev, index]);
    }
  };

  const collapseAll = () => {
    setDisplayAns([]);
  };

  const expandAll = () => {
    const allIndexes = Questions.map((_, index) => index);
    setDisplayAns(allIndexes);
  };

  const zoomGrid = () => {
    const currentIndex = ZOOM_LEVEL.indexOf(zoomNumber);
    const nextIndex = (currentIndex + 1) % ZOOM_LEVEL.length;
    setZoomNumber(ZOOM_LEVEL[nextIndex]);
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
      <CategoryList onClick={setCategorySelected} />
      <div className="full-flex-inline">
        <Tippy content="Expand All">
          <Maximize onClick={expandAll} className="react-qna-icons" />
        </Tippy>
        <Tippy content="Collapse All">
          <Minimize onClick={collapseAll} className="react-qna-icons" />
        </Tippy>
        <Tippy content="Zoom-in/Zoom-out">
          <img
            src={Zoom}
            className="react-qna-icons"
            alt="zoom"
            width="27"
            height="27"
            onClick={zoomGrid}
          />
        </Tippy>
      </div>
      <main
        className="quiz-section"
        style={{
          "grid-template-columns": `repeat(auto-fit, minmax(${zoomNumber}%, 1fr))`,
        }}
      >
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
