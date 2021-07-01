import React from "react";

const RenderInput = ({
  // props passed to render input
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div className={`field ${touched && error ? "error" : ""}`}>
      <label>{label}</label>
      <input placeholder={label} type={type} {...input} autoComplete="off" />
      {touched &&
        ((error && (
          <div className="ui error message">
            <div className="header">{error}</div>
          </div>
        )) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

export default RenderInput;
