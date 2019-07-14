import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  const classes = error ? "form-control is-invalid" : "form-control";

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className={classes}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
