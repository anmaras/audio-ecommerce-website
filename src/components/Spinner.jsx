import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import style from '../styles/components/Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={style['spinner']}>
      <FadeLoader color="#da6f41" />
    </div>
  );
};

export default Spinner;
