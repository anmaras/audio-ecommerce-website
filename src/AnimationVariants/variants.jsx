import { animate } from 'framer-motion';

const opacityOff = 0;
const opacityOn = 1;

/* navbar menu variants start */
export const navbarDropMenuVariant = {
  initial: {
    y: '-100vh',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: '-200vh',
    transition: {
      duration: 0.5,
    },
  },
};

export const menuItemsVariants = {
  initial: {
    opacity: opacityOff,
  },
  animate: {
    opacity: opacityOn,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: opacityOff,
    transition: {
      duration: 0.2,
    },
  },
};

export const navBarMenuBackDrop = {
  initial: {
    opacity: opacityOff,
  },
  animate: {
    opacity: opacityOn,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: opacityOff,
  },
};

/* new product variant */

export const newProductVariant = {
  initial: {
    opacity: opacityOff,
  },

  animate: {
    opacity: opacityOn,
    transition: {
      duration: 2,
    },
  },
};

export const menuListVariant = {
  initial: {
    opacity: opacityOff,
  },
  whileInView: {
    opacity: opacityOn,
    transition: {
      duration: 1,
    },
  },
};

/* Products previews variant */
export const productPreviewsVariant = {
  initial: {
    opacity: opacityOff,
  },
  whileInView: {
    opacity: opacityOn,
    transition: {
      duration: 1,
    },
  },
};

/* About variant */

export const aboutVariant = {
  initial: {
    opacity: opacityOff,
    y: '100%',
  },
  whileInView: {
    opacity: opacityOn,
    y: 0,
    transition: {
      type: 'spring',

      mass: 0.2,
    },
  },
};

export const aboutTitleVariant = {
  initial: {
    opacity: opacityOff,
    x: '-100%',
  },
  whileInView: {
    opacity: opacityOn,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.1,
    },
  },
};

export const aboutTextVariant = {
  initial: {
    opacity: opacityOff,
    x: '100%',
  },
  whileInView: {
    opacity: opacityOn,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.1,
    },
  },
};
