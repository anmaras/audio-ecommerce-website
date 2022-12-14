const opacityOff = 0;
const opacityOn = 1;

/* navbar menu variants start */
export const navbarDropMenuVariant = {
  initial: {
    y: '-123vh',
  },
  animate: {
    y: 0,
    transition: {
      type: 'tween',
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
    scaleX: 0,
  },
  whileInView: {
    opacity: opacityOn,
    scaleX: 1,
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

/* Page hero variants */

export const pageHeroVariant = {
  initial: {
    opacity: opacityOff,
    y: '-100%',
  },

  animate: {
    opacity: opacityOn,
    y: 0,
    transition: {
      duration: 0.25,
      when: 'beforeChildren',
    },
  },
};

export const pageHeroTitleVariant = {
  initial: {
    opacity: opacityOff,
    scaleX: 0,
  },

  animate: {
    opacity: opacityOn,
    scaleX: 1,
    transition: {},
  },
};

/* Page categories variants */

export const productCategoryVariant = {};

export const categoryImgVariant = {
  initial: {
    opacity: opacityOff,
    scaleX: 0,
  },

  whileInView: {
    opacity: opacityOn,
    scaleX: 1,
  },
};
export const categoryListMenu = {
  initial: {
    opacity: opacityOff,
    scaleX: 0,
  },
  whileInView: {
    opacity: opacityOn,
    scaleX: 1,
  },
};

export const categoryText = {
  initial: {
    opacity: opacityOff,
  },
  animate: {
    opacity: opacityOn,
    transition: {
      duration: 1,
    },
  },
};

/*Product variants  */

export const featuresVariant = {
  initial: {
    opacity: opacityOff,
  },
  animate: {
    opacity: opacityOn,
    transition: {
      duration: 1,
      // when: 'afterChildren',
    },
  },
};

export const featuresTextVariant = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: 0,
  },
};
export const inTheBoxVariant = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
  },
};

export const imgGalleryVariant = {
  initial: {
    opacity: opacityOff,
    scale: 0,
  },
  whileInView: {
    opacity: opacityOn,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
      delay: 0.3,
    },
  },
  whileInView2: {
    opacity: opacityOn,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
      delay: 0.05,
    },
  },
  whileInView3: {
    opacity: opacityOn,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
    },
  },
};

export const altVariant = {
  initial: {
    opacity: opacityOff,
    x: '-100%',
  },
  whileInView: {
    opacity: opacityOn,
    x: 1,
  },
};

/* checkoutModal variants */

export const checkOutSectionVariant = {
  initial: {
    opacity: opacityOff,
  },
  animate: {
    opacity: opacityOn,
    transition: {
      when: 'beforeChildren',
    },
  },
};
export const checkOutModalVariant = {
  initial: {
    opacity: opacityOff,
    scale: 0,
  },
  animate: {
    opacity: opacityOn,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
    },
  },
};
