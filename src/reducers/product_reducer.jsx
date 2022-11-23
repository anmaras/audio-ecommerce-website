import {
  TOGGLE_MENU,
  CLOSE_MENU,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_CATEGORY,
  GET_PRODUCTS_CATEGORY_BEGIN,
  GET_PRODUCTS_CATEGORY_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions/actions';

const product_reducer = (state, action) => {
  if (action.type === TOGGLE_MENU) {
    return { ...state, isMenuOpen: !state.isMenuOpen };
  }
  if (action.type === CLOSE_MENU) {
    return { ...state, isMenuOpen: false };
  }

  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, products: action.payload, products_loading: false };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }
  /* category */
  if (action.type === GET_PRODUCTS_CATEGORY_BEGIN) {
    return { ...state, category_loading: true };
  }

  // if (action.type === GET_PRODUCTS_CATEGORY) {
  //   /* make a copy from the main array of products */
  //   const products = [...state.products];

  //   const categoryProducts = products.filter(
  //     (product) => product.category === action.payload.category
  //   );

  //   return {
  //     ...state,
  //     category_products: categoryProducts,
  //     category_loading: false,
  //   };
  // }

  if (action.type === GET_PRODUCTS_CATEGORY) {
    /* make a copy from the main array of products */
    const products = [...state.products];
    const categoryProducts = products.filter(
      (product) => product.category === action.payload
    );

    return {
      ...state,
      category_products: categoryProducts,
      category_loading: false,
    };
  }

  if (action.type === GET_PRODUCTS_CATEGORY_ERROR) {
    return {
      ...state,
      category_loading: false,
      category_error: true,
    };
  }

  /* SINGLE PRODUCT */
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, product_loading: true };
  }

  // if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
  //   const products = [...state.products];

  //   const singleProduct = products.find((product) => {
  //     return product.slug === action.payload.slug;
  //   });

  //   return { ...state, single_product: singleProduct, product_loading: false };
  // }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    const products = [...state.products];

    const singleProduct = products.find((product) => {
      return product.slug === action.payload;
    });

    return { ...state, single_product: singleProduct, product_loading: false };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, product_loading: false, product_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
