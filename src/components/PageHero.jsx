import React from 'react';
import style from '../styles/components/PageHero.module.scss';
import { motion } from 'framer-motion';
import { pageHeroTitleVariant } from '../AnimationVariants/variants';

const PageHero = ({ category }) => {
  return (
    <div className={style.pageHero}>
      <motion.h2
        className="pageHero__title"
        variants={pageHeroTitleVariant}
        initial="initial"
        animate="animate"
      >
        {category}
      </motion.h2>
    </div>
  );
};

export default PageHero;
