import { Field } from 'formik';
import React from 'react';
import style from '../../styles/components/Form.module.scss';

const FormRadioButtons = (props) => {
  const { label, name, options, stateHandler, ...rest } = props;
  return (
    <Field name={name} {...rest}>
      {({ field }) => {
        return options.map((option) => {
          return (
            <div className={style['checkout__formControls']} key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
                onClick={() => stateHandler(option.value)}
              />
              <label className="form__label" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          );
        });
      }}
    </Field>
  );
};

export default FormRadioButtons;
