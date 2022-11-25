import React from 'react';

const FormInputs = ({
  id,
  name,
  type,
  placeholder,
  errorMessage,
  require,
  label,
}) => {
  if (type === 'text' || type === 'email' || type === 'tel') {
    return (
      <>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        {errorMessage ? <p className="form__warning">{errorMessage}</p> : null}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="form__input"
        />
      </>
    );
  } else {
    return (
      <>
        <input type={type} name={name} id={label} placeholder={placeholder} />
        <label htmlFor={label} className="form__label">
          {label}
        </label>
      </>
    );
  }
};

export default FormInputs;
