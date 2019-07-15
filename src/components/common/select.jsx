import React from "react";

const Select = ({ name, label, value, error, onChange, options }) => {
  const classes = error ? "custom-select is-invalid" : "custom-select";

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className={classes}
      >
        <option defaultValue disabled>
          Open this select menu
        </option>
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Select;
