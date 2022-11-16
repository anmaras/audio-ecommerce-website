import React from 'react';
import hamburgerUrl from '../assets/shared/tablet/icon-hamburger.svg';
import logoUrl from '../assets/shared/desktop/logo.svg';
import cartUrl from '../assets/shared/desktop/icon-cart.svg';
import { Link, useParams } from 'react-router-dom';
import links from '../utils/constants';
const Navbar = () => {
  console.log(useParams());

  return (
    <nav className="navbar">
      <img
        src={hamburgerUrl}
        alt="hamburger menu icon"
        className="navbar__hamburger"
      />
      <img src={logoUrl} alt="audiophile logo" className="navbar__logo" />
      <ul className="navbar__linksList">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="navbar__link">
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <img src={cartUrl} alt="cart icon" className="navbar__cart" />
    </nav>
  );
};

export default Navbar;
