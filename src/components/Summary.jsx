import React from 'react';
import style from '../styles/components/Summary.module.scss';
import { useCartContext } from '../context/cart_context';
import { formatName, formatPrice } from '../utils/helpers';
import uuid from 'react-uuid';
import { getImageUrl } from '../utils/helpers';

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
            const { amount, image, name, price } = item;
            return (
              <li key={uuid()} className={style['summary__item']}>
                <img
                  className={style['summary__image']}
                  src={getImageUrl(image)}
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
        <button
          type="submit"
          className={cart.length ? 'button-1' : 'button-inactive'}
          disabled={cart.length ? false : true}
        >
          continue & pay
        </button>
      </article>
    </section>
  );
};

export default Summary;
