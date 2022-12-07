import React from 'react';
import FormInput from './FormInput';
import FormRadioButtons from './FormRadioButtons';

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <FormInput {...rest} />;
    case 'radio':
      return <FormRadioButtons {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
