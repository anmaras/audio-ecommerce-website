import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/components/GoBackButton.module.scss';

const GoBackButton = () => {
  return (
    <div className={style.button}>
      <Link onClick={() => history.back()}>go back</Link>
    </div>
  );
};

export default GoBackButton;
