import React from 'react';
import style from '../styles/components/Cart.module.scss';
import { Amount } from './index';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { formatPrice, formatName } from '../utils/helpers';
import { motion, AnimatePresence } from 'framer-motion';
import {
  navBarMenuBackDrop,
  navbarDropMenuVariant,
} from '../AnimationVariants/variants';

const Cart = () => {
  const { isCartOpen, toggleCart, closeCart } = useProductsContext();
  const {
    cart,
    clearCart,
    toggleAmount,
    total_amount: total,
  } = useCartContext();

  return (
    <AnimatePresence key="cart">
      {isCartOpen ? (
        <section className={style.cart}>
          <motion.div
            className={style.backdrop}
            onClick={closeCart}
            variants={navBarMenuBackDrop}
            initial="initial"
            animate="animate"
            exit="exit"
          ></motion.div>
          <motion.article
            className={style['cart__wrapper']}
            variants={navbarDropMenuVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
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
            {cart.length ? (
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
            ) : (
              <div className={style['cart__message']}>
                <h5 className={style['cart__messageTitle']}>
                  Your cart is currently empty
                </h5>
                <p className={style['cart__messageSub']}>
                  Before proceed to checkout, you must add some products to your
                  cart.
                </p>
              </div>
            )}
            <div className={style['cart__total']}>
              <p>total</p>
              <p>{formatPrice(total)}</p>
            </div>
            {cart.length ? (
              <Link to={'/checkout'} className="button-1" onClick={toggleCart}>
                checkout
              </Link>
            ) : (
              <button className="button-inactive" disabled>
                checkout
              </button>
            )}
          </motion.article>
        </section>
      ) : null}
    </AnimatePresence>
  );
};

export default Cart;
