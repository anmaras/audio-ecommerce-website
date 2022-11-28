import React from 'react';
import { MenuList, Backdrop } from './index';
import { useProductsContext } from '../context/products_context';
import style from '../styles/components/NavbarDropMenu.module.scss';

const NavbarDropMenu = () => {
  const { isMenuOpen } = useProductsContext();

  if (isMenuOpen) {
    return (
      <div className={style.menuWrapper}>
        <div className={style.menu}>
          <MenuList />
          <Backdrop />
        </div>
      </div>
    );
  }
};

export default NavbarDropMenu;
