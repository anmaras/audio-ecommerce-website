import React from 'react';
import style from '../styles/components/Cart.module.scss';
import img1 from '../assets/cart/image-xx99-mark-two-headphones.jpg';
import { Amount } from './index';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';

const Cart = () => {
  const { isCartOpen, toggleCart, closeCart } = useProductsContext();

  if (isCartOpen) {
    return (
      <>
        <section className={style.cart}>
          <div className={style.backdrop} onClick={closeCart}></div>
          <article className={style['cart__wrapper']}>
            <section className={style['cart__header']}>
              <p>cart (3)</p>
              <button type="button">remove all</button>
            </section>
            <ul className={style['cart__list']}>
              <li className={style['cart__item']}>
                <img src={img1} alt="" />
                <div>
                  <p>xx99 mk ii</p>
                  <p>$ 2,999</p>
                </div>
                <Amount />
              </li>
              <li className={style['cart__item']}>
                <img src={img1} alt="" />
                <div>
                  <p>xx99 mk ii</p>
                  <p>$ 2,999</p>
                </div>
                <Amount />
              </li>
              <li className={style['cart__item']}>
                <img src={img1} alt="" />
                <div>
                  <p>xx99 mk ii</p>
                  <p>$ 2,999</p>
                </div>
                <Amount />
              </li>
              <li className={style['cart__item']}>
                <img src={img1} alt="" />
                <div>
                  <p>xx99 mk ii</p>
                  <p>$ 2,999</p>
                </div>
                <Amount />
              </li>
              <li className={style['cart__item']}>
                <img src={img1} alt="" />
                <div>
                  <p>xx99 mk ii</p>
                  <p>$ 2,999</p>
                </div>
                <Amount />
              </li>
              <li className={style['cart__item']}>
                <img src={img1} alt="" />
                <div>
                  <p>xx99 mk ii</p>
                  <p>$ 2,999</p>
                </div>
                <Amount />
              </li>
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
