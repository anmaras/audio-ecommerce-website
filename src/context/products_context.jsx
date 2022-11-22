import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/product_reducer';
import { db } from '../firebase';
import { ref, child, get } from 'firebase/database';
import {
  TOGGLE_MENU,
  CLOSE_MENU,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_CATEGORY,
} from '../actions/actions';

const initialState = {
  isMenuOpen: false,
  products: [],
  category_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state);

  const toggleMenu = () => {
    dispatch({ type: TOGGLE_MENU });
  };

  const closeMenu = () => {
    dispatch({ type: CLOSE_MENU });
  };

  const fetchProducts = async () => {
    // dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const dbRef = ref(db);
      const response = await get(child(dbRef, 'data'));
      if (response.exists) {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.val() });
      }
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const getProductsByCategory = (category) => {
    dispatch({ type: GET_PRODUCTS_CATEGORY, payload: category });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, toggleMenu, closeMenu, getProductsByCategory }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
