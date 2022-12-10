import React, { useState, useEffect } from 'react';
import style from '../styles/components/CheckoutModal.module.scss';
import imgUrl from '/assets/checkout/icon-order-confirmation.svg';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { formatName, formatPrice } from '../utils/helpers';
import { useCartContext } from '../context/cart_context';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import {
  checkOutSectionVariant,
  checkOutModalVariant,
} from '../AnimationVariants/variants';

const CheckoutModal = () => {
  const {
    cart,
    shipping_fee: shipping,
    total_amount: total,
    clearCart,
  } = useCartContext();
  const [state, setState] = useState(false);
  const [tempCart, setTempCart] = useState([cart[0]]);

  const showListHandler = () => {
    setState(!state);
  };
  /* state to control the size of the list the user bought   */
  useEffect(() => {
    if (state) {
      setTempCart(cart);
    } else {
      setTempCart([cart[0]]);
    }
  }, [state]);

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        className={style.modal}
        variants={checkOutSectionVariant}
        initial="initial"
        animate="animate"
      >
        <m.section
          className={style['modal__section']}
          variants={checkOutModalVariant}
        >
          <img src={imgUrl} alt="order confirmation icon" />
          <div>
            <h3>thank you</h3>
            <h3>for your order</h3>
          </div>
          <p className={style['modal__subtitle']}>
            You will receive an email confirmation shortly.
          </p>
          <div className={style['modal__wrapper']}>
            <div className={style['modal__listWrapper']}>
              <ul className={style['modal__list']}>
                {tempCart.map((item) => {
                  const { amount, image, name, price } = item;
                  return (
                    <li key={uuid()} className={style['modal__item']}>
                      <img
                        className={style['modal__image']}
                        src={image}
                        alt={name}
                      />
                      <div className={style['modal__product']}>
                        <p>{formatName(name)}</p>
                        <p>{formatPrice(price)}</p>
                      </div>
                      <div className={style['modal__quantity']}>
                        <p>x {amount}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {cart.length > 1 ? (
                <button
                  className={style['modal__listButton']}
                  onClick={showListHandler}
                >
                  {state ? 'show less' : `and ${cart.length - 1} other item(s)`}
                </button>
              ) : null}
            </div>
            <dir className={style['modal__totals']}>
              <div>
                <p>grand total</p>
                <p>{formatPrice(total + shipping)}</p>
              </div>
            </dir>
          </div>
          <Link className="button-1" to="/" onClick={clearCart}>
            back to home
          </Link>
        </m.section>
      </m.article>
    </LazyMotion>
  );
};

export default CheckoutModal;
