import React, { Fragment, useEffect, useState } from "react";
import Button from "./utils/Button";

export const OptionList = React.memo(
  ({ options, setScore, resetSelection, multiSelection = "false" }) => {
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [clickedIndex, setClickedIndex] = useState(null);

    const optionSelected = (value, index, options) => {
      setClickedIndex(index);
      multiSelection
        ? setDisabledButtons((prevState) => [...prevState, index])
        : setDisabledButtons(["All"]);
      if (setScore) {
        options.answer === value
          ? setScore((val) => val + 1)
          : setScore((val) => val);
      }
    };

    useEffect(() => {
      setDisabledButtons([]);
      setClickedIndex(null);
    }, [options, resetSelection]);

    return (
      <div className="btn-cntr">
        {options.options?.map((item, index) => {
          const isClicked = index === clickedIndex;
          const isDisabled =
            disabledButtons[0] === "All"
              ? true
              : disabledButtons?.includes(index);
          return (
            <Fragment key={index}>
              <Button
                className={
                  isDisabled && options.answer === item ? "right-selection" : ""
                }
                onClick={() => optionSelected(item, index, options)}
                disabled={isDisabled}
                text={item}
                style={{
                  border:
                    !multiSelection && isClicked && options.answer !== item
                      ? "2px solid red"
                      : "",
                }}
              />
            </Fragment>
          );
        })}
      </div>
    );
  }
);
