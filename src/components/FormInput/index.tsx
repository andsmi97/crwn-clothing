import React from "react";

import "./styles.scss";
import { IFormInput } from "../../types";

export default ({ onChange, label, ...restProps }: IFormInput): JSX.Element => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={event => onChange && onChange(event.target.value)}
        {...restProps}
      />
      {label ? (
        <label
          htmlFor={label}
          className={`${
            restProps.value ? (restProps.value.length ? "shrink" : "") : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
