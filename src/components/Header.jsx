import React from 'react';
import cartUrl from '../assets/shared/desktop/icon-cart.svg';
import { useMenuCartContext } from '../context/menu_cart_context';
import { useCartContext } from '../context/cart_context';
import { NavbarLinks, Logo } from './index';
import { Spin as Hamburger } from 'hamburger-react';
import style from '../styles/components/Header.module.scss';

const Header = () => {
  const { toggleMenu, toggleCart, closeCart, closeMenu, isMenuOpen } =
    useMenuCartContext();
  const { total_items: total } = useCartContext();

  return (
    <header className={style.header}>
      <nav className={style['header__navbar']}>
        <div className={style['header__hamburger']}>
          <Hamburger
            toggle={toggleMenu}
            toggled={isMenuOpen}
            onToggle={closeCart}
            className={style['header__hamburger']}
            color="#ffffff"
            distance="sm"
            size={20}
          />
        </div>
        <Logo className={style['header__log']} />
        <NavbarLinks className={style['header__linksList']} />
        <div className={style['header__cartWrapper']}>
          <img
            src={cartUrl}
            alt="cart icon"
            className={style['header__cart']}
            onClick={() => {
              toggleCart();
              closeMenu();
            }}
            width="23"
            height="20"
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
