import React from 'react';
import { motion } from 'framer-motion';

const FormTextError = (props) => {
  return (
    <motion.p
      className="form__warning"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      {props.children}
    </motion.p>
  );
};

export default FormTextError;
