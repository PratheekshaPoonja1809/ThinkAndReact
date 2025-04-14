import React, { useEffect, useState } from "react";
import { Questions } from "../questions";

export function CategoryList({ onClick }) {
  const [categoryList, setCategoryList] = useState([]);
  const [isActive, setActive] = useState("All");

  const onSelectCategory = (type) => {
    setActive(type);
    onClick(type);
  };

  useEffect(() => {
    const categories = new Set(["All"]);
    Questions.forEach((item) => categories.add(item.category));
    setCategoryList(Array.from(categories));
  }, []);

  return (
    <section className="category-container full-width">
      {categoryList.map((category, index) => (
        <pre
          key={index}
          className={`category-list ${isActive === category ? "highlight-category" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </pre>
      ))}
    </section>
  );
}
