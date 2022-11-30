import React from 'react';
import style from '../styles/components/Summary.module.scss';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { formatName, formatPrice } from '../utils/helpers';
import uuid from 'react-uuid';

const Summary = () => {
  const {
    cart,
    shipping_fee: shipping,
    total_vat: vat,
    total_amount: total,
  } = useCartContext();
  return (
    <section className={style.summary}>
      <article className={style['summary__wrapper']}>
        <section className={style['summary__header']}>
          <p>summary</p>
        </section>
        <ul className={style['summary__list']}>
          {cart.map((item) => {
            const { amount, image, name, vat, total_price, price } = item;
            return (
              <li key={uuid()} className={style['summary__item']}>
                <img
                  className={style['summary__image']}
                  src={image}
                  alt={name}
                />
                <div className={style['summary__product']}>
                  <p>{formatName(name)}</p>
                  <p>{formatPrice(price)}</p>
                </div>
                <div className={style['summary__quantity']}>
                  <p>x {amount}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={style['summary__totals']}>
          <div>
            <p>total</p>
            <p>{formatPrice(total)}</p>
          </div>
          <div>
            <p>shipping</p>
            <p>{formatPrice(shipping)}</p>
          </div>
          <div>
            <p>vat (included)</p>
            <p>{formatPrice(vat)}</p>
          </div>
          <div>
            <p>grand total</p>
            <p>{formatPrice(total + shipping)}</p>
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
