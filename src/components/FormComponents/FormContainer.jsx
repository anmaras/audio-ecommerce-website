import React, { useState } from 'react';
import Summary from '../Summary';
import logoUrl from '../../assets/checkout/icon-cash-on-delivery.svg';
import style from '../../styles/components/Form.module.scss';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormControl from './FormControl';
import CheckoutModal from '../CheckoutModal';

const FormContainer = () => {
  const [radioValue, setRadioValue] = useState('emoney');
  const [isValid, setIsValid] = useState(false);

  /* state to control the pin and number elements */
  const stateHandler = (values) => {
    setRadioValue(values);
  };

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    radioOption: 'emoney',
    e_number: '',
    e_pin: '',
  };

  const radioOptions = [
    { key: 'e-Money', value: 'emoney' },
    { key: 'Cash on Delivery', value: 'cash' },
  ];

  const validationSchema = yup.object({
    username: yup.string().required('Required'),
    email: yup.string().required('Required'),
    phone: yup.string().required('Required'),
    address: yup.string().required('Required'),
    zip: yup.string().required('Required'),
    city: yup.string().required('Required'),
    country: yup.string().required('Required'),
    e_number: yup.string().when('radioOption', {
      is: 'emoney',
      then: yup.string().required('Required'),
    }),
    e_pin: yup.string().when('radioOption', {
      is: 'emoney',
      then: yup.string().required('Required'),
    }),
  });

  const onSubmit = () => setIsValid(true);

  return (
    <>
      {isValid ? <CheckoutModal /> : null}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <section className={style.checkout}>
            <Form className={style['checkout__form']}>
              <fieldset className={style['checkout__fieldset--inputs']}>
                <h3 className={style['checkout__title']}>checkout</h3>
                <p
                  className={[style['checkout__subtitle'], 'subtitle'].join(
                    ' '
                  )}
                >
                  billing details
                </p>
                <div className={style['checkout__formControlsWrapper']}>
                  <FormControl
                    control="input"
                    type="text"
                    label="name"
                    name="username"
                    placeholder="Alexei Ward"
                  />
                  <FormControl
                    control="input"
                    type="email"
                    label="email address"
                    name="email"
                    placeholder="alexei@mail.com"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="phone number"
                    name="phone"
                    placeholder="+1 202-555-0136"
                  />
                </div>
                <p
                  className={[style['checkout__subtitle'], 'subtitle'].join(
                    ' '
                  )}
                >
                  shipping info
                </p>
                <div className={style['checkout__formControlsWrapper']}>
                  <FormControl
                    control="input"
                    type="text"
                    label="address"
                    name="address"
                    placeholder="1137 Williams Avenue"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="ZIP code"
                    name="zip"
                    placeholder="10001"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="city"
                    name="city"
                    placeholder="New York"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="country"
                    name="country"
                    placeholder="United States"
                  />
                </div>
                <p
                  className={[style['checkout__subtitle'], 'subtitle'].join(
                    ' '
                  )}
                >
                  payment details
                </p>
                <div className={style['checkout__formControlsWrapper']}>
                  <p className="form__payMethods">Payment method</p>
                  <FormControl
                    control="radio"
                    label="Radio topic"
                    name="radioOption"
                    options={radioOptions}
                    stateHandler={stateHandler}
                  />
                  {radioValue === 'emoney' ? (
                    <>
                      <FormControl
                        control="input"
                        type="text"
                        label="e-Money number"
                        name="e_number"
                        placeholder="238521993"
                      />
                      <FormControl
                        control="input"
                        type="text"
                        label="e-Money pin"
                        name="e_pin"
                        placeholder="6891"
                      />
                    </>
                  ) : null}
                </div>
                {radioValue === 'cash' ? (
                  <div className={style['checkout__cashNotification']}>
                    <img
                      className={style['checkout__logo']}
                      src={logoUrl}
                      alt="cash on delivery icon"
                    />
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                ) : null}
              </fieldset>
              <fieldset className={style['checkout__fieldset--summary']}>
                <Summary />
              </fieldset>
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};

export default FormContainer;
