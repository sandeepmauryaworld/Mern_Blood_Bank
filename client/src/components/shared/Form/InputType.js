import React from "react";

const InputType = ({
  value,
  onChange,
  name,
  lableText,

  inputType,
  lableFor,
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={lableFor} className="form-label">
          {lableText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
