import React from 'react';
import { useProductsContext } from '../context/products_context';

const Backdrop = () => {
  const { closeMenu } = useProductsContext();

  return <div className="backdrop" onClick={closeMenu}></div>;
};

export default Backdrop;
