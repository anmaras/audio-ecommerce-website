import React from 'react';
import style from '../styles/components/Amount.module.scss';

const Amount = () => {
  return (
    <div className={style.amount}>
      <button type="button" className={style['amount__decrease']}>
        -
      </button>
      <p className="amount__number">1</p>
      <button type="button" className={style['amount__increase']}>
        +
      </button>
    </div>
  );
};

export default Amount;
