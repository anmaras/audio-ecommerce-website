import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormTextError from './FormTextError';
import style from '../../styles/components/Form.module.scss';

function FormInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div className={style['checkout__formControls']}>
      <Field id={name} name={name} {...rest}>
        {({ field, meta: { touched, error } }) => {
          return (
            <>
              <label
                htmlFor={name}
                className={
                  touched && error ? 'form__label--error' : 'form__label'
                }
              >
                {label}
              </label>
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
            </>
          );
        }}
      </Field>
      <ErrorMessage component={FormTextError} name={name} />
    </div>
  );
}

export default FormInput;
