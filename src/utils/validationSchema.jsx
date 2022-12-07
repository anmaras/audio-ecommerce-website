import * as yup from 'yup';

const phoneReg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const numberOnly = /^[0-9]*$/;

export const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(3, 'Must be more than 3 letters')
    .max(50, 'Must be less than 50 letters')
    .required('Required'),
  email: yup.string().email('Not a valid email format').required('Required'),

  phone: yup
    .string()
    .matches(phoneReg, 'Wrong phone format')
    .min(10, 'Too sort')
    .required('Required'),
  address: yup.string().trim().required('Required'),
  zip: yup
    .string()
    .matches(numberOnly, 'Must be numbers only')
    .min(5, 'Must be 5 digits')
    .max(5, 'Must be 5 digits')
    .required('Required'),
  city: yup.string().trim().required('Required'),
  country: yup.string().trim().required('Required'),
  e_number: yup.string().when('radioOption', {
    is: 'emoney',
    then: yup
      .string()
      .matches(numberOnly, 'Must be numbers only')
      .min(9, 'Must be 9 digits')
      .max(9, 'Must be 9 digits')
      .required('Required'),
  }),
  e_pin: yup.string().when('radioOption', {
    is: 'emoney',
    then: yup
      .string()
      .matches(numberOnly, 'Must be numbers only')
      .min(4, 'Must be 4 digits')
      .max(4, 'Must be 4 digits')
      .required('Required'),
  }),
});
