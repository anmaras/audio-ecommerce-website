import React from 'react';
import style from '../styles/components/Amount.module.scss';

const Amount = ({ amount, increase, decrease }) => {
  return (
    <div className={style.amount}>
      <button
        type="button"
        className={style['amount__decrease']}
        onClick={decrease}
      >
        -
      </button>
      <p className="amount__number">{amount}</p>
      <button
        type="button"
        className={style['amount__increase']}
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};

export default Amount;
