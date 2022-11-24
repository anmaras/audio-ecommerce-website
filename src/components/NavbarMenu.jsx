import React from 'react';
import { MenuList, Backdrop } from './index';
import { useProductsContext } from '../context/products_context';

const NavbarMenu = () => {
  const { isMenuOpen } = useProductsContext();

  if (isMenuOpen) {
    return (
      <div className="menuWrapper">
        <div className="menu">
          <MenuList />
          <Backdrop />
        </div>
      </div>
    );
  }
};

export default NavbarMenu;
