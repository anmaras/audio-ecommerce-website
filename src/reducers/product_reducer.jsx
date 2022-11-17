import {
  TOGGLE_MENU,
  CLOSE_MENU,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions/actions';

const product_reducer = (state, action) => {
  if (action.type === TOGGLE_MENU) {
    return { ...state, isMenuOpen: !state.isMenuOpen };
  }
  if (action.type === CLOSE_MENU) {
    return { ...state, isMenuOpen: false };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    /* function to filter only the main categories from the data array */
    const previewProducts = Array.from(
      new Set(action.payload.map((item) => item.category))
    ).map((category) => {
      return action.payload.find((item) => item.category === category);
    });

    return { ...state, products: action.payload, previewProducts };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
