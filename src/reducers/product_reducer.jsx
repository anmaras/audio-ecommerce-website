import {
  TOGGLE_MENU,
  CLOSE_MENU,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_CATEGORY,
} from '../actions/actions';

const product_reducer = (state, action) => {
  if (action.type === TOGGLE_MENU) {
    return { ...state, isMenuOpen: !state.isMenuOpen };
  }
  if (action.type === CLOSE_MENU) {
    return { ...state, isMenuOpen: false };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, products: action.payload };
  }

  if (action.type === GET_PRODUCTS_CATEGORY) {
    /* make a swallow copy from the main array of products */
    const products = [...state.products];
    const categoryProducts = products.filter(
      (product) => product.category === action.payload
    );
    return { ...state, category_products: categoryProducts };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
