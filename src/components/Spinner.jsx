import FadeLoader from 'react-spinners/FadeLoader';
import style from '../styles/components/Spinner.module.scss';
import { AnimatePresence } from 'framer-motion';

import React from 'react';

const Spinner = () => {
  return (
    <AnimatePresence>
      <div className={style['spinner']}>
        <FadeLoader color="#da6f41" />
      </div>
    </AnimatePresence>
  );
};

export default Spinner;
