import React from "react";
import PropTypes from "prop-types";

function TextInputGroup({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error
}) {
  const errorClassname = " is-invalid";
  let classname = "form-control form-control-lg";
  if (error) {
    classname += errorClassname;
  }
  return (
    <div className="form-group invalid">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classname}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
