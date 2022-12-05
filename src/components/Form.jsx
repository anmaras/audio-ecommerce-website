import React, { useState, useEffect, useRef } from 'react';
import { inputs } from '../utils/constants';
import { FormInputs, Summary } from './index';
import logoUrl from '../assets/checkout/icon-cash-on-delivery.svg';
import style from '../styles/components/Form.module.scss';
import useValidator from '../hooks/useValidator';
import CheckoutModal from './CheckoutModal';

const initialState = {
  username: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  country: '',
  e_number: '',
  e_pin: '',
  payment: '',
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [error] = useValidator(values);
  const [payment, setPayment] = useState('emoney');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value, payment });
  };

  const radioOnChange = (e) => {
    const { value } = e.target;
    setPayment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(error);
    setIsSubmit(true);
  };

  useEffect(() => {
    setValues({ ...values, payment: payment });
  }, [payment]);

  return (
    <>
      {isSubmit && Object.keys(formErrors).length === 0 ? (
        <CheckoutModal />
      ) : null}
      <section className={style.checkout}>
        <form className={style['checkout__form']} onSubmit={handleSubmit}>
          <fieldset className={style['checkout__fieldset--inputs']}>
            <h3 className={style['checkout__title']}>checkout</h3>

            {/* billing */}
            <p className={[style['checkout__subtitle'], 'subtitle'].join(' ')}>
              billing details
            </p>
            <div className={style['checkout__formControlsWrapper']}>
              <div className={style['checkout__formControls']}>
                <label
                  htmlFor="name"
                  className={
                    formErrors.username
                      ? [style['checkout__label--error'], 'form__label'].join(
                          ' '
                        )
                      : 'form__label'
                  }
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="username"
                  className={
                    formErrors.username
                      ? [style['checkout__input--error'], 'form__input'].join(
                          ' '
                        )
                      : 'form__input'
                  }
                  placeholder="Username"
                  value={values.username}
                  onChange={onChange}
                />
                <p className="form__warning">{formErrors.username}</p>
              </div>
              <div className={style['checkout__formControls']}>
                <label
                  htmlFor="email"
                  className={
                    formErrors.email
                      ? [style['checkout__label--error'], 'form__label'].join(
                          ' '
                        )
                      : 'form__label'
                  }
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={
                    formErrors.email
                      ? [style['checkout__input--error'], 'form__input'].join(
                          ' '
                        )
                      : 'form__input'
                  }
                  placeholder="Email address"
                  value={values.email}
                  onChange={onChange}
                />
                <p className="form__warning">{formErrors.email}</p>
              </div>
              <div className={style['checkout__formControls']}>
                <label
                  htmlFor="phone"
                  className={
                    formErrors.phone
                      ? [style['checkout__label--error'], 'form__label'].join(
                          ' '
                        )
                      : 'form__label'
                  }
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className={
                    formErrors.phone
                      ? [style['checkout__input--error'], 'form__input'].join(
                          ' '
                        )
                      : 'form__input'
                  }
                  placeholder="202-555-0136"
                  value={values.phone}
                  onChange={onChange}
                />
                <p className="form__warning">{formErrors.phone}</p>
              </div>
            </div>

            {/* shipping  */}
            <p className={[style['checkout__subtitle'], 'subtitle'].join(' ')}>
              shipping info
            </p>
            <div className={style['checkout__formControlsWrapper']}>
              {/* address */}
              <div className={style['checkout__formControls']}>
                <label
                  htmlFor="address"
                  className={
                    formErrors.address
                      ? [style['checkout__label--error'], 'form__label'].join(
                          ' '
                        )
                      : 'form__label'
                  }
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className={
                    formErrors.address
                      ? [style['checkout__input--error'], 'form__input'].join(
                          ' '
                        )
                      : 'form__input'
                  }
                  placeholder="1137 Williams Avenue"
                  value={values.address}
                  onChange={onChange}
                />
                <p className="form__warning">{formErrors.address}</p>
              </div>

              {/* zip */}
              <div className={style['checkout__formControls']}>
                <label
                  htmlFor="zip"
                  className={
                    formErrors.zip
                      ? [style['checkout__label--error'], 'form__label'].join(
                          ' '
                        )
                      : 'form__label'
                  }
                >
                  ZIP Code
                </label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  className={
                    formErrors.zip
                      ? [style['checkout__input--error'], 'form__input'].join(
                          ' '
                        )
                      : 'form__input'
                  }
                  placeholder="10001"
                  value={values.zip}
                  onChange={onChange}
                />
                <p className="form__warning">{formErrors.zip}</p>
              </div>
              {/* City */}
              <div className={style['checkout__formControls']}>
                <label
                  htmlFor="city"
                  className={
                    formErrors.city
                      ? [style['checkout__label--error'], 'form__label'].join(
                          ' '
                        )
                      : 'form__label'
                  }
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  className={
                    formErrors.city
                      ? [style['checkout__input--error'], 'form__input'].join(
                          ' '
                        )
                      : 'form__input'
                  }
                  placeholder="New York"
                  value={values.city}
                  onChange={onChange}
                />
                <p className="form__warning">{formErrors.city}</p>
              </div>
              {/* Country */}
              <div className={style['checkout__formControls']}>
                <label
                  htmlFor="country"
                  className={
                    formErrors.country
                      ? [style['checkout__label--error'], 'form__label'].join(
                          ' '
                        )
                      : 'form__label'
                  }
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  className={
                    formErrors.country
                      ? [style['checkout__input--error'], 'form__input'].join(
                          ' '
                        )
                      : 'form__input'
                  }
                  placeholder="United States"
                  value={values.country}
                  onChange={onChange}
                />
                <p className="form__warning">{formErrors.country}</p>
              </div>
            </div>

            {/* payment details */}
            <p className={[style['checkout__subtitle'], 'subtitle'].join(' ')}>
              payment details
            </p>

            <div className={style['checkout__formControlsWrapper']}>
              <p className="form__payMethods">Payment method</p>

              {/* emoney radio */}
              <div className={style['checkout__formControls']}>
                <input
                  id="e-MoneyRadio"
                  type="radio"
                  name="radio"
                  className="form__label"
                  value="emoney"
                  checked={payment === 'emoney'}
                  onChange={radioOnChange}
                />
                <label htmlFor="e-MoneyRadio" className="form__label">
                  e-Money
                </label>
              </div>

              {/* cash radio */}
              <div className={style['checkout__formControls']}>
                <input
                  id="cashRadio"
                  type="radio"
                  name="radio"
                  className="form__label"
                  value="cash"
                  checked={payment === 'cash'}
                  onChange={radioOnChange}
                />
                <label htmlFor="cashRadio" className="form__label">
                  Cash on Delivery
                </label>
              </div>

              {payment === 'emoney' ? (
                <>
                  {' '}
                  <div className={style['checkout__formControls']}>
                    <label
                      htmlFor="e_number"
                      className={
                        formErrors.e_number
                          ? [
                              style['checkout__label--error'],
                              'form__label',
                            ].join(' ')
                          : 'form__label'
                      }
                    >
                      e-Money Number
                    </label>
                    <input
                      id="e_number"
                      type="text"
                      name="e_number"
                      className={
                        formErrors.e_number
                          ? [
                              style['checkout__input--error'],
                              'form__input',
                            ].join(' ')
                          : 'form__input'
                      }
                      placeholder="238521993"
                      value={values.e_number}
                      onChange={onChange}
                    />
                    <p className="form__warning">{formErrors.e_number}</p>
                  </div>
                  <div className={style['checkout__formControls']}>
                    <label
                      htmlFor="e_pin"
                      className={
                        formErrors.e_pin
                          ? [
                              style['checkout__label--error'],
                              'form__label',
                            ].join(' ')
                          : 'form__label'
                      }
                    >
                      e-Money PIN
                    </label>
                    <input
                      id="e_pin"
                      type="text"
                      name="e_pin"
                      className={
                        formErrors.e_pin
                          ? [
                              style['checkout__input--error'],
                              'form__input',
                            ].join(' ')
                          : 'form__input'
                      }
                      placeholder="6891"
                      value={values.e_pin}
                      onChange={onChange}
                    />
                    <p className="form__warning">{formErrors.e_pin}</p>
                  </div>{' '}
                </>
              ) : null}
            </div>
            {payment === 'cash' ? (
              <div className={style['checkout__cashNotification']}>
                <img
                  className={style['checkout__logo']}
                  src={logoUrl}
                  alt="cash on delivery icon"
                />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            ) : null}
          </fieldset>
          <fieldset className={style['checkout__fieldset--summary']}>
            <Summary />
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Form;
