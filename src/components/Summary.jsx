import React from 'react';
import style from '../styles/components/Summary.module.scss';
import img1 from '../assets/cart/image-xx99-mark-two-headphones.jpg';
import { Amount } from './index';
import { Link } from 'react-router-dom';

const Summary = () => {
  return (
    <section className={style.summary}>
      <article className={style['summary__wrapper']}>
        <section className={style['summary__header']}>
          <p>summary</p>
        </section>
        <ul className={style['summary__list']}>
          <li className={style['summary__item']}>
            <img className={style['summary__image']} src={img1} alt="" />
            <div className={style['summary__product']}>
              <p>xx99 mk ii</p>
              <p>$ 2,999</p>
            </div>
            <div className={style['summary__quantity']}>
              <p>x1</p>
            </div>
          </li>
        </ul>
        <div className={style['summary__totals']}>
          <div>
            <p>total</p>
            <p>$ 5,323</p>
          </div>
          <div>
            <p>shipping</p>
            <p>$ 50</p>
          </div>
          <div>
            <p>vat (included)</p>
            <p>$ 100</p>
          </div>
          <div>
            <p>grand total</p>
            <p>$ 5,446</p>
          </div>
        </div>
        <Link to={'/checkout'} className="button-1">
          continue & pay
        </Link>
      </article>
    </section>
  );
};

export default Summary;
