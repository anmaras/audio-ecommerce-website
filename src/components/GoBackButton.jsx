import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/components/GoBackButton.module.scss';

const GoBackButton = ({ category }) => {
  return (
    <div className={style.button}>
      <Link to={category}>go back</Link>
    </div>
  );
};

export default GoBackButton;
