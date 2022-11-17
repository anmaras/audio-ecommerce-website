import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/product_reducer';

const initialState = {
  isMenuOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
