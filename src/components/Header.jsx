import React from 'react';
import hamburgerUrl from '../assets/shared/tablet/icon-hamburger.svg';
import cartUrl from '../assets/shared/desktop/icon-cart.svg';
import { useProductsContext } from '../context/products_context';
import { NavbarLinks, Logo } from './index';

const Header = () => {
  const { toggleMenu } = useProductsContext();

  return (
    <header className="header">
      <nav className="header__navbar">
        <img
          src={hamburgerUrl}
          alt="hamburger menu icon"
          className="header__hamburger"
          onClick={toggleMenu}
          loading="lazy"
        />
        <Logo className={'header__log'} />
        <NavbarLinks className={'header__linksList'} />
        <img
          src={cartUrl}
          alt="cart icon"
          className="header__cart"
          loading="lazy"
        />
      </nav>
    </header>
  );
};

export default Header;
