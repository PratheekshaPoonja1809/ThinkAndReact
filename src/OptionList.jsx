import React, { Fragment, useState } from "react";
import Button from "./utils/Button";

export const OptionList = React.memo(({ options, setScore }) => {
  const [disabledButtons, setDisabledButtons] = useState([]);

  const optionSelected = (value, index, options) => {
    setDisabledButtons((prevState) => [...prevState, index]);
    if (options.answer === value) {
      setScore((val) => val + 1);
    } else {
      setScore((val) => val);
    }
  };

  return (
    <div className="btn-cntr">
      {options.options?.map((item, index) => {
        return (
          <Fragment key={index}>
            <Button
              className={
                disabledButtons?.includes(index) && options.answer === item
                  ? "right-selection"
                  : ""
              }
              onClick={() => optionSelected(item, index, options)}
              disabled={disabledButtons?.includes(index)}
              text={item}
            />
          </Fragment>
        );
      })}
    </div>
  );
});
