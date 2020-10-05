import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import s from "./input.module.scss";

const Input = (props) => {
  const { title, getValue, inputBg, labelColor } = props;
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState(title);

  const inputHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const focusHandler = useCallback(() => {
    placeholder ? setPlaceholder("") : setPlaceholder(title);
  }, [placeholder, title]);

  useEffect(() => {
    getValue(value);
  }, [getValue, value]);

  const inputStyle = { backgroundColor: inputBg }
  const labelStyle = { color: labelColor }

  return (
    <div className={s.container}>
      <input
        id="input"
        placeholder={placeholder}
        onFocus={focusHandler}
        onBlur={focusHandler}
        value={value}
        onChange={(e) => inputHandler(e)}
        style={inputStyle}
      />
      <label
        htmlFor="input"
        className={value === "" ? s.label_hide : s.label_show}
        style={labelStyle}
      >
        {title}
      </label>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  getValue: PropTypes.func,
};

export default Input;
