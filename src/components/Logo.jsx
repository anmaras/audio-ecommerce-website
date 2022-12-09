import React from 'react';
import logoUrl from '../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';

const Logo = ({ className }) => {
  const { closeMenu, closeCart } = useProductsContext();

  return (
    <Link to="/">
      <img
        src={logoUrl}
        alt="audiophile logo"
        className={className ? className : 'logo'}
        onClick={() => {
          closeMenu();
          closeCart();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
