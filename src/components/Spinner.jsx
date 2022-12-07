import FadeLoader from 'react-spinners/FadeLoader';
import style from '../styles/components/Spinner.module.scss';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import React from 'react';

const Spinner = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        className={style['spinner']}
      >
        <FadeLoader color="#da6f41" />;
      </motion.div>
    </AnimatePresence>
  );
};

export default Spinner;
