import React from 'react';
import hamburgerUrl from '../assets/shared/tablet/icon-hamburger.svg';
import cartUrl from '../assets/shared/desktop/icon-cart.svg';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { NavbarLinks, Logo } from './index';
import style from '../styles/components/Header.module.scss';

const Header = () => {
  const { toggleMenu, toggleCart } = useProductsContext();
  const { total_items: total } = useCartContext();

  return (
    <header className={style.header}>
      <nav className={style['header__navbar']}>
        <img
          src={hamburgerUrl}
          alt="hamburger menu icon"
          className={style['header__hamburger']}
          onClick={toggleMenu}
          loading="lazy"
        />
        <Logo className={style['header__log']} />
        <NavbarLinks className={style['header__linksList']} />
        <div className={style['header__cartWrapper']}>
          <img
            src={cartUrl}
            alt="cart icon"
            className={style['header__cart']}
            loading="lazy"
            onClick={toggleCart}
          />
          <div className={style['header__amount']}>
            <p>{total}</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
