import React from 'react';

const FormTextError = (props) => {
  return <p className="form__warning">{props.children}</p>;
};

export default FormTextError;
