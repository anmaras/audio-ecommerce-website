import React from 'react';
import { useProductsContext } from '../context/products_context';

const Backdrop = () => {
  const { closeMenu, closeCart } = useProductsContext();

  return (
    <div
      className="backdrop"
      onClick={() => {
        closeMenu();
        closeCart();
      }}
    ></div>
  );
};

export default Backdrop;
