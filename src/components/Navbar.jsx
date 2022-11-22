import React from 'react';
import hamburgerUrl from '../assets/shared/tablet/icon-hamburger.svg';
import cartUrl from '../assets/shared/desktop/icon-cart.svg';
import { useProductsContext } from '../context/products_context';
import { NavbarLinks, Logo } from './index';

const Navbar = () => {
  const { toggleMenu } = useProductsContext();

  return (
    <nav className="navbar">
      <img
        src={hamburgerUrl}
        alt="hamburger menu icon"
        className="navbar__hamburger"
        onClick={toggleMenu}
      />
      <Logo className={'navbar__log'} />
      <NavbarLinks className={'navbar__linksList'} />
      <img src={cartUrl} alt="cart icon" className="navbar__cart" />
    </nav>
  );
};

export default Navbar;
