import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';

import {
  ADD_TO_CART,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
} from '../actions/actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  return cart ? JSON.parse(localStorage.getItem('cart')) : [];
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50,
  vat: 0.24,
  total_vat: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product, amount, id) => {
    dispatch({ type: ADD_TO_CART, payload: { product, amount, id } });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  /* every time the state.cart changes use the dispatch
  and update the local storage */
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  console.log(state);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
