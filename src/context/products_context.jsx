import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/product_reducer';
import { productsUrl as url } from '../utils/constants';
import axios from 'axios';

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
  TOGGLE_CART,
  CLOSE_CART,
} from '../actions/actions';

const initialState = {
  isMenuOpen: false,
  isCartOpen: false,
  products: [],
  category_products: [],
  single_product: {},
  cart: [],
  products_loading: false,
  products_error: false,
  product_loading: false,
  product_error: false,
  category_loading: false,
  category_error: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => {
    dispatch({ type: TOGGLE_MENU });
  };
  const closeMenu = () => {
    dispatch({ type: CLOSE_MENU });
  };

  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART });
  };

  const closeCart = () => {
    dispatch({ type: CLOSE_CART });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const getProductsByCategory = (category) => {
    dispatch({
      type: GET_PRODUCTS_CATEGORY,
      payload: category,
    });
  };

  const fetchSingleProduct = (slug) => {
    dispatch({
      type: GET_SINGLE_PRODUCT_SUCCESS,
      payload: slug,
    });
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        toggleMenu,
        closeMenu,
        getProductsByCategory,
        fetchSingleProduct,
        toggleCart,
        closeCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
