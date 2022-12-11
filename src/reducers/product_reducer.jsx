import {
  TOGGLE_MENU,
  CLOSE_MENU,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_CATEGORY_BEGIN,
  GET_PRODUCTS_CATEGORY,
  GET_SINGLE_PRODUCT_SUCCESS,
  TOGGLE_CART,
  CLOSE_CART,
} from '../actions/actions';

const product_reducer = (state, action) => {
  if (action.type === TOGGLE_MENU) {
    return { ...state, isMenuOpen: !state.isMenuOpen, isCartOpen: false };
  }
  if (action.type === CLOSE_MENU) {
    return { ...state, isMenuOpen: false };
  }

  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpen: false };
  }

  if (action.type === TOGGLE_CART) {
    return { ...state, isCartOpen: !state.isCartOpen, isMenuOpen: false };
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
    return { ...state, products_loading: true };
  }

  if (action.type === GET_PRODUCTS_CATEGORY) {
    /* make a copy from the main array of products */
    const products = [...state.products];
    const categoryProducts = products.filter(
      (product) => product.category === action.payload
    );

    return {
      ...state,
      category_products: categoryProducts,
      products_loading: false,
    };
  }

  /* SINGLE PRODUCT */

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    const products = [...state.products];

    const singleProduct = products.find((product) => {
      return product.slug === action.payload;
    });

    return { ...state, single_product: singleProduct };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
