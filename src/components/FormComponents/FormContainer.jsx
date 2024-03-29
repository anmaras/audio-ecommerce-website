import React, { useState } from 'react';
import Summary from '../Summary';
import logoUrl from '../../assets/checkout/icon-cash-on-delivery.svg';
import style from '../../styles/components/Form.module.scss';
import { Formik, Form } from 'formik';
import FormControl from './FormControl';
import CheckoutModal from '../CheckoutModal';
import { validationSchema } from '../../utils/validationSchema';
import { motion } from 'framer-motion';

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

  const onSubmit = () => setIsValid(true);

  return (
    <>
      {isValid ? <CheckoutModal /> : null}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
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
                    label="Name"
                    name="username"
                    placeholder="Alexei Ward"
                  />
                  <FormControl
                    control="input"
                    type="email"
                    label="Email Address"
                    name="email"
                    placeholder="alexei@mail.com"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="Phone Number"
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
                    label="Address"
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
                    label="City"
                    name="city"
                    placeholder="New York"
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="Country"
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
                      <motion.div
                        className={style['checkout__emoneyInfo']}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
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
                      </motion.div>
                    </>
                  ) : (
                    <motion.div
                      className={style['checkout__cashNotification']}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <img
                        className={style['checkout__logo']}
                        src={logoUrl}
                        alt="cash on delivery icon"
                      />
                      <p>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </motion.div>
                  )}
                </div>
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
