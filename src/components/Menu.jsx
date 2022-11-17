import React from 'react';
import MenuList from './MenuList';
import { useProductsContext } from '../context/products_context';

const Menu = () => {
  const { isMenuOpen, closeMenu } = useProductsContext();

  return (
    <>
      <div
        className={isMenuOpen ? 'backdrop backdrop--visible' : 'backdrop'}
        onClick={closeMenu}
      ></div>
      <div className={isMenuOpen ? 'menu menu--visible' : 'menu'}>
        <MenuList />
      </div>
    </>
  );
};

export default Menu;
