import React from 'react';
import { useProductsContext } from '../context/products_context';
import { motion } from 'framer-motion';
import { navBarMenuBackDrop } from '../AnimationVariants/variants';

const Backdrop = () => {
  const { closeMenu, closeCart } = useProductsContext();

  return (
    <motion.div
      key="backdrop"
      variants={navBarMenuBackDrop}
      initial="initial"
      animate="animate"
      exit="exit"
      className="backdrop"
      onClick={() => {
        closeMenu();
        closeCart();
      }}
    ></motion.div>
  );
};

export default Backdrop;
