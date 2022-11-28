import React from 'react';
import { inputs } from '../utils/constants';
import { FormInputs, Summary } from './index';
import uuid from 'react-uuid';
import logoUrl from '../assets/checkout/icon-cash-on-delivery.svg';
import style from '../styles/components/Form.module.scss';

const Form = () => {
  return (
    <section className={style.checkout}>
      <h3 className={style['checkout__title']}>checkout</h3>
      <form className={style['checkout__form']}>
        {inputs.map((input) => {
          const { id, categoryInput, category } = input;
          return (
            <React.Fragment key={id}>
              <p
                className={[style['checkout__subtitle'], 'subtitle'].join(' ')}
              >
                {category}
              </p>
              <div className={style['checkout__formControlsWrapper']}>
                {categoryInput.map((input) => {
                  return (
                    <div
                      key={uuid()}
                      className={style['checkout__formControls']}
                      tabIndex={input.type === 'radio' ? 0 : ''}
                    >
                      <FormInputs {...input} />
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
        <div className={style['checkout__cashNotification']}>
          <img src={logoUrl} alt="cash on delivery icon" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      </form>
    </section>
  );
};

export default Form;
