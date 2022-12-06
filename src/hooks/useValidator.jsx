import React, { useState } from 'react';
import { useEffect } from 'react';

const useValidator = (value) => {
  const [error, setError] = useState({});

  useEffect(() => {
    const error = {};
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneReg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const numberOnly = /^[0-9]*$/;
    const lettersOnly = /^[a-zA-Z ]*$/;

    if (!value.username) {
      error.username = 'Username Required!';
    } else if (value.username.length < 3) {
      error.username = 'Username too sort!';
    }

    if (!value.email) {
      error.email = 'Email Required';
    } else if (!emailReg.test(value.email)) {
      error.email = 'Not valid email format';
    }

    if (!value.phone) {
      error.phone = 'Phone required';
    } else if (!phoneReg.test(value.phone)) {
      error.phone = 'Must be number';
    }

    if (!value.zip) {
      error.zip = 'Zip number required!';
    } else if (!numberOnly.test(value.zip)) {
      error.zip = 'Must be a number';
    }

    if (!value.address) {
      error.address = 'Address Required!';
    }

    if (!value.city) {
      error.city = 'City required!';
    } else if (!lettersOnly.test(value.city)) {
      error.city = 'Not a valid city name';
    }

    if (!value.country) {
      error.country = 'Country required!';
    } else if (!lettersOnly.test(value.country)) {
      error.country = 'Not a valid country name';
    }

    if (!value.e_number && value.payment !== 'cash') {
      error.e_number = 'e-Money number required!';
    } else if (!numberOnly.test(value.e_number)) {
      error.e_number = 'Must be a number';
    }
    if (!value.e_pin && value.payment !== 'cash') {
      error.e_pin = 'e-Money pin number required!';
    } else if (!numberOnly.test(value.e_pin)) {
      error.e_pin = 'Must be a number';
    }

    if (value.payment === 'cash') {
      delete error.e_number;
    }

    if (value.payment === 'cash') {
      delete error.e_pin;
    }

    setError(error);
  }, [value]);

  return [error];
};

export default useValidator;
