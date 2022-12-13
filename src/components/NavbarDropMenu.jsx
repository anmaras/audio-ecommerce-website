import React from 'react';
import { MenuList, Backdrop } from './index';
import { useMenuCartContext } from '../context/menu_cart_context';
import style from '../styles/components/NavbarDropMenu.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { navbarDropMenuVariant } from '../AnimationVariants/variants';

const NavbarDropMenu = () => {
  const { isMenuOpen, closeMenu } = useMenuCartContext();

  return (
    <AnimatePresence>
      {isMenuOpen ? (
        <div className={style.menuWrapper}>
          <motion.div
            key="menu"
            variants={navbarDropMenuVariant}
            className={style.menu}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <MenuList closeMenu={closeMenu} />
          </motion.div>
          <Backdrop />
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default NavbarDropMenu;
