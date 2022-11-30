import React from 'react';
import style from '../styles/components/Cart.module.scss';
import img1 from '../assets/cart/image-xx99-mark-two-headphones.jpg';
import { Amount } from './index';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { formatPrice, formatName } from '../utils/helpers';
import uuid from 'react-uuid';

const Cart = () => {
  const { isCartOpen, toggleCart, closeCart } = useProductsContext();
  const { cart, clearCart, toggleAmount } = useCartContext();

  if (isCartOpen) {
    return (
      <>
        <section className={style.cart}>
          <div className={style.backdrop} onClick={closeCart}></div>
          <article className={style['cart__wrapper']}>
            <section className={style['cart__header']}>
              <p>cart ({cart.length})</p>
              <button type="button" onClick={clearCart}>
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
                      <p>{formatPrice(price)}</p>
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
              <p>$ 5,323</p>
            </div>
            <Link to={'/checkout'} className="button-1" onClick={toggleCart}>
              checkout
            </Link>
          </article>
        </section>
      </>
    );
  }
};

export default Cart;
