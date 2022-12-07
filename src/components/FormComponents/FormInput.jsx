import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormTextError from './FormTextError';
import style from '../../styles/components/Form.module.scss';

function FormInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div className={style['checkout__formControls']}>
      <label htmlFor={name} className="form__label">
        {label}{' '}
      </label>
      <Field id={name} name={name} {...rest}>
        {({ field, meta: { touched, error } }) => {
          return (
            <input
              id={name}
              {...field}
              {...rest}
              className={
                touched && error
                  ? [style['checkout__input--error'], 'form__input'].join(' ')
                  : 'form__input'
              }
            />
          );
        }}
      </Field>
      <ErrorMessage component={FormTextError} name={name} />
    </div>
  );
}

export default FormInput;
