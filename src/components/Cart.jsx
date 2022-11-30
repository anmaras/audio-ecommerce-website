import React from 'react';
import style from '../styles/components/Cart.module.scss';
import { Amount } from './index';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { formatPrice, formatName } from '../utils/helpers';
import emptyCartUrl from '../assets/cart/emty_cart.svg';
import uuid from 'react-uuid';

const Cart = () => {
  const { isCartOpen, toggleCart, closeCart } = useProductsContext();
  const {
    cart,
    clearCart,
    toggleAmount,
    total_amount: total,
  } = useCartContext();

  if (isCartOpen) {
    return (
      <>
        <section className={style.cart}>
          <div className={style.backdrop} onClick={closeCart}></div>
          <article className={style['cart__wrapper']}>
            {cart.length ? (
              <>
                <section className={style['cart__header']}>
                  <p>cart ({cart.length})</p>
                  <button
                    type="button"
                    className={style['cart__button--clear']}
                    onClick={clearCart}
                  >
                    remove all
                  </button>
                </section>
                <ul className={style['cart__list']}>
                  {cart.map((item) => {
                    const { id, name, image, price, amount } = item;
                    return (
                      <li key={uuid()} className={style['cart__item']}>
                        <img src={image} alt={name} />
                        <div>
                          <p>{formatName(name)}</p>
                          <p>{formatPrice(price * amount)}</p>
                        </div>
                        <Amount
                          amount={amount}
                          increase={() => toggleAmount(id, 'inc')}
                          decrease={() => toggleAmount(id, 'dec')}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div className={style['cart__total']}>
                  <p>total</p>
                  <p>{formatPrice(total)}</p>
                </div>
                <Link
                  to={'/checkout'}
                  className="button-1"
                  onClick={toggleCart}
                >
                  checkout
                </Link>
              </>
            ) : (
              <>
                <div className={style['cart__empty']}>
                  <img
                    src={emptyCartUrl}
                    alt="empty cart image"
                    onClick={closeCart}
                  />
                </div>
                <button
                  className={style['cart__button--disable']}
                  disabled
                  type="button"
                >
                  no items in the cart
                </button>
              </>
            )}
          </article>
        </section>
      </>
    );
  }
};

export default Cart;
