import React from 'react';
import style from '../styles/components/PageHero.module.scss';
import { motion } from 'framer-motion';

const PageHero = ({ category }) => {
  return (
    <div className={style.pageHero}>
      <motion.h2
        className="pageHero__title"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1, transition: { duration: 0.25 } }}
      >
        {category}
      </motion.h2>
    </div>
  );
};

export default PageHero;
